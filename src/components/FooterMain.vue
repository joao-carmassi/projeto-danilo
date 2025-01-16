<template>
  <footer>
    <hr class="border-secondary" />

    <div class="footer bg-base-100 text-neutral-content p-10">
      <nav>
        <h6 class="text-lg font-semibold mb-0.5 text-secondary">
          Fale conosco:
        </h6>
        <a
          target="_blank"
          href="https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças."
          class="link link-hover flex justify-center items-center gap-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            stroke-width="1.75"
            class="text-secondary"
          >
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
            <path
              d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
            ></path>
          </svg>
          <span class="font-semibold">Whatsapp:</span> +55 (11) 96918-9244
        </a>
        <a
          target="_blank"
          href="mailto:vendas@lojadovrf.com.br"
          class="link flex justify-center items-center gap-1 link-hover"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            width="24"
            height="24"
            stroke-width="1.75"
            class="text-secondary"
          >
            <path
              d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
            ></path>
            <path d="M3 7l9 6l9 -6"></path>
          </svg>
          <span class="font-semibold">Email:</span> vendas@lojadovrf.com.br</a
        >
      </nav>
      <nav>
        <h6 class="text-lg font-semibold mb-0.5 text-secondary">Marcas</h6>
        <RouterLink
          :to="`/marca/${categoria}`"
          v-for="(categoria, index) in SProdutos.categorias"
          :key="index"
          class="link link-hover"
          >{{ categoria }}</RouterLink
        >
      </nav>
      <nav>
        <h6 class="text-lg font-semibold mb-0.5 text-secondary">Produtos</h6>
        <RouterLink
          :to="`/produtos/${tipo}`"
          v-for="(tipo, index) in SProdutos.tipos"
          :key="index"
          class="link link-hover"
          >{{ tipo }}</RouterLink
        >
      </nav>
    </div>
    <div class="footer bg-base-200 text-base-content p-5 px-10">
      <aside>
        <p>Copyright © 2024 - Todos os direitos reservados a Loja do VRF</p>
      </aside>
    </div>
  </footer>
</template>

<script lang="ts">
import { storeProdutos } from "@/store/SProdutos";

export default {
  data() {
    return {
      SProdutos: storeProdutos(),
    };
  },
  created() {
    this.SProdutos.getCategorias();
  },
};
</script>
