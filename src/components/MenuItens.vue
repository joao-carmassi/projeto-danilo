<!-- <template>
  <div
    id="menuItens"
    class="hidden relative h-12 w-full bg-secondary md:flex items-center justify-center text-white"
  >
    <ul class="menu gap-3 z-40 menu-horizontal">
      <li class="static">
        <details class="detailsNav" id="detailpai ">
          <summary class="font-semibold">CATEGORIAS</summary>
          <ul
            class="flex flex-col justify-center items-start md:top-8 lg:top-6 rounded-none"
          >
            <li class="flex flex-row relative">
              <details class="detailsNav" id="detailfilho ">
                <summary class="font-semibold text-secondary">PLACAS</summary>
                <ul
                  class="flex absolute w-fit py-2 bg-base-100 flex-col justify-center items-start top-0 left-[12.2rem] rounded-none shadow-lg"
                >
                  <li>
                    <p
                      class="text-secondary text-lg mx-2 font-semibold text-nowrap"
                    >
                      PLACAS:
                    </p>
                  </li>
                  <li
                    class="p-0 m-0 border-b-2 border-secondary opacity-100 w-full"
                  ></li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa de Controle Principal
                    </p>
                  </li>
                  <li class="p-0 m-0 border-b border-gray-900 w-full"></li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Filtro
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Auxiliar do Compressor
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Auxiliar do Ventilador
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Módulo Inverter do Compressor
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Módulo Inverter do Ventilador
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Detecção de Corrente
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa de Alimentação
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Outros tipos de placa
                    </p>
                  </li>
                </ul>
              </details>
            </li>
            <li class="p-0 m-0 border-b border-gray-900 w-full"></li>
            <li class="flex flex-row relative">
              <details class="detailsNav" id="detailfilho ">
                <summary class="font-semibold text-secondary">SENSORES</summary>
                <ul
                  class="flex absolute w-fit py-2 bg-base-100 flex-col justify-center items-start top-0 left-[12.2rem] rounded-none shadow-lg"
                >
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa de Controle Principal
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Filtro
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Auxiliar do Compressor
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Auxiliar do Ventilador
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Módulo Inverter do Compressor
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Módulo Inverter do Ventilador
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Detecção de Corrente
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa de Alimentação
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Outros tipos de placa
                    </p>
                  </li>
                </ul>
              </details>
            </li>
            <li class="flex flex-row relative">
              <details class="detailsNav" id="detailfilho ">
                <summary class="font-semibold text-secondary">
                  VÁLVULA DE EXPANSÃO
                </summary>
                <ul
                  class="flex absolute w-fit py-2 bg-base-100 flex-col justify-center items-start top-0 left-[12.2rem] rounded-none shadow-lg"
                >
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa de Controle Principal
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Filtro
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Auxiliar do Compressor
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Auxiliar do Ventilador
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Módulo Inverter do Compressor
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Módulo Inverter do Ventilador
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Detecção de Corrente
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa de Alimentação
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Outros tipos de placa
                    </p>
                  </li>
                </ul>
              </details>
            </li>
            <li class="flex flex-row relative">
              <details class="detailsNav" id="detailfilho ">
                <summary class="font-semibold text-secondary">
                  BOMBA DE DRENO
                </summary>
                <ul
                  class="flex absolute w-fit py-2 bg-base-100 flex-col justify-center items-start top-0 left-[12.2rem] rounded-none shadow-lg"
                >
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa de Controle Principal
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Filtro
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Auxiliar do Compressor
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Auxiliar do Ventilador
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Módulo Inverter do Compressor
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Módulo Inverter do Ventilador
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa Detecção de Corrente
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Placa de Alimentação
                    </p>
                  </li>
                  <li>
                    <p class="text-secondary mx-2 font-semibold text-nowrap">
                      Outros tipos de placa
                    </p>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li class="static" v-for="(tipo, index) in tipos" :key="index">
        <details class="detailsNav" id="detailpai ">
          <summary class="font-semibold" @click="paginaTipos(tipo)">
            {{ tipo }}
          </summary>
          <ul
            class="flex justify-center items-center md:top-8 lg:top-6 rounded-none w-full right-1/2 translate-x-1/2"
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
                :to="`/marca/${marca}`"
                class="text-secondary mx-2 font-semibold"
                >{{ marca }}</RouterLink
              >
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</template> -->

