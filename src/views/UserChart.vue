<template>
	<div>
		<combo-chart ref = "chart1" :data="chartData"/>
		<!-- if chartdata > average, output higher -->
		<div id = "averageComp" v-if="selected!==-1">
			<h3 v-if = "selectOps[selected].balance >= average">
				{{selectOps[selected].text}} has more than or average spending compared to the rest.
			</h3>
			<h3 v-else>
				{{selectOps[selected].text}} has less than average spending compared to the rest.
			</h3>
		</div>
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
    props:['selected','selectOps','average','chartData'],
}
</script>