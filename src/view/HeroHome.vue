<template>
  <section
    class="flex min-h-screen lg:flex-row pb-14 lg:pb-0 flex-col-reverse gap-8 lg:gap-14 justify-center items-center lg:min-h-screen bg-base-200"
  >
    <div
      class="lg:w-1/2 w-full px-10 flex justify-center lg:justify-end items-center"
    >
      <span class="flex flex-col text-center gap-7 w-96 tracking-wide">
        <h1
          class="text-primary mx-auto flex items-center gap-2 font-semibold font-montSerrat tracking-wider text-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            width="24"
            height="24"
            stroke-width="1.75"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="currentColor"
            class="hidden md:block"
          >
            <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4"></path>
            <path d="M14.5 5.5l4 4"></path>
            <path d="M12 8l-5 -5l-4 4l5 5"></path>
            <path d="M7 8l-1.5 1.5"></path>
            <path d="M16 12l5 5l-4 4l-5 -5"></path>
            <path d="M16 17l-1.5 1.5"></path>
          </svg>
          Site em Manutenção:
        </h1>
        <p class="text-lg">
          Estamos trabalhando para melhorar sua experiência e trazer novidades
          exclusivas para nossos clientes!
        </p>
        <p class="text-lg">
          Atendemos toda a linha de peças originais para VRF:
          <span class="font-semibold">
            Midea, Carrier, Trane, Gree, LG, Hitachi, Toshiba e Daikin.</span
          >
        </p>
        <div class="w-full">
          <p class="text-lg">Clique aqui e fale diretamente no WhatsApp:</p>
          <div class="w-full flex justify-center items-center mt-5">
            <button
              @click="enviaMensagem"
              class="btn w-full md:w-1/2 btn-primary text-base-100"
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
              >
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                <path
                  d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"
                ></path>
              </svg>
              Enviar
            </button>
          </div>
        </div>
      </span>
    </div>
    <div
      class="w-1/2 flex md:px-10 mt-10 lg:mt-0 justify-center lg:justify-start items-center"
    >
      <img
        class="h-40 mix-blend-multiply md:h-auto md:w-60 lg:w-80 aspect-square"
        src="/assets/bg.png"
        alt="logo da loja do vrf"
      />
    </div>
  </section>
</template>

<script lang="ts">
export default {
  methods: {
    enviaMensagem() {
      window.open(
        "https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças."
      );
    },
  },
};
</script>
