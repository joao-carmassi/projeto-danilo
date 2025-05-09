'use client';

import { useState } from 'react';

const BotaoZap = () => {
  const [aberto, setAberto] = useState(true);

  return (
    <div
      role="alert"
      className={`rounded-full border-none indicator p-2.5 alert bg-green-600 text-white fixed w-fit bottom-3 right-3 z-40 ${
        aberto ? 'md:rounded-xl' : ''
      }`}
    >
      <a
        className="flex gap-2"
        target="_blank"
        href="https://wa.me/5511969189244?text=Oi, gostaria de ajuda de um especialista para selecionar a peça para meu VRF."
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          strokeWidth="2"
          className=""
        >
          <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
          <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1"></path>
        </svg>
        {aberto && (
          <div className="items-center hidden md:flex gap-2">
            <span className="font-semibold italic">
              Fale com um especialista
            </span>
          </div>
        )}
      </a>
      {aberto && (
        <button
          className="indicator-item indicator-start hidden md:block"
          onClick={() => setAberto(false)}
        >
          <span className="badge border border-white text-xs px-1.5 pb-[0.2rem] text-white badge-secondary">
            x
          </span>
        </button>
      )}
    </div>
  );
};

export default BotaoZap;
