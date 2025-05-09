'use client';

import { Autoplay, Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwiperMarcas = () => {
  return (
    <Swiper
      slides-per-view="1"
      loop={true}
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Autoplay, Virtual]}
      className="w-full swiper-container"
    >
      <SwiperSlide>
        <div className="flex h-full justify-center w-full gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="45"
            height="45"
            strokeWidth="1.5"
            className="text-secondary"
          >
            <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3"></path>
          </svg>
          <p>
            <span className="text-secondary block font-semibold">
              ESPECIALISTA TÉCNICOS
            </span>
            EM VRF
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full justify-center w-full gap-2 items-center lg:border-r">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="45"
            height="45"
            strokeWidth="1.5"
            className="text-secondary"
          >
            <path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path>
            <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5"></path>
          </svg>
          <p>
            <span className="text-secondary block font-semibold">
              ENTREGAMOS
            </span>
            EM TODO BRASIL
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full justify-center w-full gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0,0,256,256"
          >
            <g
              fill="#080069"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              style={{ mixBlendMode: 'normal' }}
            >
              <g transform="scale(8.53333,8.53333)">
                <path d="M15,1.09961c-1.025,0 -2.05008,0.38992 -2.83008,1.16992l-4.98047,4.98047h0.15039c1.27,0 2.45938,0.49062 3.35938,1.39063l3.49023,3.49023c0.45,0.44 1.17109,0.44 1.62109,0l3.49023,-3.49023c0.9,-0.9 2.08938,-1.39062 3.35938,-1.39062h0.15039l-4.98047,-4.98047c-0.78,-0.78 -1.80508,-1.16992 -2.83008,-1.16992zM5.68945,8.75l-3.41992,3.41992c-1.56,1.56 -1.56,4.10016 0,5.66016l3.41992,3.41992h1.65039c0.87,0 1.69078,-0.33922 2.30078,-0.94922l3.49023,-3.49023c1.03,-1.03 2.70828,-1.03 3.73828,0l3.49023,3.49023c0.61,0.61 1.43078,0.94922 2.30078,0.94922h1.65039l3.41992,-3.41992c1.56,-1.56 1.56,-4.10016 0,-5.66016l-3.41992,-3.41992h-1.65039c-0.87,0 -1.69078,0.33922 -2.30078,0.94922l-3.49023,3.49023c-0.51,0.51 -1.18914,0.77149 -1.86914,0.77149c-0.68,0 -1.35914,-0.26149 -1.86914,-0.77149l-3.49023,-3.49023c-0.61,-0.61 -1.43078,-0.94922 -2.30078,-0.94922zM15,17.53906c-0.2925,0 -0.58555,0.11008 -0.81055,0.33008l-3.49023,3.49023c-0.9,0.9 -2.08938,1.39063 -3.35938,1.39063h-0.15039l4.98047,4.98047c1.56,1.56 4.10016,1.56 5.66016,0l4.98047,-4.98047h-0.15039c-1.27,0 -2.45938,-0.49063 -3.35937,-1.39062l-3.49023,-3.49023c-0.225,-0.22 -0.51805,-0.33008 -0.81055,-0.33008z"></path>
              </g>
            </g>
          </svg>
          <p>
            <span className="text-secondary block font-semibold">
              7% DE DESCONTO
            </span>
            NO PIX
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex h-full justify-center w-full gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="45"
            height="45"
            strokeWidth="1.5"
            className="text-secondary"
          >
            <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"></path>
            <path d="M3 10l18 0"></path>
            <path d="M7 15l.01 0"></path>
            <path d="M11 15l2 0"></path>
          </svg>
          <p>
            <span className="text-secondary block font-semibold">
              PARCELAMOS EM 12X
            </span>
            NO CARTÃO DE CRÉDITO
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperMarcas;
