'use client';

import CardProduto from '@/components/CardProduto';
import TituloESeta from '@/components/TituloESeta';
import { IProdutos } from '@/interface/IProdutos';
import { useState } from 'react';

interface Props {
  marca: string;
  categorias: string[];
  produtos: IProdutos[];
}

const ContainerMarca = ({ marca, categorias, produtos }: Props) => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');

  const produtosFiltrados = produtos.filter((produto) => {
    if (categoriaSelecionada === '') return true;
    return produto.categoria === categoriaSelecionada;
  });

  return (
    <section className="bg-base-100 flex gap-7">
      <aside className="hidden md:block w-fit top-0 left-0 p-7 pr-0 h-full">
        <h2 className="text-secondary text-nowrap text-lg font-semibold">
          Categorias:
        </h2>
        <ul className="my-3 flex items-start justify-start flex-col gap-3">
          <li>
            <label
              className="flex text-nowrap items-center gap-1.5 hover:cursor-pointer"
              htmlFor="todos"
            >
              <input
                checked={categoriaSelecionada === ''}
                onChange={() => setCategoriaSelecionada('')}
                type="checkbox"
                id="todos"
                className="checkbox checkbox-xs rounded-sm link-hover checkboxFiltro"
              />
              TODOS
            </label>
          </li>
          {categorias.map((categoria) => (
            <li key={categoria}>
              <label
                className="flex text-nowrap items-center gap-1.5 hover:cursor-pointer"
                htmlFor={categoria}
              >
                <input
                  checked={categoriaSelecionada === categoria}
                  onChange={() => setCategoriaSelecionada(categoria)}
                  type="checkbox"
                  id={categoria}
                  className="checkbox checkbox-xs rounded-sm link-hover checkboxFiltro"
                />
                {categoria}
              </label>
            </li>
          ))}
        </ul>
      </aside>
      <div className="ml-0 md:block w-full px-4 md:px-8 md:py-4 pb-6 border-gray-400">
        <TituloESeta marca={marca} />
        <div className="w-full">
          <div className="drawer md:hidden flex items-end justify-end">
            <label
              htmlFor="my-drawer"
              className="btn px-2 gap-1 mb-3 btn-sm btn-outline btn-secondary drawer-button"
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
                strokeWidth="1.5"
              >
                <path d="M4 8h4v4h-4z"></path>
                <path d="M6 4l0 4"></path>
                <path d="M6 12l0 8"></path>
                <path d="M10 14h4v4h-4z"></path>
                <path d="M12 4l0 10"></path>
                <path d="M12 18l0 2"></path>
                <path d="M16 5h4v4h-4z"></path>
                <path d="M18 4l0 1"></path>
                <path d="M18 9l0 11"></path>
              </svg>
              <p>Filtros</p>
            </label>
            <input
              id="my-drawer"
              type="checkbox"
              className="drawer-toggle drawers"
            />
            <div className="drawer-content z-50"></div>
            <div className="drawer-side z-50">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="bg-base-200 overflow-auto text-base-content min-h-full w-fit p-7">
                <h2 className="text-secondary text-nowrap text-lg font-semibold">
                  Filtrar por produtos:
                </h2>
                <ul className="my-5 flex flex-col gap-5">
                  <li>
                    <label
                      className="flex text-nowrap items-center gap-1.5 hover:cursor-pointer"
                      htmlFor="todosCelular"
                    >
                      <input
                        checked={categoriaSelecionada === ''}
                        onChange={() => setCategoriaSelecionada('')}
                        type="checkbox"
                        id="todosCelular"
                        className="checkbox checkbox-xs rounded-sm link-hover checkboxFiltro"
                      />
                      TODOS
                    </label>
                  </li>
                  {categorias.map((categoria) => (
                    <li key={categoria}>
                      <label
                        className="flex text-nowrap items-center gap-1.5 hover:cursor-pointer"
                        htmlFor={`${marca}Celular`}
                      >
                        <input
                          checked={categoriaSelecionada === categoria}
                          onChange={() => setCategoriaSelecionada(categoria)}
                          type="checkbox"
                          id={`${marca}Celular`}
                          className="checkbox checkbox-xs rounded-sm link-hover checkboxFiltro"
                        />
                        {categoria}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-3 md:gap-x-7 gap-y-10">
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((produto, index) => (
              <CardProduto key={`${produto.id}-${index}`} produto={produto} />
            ))
          ) : (
            <p className="italic">
              Sem resultado de busca para o filtro {marca}{' '}
              {categoriaSelecionada}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContainerMarca;
