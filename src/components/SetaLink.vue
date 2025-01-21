<template>
  <div class="breadcrumbs pb-0 text-sm">
    <ul>
      <li>
        <RouterLink class="" to="/">Pagina inicial</RouterLink>
      </li>
      <li class="">
        <p class="break-all w-fit">{{ id }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
  },
};
</script>
