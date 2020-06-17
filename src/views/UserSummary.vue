<template>
	<!-- only display if something is selected. else display nothing selected message-->
	<div v-if = "selected!==null">
		Name: {{selectOps[selected].first}} {{selectOps[selected].last}}
		<br>
		Email: {{selectOps[selected].email}}
	</div>
	<div v-else>
		<h2>Select data to view detail summary of person.</h2>
	</div>
	
</template>

<script>
	export default{
		props:['selected','selectOps'],
	}
</script>