<template>
  <nav
    class="w-full flex items-center justify-between shadow-sm h-20 px-5 py-3 bg-secondary"
  >
    <div class="h-full">
      <button
        @click="vaiParaHome"
        class="h-full rounded-full border-2 aspect-square border-primary p-2.5"
      >
        <img class="h-full" src="/assets/logo.png" alt="" />
      </button>
    </div>
    <div class="gap-2 w-full grid place-items-center">
      <label class="input w-44 md:w-96 input-bordered flex items-center gap-2">
        <input type="text" class="grow" placeholder="Search" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          class="h-4 w-4 opacity-70"
        >
          <path
            fill-rule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </label>
    </div>
    <div class="flex justify-end">
      <div class="dropdown dropdown-end">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 text-base-100 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item">0</span>
          </div>
        </div>
        <div
          tabindex="0"
          class="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
        >
          <div class="card-body">
            <span class="text-lg text-gray-700 font-bold">8 Items</span>
            <span>Value: <ValorProduto :valor="1000" /></span>
            <div class="card-actions">
              <button class="btn btn-secondary mt-2 text-base-100 btn-block">
                View cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import ValorProduto from "./ValorProduto.vue";

export default {
  components: { ValorProduto },
  methods: {
    vaiParaHome() {
      this.$router.push("/");
    },
  },
};
</script>
