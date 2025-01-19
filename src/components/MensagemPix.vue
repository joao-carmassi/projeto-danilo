<template>
  <div id="headerPix" class="bg-black text-white py-2 duration-200 px-5 w-full">
    <p class="w-full text-xs text-center">
      TODA LINHA DE PARTES E PEÇAS PARA VRF | PARCELAMENTO EM ATÉ 12 VEZES | 7%
      DE DESCONTO NO PIX
    </p>
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    const headerPix = document.getElementById("headerPix");
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        headerPix?.classList.add("py-2");
        headerPix?.classList.add("text-white");
        headerPix?.classList.remove("h-0");
        headerPix?.classList.remove("text-transparent");
      } else {
        headerPix?.classList.remove("py-2");
        headerPix?.classList.remove("text-white");
        headerPix?.classList.add("h-0");
        headerPix?.classList.add("text-transparent");
      }
    });
  },
};
</script>
