<template>
	<div class="flex justify-center items-center p-10">
		<div class="rounded-lg bg-gray-100 p-10 flex flex-col gap-4">
			<div class="flex gap-4">
				<div class="flex flex-col gap-4">
					<p class="font-bold text-lg">Datos Personales</p>
					<div class="flex flex-col gap-1">
						<label for="nombres">Nombres</label>
						<input type="text" id="nombres" class="input-text">
					</div>
					<div class="flex flex-col gap-1">
						<label for="apellidos">Apellidos</label>
						<input type="text" id="apellidos" class="input-text">
					</div>
					<div class="flex flex-col gap-1">
						<label for="dni">DNI</label>
						<input type="text" id="dni" class="input-text">
					</div>
					<div class="flex flex-col gap-1">
						<label for="telefono">Número de teléfono</label>
						<input type="text" id="telefono" class="input-text">
					</div>
					<div class="flex flex-col gap-1">
						<label for="domicilio">Domicilio</label>
						<input type="text" id="domicilio" class="input-text">
					</div>
					<div class="flex flex-col gap-1">
						<label for="nacimiento">Fecha de nacimiento</label>
						<input type="date" id="nacimiento" class="input-text">
					</div>
					<div class="flex flex-col gap-1">
						<label>Sexo</label>
						<label><input type="radio" name="sexo" id="femenino"> Femenino</label>
						<label><input type="radio" name="sexo" id="masculino"> Masculino</label>
					</div>
				</div>
				<div class="flex flex-col gap-4">
					<p class="font-bold text-lg">Datos de Cuenta</p>
					<div class="flex flex-col gap-1">
						<label for="correo">Dirección de correo electrónico</label>
						<input type="text" id="correo" class="input-text">
					</div>
					<div class="flex flex-col gap-1">
						<label for="password">Contraseña</label>
						<input type="text" id="password" class="input-text">
					</div>
					<div class="flex flex-col gap-1">
						<label for="password_confirmation">Repita su contraseña</label>
						<input type="text" id="password_confirmation" class="input-text">
					</div>
					<div class="flex flex-col gap-1">
						<label>Elegir Plan</label>
						<div class="flex flex-col gap-4">
							<div class="flex flex-col items-center gap-3 rounded-lg bg-white p-4 cursor-pointer hover:bg-gray-50 border-2 border-transparent hover:border-blue-300">
								<p class="font-bold text-lg">Gold</p>
								<div class="flex items-center gap-4">
									<div class="flex flex-col items-center gap-1">
										<p class="font-semibold">$ 75,000</p>
										<p class="italic text-sm text-gray-400">21-35 años</p>
									</div>
									<div class="flex flex-col items-center gap-1">
										<p class="font-semibold">$ 96,000</p>
										<p class="italic text-sm text-gray-400">36-55 años</p>
									</div>
									<div class="flex flex-col items-center gap-1">
										<p class="font-semibold">$ 110,000</p>
										<p class="italic text-sm text-gray-400">56+ años</p>
									</div>
								</div>
							</div>
							<div class="flex flex-col items-center gap-3 rounded-lg p-4 cursor-pointer bg-gray-50 border-2 border-blue-300">
								<p class="font-bold text-lg">Silver</p>
								<div class="flex items-center gap-4">
									<div class="flex flex-col items-center gap-1">
										<p class="font-semibold">$ 65,000</p>
										<p class="italic text-sm text-gray-400">21-35 años</p>
									</div>
									<div class="flex flex-col items-center gap-1">
										<p class="font-semibold">$ 86,000</p>
										<p class="italic text-sm text-gray-400">36-55 años</p>
									</div>
									<div class="flex flex-col items-center gap-1">
										<p class="font-semibold">$ 100,000</p>
										<p class="italic text-sm text-gray-400">56+ años</p>
									</div>
								</div>
							</div>
							<div class="flex flex-col items-center gap-3 rounded-lg bg-white p-4 cursor-pointer hover:bg-gray-50 border-2 border-transparent hover:border-blue-300">
								<p class="font-bold text-lg">Copper</p>
								<div class="flex items-center gap-4">
									<div class="flex flex-col items-center gap-1">
										<p class="font-semibold">$ 55,000</p>
										<p class="italic text-sm text-gray-400">21-35 años</p>
									</div>
									<div class="flex flex-col items-center gap-1">
										<p class="font-semibold">$ 76,000</p>
										<p class="italic text-sm text-gray-400">36-55 años</p>
									</div>
									<div class="flex flex-col items-center gap-1">
										<p class="font-semibold">$ 90,000</p>
										<p class="italic text-sm text-gray-400">56+ años</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button type="button" class="border rounded border-green-700 text-green-700 px-3 py-2">Registrarse</button>
			<RouterLink :to="{name: 'login'}" class="text-blue-600 text-center text-sm">¿Ya tiene una cuenta? Inicie sesión aquí.</RouterLink>
		</div>
	</div>
</template>

<script setup>

</script>