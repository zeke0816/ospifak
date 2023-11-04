<template>
	<div id="payment-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Generar cupón de pago</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full" @click.stop="closeModal('payment-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="flex flex-col gap-4">
				<div class="flex flex-col gap-1">
					<label>Cupón #</label>
					123456
				</div>
				<div class="flex flex-col gap-1">
					<label>Titular</label>
					<div class="flex justify-between gap-4">
						<p>John Doe (Gold)</p>
						<p class="font-bold">$ 13,700.00</p>
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<label>Cotitulares</label>
					<div class="flex justify-between gap-4">
						<p>Jane Doe (Silver)</p>
						<p class="font-bold">$ 10,700.00</p>
					</div>
					<div class="flex justify-between gap-4">
						<p>Joanne Doe (Silver)</p>
						<p class="font-bold">$ 10,700.00</p>
					</div>
					<div class="flex justify-between gap-4">
						<p>Joe Doe (Copper)</p>
						<p class="font-bold">$ 7,000.00</p>
					</div>
				</div>
				<div class="flex flex-col gap-1">
					<label>Precio total</label>
					<p class="font-bold">$ 42,100.00</p>
				</div>
				<div class="flex flex-col gap-1">
					<label>Vencimiento de pago</label>
					<p class="font-bold">09/11/23</p>
				</div>
			</div>
			<button type="button" class="btn border-green-700 text-green-700">Confirmar</button>
		</div>
	</div>
	<div class="container mx-auto flex gap-10">
		<div class="flex-grow flex flex-col gap-3">
			<div class="flex justify-between items-center">
				<p class="text-blue-800 text-3xl">Hola, John Doe</p>
				<p class="text-gray-400">Nº de Afiliado <span class="font-bold">867623456</span></p>
			</div>
			<div class="flex justify-between items-center gap-4">
				<p class="text-lg font-bold">Su plan actual</p>
				<button type="button" class="btn border-purple-700 text-purple-700" @click="showModal('payment-modal')">Generar cupón de pago</button>
			</div>
			<div class="flex items-center gap-3 px-3 py-2">
				<p class="flex-grow">John Doe</p>
				<p class="font-semibold">Gold</p>
				<p class="text-gray-400">Venc. 20/10/23</p>
			</div>
			<p class="text-lg font-bold">Planes actuales de sus co-titulares</p>
			<div class="flex flex-col divide-y">
				<div class="flex items-center gap-3 px-3 py-2">
					<p class="flex-grow">Jane Doe <span class="text-gray-400">cónyuge</span></p>
					<p class="font-semibold">Silver</p>
				<p class="text-gray-400">Venc. 20/10/23</p>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<p class="flex-grow">Joanne Doe <span class="text-gray-400">hijo/a</span></p>
					<p class="font-semibold">Silver</p>
				<p class="text-gray-400">Venc. 20/10/23</p>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<p class="flex-grow">Joe Doe <span class="text-gray-400">hijo/a</span></p>
					<p class="font-semibold">Copper</p>
				<p class="text-gray-400">Venc. 16/10/24</p>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-3">
			<p class="text-lg font-bold">Notificaciones recientes</p>
			<div class="px-3 py-2 rounded bg-blue-100 text-blue-700 flex justify-between gap-4 w-96 cursor-pointer">
				<div class="flex flex-col gap-1">
					<p class="font-bold">Reintegro pendiente: Omalizumab</p>
					<p>Ha recibido un mensaje.</p>
				</div>
				<i class="fa-solid fa-times text-gray-400"></i>
			</div>
			<div class="px-3 py-2 rounded bg-green-100 text-green-700 flex justify-between gap-4 w-96 cursor-pointer">
				<div class="flex flex-col gap-1">
					<p class="font-bold">Prestación aprobada</p>
					<p>Su solicitud de espirometría, rinomanometría, prick ha sido aprobada.</p>
				</div>
				<i class="fa-solid fa-times text-gray-400"></i>
			</div>
			<a class="text-blue-600">Ver más...</a>
			<p class="text-lg font-bold">Preguntas frecuentes</p>
			<a class="text-blue-600">¿Cómo me subscribo a un plan?</a>
			<a class="text-blue-600">¿Cómo me solicito una aprobación de reintegro?</a>
			<a class="text-blue-600">¿Cómo me solicito una aprobación de prestación?</a>
		</div>
	</div>
</template>

<script setup>
import {closeAllModals, closeModal, showModal} from '@/helpers'
</script>