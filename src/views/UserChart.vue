<template>
	<div>
		<combo-chart v-if = "selected!==null" ref = "chart1" :data="chartData"/>
		<h3 v-else> Please select a person to continue.</h3>
		<!-- if chartdata > average, output higher -->
		<div id = "averageComp" v-if="selected!==null">
			<h4 v-if = "selectOps[selected].balance >= average">
				{{selectOps[selected].text}} has more than or average spending compared to the rest. ({{selectOps[selected].balance}} &gt;= {{average}})
			</h4>
		<!-- else output lower. -->
			<h4 v-else>
				{{selectOps[selected].text}} has less than average spending compared to the rest. ({{selectOps[selected].balance}} &lt; {{average}})
			</h4>
		</div>
	</div>
</template>

<script>
import { comboChart } from '@toast-ui/vue-chart'
export default {
    components: {
        'combo-chart': comboChart
    },
    props:['selected','selectOps','average','chartData'],
}
</script>