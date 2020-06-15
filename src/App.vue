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
  <router-view v-bind:selectedData = "selected" v-bind:theData = "theData"></router-view>
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
      }
    },
    mounted:function(){
      const baseURI = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';
      axios.get(baseURI)
      .then((result) => {
        this.theData = result.data;
        let totalSpending = 0;
        this.selectOptions = this.theData.map(function(data,index){
          let fullName = data.first + " " + data.last;
          let balance = data.balance;
          //cleaning data of signs.
          balance = balance.replace('$','');
          balance = balance.replace(',','');
          //parse data and add to total spending
          totalSpending += parseFloat(balance);

          //map data to select options
          return{
            text:fullName,
            value:index,
          }
        })
        //Calculate average spending
        this.averageSpending = (totalSpending/this.theData.length).toFixed(2);
      })      
    }
  }
</script>
