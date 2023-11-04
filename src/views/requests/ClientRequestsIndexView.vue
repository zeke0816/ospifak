<template>
	<div id="request-service-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Solicitar aprobación de una prestación</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full" @click.stop="closeModal('request-service-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="flex flex-col gap-3">
				<div class="flex flex-col gap-1">
					<label for="affiliate">Afiliado solicitante</label>
					<select id="affiliate">
						<option value="1">John Doe</option>
						<option value="2">Jane Doe</option>
						<option value="3">Joanne Doe</option>
						<option value="4">Joe Doe</option>
					</select>
				</div>
				<div class="flex flex-col gap-1">
					<label for="physician">Médico</label>
					<input type="text" id="physician" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="license_id">Matrícula</label>
					<div class="flex items-center gap-2">
						<label><input type="radio" name="license_type" id="national"> Nacional</label>
						<label><input type="radio" name="license_type" id="state"> Provincial</label>
					</div>
					<input type="number" id="license_id" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="order_date">Fecha de la orden</label>
					<input type="date" id="order_date" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="service_id">Prestación</label>
					<select id="service_id">
						<option value="1">Prestación 1 (60%)</option>
						<option value="2">Prestación 1 (80%)</option>
						<option value="3">Prestación 2 (40%)</option>
					</select>
				</div>
				<div class="flex flex-col gap-1">
					<label for="order">Orden</label>
					<input type="file" id="order" class="file:px-3 file:py-1 file:border file:rounded file:border-blue-700 file:text-blue-700 file:bg-transparent">
				</div>
				<button type="button" class="btn border-green-700 text-green-700">Solicitar</button>
			</div>
		</div>
	</div>
	<div id="request-reimbursement-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Solicitar aprobación de un reintegro</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full" @click.stop="closeModal('request-reimbursement-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="flex flex-col gap-3">
				<div class="flex flex-col gap-1">
					<label for="affiliate">Afiliado solicitante</label>
					<select id="affiliate">
						<option value="1">John Doe</option>
						<option value="2">Jane Doe</option>
						<option value="3">Joanne Doe</option>
						<option value="4">Joe Doe</option>
					</select>
				</div>
				<div class="flex flex-col gap-1">
					<label for="venue">Lugar de compra</label>
					<input type="text" id="venue" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="amount">Monto a reintegrar</label>
					<input type="number" id="amount" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="invoice">Factura de la compra (JPEG, PNG, PDF)</label>
					<input type="file" id="invoice" accept="image/png,image/jpeg,application/pdf" class="file:px-3 file:py-1 file:border file:rounded file:border-blue-700 file:text-blue-700 file:bg-transparent">
				</div>
				<button type="button" class="btn border-green-700 text-green-700">Solicitar</button>
			</div>
		</div>
	</div>
	<div class="container mx-auto flex gap-10">
		<div class="flex-grow flex flex-col gap-3">
			<div class="flex justify-between items-center gap-3 px-3">
				<p class="text-blue-800 text-3xl">Reintegros</p>
				<button type="button" class="btn border-green-700 text-green-700" @click="showModal('request-reimbursement-modal')">Solicitar aprobación</button>
			</div>
			<div class="flex flex-col divide-y">
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">CVS</p>
						<p class="text-gray-400 italic text-sm">$ 450.00 · John Doe</p>
					</div>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Walgreens</p>
						<p class="text-gray-400 italic text-sm">$ 1,250.00 · Joanne Doe</p>
					</div>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">7 Eleven</p>
						<p class="text-gray-400 italic text-sm">$ 700.00 · Joe Doe</p>
					</div>
				</div>
			</div>
		</div>
		<div class="flex-grow flex flex-col gap-3">
			<div class="flex justify-between items-center gap-3 px-3">
				<p class="text-blue-800 text-3xl">Prestaciones</p>
				<button type="button" class="btn border-green-700 text-green-700" @click="showModal('request-service-modal')">Solicitar aprobación</button>
			</div>
			<div class="flex flex-col divide-y">
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Prestación 1 (60%)</p>
						<p class="text-gray-400 italic text-sm">Sean Clarkson, MD · Jane Doe</p>
					</div>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Prestación 1 (80%)</p>
						<p class="text-gray-400 italic text-sm">Obi Noda, MD · Joanne Doe</p>
					</div>
				</div>
				<div class="flex items-center gap-3 px-3 py-2">
					<div class="flex-grow flex flex-col">
						<p class="font-semibold text-lg">Prestación 2 (40%)</p>
						<p class="text-gray-400 italic text-sm">Kelly Holmes, MD · Jane Doe</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {showModal,closeModal,closeAllModals} from '@/helpers'
</script>