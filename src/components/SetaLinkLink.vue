<template>
  <div class="breadcrumbs text-sm">
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li>
        <RouterLink :to="`/marca/${marca}`">{{ marca }}</RouterLink>
      </li>
      <li>
        <RouterLink :to="`/produtos/${tipo}`">{{ tipo }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    marca: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      required: true,
    },
  },
};
</script>
