<template>
  <details class="detailsNav" id="detailpai ">
    <summary class="font-semibold text-xs">CATEGORIAS</summary>
    <ul
      class="flex flex-col h-64 py-4 flex-wrap justify-start items-start top-6 rounded-none"
    >
      <li class="flex static flex-row">
        <details class="detailsNav static" id="detailfilho ">
          <summary class="font-semibold static text-secondary">PLACAS</summary>
          <ul
            class="flex absolute py-2 bg-base-100 flex-col justify-center items-start top-0 pr-5 left-[6.1rem] rounded-none shadow-lg"
          >
            <li class="mx-5">
              <p class="text-secondary text-lg mx-2 font-semibold text-nowrap">
                PLACAS:
              </p>
            </li>
            <li
              class="p-0 m-0 border-b border-gray-200 opacity-100 w-full"
            ></li>
            <li class="mx-5">
              <p class="text-secondary mx-2 font-semibold text-nowrap">
                Placa de Controle Principal
              </p>
            </li>
            <li class="mx-5">
              <p class="text-secondary mx-2 font-semibold text-nowrap">
                Placa Filtro
              </p>
            </li>
            <li class="mx-5">
              <p class="text-secondary mx-2 font-semibold text-nowrap">
                Placa Auxiliar do Compressor
              </p>
            </li>
            <li class="mx-5">
              <p class="text-secondary mx-2 font-semibold text-nowrap">
                Placa Auxiliar do Ventilador
              </p>
            </li>
            <li class="mx-5">
              <p class="text-secondary mx-2 font-semibold text-nowrap">
                Módulo Inverter do Compressor
              </p>
            </li>
            <li class="mx-5">
              <p class="text-secondary mx-2 font-semibold text-nowrap">
                Módulo Inverter do Ventilador
              </p>
            </li>
            <li class="mx-5">
              <p class="text-secondary mx-2 font-semibold text-nowrap">
                Placa Detecção de Corrente
              </p>
            </li>
            <li class="mx-5">
              <p class="text-secondary mx-2 font-semibold text-nowrap">
                Placa de Alimentação
              </p>
            </li>
            <li class="mx-5">
              <p class="text-secondary mx-2 font-semibold text-nowrap">
                Outros tipos de placa
              </p>
            </li>
          </ul>
        </details>
      </li>
      <li v-for="n in 3" :key="n" class="flex my-1 static flex-row">
        <details class="detailsNav static" id="detailfilho ">
          <summary class="font-semibold static text-secondary">PLACAS</summary>
          <div>
            <ul
              class="flex absolute py-2 bg-base-100 flex-col justify-center items-start top-0 pr-5 left-[6.1rem] rounded-none shadow-lg"
            >
              <li class="mx-5">
                <p
                  class="text-secondary text-lg mx-2 font-semibold text-nowrap"
                >
                  {{ (Math.random() * 9999999999).toFixed(0) }}
                </p>
              </li>
              <li
                class="p-0 m-0 border-b border-gray-200 opacity-100 w-full"
              ></li>
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
          </div>
        </details>
      </li>
      <!-- <li class="p-0 m-0 border-b border-gray-900 w-full"></li> -->
    </ul>
  </details>
</template>

<script lang="ts">
export default {};
</script>
