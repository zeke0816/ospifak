<template>
	<div class="flex justify-center items-center h-full">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-4">
			<div class="flex flex-col gap-1">
				<label for="email">Correo electrónico</label>
				<input type="email" id="email" class="input-text">
			</div>
			<div class="flex flex-col gap-1">
				<label for="password">Contraseña</label>
				<input type="password" id="password" class="input-text">
			</div>
			<button type="button" class="border rounded border-green-700 text-green-700 px-3 py-2">Ingresar</button>
			<RouterLink :to="{name: 'signup'}" class="text-blue-600 text-center text-sm">¿No tiene una cuenta? Regístrese aquí.</RouterLink>
			<RouterLink :to="{name: 'password.recover'}" class="text-blue-600 text-center text-sm">¿Olvidó su contraseña? Recupérela aquí.</RouterLink>
		</div>
	</div>
</template>

<script setup>

</script>