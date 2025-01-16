<template>
  <div class="breadcrumbs text-sm">
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
