<template>
	<div v-if = "selected!==null">
		Name: {{theData[selected].first}} {{theData[selected].last}}
		<br>
		Email: {{theData[selected].email}}
	</div>
	<div v-else>
		<h2>SELECT DATA!</h2>
	</div>
	
</template>

<script>
	export default{
		props:['selected','theData'],
	}
</script>