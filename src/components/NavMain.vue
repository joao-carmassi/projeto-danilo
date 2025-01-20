<template>
  <div class="w-full">
    <nav id="navBar" class="w-full gap-2 shadow-sm px-5 py-3 bg-secondary">
      <div class="flex gap-3 flex-col">
        <div class="flex items-center justify-between h-12">
          <div class="h-full aspect-square">
            <div
              class="itens-pc md:w-44 lg:w-64 hidden h-full lg:flex justify-center items-center"
            >
              <RouterLink
                class="flex gap-3 w-fit lg:justify-start items-center"
                to="/"
              >
                <img
                  class="md:h-6 lg:h-9 rounded-full border-2 p-1.5 border-primary aspect-square"
                  src="/img/simbolo.png"
                  alt="Iconi VRF"
                />
                <img
                  class="md:w-4/6"
                  src="/img/logo.png"
                  alt="Lodo loja do VRF"
                />
              </RouterLink>
            </div>
            <div class="Itens-Celular block lg:hidden">
              <input
                id="my-drawer-3"
                type="checkbox"
                class="drawer-toggle drawers lg:hidden"
              />
              <label
                for="my-drawer-3"
                aria-label="open sidebar"
                class="btn border border-white btn-square z-40 lg:hidden btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="inline-block h-6 w-6 stroke-current text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
              <div class="drawer-side z-50">
                <label
                  for="my-drawer-3"
                  aria-label="close sidebar"
                  class="drawer-overlay"
                ></label>
                <div
                  class="menu p-0 join join-vertical w-72 max-w-[66%] bg-base-200 min-h-full"
                >
                  <div
                    class="h-5 bg-secondary text-white flex items-center justify-end px-5"
                  ></div>
                  <div
                    class="collapse rounded-none collapse-arrow join-item border-gray-400 border"
                  >
                    <input
                      class="px-4 min-h-14"
                      type="checkbox"
                      name="my-accordion-4"
                    />
                    <div
                      class="collapse-title flex items-center px-4 min-h-14 text-md font-semibold text-secondary"
                    >
                      <div class="flex items-center justify-center gap-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          width="25"
                          height="25"
                          stroke-width="1.5"
                          class="text-secondary"
                        >
                          <path
                            d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"
                          ></path>
                        </svg>
                        <p class="text-secondary">Entre em contato</p>
                      </div>
                    </div>
                    <div class="collapse-content flex flex-col">
                      <ul class="menu rounded-md p-0 dropdown-content z-[1]">
                        <li>
                          <a
                            target="_blank"
                            href="mailto:vendas@lojadovrf.com.br"
                            class="rounded-t-md flex flex-col font-semibold tracking-wide rounded-none items-start gap-0 p-2"
                          >
                            <span class="block font-normal"
                              >Envie uma Mensagem:</span
                            >
                            <div class="flex gap-1 items-start">
                              <svg
                                class="inline"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                width="20"
                                height="20"
                                stroke-width="2"
                              >
                                <path
                                  d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                                ></path>
                                <path d="M3 7l9 6l9 -6"></path>
                              </svg>
                              <p>vendas@lojadovrf.com.br</p>
                            </div>
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            target="_blank"
                            href="https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças."
                            class="flex flex-col font-semibold tracking-wide rounded-none items-start gap-0 p-2"
                          >
                            <span class="block font-normal"
                              >Compre por telefone:</span
                            >
                            <div class="flex gap-1 items-start">
                              <svg
                                class="inline text-green-500"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                width="20"
                                height="20"
                                stroke-width="2"
                              >
                                <path
                                  d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"
                                ></path>
                                <path
                                  d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
                                ></path>
                              </svg>
                              <p>(11) 96918-9244</p>
                            </div>
                          </a>
                        </li>
                        <hr />
                        <li>
                          <div
                            class="rounded-b-md hover:bg-base-200 flex flex-col font-semibold tracking-wide rounded-none items-start gap-0 p-2"
                          >
                            <span class="block font-normal"
                              >Horário de atendimento:</span
                            >
                            <div class="flex gap-1 items-start">
                              <svg
                                class="inline"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                width="24"
                                height="24"
                                stroke-width="2"
                              >
                                <path
                                  d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
                                ></path>
                                <path d="M12 12l3 -2"></path>
                                <path d="M12 7v5"></path>
                              </svg>
                              <div>
                                <p>Domingo a Domingo</p>
                                <p>das 07 às 20 horas</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    v-for="(tipo, index) in tipos"
                    :key="index"
                    class="collapse rounded-none collapse-arrow join-item border-gray-400 border"
                  >
                    <input
                      class="px-4 min-h-14"
                      type="checkbox"
                      name="my-accordion-4"
                    />
                    <div
                      class="collapse-title flex items-center px-4 min-h-14 text-md font-semibold text-secondary"
                    >
                      {{ tipo }}
                    </div>
                    <div class="collapse-content pl-3 flex flex-col">
                      <RouterLink
                        @click="fecharAside"
                        :class="{ 'border-t': index !== 0 }"
                        class="py-2.5 pl-2 border-gray-300 font-semibold"
                        :to="`/marca/${marca}`"
                        v-for="(marca, index) in tiposDasMarcas[tipo]"
                        :key="index"
                      >
                        - {{ marca }}
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="h-full lg:hidden">
            <button
              @click="vaiParaHome"
              class="h-full w-2/3 flex justify-center items-center gap-2 lg:hidden py-2.5 mx-auto"
            >
              <img class="w-full" src="/img/logo.png" alt="Loja Do VRF" />
            </button>
          </div>
          <div class="hidden lg:flex justify-center items-center gap-1">
            <InputPesquisaProduto class="md:w-72 lg:w-[32.5rem]" />
            <details
              id="detailsTelefone"
              class="hidden md:block dropdown dropdown-end m-0"
            >
              <summary
                class="btn bg-secondary hover:bg-secondary border-none py-1.5 h-fit btn-sm text-left pl-1 m-1"
              >
                <div class="flex items-center justify-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    width="30"
                    height="30"
                    stroke-width="1.5"
                    class="text-white"
                  >
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
                  </svg>
                  <p class="text-white">
                    Entre em <span class="block">contato</span>
                  </p>
                </div>
              </summary>
              <ul
                class="menu w-56 rounded-md p-0 dropdown-content bg-base-100 z-[1] shadow"
              >
                <li>
                  <a
                    target="_blank"
                    href="mailto:vendas@lojadovrf.com.br"
                    class="rounded-t-md flex flex-col font-semibold tracking-wide rounded-none items-start gap-0 p-2"
                  >
                    <span class="block font-normal">Envie uma Mensagem:</span>
                    <div class="flex gap-1 items-start">
                      <svg
                        class="inline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        width="20"
                        height="20"
                        stroke-width="2"
                      >
                        <path
                          d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"
                        ></path>
                        <path d="M3 7l9 6l9 -6"></path>
                      </svg>
                      <p>vendas@lojadovrf.com.br</p>
                    </div>
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    target="_blank"
                    href="https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças."
                    class="flex flex-col font-semibold tracking-wide rounded-none items-start gap-0 p-2"
                  >
                    <span class="block font-normal">Compre por telefone:</span>
                    <div class="flex gap-1 items-start">
                      <svg
                        class="inline text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        width="20"
                        height="20"
                        stroke-width="2"
                      >
                        <path
                          d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"
                        ></path>
                        <path
                          d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
                        ></path>
                      </svg>
                      <p>(11) 96918-9244</p>
                    </div>
                  </a>
                </li>
                <hr />
                <li>
                  <div
                    class="rounded-b-md hover:bg-base-100 flex flex-col font-semibold tracking-wide rounded-none items-start gap-0 p-2"
                  >
                    <span class="block font-normal"
                      >Horário de atendimento:</span
                    >
                    <div class="flex gap-1 items-start">
                      <svg
                        class="inline"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        width="24"
                        height="24"
                        stroke-width="2"
                      >
                        <path
                          d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
                        ></path>
                        <path d="M12 12l3 -2"></path>
                        <path d="M12 7v5"></path>
                      </svg>
                      <div>
                        <p>Domingo a Domingo</p>
                        <p>das 07 às 20 horas</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </details>
          </div>
          <div class="flex w-24 gap-2 justify-end">
            <div class="dropdown dropdown-end">
              <RouterLink
                to="/carrinho"
                class="btn border-white focus:border-secondary border-2 btn-ghost btn-circle"
              >
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
                  <span class="badge badge-sm indicator-item">{{
                    SCarrinho.produtos.items.length
                  }}</span>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
        <div class="lg:hidden h-12 flex items-center justify-center w-full">
          <InputPesquisaProduto class="w-full" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { storeCarrinho } from "@/store/SCarrinho";
import InputPesquisaProduto from "./InputPesquisaProduto.vue";
import { storeProdutos } from "@/store/SProdutos";
import router from "@/router/router";
import type { DetailsHTMLAttributes } from "vue";
import fechaDrawer from "@/utils/fechaDrawer";

export default {
  components: { InputPesquisaProduto },
  data() {
    return {
      inputPesquisa: "",
      SCarrinho: storeCarrinho(),
      SProdutos: storeProdutos(),
      tipos: [] as string[],
      tiposDasMarcas: {} as {
        [key: string]: string[];
      },
    };
  },
  methods: {
    vaiParaHome() {
      this.$router.push("/");
    },
    paginaMarcas(marca: string) {
      router.push(`/marca/${marca}`);
    },
    fecharAside() {
      fechaDrawer();
    },
  },
  async mounted() {
    this.tipos = await this.SProdutos.getTipos();
    this.tiposDasMarcas = await this.SProdutos.separaMarcasDeUmProduto();

    const details = document.querySelectorAll("#detailsTelefone");
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
      const navBar = document.getElementById("navBar") as HTMLElement;
      navBar.addEventListener("mouseleave", () => {
        detail.removeAttribute("open");
      });
    });
  },
};
</script>
