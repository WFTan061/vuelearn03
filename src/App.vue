<template>
  <div class = "container">
    <h1>Spending chart</h1>
    <b-form-select v-model = "selected" :options = "selectOptions"> <!--dropdown-->
      <template v-slot:first>
        <b-form-select-option :value="null">-- Please select an option --</b-form-select-option>
      </template>
    </b-form-select>
  <nav>
    <router-link to = "/UserSummary">Employee</router-link> |
    <router-link to = "/chart">Spending</router-link>
  </nav>
  <router-view v-bind:selectOps ="selectOptions" v-bind:selected = "selected" v-bind:average = "averageSpending" v-bind:chartData = "chartData"></router-view>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    data:function(){
      return{
        selectOptions:{}, //options for dropdown select menu
        averageSpending:0, //average spending
        selected:null,    //selected option
        chartData: {      //chartdata intialization.
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
      //change name/data
      updateBalance:function(){
        //if something is chosen
        if(this.selected!==null){
          this.chartData.series.column[0].data = [this.selectOptions[this.selected].balance];
          this.chartData.series.column[0].name = this.selectOptions[this.selected].text;
        }
        //if nothing is chosen in dropdown bar
        else{
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
      //watch what is selected
      selected: function(){
        //update everytime something selected is changed.
        this.updateBalance();
      },
      //if possible should add in average/selectOptions. but no such function atm.
    }

  }
</script>
