<template>
  <div
    id="menuItens"
    class="hidden relative h-12 w-full bg-secondary md:flex items-center justify-center text-white"
  >
    <ul class="menu gap-3 z-40 menu-horizontal">
      <li class="static" v-for="(tipo, index) in tipos" :key="index">
        <details id="detailsNav">
          <summary class="font-semibold" @click="paginaTipos(tipo)">
            {{ tipo }}
          </summary>
          <ul
            class="flex justify-center items-center top-8 rounded-none w-full right-1/2 translate-x-1/2"
          >
            <li
              class="flex flex-row"
              v-for="(marca, index) in tiposDasMarcas[tipo]"
              :key="index"
            >
              <span
                v-if="index > 0"
                class="border-l border-gray-300 w-0 p-0"
              ></span>
              <RouterLink
                :to="`/404`"
                class="text-secondary mx-2 font-semibold"
                >{{ marca }}</RouterLink
              >
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import router from "@/router/router";
import { storeProdutos } from "@/store/SProdutos";
import type { DetailsHTMLAttributes } from "vue";

export default {
  data() {
    return {
      SProdutos: storeProdutos(),
      tipos: [] as string[],
      tiposDasMarcas: {} as {
        [key: string]: string[];
      },
    };
  },
  methods: {
    paginaTipos(tipo: string) {
      router.push(`/produtos/${tipo}`);
    },
  },
  async mounted() {
    this.tipos = await this.SProdutos.getTipos();
    this.tiposDasMarcas = await this.SProdutos.separaMarcasDeUmProduto();

    const details = document.querySelectorAll("#detailsNav");
    details.forEach((detail) => {
      let alvo: DetailsHTMLAttributes;
      detail.addEventListener("mouseenter", (e) => {
        alvo = e.target as DetailsHTMLAttributes;
        alvo.open = true;
        details.forEach((detail) => {
          if (detail != alvo) {
            detail.removeAttribute("open");
          }
        });
      });
      const navBar = document.getElementById("menuItens") as HTMLElement;
      navBar.addEventListener("mouseleave", () => {
        detail.removeAttribute("open");
      });
    });
  },
};
</script>
