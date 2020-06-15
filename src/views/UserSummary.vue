<template>
	<div v-if = "selectedData!==null">
		Name: {{theData[selectedData].first}} {{theData[selectedData].last}}
		<br>
		Email: {{theData[selectedData].email}}
	</div>
	<div v-else>
		<h2>SELECT DATA!</h2>
	</div>
	
</template>

<script>
	export default{
		props:['selectedData','theData'],
	}
</script>