<template>
	<div v-if = "selected!==-1">
		Name: {{selectOps[selected].first}} {{selectOps[selected].last}}
		<br>
		Email: {{selectOps[selected].email}}
	</div>
	<div v-else>
		<h2>SELECT DATA!</h2>
	</div>
	
</template>

<script>
	export default{
		props:['selected','selectOps'],
	}
</script>