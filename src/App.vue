<template>
	<header class="bg-blue-800 text-white px-6 py-4">
		<div class="flex justify-between items-center gap-3">
			<p>OSPIFAK</p>
			<nav class="flex items-center gap-5">
				<RouterLink :to="{name: 'home'}">Inicio</RouterLink>
				<RouterLink :to="{name: 'requests.employee'}">Reintegros y Prestaciones</RouterLink>
				<!--<RouterLink :to="{name: 'services'}">Prestaciones</RouterLink>-->
				<RouterLink :to="{name: 'plans'}">Planes</RouterLink>
				<!--<RouterLink :to="{name: 'employees'}">Empleados</RouterLink>-->
				<!--<RouterLink :to="{name: 'profile'}">Mi Perfil</RouterLink>-->
				<RouterLink :to="{name: 'profile.employee'}">Mi Perfil</RouterLink>
				<RouterLink to="#">Salir</RouterLink>
			</nav>
		</div>
	</header>
	<main class="flex-grow p-6 overflow-y-auto">
		<RouterView/>
	</main>
	<footer class="bg-blue-200 px-10 py-6">
		<p class="text-xl">OSPIFAK</p>
	</footer>
</template>

<script setup>
import {RouterLink, RouterView} from 'vue-router'
</script>