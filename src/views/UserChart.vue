<template>
	<div>
		<combo-chart v-if = "selected!==null" :data="chartData"/>
	</div>
</template>

<script>
import 'tui-chart/dist/tui-chart.css'
import { comboChart } from '@toast-ui/vue-chart'

export default {
    components: {
        'combo-chart': comboChart
    },
    props:['selected','theData','average'],
    data: function() {
		return {
			chartData: { // for 'data' prop of 'bar-chart'
				categories: ['January'],
				series: {
					line:[
					{
						name:'Average',
						data:[this.average,this.average],
					}
					],
					column:[
					{
						name:'Spending',
						data:[1]		
					},
					]
				}
			}
		}
	},
	watch:{
		theData: function(){
			console.log(this.average);
			//perform function to update combochart.
		},
		selected: function(){
			console.log(this.selected)
			//perform function to update combochart.
		},
	}
}
</script>