<template>
	<div id="delete-plan-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Eliminar plan «Gold»</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full modal" @click.stop="closeModal('delete-plan-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="flex flex-col gap-3">
				<p>¿Está seguro que desea eliminar el plan «Gold»? Esta acción no se puede deshacer.</p>
				<div class="flex justify-end">
					<button type="button" class="btn border-red-700 text-red-700">Eliminar</button>
				</div>
			</div>
		</div>
	</div>
	<div id="edit-plan-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Editar plan «Gold»</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full modal" @click.stop="closeModal('edit-plan-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="flex flex-col gap-3">
				<div class="flex flex-col gap-1">
					<label for="name">Nombre</label>
					<input type="text" id="name" class="input-text" value="Gold">
				</div>
				<div class="flex flex-col gap-1">
					<label for="description">Descripción</label>
					<textarea id="description">Este plan es para la gente que cobra en dólares.</textarea>
				</div>
				<div class="flex flex-col gap-1">
					<label>Elegir prestaciones</label>
					<div class="flex items-center gap-3">
						<div class="flex-grow">
							<p class="font-bold">Prestaciones seleccionadas</p>
							<select multiple>
								<option>Prestación 1 (80%)</option>
								<option>Prestación 2 (80%)</option>
								<option>Prestación 3 (80%)</option>
							</select>
						</div>
						<div class="flex flex-col gap-3">
							<button type="button" class="btn border-green-700 text-green-700">
								<i class="fa-solid fa-angles-left"></i>
							</button>
							<button type="button" class="btn border-red-700 text-red-700">
								<i class="fa-solid fa-angles-right"></i>
							</button>
						</div>
						<div class="flex-grow">
							<p class="font-bold">Prestaciones disponibles</p>
							<select multiple>
								<option>Prestación 1 (40%)</option>
								<option>Prestación 1 (60%)</option>
								<option>Prestación 2 (40%)</option>
								<option>Prestación 2 (60%)</option>
								<option>Prestación 3 (40%)</option>
								<option>Prestación 3 (60%)</option>
							</select>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<label>Elegir precios por edad</label>
					<div class="flex flex-col divide-y">
						<div class="flex items-center gap-3 px-3 py-2">
							<label for="menores-21" class="flex-grow">Menores de 21 años</label>
							<i class="fa-solid fa-dollar-sign"></i>
							<input type="number" min="0" step="1" id="menores-21" class="input-text" value="54000">
						</div>
						<div class="flex items-center gap-3 px-3 py-2">
							<label for="21-35" class="flex-grow">De 21 años a 35 años</label>
							<i class="fa-solid fa-dollar-sign"></i>
							<input type="number" min="0" step="1" id="21-35" class="input-text" value="75000">
						</div>
						<div class="flex items-center gap-3 px-3 py-2">
							<label for="36-55" class="flex-grow">De 36 años a 55 años</label>
							<i class="fa-solid fa-dollar-sign"></i>
							<input type="number" min="0" step="1" id="36-55" class="input-text" value="96000">
						</div>
						<div class="flex items-center gap-3 px-3 py-2">
							<label for="55-mas" class="flex-grow">De 56 años en adelante</label>
							<i class="fa-solid fa-dollar-sign"></i>
							<input type="number" min="0" step="1" id="55-mas" class="input-text" value="110000">
						</div>
					</div>
				</div>
				<button type="button" class="btn border-green-700 text-green-700">Guardar</button>
			</div>
		</div>
	</div>
	<div id="add-plan-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Agregar un plan</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full" @click.stop="closeModal('add-plan-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="flex flex-col gap-3">
				<div class="flex flex-col gap-1">
					<label for="name">Nombre</label>
					<input type="text" id="name" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="description">Descripción</label>
					<textarea id="description"></textarea>
				</div>
				<div class="flex flex-col gap-1">
					<label>Elegir prestaciones</label>
					<div class="flex items-center gap-3">
						<div class="flex-grow">
							<p class="font-bold">Prestaciones seleccionadas</p>
							<select multiple></select>
						</div>
						<div class="flex flex-col gap-3">
							<button type="button" class="btn border-green-700 text-green-700">
								<i class="fa-solid fa-angles-left"></i>
							</button>
							<button type="button" class="btn border-red-700 text-red-700">
								<i class="fa-solid fa-angles-right"></i>
							</button>
						</div>
						<div class="flex-grow">
							<p class="font-bold">Prestaciones disponibles</p>
							<select multiple>
								<option>Prestación 1 (40%)</option>
								<option>Prestación 1 (60%)</option>
								<option>Prestación 1 (80%)</option>
								<option>Prestación 2 (40%)</option>
								<option>Prestación 2 (60%)</option>
								<option>Prestación 2 (80%)</option>
								<option>Prestación 3 (40%)</option>
								<option>Prestación 3 (60%)</option>
								<option>Prestación 3 (80%)</option>
							</select>
						</div>
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<label>Elegir precios por edad</label>
					<div class="flex flex-col divide-y">
						<div class="flex items-center gap-3 px-3 py-2">
							<label for="menores-21" class="flex-grow">Menores de 21 años</label>
							<i class="fa-solid fa-dollar-sign"></i>
							<input type="number" min="0" step="1" id="menores-21" class="input-text" value="0">
						</div>
						<div class="flex items-center gap-3 px-3 py-2">
							<label for="21-35" class="flex-grow">De 21 años a 35 años</label>
							<i class="fa-solid fa-dollar-sign"></i>
							<input type="number" min="0" step="1" id="21-35" class="input-text" value="0">
						</div>
						<div class="flex items-center gap-3 px-3 py-2">
							<label for="36-55" class="flex-grow">De 36 años a 55 años</label>
							<i class="fa-solid fa-dollar-sign"></i>
							<input type="number" min="0" step="1" id="36-55" class="input-text" value="0">
						</div>
						<div class="flex items-center gap-3 px-3 py-2">
							<label for="55-mas" class="flex-grow">De 56 años en adelante</label>
							<i class="fa-solid fa-dollar-sign"></i>
							<input type="number" min="0" step="1" id="55-mas" class="input-text" value="0">
						</div>
					</div>
				</div>
				<button type="button" class="btn border-green-700 text-green-700">Guardar</button>
			</div>
		</div>
	</div>
	<div class="container mx-auto flex gap-10">
		<div class="flex-grow flex flex-col gap-3">
			<div class="flex justify-between items-center gap-3 px-3">
				<p class="text-blue-800 text-3xl">Planes</p>
				<button type="button" class="btn border-green-700 text-green-700" @click="showModal('add-plan-modal')">Agregar</button>
			</div>
			<div class="flex flex-col divide-y">
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Gold</p>
						<p class="text-gray-400 italic text-sm">132 clientes</p>
					</div>
					<button type="button" class="btn border-blue-700 text-blue-700" @click="showModal('edit-plan-modal')">Editar</button>
					<button type="button" class="btn border-red-700 text-red-700" @click="showModal('delete-plan-modal')">Eliminar</button>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Silver</p>
						<p class="text-gray-400 italic text-sm">457 clientes</p>
					</div>
					<button type="button" class="btn border-blue-700 text-blue-700">Editar</button>
					<button type="button" class="btn border-red-700 text-red-700">Eliminar</button>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Copper</p>
						<p class="text-gray-400 italic text-sm">932 clientes</p>
					</div>
					<button type="button" class="btn border-blue-700 text-blue-700">Editar</button>
					<button type="button" class="btn border-red-700 text-red-700">Eliminar</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const showModal = function (id){
	const modal = document.getElementById(id)
	if(modal.classList.contains('hidden')){
		modal.classList.add('flex')
		modal.classList.remove('hidden')
	}
}

const closeModal = function (id){
	const modal = document.getElementById(id)
	if(modal.classList.contains('flex')){
		modal.classList.add('hidden')
		modal.classList.remove('flex')
	}
}

const closeAllModals = function (){
	const modals = document.getElementsByClassName('modal')
	for(let i = 0; i < modals.length; i++){
		let modal = modals.item(i)
		modal.classList.add('hidden')
		modal.classList.remove('flex')
	}
}
</script>