<template>
  <footer>
    <hr class="border-secondary" />
    <div
      class="grid grid-cols-none md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-5 lg:gap-x-10 py-8 w-10/12 mx-auto justify-between items-center"
    >
      <div class="col-span-full">
        <p class="font-semibold text-center mb-5">Selos de segurança</p>
        <img
          class="mx-auto"
          src="https://cdn.awsli.com.br/production/static/img/struct/stamp_encryptssl.png"
        />
      </div>
      <div class="flex-1 flex flex-col gap-4">
        <img
          class="w-20 mx-auto"
          src="/img/favicon.png"
          alt="Logo Loja do vrf"
        />
        <p class="text-center">
          Peças e acessórios para ar condicionado, Loja do vrf resfriadores de
          líquido, equipamentos comerciais e industriais. Todos os produtos à
          pronta entrega. As melhores formas de pagamento.
        </p>
      </div>
      <div class="flex-1">
        <ul>
          <li>
            <a
              target="_blank"
              href="mailto:vendas@lojadovrf.com.br"
              class="rounded-t-md flex flex-col font-semibold tracking-wide rounded-none items-center gap-0 p-2"
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
                <p>vendas@lojadovrf.com.br</p>
              </div>
            </a>
          </li>
          <hr />
          <li>
            <a
              target="_blank"
              href="https://wa.me/5511969189244?text=Olá!%0AVim através do site da loja do VRF e preciso de peças."
              class="flex flex-col font-semibold tracking-wide rounded-none items-center gap-0 p-2"
            >
              <span class="block font-normal">Compre por telefone:</span>
              <div class="flex gap-1 items-center">
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
              class="rounded-b-md hover:bg-base-100 flex flex-col font-semibold tracking-wide rounded-none items-center gap-0 p-2"
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
                  <p>Domingo a Domingo</p>
                  <p>das 07 às 20 horas</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="flex-1">
        <p class="font-semibold text-center mb-5">Formar de envio</p>
        <div class="grid gap-y-5 grid-cols-2 place-items-center">
          <img
            src="https://cdn.awsli.com.br/1929/1929647/arquivos/correiosenvio.png"
          />
          <img
            src="https://cdn.awsli.com.br/1929/1929647/arquivos/kanguenvio.png"
          />
          <img
            src="https://cdn.awsli.com.br/1929/1929647/arquivos/jadlogenvio.png"
          />
          <img
            src="https://cdn.awsli.com.br/1929/1929647/arquivos/transportadoraenvio.png"
          />
          <img
            src="https://cdn.awsli.com.br/1929/1929647/arquivos/loggienvio.png"
          />
          <img
            src="https://cdn.awsli.com.br/1929/1929647/arquivos/agendamentoenvio.png"
          />
        </div>
      </div>
      <div class="flex flex-col flex-1">
        <div>
          <p class="font-semibold text-center mb-5">Meios de envio</p>
          <img
            class="mx-auto"
            src="https://cdn.awsli.com.br/production/static/img/formas-de-pagamento/pix-logo.png?v=2c71ac9"
          />
        </div>
        <img class="p-5" src="/img/footer/pagamentos.png" />
      </div>
    </div>
    <div class="footer bg-base-200 text-base-content p-5 px-10">
      <aside>
        <p>Copyright © 2024 - Todos os direitos reservados a Loja do VRF</p>
      </aside>
    </div>
  </footer>
</template>

<script lang="ts">
export default {};
</script>
