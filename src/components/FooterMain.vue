<template>
  <footer>
    <hr class="border-secondary w-full md:hidden" />
    <div
      class="grid grid-cols-none border-secondary justify-between w-10/12 gap-x-5 gap-y-10 items-center lg:gap-x-10 lg:grid-cols-4 md:border md:grid-cols-2 md:mb-16 md:rounded-lg mx-auto px-5 py-8"
    >
      <div class="col-span-full">
        <p class="text-center font-semibold mb-5">Selos de segurança</p>
        <img class="mx-auto" src="/img/footer/seguro.webp" loading="lazy" />
      </div>
      <div class="flex flex-1 flex-col gap-4">
        <button @click="sobeTopoTela">
          <img
            class="w-20 mx-auto"
            src="/img/favicon.webp"
            alt="Logo Loja do vrf"
            loading="lazy"
          />
        </button>
        <p class="text-center">
          A Loja do VRF é um e-commerce especializado em oferecer uma ampla
          linha de peças e componentes para sistemas VRF. Nossa missão é
          proporcionar aos nossos clientes um atendimento ágil, eficiente e de
          excelência. Nosso diferencial está em oferecer preços competitivos e o
          prazo de entrega mais curto do mercado, garantindo que nossos clientes
          tenham acesso rápido às soluções que precisam, com
          qualidade e economia.
        </p>
      </div>
      <div class="flex-1">
        <ul>
          <li>
            <a
              target="_blank"
              href="mailto:contato@lojadovrf.com.br"
              class="flex flex-col p-2 rounded-none rounded-t-md font-semibold gap-0 items-center tracking-wide"
            >
              <span class="block font-normal">Envie uma Mensagem:</span>
              <div class="flex gap-1 items-center">
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
              class="flex flex-col p-2 rounded-none font-semibold gap-0 items-center tracking-wide"
            >
              <span class="block font-normal">Compre por telefone:</span>
              <div class="flex gap-1 items-center">
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
                  <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
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
              class="flex flex-col p-2 rounded-b-md rounded-none font-semibold gap-0 hover:bg-base-100 items-center tracking-wide"
            >
              <span class="block font-normal">Horário de atendimento:</span>
              <div class="flex gap-1 items-center">
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
                  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path>
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
      <div class="flex-1">
        <p class="text-center font-semibold mb-5">Meios de envio</p>
        <div class="grid grid-cols-2 gap-5 place-items-center">
          <img
            class="w-36"
            src="/img/footer/correiosEnvio.webp"
            loading="lazy"
          />
          <img class="w-28" src="/img/footer/loggi.webp" loading="lazy" />
          <img
            class="w-32"
            src="/img/footer/Azul_Cargo_Express_logo.webp"
            loading="lazy"
          />
          <img
            class="w-32"
            src="/img/footer/LATAM_Cargo_logo.svg.webp"
            loading="lazy"
          />
        </div>
      </div>
      <div class="flex flex-1 flex-col">
        <div>
          <p class="text-center font-semibold mb-5">Formas de pagamento</p>
          <img class="mx-auto" src="/img/footer/pix-logo.webp" loading="lazy" />
        </div>
        <img class="p-5" src="/img/footer/pagamentos.webp" loading="lazy" />
      </div>
    </div>
    <div class="bg-base-200 p-5 text-base-content footer px-10">
      <aside>
        <p>Copyright © 2024 - Todos os direitos reservados a Loja do VRF</p>
      </aside>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  methods: {
    sobeTopoTela() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
