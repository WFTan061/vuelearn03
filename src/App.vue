<template>
  <div class = "container">
    <h1></h1>
    <b-form-select v-model = "selected" :options = "selectOptions">
      <template v-slot:first>
        <b-form-select-option :value="null">-- Please select an option --</b-form-select-option>
      </template>
    </b-form-select>
  <nav>
    <router-link to = "/UserSummary">Summary</router-link> |
    <router-link to = "/chart">Chart</router-link>
  </nav>
  <router-view v-bind:selected = "selected" v-bind:theData = "theData" v-bind:average = "averageSpending" v-bind:chartData = "chartData" @updateChart="updateChartData"></router-view>
  </div>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import axios from 'axios';
  export default {
    data:function(){
      return{
        theData:{},
        selectOptions:{},
        averageSpending:0,
        selected:null,
        chartData: { // for 'data' prop of 'bar-chart'
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
      updateChartData:function(){
        if(this.selected!==null){
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
        this.theData = result.data;
        let totalSpending = 0;
        //populate form select options.
        this.selectOptions = this.theData.map(function(data,index){
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
          }
        })
        //Calculate average spending
        this.averageSpending = (totalSpending/this.theData.length).toFixed(2);
        //update chart data.
        this.chartData.series.line[0].data = [this.averageSpending,this.averageSpending];
      })      
    },

  }
</script>
