<template>
	<div class="container mx-auto flex gap-10">
		<div class="flex-grow flex flex-col gap-3">
			<div class="flex justify-between items-center">
				<p class="text-blue-800 text-3xl">Hola, Empleado</p>
				<p class="text-gray-400">Nº de Legajo <span class="font-bold">867623456</span></p>
			</div>
			<div class="flex gap-10">
				<div class="flex-grow flex flex-col gap-3">
					<p class="text-lg font-bold">Reintegros atendidos</p>
					<div class="flex flex-col divide-y">
						<div class="flex items-center gap-3 px-3 py-2">
							<p class="flex-grow font-bold">Joanne Doe</p>
							<p class="text-sm text-gray-400">Dupilumab</p>
							<button type="button" class="btn border-blue-700 text-blue-700">Ver</button>
						</div>
						<div class="flex items-center gap-3 px-3 py-2">
							<p class="flex-grow font-bold">Joe Doe</p>
							<p class="text-sm text-gray-400">Fosfato Disódico, Acetato de Betametasona</p>
							<button type="button" class="btn border-blue-700 text-blue-700">Ver</button>
						</div>
					</div>
				</div>
				<div class="flex-grow flex flex-col gap-3">
					<p class="text-lg font-bold">Prestaciones atendidas</p>
					<div class="flex flex-col divide-y">
						<div class="flex items-center gap-3 px-3 py-2">
							<p class="flex-grow font-bold">Jane Doe</p>
							<p class="text-sm text-gray-400">Rinomanometría</p>
							<button type="button" class="btn border-blue-700 text-blue-700">Ver</button>
						</div>
						<div class="flex items-center gap-3 px-3 py-2">
							<p class="flex-grow font-bold">Joanne Doe</p>
							<p class="text-sm text-gray-400">Rinomanometría, Espirometría</p>
							<button type="button" class="btn border-blue-700 text-blue-700">Ver</button>
						</div>
						<div class="flex items-center gap-3 px-3 py-2">
							<p class="flex-grow font-bold">Joe Doe</p>
							<p class="text-sm text-gray-400">Rayos (Dental), Rayos (Abdomen)</p>
							<button type="button" class="btn border-blue-700 text-blue-700">Ver</button>
						</div>
					</div>
				</div>
			</div>
			<div class="flex-grow flex flex-col gap-3">
				<div class="flex flex-col gap-1">
					<label for="search">Buscar cliente</label>
					<div class="flex gap-4">
						<input type="text" id="search" class="input-text">
						<button class="btn border-blue-700 text-blue-700">
							<i class="fa-solid fa-search"></i>
						</button>
					</div>
				</div>
				<div class="flex flex-col divide-y">
					<div class="flex items-center gap-3 px-3 py-2">
						<p class="flex-grow font-bold">John Doe</p>
						<p class="text-sm text-gray-400">Gold</p>
						<button type="button" class="btn border-blue-700 text-blue-700">Ver</button>
					</div>
					<div class="flex items-center gap-3 px-3 py-2">
						<p class="flex-grow font-bold">Jane Doe</p>
						<p class="text-sm text-gray-400">Silver</p>
						<button type="button" class="btn border-blue-700 text-blue-700">Ver</button>
					</div>
					<div class="flex items-center gap-3 px-3 py-2">
						<p class="flex-grow font-bold">Joanne Doe</p>
						<p class="text-sm text-gray-400">Silver</p>
						<button type="button" class="btn border-blue-700 text-blue-700">Ver</button>
					</div>
					<div class="flex items-center gap-3 px-3 py-2">
						<p class="flex-grow font-bold">Joe Doe</p>
						<p class="text-sm text-gray-400">Copper</p>
						<button type="button" class="btn border-blue-700 text-blue-700">Ver</button>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-3">
			<p class="text-lg font-bold">Preguntas frecuentes</p>
			<a class="text-blue-600">¿Cómo asigno un plan?</a>
			<a class="text-blue-600">¿Cómo indico la aprobación de un reintegro?</a>
			<a class="text-blue-600">¿Cómo indico la aprobación de una prestación?</a>
		</div>
	</div>
</template>

<script setup>

</script>