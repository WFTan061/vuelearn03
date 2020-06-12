<template>
	<div v-if = "selectedData!==undefined">
		Name: {{selectedData.first}} {{selectedData.last}}
		<br>
		Email: {{selectedData.email}}
	</div>
	<div v-else>
		<h2>SELECT DATA!</h2>
	</div>
	
</template>

<script>
	export default{
		props:['selectedData'],
	}
</script>