<template>
	<div class="flex justify-center items-center h-full">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-4">
			<div class="flex flex-col gap-1">
				<label for="password">Nueva contraseña</label>
				<input type="password" id="password" class="input-text">
			</div>
			<div class="flex flex-col gap-1">
				<label for="password_confirmation">Repita su nueva contraseña</label>
				<input type="password" id="password_confirmation" class="input-text">
			</div>
			<button type="button" class="border rounded border-green-700 text-green-700 px-3 py-2">Restablecer contraseña</button>
		</div>
	</div>
</template>

<style>
@media (min-width: 1024px) {
	.about {
		min-height: 100vh;
		display: flex;
		align-items: center;
	}
}
</style>
<script setup></script>