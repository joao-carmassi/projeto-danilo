<template>
  <div
    id="headerPix"
    class="bg-black z-10 text-white py-2 duration-200 px-5 w-full"
  >
    <p
      id="textoPix"
      class="w-full items-center text-center justify-center text-sm"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        width="18"
        height="18"
        stroke-width="1.5"
        class="inline"
      >
        <path
          d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
        ></path>
        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
      </svg>
      TODA LINHA DE PARTES E PEÇAS PARA VRF |
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        width="18"
        height="18"
        stroke-width="1.5"
        class="inline"
      >
        <path
          d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"
        ></path>
        <path d="M3 10l18 0"></path>
        <path d="M7 15l.01 0"></path>
        <path d="M11 15l2 0"></path>
      </svg>
      PARCELAMENTO EM ATÉ 12 VEZES |
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="16"
        height="16"
        viewBox="0,0,256,256"
        class="inline"
      >
        <g
          fill="white"
          fill-rule="nonzero"
          stroke="none"
          stroke-width="1"
          stroke-linecap="butt"
          stroke-linejoin="miter"
          stroke-miterlimit="10"
          stroke-dasharray=""
          stroke-dashoffset="0"
          font-family="none"
          font-weight="none"
          font-size="none"
          text-anchor="none"
          style="mix-blend-mode: normal"
        >
          <g transform="scale(8.53333,8.53333)">
            <path
              d="M15,1.09961c-1.025,0 -2.05008,0.38992 -2.83008,1.16992l-4.98047,4.98047h0.15039c1.27,0 2.45938,0.49062 3.35938,1.39063l3.49023,3.49023c0.45,0.44 1.17109,0.44 1.62109,0l3.49023,-3.49023c0.9,-0.9 2.08938,-1.39062 3.35938,-1.39062h0.15039l-4.98047,-4.98047c-0.78,-0.78 -1.80508,-1.16992 -2.83008,-1.16992zM5.68945,8.75l-3.41992,3.41992c-1.56,1.56 -1.56,4.10016 0,5.66016l3.41992,3.41992h1.65039c0.87,0 1.69078,-0.33922 2.30078,-0.94922l3.49023,-3.49023c1.03,-1.03 2.70828,-1.03 3.73828,0l3.49023,3.49023c0.61,0.61 1.43078,0.94922 2.30078,0.94922h1.65039l3.41992,-3.41992c1.56,-1.56 1.56,-4.10016 0,-5.66016l-3.41992,-3.41992h-1.65039c-0.87,0 -1.69078,0.33922 -2.30078,0.94922l-3.49023,3.49023c-0.51,0.51 -1.18914,0.77149 -1.86914,0.77149c-0.68,0 -1.35914,-0.26149 -1.86914,-0.77149l-3.49023,-3.49023c-0.61,-0.61 -1.43078,-0.94922 -2.30078,-0.94922zM15,17.53906c-0.2925,0 -0.58555,0.11008 -0.81055,0.33008l-3.49023,3.49023c-0.9,0.9 -2.08938,1.39063 -3.35938,1.39063h-0.15039l4.98047,4.98047c1.56,1.56 4.10016,1.56 5.66016,0l4.98047,-4.98047h-0.15039c-1.27,0 -2.45938,-0.49063 -3.35937,-1.39062l-3.49023,-3.49023c-0.225,-0.22 -0.51805,-0.33008 -0.81055,-0.33008z"
            ></path>
          </g>
        </g>
      </svg>
      7% DE DESCONTO NO PIX
    </p>
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    const headerPix = document.getElementById("headerPix");
    const textoPix = document.getElementById("textoPix");
    window.addEventListener("scroll", () => {
      if (window.scrollY === 0) {
        headerPix?.classList.add("py-2");
        headerPix?.classList.remove("h-0");
        textoPix?.classList.remove("hidden");
      } else {
        headerPix?.classList.remove("py-2");
        headerPix?.classList.add("h-0");
        textoPix?.classList.add("hidden");
      }
    });
  },
};
</script>
