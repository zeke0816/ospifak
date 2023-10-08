<template>
	<div id="edit-profile-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Modificar datos personales</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full modal" @click.stop="closeModal('edit-profile-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="flex flex-col gap-1">
					<label for="name">Nombres</label>
					<input type="text" id="name" class="input-text" value="Jack">
				</div>
				<div class="flex flex-col gap-1">
					<label for="lastname">Apellidos</label>
					<input type="text" id="lastname" class="input-text" value="Deer">
				</div>
				<div class="flex flex-col gap-1">
					<label for="email">Correo electrónico</label>
					<input type="email" id="email" class="input-text" value="jackdeer@appleseed.com">
				</div>
				<div class="flex flex-col gap-1">
					<label for="phone">Teléfono</label>
					<input type="tel" id="phone" class="input-text" value="+1 517 978-1234">
				</div>
				<div class="flex flex-col gap-1 md:col-span-2">
					<label for="address">Domicilio</label>
					<input type="text" id="address" class="input-text" value="471 Jackson St, Lansing, MI">
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
				<p class="text-blue-800 text-3xl">Mi Perfil</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-3">
				<div class="flex flex-col gap-1">
					<label>Nombres</label>
					<p>Jack</p>
				</div>
				<div class="flex flex-col gap-1">
					<label>Apellidos</label>
					<p>Deer</p>
				</div>
				<div class="flex flex-col gap-1">
					<label>Correo electrónico</label>
					<p>jackdeer@appleseed.com</p>
				</div>
				<div class="flex flex-col gap-1">
					<label>Teléfono</label>
					<p>+1 517 978-1234</p>
				</div>
				<div class="flex flex-col gap-1">
					<label>Domicilio</label>
					<p>471 Jackson St, Lansing, MI</p>
				</div>
				<div class="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:col-span-2 xl:col-span-4">
					<button type="button" class="btn border-blue-700 text-blue-700" @click="showModal('edit-profile-modal')">Modificar datos personales</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {showModal,closeModal,closeAllModals} from '@/helpers'
</script>

