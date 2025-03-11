<template>
  <div class="w-full">
    <nav id="navBar" class="w-full gap-2 shadow-sm px-5 py-2.5 bg-secondary">
      <div class="flex gap-3 flex-col">
        <div class="flex items-center justify-center h-12">
          <div class="h-full aspect-square">
            <div
              class="itens-pc md:w-44 lg:w-64 hidden h-full lg:flex justify-center items-center"
            >
              <RouterLink
                @click="vaiParaHome"
                class="flex gap-3 w-fit lg:justify-center items-center"
                to="/"
              >
                <img
                  loading="lazy"
                  class="md:h-6 lg:h-9 rounded-full border-2 p-1.5 border-primary aspect-square"
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
                  class="menu p-0 join join-vertical w-72 max-w-[66%] bg-base-200 min-h-full overflow-auto"
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
                        <p class="text-secondary">Contato</p>
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
                                <p>Todos os dias</p>
                                <p>7 às 20 horas</p>
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
                      class="collapse rounded-none join-item border-gray-400 border"
                    >
                      <div
                        class="collapse-title flex items-center px-4 min-h-14 text-md font-semibold text-secondary"
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
                    class="collapse rounded-none join-item border-gray-400 border"
                  >
                    <div
                      class="collapse-title flex items-center px-4 min-h-14 text-md font-semibold"
                    >
                      <RouterLink
                        @click="fecharAside"
                        to="/manuais"
                        class="flex gap-2 group items-center"
                      >
                        <img
                          loading="lazy"
                          class="h-7"
                          src="/img/nav/logoManualCelular.webp"
                        />
                        <p
                          class="text-secondary group-hover:underline font-semibold"
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
              class="h-full w-2/3 flex justify-center items-center gap-2 lg:hidden py-2.5 mx-auto"
            >
              <img
                loading="lazy"
                class="w-full"
                src="/img/logo.png"
                alt="Loja Do VRF"
              />
            </button>
          </div>
          <div class="hidden lg:flex gap-1 items-center">
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
              class="md:w-72 ml-3 lg:w-[25rem] xl:w-[38rem]"
            />
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
                  <p class="text-white leading-4 font-normal text-nowrap">
                    Contato<span class="font-semibold block"
                      >(11) 96918-9244</span
                    >
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
                        <p>Todos os dias</p>
                        <p>7 às 20 horas</p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </details>
          </div>
          <div class="flex items-center lg:gap-5 justify-end">
            <RouterLink to="/manuais" class="flex group items-center">
              <img loading="lazy" class="h-8" src="/img/nav/manuais.webp" />
              <p
                class="text-white hidden leading-5 lg:block group-hover:underline"
              >
                Manuais <span class="block font-semibold">Técnico</span>
              </p>
            </RouterLink>
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
