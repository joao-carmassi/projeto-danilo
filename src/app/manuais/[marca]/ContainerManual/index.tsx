'use client';

import { IPdf } from '@/interface/IPdf';
import ExportedImage from 'next-image-export-optimizer';
import { useEffect, useState } from 'react';

interface Props {
  manuais: IPdf[];
  marca: string;
}

const ContainerManual = ({ manuais, marca }: Props) => {
  const path = process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH;

  useEffect(() => {
    const intervalo = setInterval(() => {
      const container = document.getElementById('tituloManuais');
      if (container) {
        container.scrollIntoView({ behavior: 'smooth', block: 'center' });
        clearInterval(intervalo);
      }
    }, 1000);
    return () => clearInterval(intervalo);
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <section>
      <div className="w-full block">
        <ExportedImage
          placeholder="empty"
          width={1920}
          height={1080}
          className="w-full"
          src={`${path}/assets/manuais/capas/${marca}.png`}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center py-10">
        <h1
          id="tituloManuais"
          className="border-b-2 border-gray-500 text-3xl text-secondary font-semibold pb-1 uppercase"
        >
          Manuais Técnicos
        </h1>
      </div>
      <div className="flex flex-col-reverse justify-center gap-y-5 items-start md:flex-row mx-auto pb-16 py-5">
        <div className="flex flex-col justify-center w-full gap-x-5 items-start">
          <div className="grid w-full place-items-center">
            <h2 className="bg-secondary rounded-md text-center text-white text-xl font-semibold md:py-2 px-5">
              Unidade Condensadora
            </h2>
          </div>
          <ul className="grid grid-cols-2 mt-5 mx-auto">
            {manuais
              .filter((manual) => manual.tipo.toUpperCase() === 'CONDENSADORA')
              .map((manual, index) => (
                <div
                  className={`px-4 ${index % 2 === 0 ? 'border-r' : ''}`}
                  key={index}
                >
                  <li className="break-all font-semibold link-hover my-2">
                    <a
                      href={`${path}/assets/manuais/pdfs/${manual.documento}.pdf`}
                      download={`${manual.documento}.pdf`}
                    >
                      {manual.documento}
                    </a>
                    <p className="text-gray-500 font-normal">{manual.modelo}</p>
                  </li>
                </div>
              ))}
          </ul>
        </div>
        <hr className="border-secondary w-full md:hidden" />
        <div className="divider divider-horizontal divider-secondary"></div>
        <div className="flex flex-col justify-center w-full items-start">
          <div className="grid w-full place-items-center">
            <h2 className="bg-secondary rounded-md text-center text-white text-xl font-semibold px-5 py-2">
              Unidade Evaporadora
            </h2>
          </div>
          <ul className="grid grid-cols-2 mt-5 mx-auto">
            {manuais
              .filter(
                (manual) => manual.tipo.toLocaleUpperCase() === 'EVAPORADORA'
              )
              .map((manual, index) => (
                <div
                  className={`px-4 ${index % 2 === 0 ? 'border-r' : ''}`}
                  key={index}
                >
                  <li className="break-all font-semibold link-hover my-2">
                    <a
                      href={`${path}/assets/manuais/pdfs/${manual.documento}.pdf`}
                      download={`${manual.documento}.pdf`}
                    >
                      {manual.documento}
                    </a>
                    <p className="text-gray-500 font-normal">{manual.modelo}</p>
                  </li>
                </div>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContainerManual;
