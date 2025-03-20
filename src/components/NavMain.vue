<template>
  <div class="w-full">
    <nav id="navBar" class="bg-secondary shadow-sm w-full gap-2 px-5 py-2.5">
      <div class="flex flex-col gap-3">
        <div class="flex h-12 justify-center items-center">
          <div class="h-full aspect-square">
            <div
              class="h-full justify-center hidden items-center itens-pc lg:flex lg:w-64 md:w-44"
            >
              <RouterLink
                @click="vaiParaHome"
                class="flex w-fit gap-3 items-center lg:justify-center"
                to="/"
              >
                <img
                  loading="lazy"
                  class="border-2 border-primary p-1.5 rounded-full aspect-square lg:h-9 md:h-6"
                  src="/img/simbolo.png"
                  alt="Iconi VRF"
                />
                <img
                  loading="lazy"
                  class="md:w-4/6"
                  src="/img/logo.png"
                  alt="Lodo loja do VRF"
                />
              </RouterLink>
            </div>
            <div class="block Itens-Celular lg:hidden">
              <input
                id="my-drawer-3"
                type="checkbox"
                class="drawer-toggle drawers lg:hidden"
              />
              <label
                for="my-drawer-3"
                aria-label="open sidebar"
                class="btn btn-ghost btn-square border border-white lg:hidden z-40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="h-6 text-white w-6 inline-block stroke-current"
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
                  class="bg-base-200 p-0 w-72 join join-vertical max-w-[66%] menu min-h-full overflow-auto"
                >
                  <div
                    class="flex bg-secondary h-5 justify-end text-white items-center px-5"
                  ></div>
                  <div
                    class="collapse collapse-arrow border border-gray-400 rounded-none join-item"
                  >
                    <input
                      class="min-h-14 px-4"
                      type="checkbox"
                      name="my-accordion-4"
                    />
                    <div
                      class="collapse-title flex text-md text-secondary font-semibold items-center min-h-14 px-4"
                    >
                      <div class="flex justify-center gap-1 items-center">
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
                        <p class="text-secondary">Contato</p>
                      </div>
                    </div>
                    <div class="collapse-content flex flex-col">
                      <ul class="dropdown-content p-0 rounded-md menu z-[1]">
                        <li>
                          <a
                            target="_blank"
                            href="mailto:contato@lojadovrf.com.br"
                            class="flex flex-col p-2 rounded-none rounded-t-md font-semibold gap-0 items-start tracking-wide"
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
                              <p>contato@lojadovrf.com.br</p>
                            </div>
                          </a>
                        </li>
                        <hr />
                        <li>
                          <a
                            target="_blank"
                            href="https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças."
                            class="flex flex-col p-2 rounded-none font-semibold gap-0 items-start tracking-wide"
                          >
                            <span class="block font-normal"
                              >Compre por telefone:</span
                            >
                            <div class="flex gap-1 items-start">
                              <svg
                                class="text-green-500 inline"
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
                            class="flex flex-col p-2 rounded-b-md rounded-none font-semibold gap-0 hover:bg-base-200 items-start tracking-wide"
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
                                <p>Segunda a sábado</p>
                                <p>7 às 17 horas</p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div v-for="(tipo, index) in tipos" :key="index">
                    <div
                      v-if="
                        tipo === 'PLACA' ||
                        tipo === 'MOTOR VENTILADOR' ||
                        tipo === 'VALVULA DE EXPANSÃO' ||
                        tipo === 'SENSOR'
                      "
                      class="collapse collapse-arrow border border-gray-400 rounded-none join-item"
                    >
                      <input
                        class="min-h-14 px-4"
                        type="checkbox"
                        name="my-accordion-4"
                      />
                      <div
                        class="collapse-title flex text-md text-secondary font-semibold items-center min-h-14 px-4"
                      >
                        {{ tipo }}
                      </div>
                      <div class="collapse-content flex flex-col pl-3">
                        <RouterLink
                          @click="fecharAside"
                          :class="{ 'border-t': index !== 0 }"
                          class="border-gray-300 font-semibold pl-2 py-2.5"
                          :to="`/produtos/${tipo}/${subcategoria}`"
                          v-for="(subcategoria, index) in subcategorias[tipo]"
                          :key="index"
                        >
                          • {{ subcategoria }}
                        </RouterLink>
                      </div>
                    </div>
                    <div
                      v-else
                      class="collapse border border-gray-400 rounded-none join-item"
                    >
                      <div
                        class="collapse-title flex text-md text-secondary font-semibold items-center min-h-14 px-4"
                      >
                        <RouterLink
                          @click="fecharAside"
                          :to="`/produtos/${tipo}/`"
                          >{{ tipo }}</RouterLink
                        >
                      </div>
                    </div>
                  </div>
                  <div
                    class="collapse border border-gray-400 rounded-none join-item"
                  >
                    <div
                      class="collapse-title flex text-md font-semibold items-center min-h-14 px-4"
                    >
                      <RouterLink
                        @click="fecharAside"
                        to="/manuais"
                        class="flex gap-2 group items-center"
                      >
                        <img
                          loading="lazy"
                          class="h-7"
                          src="/img/nav/logoManualCelular.png"
                        />
                        <p
                          class="text-secondary font-semibold group-hover:underline"
                        >
                          MANUAIS
                        </p>
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
              class="flex h-full justify-center w-2/3 gap-2 items-center lg:hidden mx-auto py-2.5"
            >
              <img
                loading="lazy"
                class="w-full"
                src="/img/logo.png"
                alt="Loja Do VRF"
              />
            </button>
          </div>
          <div class="gap-1 hidden items-center lg:flex">
            <div id="idMenuBotao" class="hidden">
              <input
                hidden=""
                class="check-icon"
                id="check-icon"
                name="check-icon"
                type="checkbox"
              />
              <label class="icon-menu" for="check-icon">
                <div class="bar bar--1"></div>
                <div class="bar bar--2"></div>
                <div class="bar bar--3"></div>
              </label>
            </div>
            <InputPesquisaProduto
              class="lg:w-[25rem] md:w-72 ml-3 xl:w-[38rem]"
            />
            <details
              id="detailsTelefone"
              class="dropdown dropdown-end m-0 hidden md:block"
            >
              <summary
                class="btn btn-sm bg-secondary border-none h-fit m-1 text-left hover:bg-secondary pl-1 py-1.5"
              >
                <div class="flex justify-center gap-1 items-center">
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
                  <p class="text-nowrap text-white font-normal leading-4">
                    Contato<span class="block font-semibold"
                      >(11) 96918-9244</span
                    >
                  </p>
                </div>
              </summary>
              <ul
                class="dropdown-content bg-base-100 p-0 rounded-md shadow w-56 menu z-[1]"
              >
                <li>
                  <a
                    target="_blank"
                    href="mailto:contato@lojadovrf.com.br"
                    class="flex flex-col p-2 rounded-none rounded-t-md font-semibold gap-0 items-start tracking-wide"
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
                      <p>contato@lojadovrf.com.br</p>
                    </div>
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    target="_blank"
                    href="https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças."
                    class="flex flex-col p-2 rounded-none font-semibold gap-0 items-start tracking-wide"
                  >
                    <span class="block font-normal">Compre por telefone:</span>
                    <div class="flex gap-1 items-start">
                      <svg
                        class="text-green-500 inline"
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
                    class="flex flex-col p-2 rounded-b-md rounded-none font-semibold gap-0 hover:bg-base-100 items-start tracking-wide"
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
                        <p>Segunda a sábado</p>
                        <p>7 às 17 horas</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </details>
          </div>
          <div class="flex justify-end items-center lg:gap-5">
            <RouterLink to="/manuais" class="flex group items-center">
              <img loading="lazy" class="h-8" src="/img/nav/manuais.png" />
              <p
                class="text-white group-hover:underline hidden leading-5 lg:block"
              >
                Manuais <span class="block font-semibold">Técnico</span>
              </p>
            </RouterLink>
            <div class="dropdown dropdown-end">
              <RouterLink
                to="/carrinho"
                class="btn btn-circle btn-ghost border-2 border-white focus:border-secondary"
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
        <div class="flex h-12 justify-center w-full items-center lg:hidden">
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
      subcategorias: {} as Record<string, string[]>,
    };
  },
  methods: {
    vaiParaHome() {
      this.$router.push("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    paginaMarcas(marca: string) {
      router.push(`/marca/${marca}`);
    },
    fecharAside() {
      fechaDrawer();
    },
  },
  async mounted() {
    this.SCarrinho.carregaDados();

    this.tipos = await this.SProdutos.getTipos();
    this.tiposDasMarcas = await this.SProdutos.separaMarcasDeUmProduto();
    this.subcategorias = await this.SProdutos.getSubcategorias();
    for (const tipo in this.subcategorias) {
      this.subcategorias[tipo] = this.subcategorias[tipo].filter(
        (subcategoria) => subcategoria !== ""
      );
    }

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

<style scoped>
/* From Uiverse.io by Creatlydev */
.icon-menu {
  --gap: 5px;
  --height-bar: 2.5px;
  --pos-y-bar-one: 0;
  --pos-y-bar-three: 0;
  --scale-bar: 1;
  --rotate-bar-one: 0;
  --rotate-bar-three: 0;
  width: 25px;
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  cursor: pointer;
  position: relative;
}

.bar {
  position: relative;
  height: var(--height-bar);
  width: 100%;
  border-radius: 0.5rem;
  background-color: white;
}

.bar--1 {
  top: var(--pos-y-bar-one);
  transform: rotate(var(--rotate-bar-one));
  transition: top 200ms 100ms, transform 100ms;
}

.bar--2 {
  transform: scaleX(var(--scale-bar));
  transition: transform 150ms 100ms;
}

.bar--3 {
  bottom: var(--pos-y-bar-three);
  transform: rotate(var(--rotate-bar-three));
  transition: bottom 200ms 100ms, transform 100ms;
}

.check-icon:checked + .icon-menu > .bar--1 {
  transition: top 200ms, transform 200ms 100ms;
}

.check-icon:checked + .icon-menu > .bar--3 {
  transition: bottom 200ms, transform 200ms 100ms;
}

.check-icon:checked + .icon-menu {
  --pos-y-bar-one: calc(var(--gap) + var(--height-bar));
  --pos-y-bar-three: calc(var(--gap) + var(--height-bar));
  --scale-bar: 0;
  --rotate-bar-one: 45deg;
  --rotate-bar-three: -45deg;
}
/* FIN ICON-MENU */
</style>
