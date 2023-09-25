<template>
	<div class="container mx-auto flex gap-10">
		<div class="flex-grow flex flex-col gap-3">
			<div class="flex justify-between items-center">
				<p class="text-blue-800 text-3xl">Hola, John Doe</p>
				<p class="text-gray-400">Nº de Afiliado <span class="font-bold">867623456</span></p>
			</div>
			<p class="text-lg font-bold">Su plan actual</p>
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

</script>