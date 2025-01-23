<template>
  <section class="flex min-h-[83svh] flex-col items-center justify-center">
    <div class="w-full flex justify-center items-center py-10">
      <h2 class="mx-auto text-2xl md:text-3xl text-secondary font-semibold">
        Escolha o fabricante:
      </h2>
    </div>
    <div
      class="md:w-11/12 flex items-center justify-center flex-wrap gap-x-7 gap-y-20 lg:w-10/12 mb-10"
    >
      <div
        v-for="index in 5"
        :key="index"
        class="shadow-lg md:hover:scale-105 duration-300 [--tw-shadow-color:rgba(17, 17, 17, 0.9)] w-fit h-fit p-5 rounded-md border border-gray-200"
      >
        <RouterLink class="flex flex-col gap-3" to="/manuais/teste">
          <span class="bg-gray-500 w-32 mx-auto h-14 block"></span>
          <span class="bg-gray-500 w-52 aspect-square block"></span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
export default {};
</script>
<style lang=""></style>
