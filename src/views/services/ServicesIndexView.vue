<template>
	<div id="delete-service-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Eliminar prestación «Prestación 1 (60%)»</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full modal" @click.stop="closeModal('delete-service-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="flex flex-col gap-3">
				<p>¿Está seguro que desea eliminar la prestación «Prestación 1 (60%)»? Esta acción no se puede deshacer.</p>
				<div class="flex justify-end">
					<button type="button" class="btn border-red-700 text-red-700">Eliminar</button>
				</div>
			</div>
		</div>
	</div>
	<div id="edit-service-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Editar prestación «Prestación 1 (60%)»</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full modal" @click.stop="closeModal('edit-service-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="flex flex-col gap-3">
				<div class="flex flex-col gap-1">
					<label for="name">Nombre con prestación</label>
					<input type="text" id="name" class="input-text" value="Prestación 1 (60%)">
				</div>
				<div class="flex flex-col gap-1">
					<label for="description">Descripción</label>
					<textarea type="text" id="description" class="input-text">Descripción relativamente larga.</textarea>
				</div>
				<button type="button" class="btn border-green-700 text-green-700">Guardar</button>
			</div>
		</div>
	</div>
	<div id="add-service-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Agregar una prestación</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full" @click.stop="closeModal('add-service-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="flex flex-col gap-3">
				<div class="flex flex-col gap-1">
					<label for="name">Nombre con porcentaje</label>
					<input type="text" id="name" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="description">Descripción</label>
					<textarea type="text" id="description" class="input-text"></textarea>
				</div>
				<button type="button" class="btn border-green-700 text-green-700">Guardar</button>
			</div>
		</div>
	</div>
	<div class="container mx-auto flex gap-10">
		<div class="flex-grow flex flex-col gap-3">
			<div class="flex justify-between items-center gap-3 px-3">
				<p class="text-blue-800 text-3xl">Prestaciones</p>
				<button type="button" class="btn border-green-700 text-green-700" @click="showModal('add-service-modal')">Agregar</button>
			</div>
			<div class="flex flex-col divide-y">
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Prestación 1 (60%)</p>
						<p class="text-gray-400 italic text-sm">1 plan</p>
					</div>
					<button type="button" class="btn border-blue-700 text-blue-700" @click="showModal('edit-service-modal')">Editar</button>
					<button type="button" class="btn border-red-700 text-red-700" @click="showModal('delete-service-modal')">Eliminar</button>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Prestación 1 (80%)</p>
						<p class="text-gray-400 italic text-sm">2 planes</p>
					</div>
					<button type="button" class="btn border-blue-700 text-blue-700">Editar</button>
					<button type="button" class="btn border-red-700 text-red-700">Eliminar</button>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Prestación 2 (40%)</p>
						<p class="text-gray-400 italic text-sm">2 planes</p>
					</div>
					<button type="button" class="btn border-blue-700 text-blue-700">Editar</button>
					<button type="button" class="btn border-red-700 text-red-700">Eliminar</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {showModal,closeModal,closeAllModals} from '@/helpers'
</script>