<template>
	<div>
	<h1>Dropdown menu to select user</h1>
	<nav>
		<router-link to = "/SpendingInfo/">Home</router-link> |
		<router-link to = "/SpendingInfo/summary">Summary</router-link> |
		<router-link to = "/SpendingInfo/chart">Chart</router-link>
	</nav>
	<router-view></router-view>
	</div>
</template>