<template>
	<div id="show-service-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Solicitud de aprobación de «Prestación 1 (60%)»</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full" @click.stop="closeModal('show-service-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="flex flex-col gap-3">
				<div class="flex flex-col gap-1">
					<label for="affiliate">Afiliado solicitante</label>
					<p>John Doe</p>
				</div>
				<div class="flex flex-col gap-1">
					<label for="physician">Médico</label>
					<p>Sean Clarkson, MD</p>
				</div>
				<div class="flex flex-col gap-1">
					<label for="license_id">Matrícula</label>
					<p>MN 14500</p>
				</div>
				<div class="flex flex-col gap-1">
					<label for="order_date">Fecha de la orden</label>
					<p>10/10/23</p>
				</div>
				<div class="flex flex-col gap-1">
					<label for="service_id">Prestación</label>
					<p>Prestación 1 (60%)</p>
				</div>
				<div class="flex flex-col gap-1">
					<label for="order">Orden</label>
					<a href="#" class="text-purple-700 flex items-center gap-3">
						Descargar
						<i class="fa-solid fa-cloud-download"></i>
					</a>
				</div>
				<div class="flex justify-center items-center gap-4">
					<button type="button" class="btn border-green-700 text-green-700">Aprobar</button>
					<button type="button" class="btn border-red-700 text-red-700">Rechazar</button>
				</div>
			</div>
		</div>
	</div>
	<div id="show-reimbursement-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Solicitud de aprobación de «CVS»</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full" @click.stop="closeModal('show-reimbursement-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="flex flex-col gap-3">
				<div class="flex flex-col gap-1">
					<label for="affiliate">Afiliado solicitante</label>
					<p>John Doe</p>
				</div>
				<div class="flex flex-col gap-1">
					<label for="venue">Lugar de compra</label>
					<p>CVS</p>
				</div>
				<div class="flex flex-col gap-1">
					<label for="amount">Monto a reintegrar</label>
					<p>$ 450.00</p>
				</div>
				<div class="flex flex-col gap-1">
					<label for="invoice">Factura de la compra</label>
					<a href="#" class="text-purple-700 flex items-center gap-3">
						Descargar
						<i class="fa-solid fa-cloud-download"></i>
					</a>
				</div>
				<div class="flex justify-center items-center gap-4">
					<button type="button" class="btn border-green-700 text-green-700">Aprobar</button>
					<button type="button" class="btn border-red-700 text-red-700">Rechazar</button>
				</div>
			</div>
		</div>
	</div>
	<div class="container mx-auto flex gap-10">
		<div class="flex-grow flex flex-col gap-3">
			<div class="flex justify-between items-center gap-3 px-3">
				<p class="text-blue-800 text-3xl">Reintegros</p>
			</div>
			<div class="flex flex-col divide-y">
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">CVS</p>
						<p class="text-gray-400 italic text-sm">$ 450.00 · John Doe</p>
					</div>
					<button type="button" class="btn border-blue-700 text-blue-700" @click="showModal('show-reimbursement-modal')">Ver</button>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Walgreens</p>
						<p class="text-gray-400 italic text-sm">$ 1,250.00 · Joanne Doe</p>
					</div>
					<button type="button" class="btn border-blue-700 text-blue-700">Ver</button>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">7 Eleven</p>
						<p class="text-gray-400 italic text-sm">$ 700.00 · Joe Doe</p>
					</div>
					<button type="button" class="btn border-blue-700 text-blue-700">Ver</button>
				</div>
			</div>
		</div>
		<div class="flex-grow flex flex-col gap-3">
			<div class="flex justify-between items-center gap-3 px-3">
				<p class="text-blue-800 text-3xl">Prestaciones</p>
			</div>
			<div class="flex flex-col divide-y">
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Prestación 1 (60%)</p>
						<p class="text-gray-400 italic text-sm">Sean Clarkson, MD · Jane Doe</p>
					</div>
					<button type="button" class="btn border-blue-700 text-blue-700" @click="showModal('show-service-modal')">Ver</button>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Prestación 1 (80%)</p>
						<p class="text-gray-400 italic text-sm">Obi Noda, MD · Joanne Doe</p>
					</div>
					<button type="button" class="btn border-blue-700 text-blue-700">Ver</button>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Prestación 2 (40%)</p>
						<p class="text-gray-400 italic text-sm">Kelly Holmes, MD · Jane Doe</p>
					</div>
					<button type="button" class="btn border-blue-700 text-blue-700">Ver</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {showModal,closeModal,closeAllModals} from '@/helpers'
</script>