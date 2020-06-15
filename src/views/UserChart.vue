<template>
	<div>
		<combo-chart :data="chartData"/>
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
    data() {
		return {
			chartData: { // for 'data' prop of 'bar-chart'
				categories: ['January'],
				series: {
					line:[
					{
						name:'Average',
						data:[0.5,0.5],
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
	}
}
</script>