<template>
  <div
    id="menuItens"
    class="hidden relative w-full bg-secondary lg:flex items-center justify-center text-white"
  >
    <ul
      class="menu p-0 static justify-center items-center flex-wrap h-fit gap-3 z-40 menu-horizontal"
    >
      <li class="static hidden md:block my-1">
        <ComponenteCategoria />
      </li>
      <li class="static">
        <details class="detailsNav" id="detailpai ">
          <summary class="font-semibold text-xs">COMPRESSORES</summary>
          <ul
            class="flex justify-start items-center md:top-8 lg:top-6 rounded-none right-1/2 translate-x-1/2"
          >
            <div class="flex flex-col flex-wrap h-96">
              <li class="mx-5" v-for="index in 50" :key="index">
                <p class="text-secondary mx-2 font-semibold text-nowrap">
                  {{ (Math.random() * 9999999999).toFixed(0) }}
                </p>
              </li>
            </div>
          </ul>
        </details>
      </li>
      <li class="static">
        <details class="detailsNav" id="detailpai ">
          <summary class="font-semibold text-xs">
            INSTALAÇÃO E MANUTENÇÃO
          </summary>
          <ul
            class="flex justify-start items-center md:top-8 lg:top-6 rounded-none right-1/2 translate-x-1/2"
          >
            <div class="flex">
              <div v-for="index in 4" :key="index">
                <li class="mx-5" v-for="index in 10" :key="index">
                  <p class="text-secondary mx-2 font-semibold text-nowrap">
                    {{ (Math.random() * 9999999999).toFixed(0) }}
                  </p>
                </li>
              </div>
            </div>
          </ul>
        </details>
      </li>
      <li class="static">
        <details class="detailsNav" id="detailpai ">
          <summary class="font-semibold text-xs">VÁLVULAS</summary>
          <ul
            class="flex justify-start items-center md:top-8 lg:top-6 rounded-none right-1/2 translate-x-1/2"
          >
            <div class="flex">
              <div v-for="index in 4" :key="index">
                <li class="mx-5" v-for="index in 10" :key="index">
                  <p class="text-secondary mx-2 font-semibold text-nowrap">
                    {{ (Math.random() * 9999999999).toFixed(0) }}
                  </p>
                </li>
              </div>
            </div>
          </ul>
        </details>
      </li>
      <li class="static">
        <details class="detailsNav" id="detailpai ">
          <summary class="font-semibold text-xs">GÁS REFRIGERANTES</summary>
          <ul
            class="flex justify-start items-center md:top-8 lg:top-6 rounded-none right-1/2 translate-x-1/2"
          >
            <div class="flex">
              <div v-for="index in 4" :key="index">
                <li class="mx-5" v-for="index in 10" :key="index">
                  <p class="text-secondary mx-2 font-semibold text-nowrap">
                    {{ (Math.random() * 9999999999).toFixed(0) }}
                  </p>
                </li>
              </div>
            </div>
          </ul>
        </details>
      </li>
      <li class="static">
        <details class="detailsNav" id="detailpai ">
          <summary class="font-semibold text-xs">LUBRIFICANTES</summary>
          <ul
            class="flex justify-start items-center md:top-8 lg:top-6 rounded-none right-1/2 translate-x-1/2"
          >
            <div class="flex">
              <div v-for="index in 4" :key="index">
                <li class="mx-5" v-for="index in 10" :key="index">
                  <p class="text-secondary mx-2 font-semibold text-nowrap">
                    {{ (Math.random() * 9999999999).toFixed(0) }}
                  </p>
                </li>
              </div>
            </div>
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
import ComponenteCategoria from "./ComponenteCategoria.vue";

export default {
  components: { ComponenteCategoria },
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

    const details = document.querySelectorAll(".detailsNav");
    details.forEach((detail) => {
      let alvo: DetailsHTMLAttributes;
      detail.addEventListener("mouseenter", (e) => {
        alvo = e.target as DetailsHTMLAttributes;
        details.forEach((detail) => {
          if (detail.id === alvo.id) {
            detail.removeAttribute("open");
          }
        });
        alvo.open = true;
      });
      const navBar = document.getElementById("menuItens") as HTMLElement;
      navBar.addEventListener("mouseleave", () => {
        detail.removeAttribute("open");
      });
    });
  },
};
</script>
