'use client';

import { useEffect, useRef, useState } from 'react';
import DisplayProduto from './DisplayProduto';
import { usePathname } from 'next/navigation';

const InputPesquisa = () => {
  const [produtoPesquisado, setProdutoPesquisado] = useState('');
  const [mostrarResultados, setMostraResultado] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  function fecharResultados(event: MouseEvent) {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setMostraResultado(false);
    }
  }

  const pathname = usePathname();

  useEffect(() => {
    setProdutoPesquisado('');
  }, [pathname]);

  useEffect(() => {
    setMostraResultado(produtoPesquisado.length > 0);
  }, [produtoPesquisado]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setProdutoPesquisado('');
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    document.addEventListener('click', fecharResultados);
    return () => document.removeEventListener('click', fecharResultados);
  }, []);

  return (
    <div ref={containerRef} className="relative flex join">
      <label className="input h-11 px-3 w-full rounded-l-lg rounded-r-none flex items-center gap-2">
        <input
          type="text"
          className="grow font-semibold placeholder:font-normal"
          placeholder="Digite o nome ou código da peça"
          value={produtoPesquisado}
          onChange={(e) => setProdutoPesquisado(e.target.value)}
        />
      </label>
      <div className="bg-primary grid place-items-center w-12 rounded-r-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="16"
          height="16"
          strokeWidth="2"
          className="text-white"
        >
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
          <path d="M21 21l-6 -6"></path>
        </svg>
      </div>
      {mostrarResultados && <DisplayProduto pesquisa={produtoPesquisado} />}
    </div>
  );
};

export default InputPesquisa;
