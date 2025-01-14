<template>
  <div
    id="containerNotificacao"
    class="fixed w-full duration-500 flex flex-col items-center md:items-end gap-2 -bottom-28 p-3 right-0 z-50"
  >
    <div role="alert" class="alert bg-green-500 w-fit text-base-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 hidden md:inline shrink-0 stroke-current"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>Item adicionado ao carrinho!</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.notificacaoAtiva {
  bottom: 0;
}
</style>
