<template>
  <div class = "container">
    <h1>Spending chart {{this.averageSpending}}</h1>
    <b-form-select v-model = "selected" :options = "selectOptions">
      <template v-slot:first>
        <b-form-select-option :value="-1">-- Please select an option --</b-form-select-option>
      </template>
    </b-form-select>
  <nav>
    <router-link to = "/UserSummary">Summary</router-link>
    <router-link to = "/chart">Chart</router-link>
  </nav>
  <router-view v-bind:selectOps ="selectOptions" v-bind:selected = "selected" v-bind:average = "averageSpending" v-bind:chartData = "chartData"></router-view>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    data:function(){
      return{
        selectOptions:{},
        averageSpending:0,
        selected:null,
        chartData: {
          categories: ['January'],
          series: {
            line:[
            {
              name:'Average',
              data:[0,0],
            }
            ],
            column:[
            {
              name:'Spending',
              data:[0]    
            },
            ]
          }
        }
      }
    },
    methods:{
      updateBalance:function(){
        if(this.selected!==null){
           //only 1 column so should be okay to use array0?
          this.chartData.series.column[0].data = [this.selectOptions[this.selected].balance];
          this.chartData.series.column[0].name = this.selectOptions[this.selected].text;
        }else{
          this.chartData.series.column[0].name = "None selected"
          this.chartData.series.column[0].data = [0];
        }
      }
    },
    mounted:function(){
      const baseURI = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';
      //Use axios to access the api.
      axios.get(baseURI)
      .then((result) => {
        let totalSpending = 0;
        //populate form select options.
        this.selectOptions = result.data.map(function(data,index){
          let fullName = data.first + " " + data.last;
          let balance = data.balance;
          //cleaning data of signs.
          balance = balance.replace('$','');
          balance = balance.replace(',','');
          //parse data and add to total spending
          totalSpending += parseFloat(balance);

          //create select options
          return{
            text:fullName,
            value:index,
            balance: balance,
            email: data.email,
            first: data.first,
            last: data.last
          }
        })
        //Calculate average spending
        this.averageSpending = (totalSpending/result.data.length).toFixed(2);
        //update chart data.
        this.chartData.series.line[0].data = [this.averageSpending,this.averageSpending];
      })      
    },
    watch:{
    //apply changes when 
      selected: function(){
        //set new data to prevent vue from thinking nothing changed 
        this.updateBalance();
      },
    }

  }
</script>
