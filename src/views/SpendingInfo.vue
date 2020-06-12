<template>
	<div>
		<b-form-select v-model = "selected" :options = "selectOptions">
			<template v-slot:first>
				<b-form-select-option :value="null">-- Please select an option --</b-form-select-option>
			</template>
		</b-form-select>
	<nav>
		<router-link to = "/SpendingInfo/">Home</router-link> |
		<router-link to = "/SpendingInfo/summary">Summary</router-link> |
		<router-link to = "/SpendingInfo/chart">Chart</router-link>
	</nav>
	<router-view v-bind:selectedData = "theData[selected]"></router-view>
	</div>
</template>
<script>
	export default{
		props:['theData','selectOptions'],
		data:function(){
			return{
				selected:null,
			}
		},
	}
</script>