<template>
	<div id="add-employee-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Agregar un empleado</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full" @click.stop="closeModal('add-employee-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="flex flex-col gap-1">
					<label for="name">Nombres</label>
					<input type="text" id="name" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="lastname">Apellidos</label>
					<input type="text" id="lastname" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="email">Correo electrónico</label>
					<input type="email" id="email" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="phone">Teléfono</label>
					<input type="tel" id="phone" class="input-text">
				</div>
				<div class="flex flex-col gap-1 md:col-span-2">
					<label for="address">Domicilio</label>
					<input type="text" id="address" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="password">Contraseña</label>
					<input type="password" id="password" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="password-confirmation">Repetir contraseña</label>
					<input type="password" id="password-confirmation" class="input-text">
				</div>
			</div>
			<button type="button" class="btn border-green-700 text-green-700">Guardar</button>
		</div>
	</div>
	<div class="container mx-auto flex gap-10">
		<div class="flex-grow flex flex-col gap-3">
			<div class="flex justify-between items-center gap-3 px-3">
				<p class="text-blue-800 text-3xl">Empleados</p>
				<button type="button" class="btn border-green-700 text-green-700" @click="showModal('add-employee-modal')">Agregar</button>
			</div>
			<div class="flex flex-col divide-y">
				<div class="flex items-center gap-3 px-3 py-2">
					<p class="flex-grow font-semibold text-lg">Jack Deer</p>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<p class="flex-grow font-semibold text-lg">Joshua Buck</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {showModal,closeModal,closeAllModals} from '@/helpers'
</script>