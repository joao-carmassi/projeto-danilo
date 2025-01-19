<template>
  <div class="breadcrumbs pb-0 text-sm">
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li>
        {{ id }}
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
