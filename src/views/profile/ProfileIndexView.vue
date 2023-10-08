<template>
	<div id="delete-relative-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Eliminar cotitular «Jane Doe»</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full modal" @click.stop="closeModal('delete-relative-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="flex flex-col gap-3">
				<p>¿Está seguro que desea eliminar su cotitular «Jane Doe»? Esta acción no se puede deshacer.</p>
				<div class="flex justify-end">
					<button type="button" class="btn border-red-700 text-red-700">Eliminar</button>
				</div>
			</div>
		</div>
	</div>
	<div id="add-relative-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Agregar un cotitular</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full modal" @click.stop="closeModal('add-relative-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="flex flex-col gap-1">
					<label for="name">Nombres</label>
					<input type="text" id="name" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="lastname">Apellidos</label>
					<input type="text" id="lastname" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="relationship">Parentesco</label>
					<select id="relationship">
						<option value="some_value">Cónyuge</option>
						<option value="some_value">Hijo/a</option>
						<!-- Add more as necessary -->
					</select>
				</div>
				<div class="flex flex-col gap-1">
					<label for="id_card">DNI</label>
					<input type="number" id="id_card" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="birthdate">Fecha de nacimiento</label>
					<input type="date" id="birthdate" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="phone">Teléfono</label>
					<input type="tel" id="phone" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="address">Domicilio</label>
					<input type="text" id="address" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label>Sexo</label>
					<div class="flex items-center gap-3">
						<label><input type="radio" name="sex-relative-1" value="f"> Femenino</label>
						<label><input type="radio" name="sex-relative-1" value="m"> Masculino</label>
					</div>
				</div>
			</div>
			<button type="button" class="btn border-green-700 text-green-700">Guardar</button>
		</div>
	</div>
	<div id="edit-relative-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Modificar datos personales de cotitular «Jane Doe»</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full modal" @click.stop="closeModal('edit-relative-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="flex flex-col gap-1">
					<label for="name">Nombres</label>
					<input type="text" id="name" class="input-text" value="Jane">
				</div>
				<div class="flex flex-col gap-1">
					<label for="lastname">Apellidos</label>
					<input type="text" id="lastname" class="input-text" value="Doe">
				</div>
				<div class="flex flex-col gap-1">
					<label for="birthdate">Fecha de nacimiento</label>
					<input type="date" id="birthdate" class="input-text" value="1965-08-16">
				</div>
				<div class="flex flex-col gap-1">
					<label for="phone">Teléfono</label>
					<input type="tel" id="phone" class="input-text" value="+1 517 978-1234">
				</div>
				<div class="flex flex-col gap-1">
					<label for="address">Domicilio</label>
					<input type="text" id="address" class="input-text" value="461 Robinson St, Lansing, MI">
				</div>
			</div>
			<button type="button" class="btn border-green-700 text-green-700">Guardar</button>
		</div>
	</div>
	<div id="edit-profile-modal" class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-30 hidden justify-center items-center z-20 modal" @click="closeAllModals">
		<div class="max-w-7xl rounded-lg bg-gray-100 p-10 flex flex-col gap-6" @click.stop="">
			<div class="flex justify-between items-center gap-3">
				<p class="text-xl font-semibold">Modificar datos personales</p>
				<button type="button" class="w-8 h-8 hover:bg-gray-200 rounded-full modal" @click.stop="closeModal('edit-profile-modal')">
					<i class="fa-solid fa-times text-lg"></i>
				</button>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="flex flex-col gap-1">
					<label for="name">Nombres <span class="text-red-700">*</span></label>
					<input type="text" id="name" class="input-text" value="John">
				</div>
				<div class="flex flex-col gap-1">
					<label for="lastname">Apellidos <span class="text-red-700">*</span></label>
					<input type="text" id="lastname" class="input-text" value="Doe">
				</div>
				<div class="flex flex-col gap-1">
					<label for="email">Correo electrónico <span class="text-red-700">*</span></label>
					<input type="email" id="email" class="input-text" value="johndoe@appleseed.com">
				</div>
				<div class="flex flex-col gap-1">
					<label for="phone">Teléfono <span class="text-red-700">*</span></label>
					<input type="tel" id="phone" class="input-text" value="+1 517 978-1234">
				</div>
				<div class="flex flex-col gap-1 md:col-span-2">
					<label for="address">Domicilio <span class="text-red-700">*</span></label>
					<input type="text" id="address" class="input-text" value="461 Robinson St, Lansing, MI">
				</div>
				<div class="flex flex-col gap-1">
					<label for="password">Contraseña</label>
					<input type="password" id="password" class="input-text">
				</div>
				<div class="flex flex-col gap-1">
					<label for="password-confirmation">Repetir contraseña</label>
					<input type="password" id="password-confirmation" class="input-text">
				</div>
			</div>
			<button type="button" class="btn border-green-700 text-green-700">Guardar</button>
		</div>
	</div>
	<div class="container mx-auto flex gap-10">
		<div class="flex-grow flex flex-col gap-3">
			<div class="flex justify-between items-center gap-3 px-3">
				<p class="text-blue-800 text-3xl">Mi Perfil</p>
				<p class="text-gray-400">Afiliado #00001234</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-3">
				<div class="flex flex-col gap-1">
					<label>Nombres</label>
					<p>John</p>
				</div>
				<div class="flex flex-col gap-1">
					<label>Apellidos</label>
					<p>Doe</p>
				</div>
				<div class="flex flex-col gap-1">
					<label>DNI</label>
					<p>12345678</p>
				</div>
				<div class="flex flex-col gap-1">
					<label>Correo electrónico</label>
					<p>johndoe@appleseed.com</p>
				</div>
				<div class="flex flex-col gap-1">
					<label>Fecha de nacimiento</label>
					<p>03/24/1960</p>
				</div>
				<div class="flex flex-col gap-1">
					<label>Teléfono</label>
					<p>+1 517 978-1234</p>
				</div>
				<div class="flex flex-col gap-1">
					<label>Domicilio</label>
					<p>461 Robinson St, Lansing, MI</p>
				</div>
				<div class="flex flex-col gap-1">
					<label>Sexo</label>
					<p>Masculino</p>
				</div>
				<div class="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:col-span-2 xl:col-span-4">
					<button type="button" class="btn border-blue-700 text-blue-700" @click="showModal('edit-profile-modal')">Modificar datos personales</button>
				</div>
			</div>
			<div class="flex justify-between items-center gap-3 px-3">
				<p class="text-blue-800 text-3xl">Cotitulares</p>
				<button type="button" class="btn border-green-700 text-green-700" @click="showModal('add-relative-modal')">Agregar</button>
			</div>
			<div class="rounded-lg bg-gray-100 flex flex-col gap-3 p-5">
				<div class="flex justify-between items-center gap-3">
					<p class="text-lg font-bold">Cónyuge</p>
					<p class="text-gray-400">Afiliado #00001235</p>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
					<div class="flex flex-col gap-1">
						<label>Nombres</label>
						<p>Jane</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Apellidos</label>
						<p>Doe</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>DNI</label>
						<p>12345679</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Fecha de nacimiento</label>
						<p>08/16/1965</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Teléfono</label>
						<p>+1 517 978-1234</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Domicilio</label>
						<p>461 Robinson St, Lansing, MI</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Sexo</label>
						<p>Femenino</p>
					</div>
					<div class="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:col-span-2 xl:col-span-4">
						<button type="button" class="btn border-blue-700 text-blue-700" @click="showModal('edit-relative-modal')">Modificar datos personales</button>
						<button type="button" class="btn border-red-700 text-red-700" @click="showModal('delete-relative-modal')">Eliminar cotitular</button>
					</div>
				</div>
			</div>
			<div class="rounded-lg bg-gray-100 flex flex-col gap-3 p-5">
				<div class="flex justify-between items-center gap-3">
					<p class="text-lg font-bold">Hijo/a</p>
					<p class="text-gray-400">Afiliado #00001236</p>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
					<div class="flex flex-col gap-1">
						<label>Nombres</label>
						<p>Joanne</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Apellidos</label>
						<p>Doe</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>DNI</label>
						<p>12345680</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Fecha de nacimiento</label>
						<p>04/29/1989</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Teléfono</label>
						<p>+1 517 978-1234</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Domicilio</label>
						<p>461 Robinson St, Lansing, MI</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Sexo</label>
						<p>Femenino</p>
					</div>
					<div class="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:col-span-2 xl:col-span-4">
						<button type="button" class="btn border-blue-700 text-blue-700">Modificar datos personales</button>
						<button type="button" class="btn border-red-700 text-red-700">Eliminar cotitular</button>
					</div>
				</div>
			</div>
			<div class="rounded-lg bg-gray-100 flex flex-col gap-3 p-5">
				<div class="flex justify-between items-center gap-3">
					<p class="text-lg font-bold">Hijo/a</p>
					<p class="text-gray-400">Afiliado #00001237</p>
				</div>
				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
					<div class="flex flex-col gap-1">
						<label>Nombres</label>
						<p>Joe</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Apellidos</label>
						<p>Doe</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>DNI</label>
						<p>12345681</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Fecha de nacimiento</label>
						<p>12/25/1993</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Teléfono</label>
						<p>+1 517 978-1234</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Domicilio</label>
						<p>461 Robinson St, Lansing, MI</p>
					</div>
					<div class="flex flex-col gap-1">
						<label>Sexo</label>
						<p>Masculino</p>
					</div>
					<div class="flex flex-col md:flex-row items-stretch md:items-center gap-4 md:col-span-2 xl:col-span-4">
						<button type="button" class="btn border-blue-700 text-blue-700">Modificar datos personales</button>
						<button type="button" class="btn border-red-700 text-red-700">Eliminar cotitular</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import {showModal,closeModal,closeAllModals} from '@/helpers'
</script>

