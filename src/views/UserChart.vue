<template>
	<div>
		<combo-chart ref = "chart1" :data="chartData"/>
		<!-- if chartdata > average, output higher -->
		<!-- else output lower. -->
	</div>
</template>

<script>
import 'tui-chart/dist/tui-chart.css'
import { comboChart } from '@toast-ui/vue-chart'
export default {
    components: {
        'combo-chart': comboChart
    },
    props:['selected','theData','average','chartData'],
	watch:{
		//apply changes when 
		selected: function(){
			//set new data to prevent vue from thinking nothing changed 
			console.log(Object.keys(this.chartData))
			console.log(this.chartData)
			this.$emit('updateChart');
		},
	}
}
</script>