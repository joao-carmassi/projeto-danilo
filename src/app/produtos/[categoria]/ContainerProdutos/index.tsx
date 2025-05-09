'use client';

import CardProduto from '@/components/CardProduto';
import SetaLink from '@/components/SetaLink';
import { IProdutos } from '@/interface/IProdutos';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Props {
  categoria: string;
  marcas: string[];
  categorias: string[];
  produtos: IProdutos[];
}

const ContainerProdutos = ({
  categoria,
  marcas,
  categorias,
  produtos,
}: Props) => {
  const searchParams = useSearchParams();
  const subproduto = searchParams.get('subproduto');

  useEffect(() => {
    setCategoriaSelecionada(subproduto || '');
  }, [subproduto]);

  const [marcaSelecionada, setMarcaSelecionada] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(
    subproduto || ''
  );

  const produtosFiltrados = produtos
    .filter((produto) => {
      if (marcaSelecionada === '') return true;
      return produto.marca === marcaSelecionada;
    })
    .filter((produto) => {
      if (categoriaSelecionada === '') return true;
      return produto.subcategoria === categoriaSelecionada;
    });
  return (
    <section className="bg-base-100 flex gap-7">
      <aside className="hidden md:flex flex-col gap-5 w-fit top-0 left-0 p-7 pr-0 h-full">
        <div>
          <h2 className="text-secondary text-nowrap text-lg font-semibold">
            Marcas:
          </h2>
          <ul className="mt-3 flex items-start justify-start flex-col gap-3">
            <li>
              <label
                className="flex text-nowrap items-center gap-1.5 hover:cursor-pointer"
                htmlFor="todosMarcas"
              >
                <input
                  checked={marcaSelecionada === ''}
                  onChange={() => setMarcaSelecionada('')}
                  type="checkbox"
                  id="todosMarcas"
                  className="checkbox link-hover rounded-sm checkbox-xs hover:cursor-pointer checkboxFiltroMarcas"
                />
                TODOS
              </label>
            </li>
            {marcas.map((marca) => (
              <li key={marca}>
                <label
                  className="flex text-nowrap items-center gap-1.5 hover:cursor-pointer"
                  htmlFor={`${marca}`}
                >
                  <input
                    checked={marcaSelecionada === marca}
                    onChange={() => setMarcaSelecionada(marca)}
                    type="checkbox"
                    id={`${marca}`}
                    className="checkbox link-hover rounded-sm checkbox-xs hover:cursor-pointer checkboxFiltroMarcas"
                  />
                  {marca}
                </label>
              </li>
            ))}
          </ul>
        </div>
        <hr className="border-secondary" />
        {categorias.length > 0 ? (
          <div>
            <h2 className="text-secondary text-nowrap text-lg font-semibold">
              Categorias:
            </h2>
            <ul className="my-3 flex items-start justify-start flex-col gap-3">
              <li>
                <label
                  className="flex text-nowrap items-center gap-1.5 hover:cursor-pointer"
                  htmlFor="todosCategoria"
                >
                  <input
                    checked={categoriaSelecionada === ''}
                    onChange={() => setCategoriaSelecionada('')}
                    type="checkbox"
                    id="todosCategoria"
                    className="checkbox link-hover rounded-sm checkbox-xs hover:cursor-pointer checkboxFiltroCategoria todosCategoria"
                  />
                  TODOS
                </label>
              </li>
              {categorias.map((categoria) => (
                <li key={categoria}>
                  <label
                    className="flex text-nowrap items-center gap-1.5 hover:cursor-pointer"
                    htmlFor={`${categoria}`}
                  >
                    <input
                      checked={categoriaSelecionada === categoria}
                      onChange={() => setCategoriaSelecionada(categoria)}
                      type="checkbox"
                      id={`${categoria}`}
                      className="checkbox link-hover rounded-sm checkbox-xs hover:cursor-pointer checkboxFiltroCategoria"
                    />
                    {categoria}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </aside>
      <div className="ml-0 md:block w-full px-4 md:px-8 md:py-4 pb-6 border-gray-400">
        <SetaLink nome={categoria} />
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
            <div className="drawer-side overflow-auto z-50">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <div className="flex md:hidden bg-base-100 flex-col gap-5 w-fit top-0 left-0 p-7 h-full overflow-auto">
                <div>
                  <h2 className="text-secondary text-nowrap text-lg font-semibold">
                    Marcas:
                  </h2>
                  <ul className="mt-3 flex items-start justify-start flex-col gap-3">
                    <li>
                      <label
                        className="flex text-nowrap items-center gap-1.5 hover:cursor-pointer"
                        htmlFor="todosMarcasCelular"
                      >
                        <input
                          checked={marcaSelecionada === ''}
                          onChange={() => setMarcaSelecionada('')}
                          type="checkbox"
                          id="todosMarcasCelular"
                          className="checkbox link-hover rounded-sm checkbox-xs hover:cursor-pointer checkboxFiltroMarcas"
                        />
                        TODOS
                      </label>
                    </li>
                    {marcas.map((marca) => (
                      <li key={marca}>
                        <label
                          className="flex text-nowrap items-center gap-1.5 hover:cursor-pointer"
                          htmlFor={`${marca}Celular`}
                        >
                          <input
                            checked={marcaSelecionada === marca}
                            onChange={() => setMarcaSelecionada(marca)}
                            type="checkbox"
                            id={`${marca}Celular`}
                            className="checkbox link-hover rounded-sm checkbox-xs hover:cursor-pointer checkboxFiltroMarcas"
                          />
                          {marca}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
                <hr className="border-secondary" />
                {categorias.length > 0 ? (
                  <div>
                    <h2 className="text-secondary text-nowrap text-lg font-semibold">
                      Categorias:
                    </h2>
                    <ul className="my-3 flex items-start justify-start flex-col gap-3">
                      <li>
                        <label
                          className="flex text-nowrap items-center gap-1.5 hover:cursor-pointer"
                          htmlFor="todosCategoriaCelular"
                        >
                          <input
                            checked={categoriaSelecionada === ''}
                            onChange={() => setCategoriaSelecionada('')}
                            type="checkbox"
                            id="todosCategoriaCelular"
                            className="checkboxFiltroCategoria checkbox link-hover rounded-sm todosCategoria checkbox-xs"
                          />
                          TODOS
                        </label>
                      </li>
                      {categorias.map((categoria) => (
                        <li key={categoria}>
                          <label
                            className="flex text-nowrap items-center gap-1.5 hover:cursor-pointer"
                            htmlFor={`${categoria}Celular`}
                          >
                            <input
                              checked={categoriaSelecionada === categoria}
                              onChange={() =>
                                setCategoriaSelecionada(categoria)
                              }
                              type="checkbox"
                              id={`${categoria}Celular`}
                              className="checkboxFiltroCategoria checkbox link-hover rounded-sm checkbox-xs"
                            />
                            {categoria}
                          </label>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
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
              Sem resultado de busca para o filtro {marcaSelecionada}{' '}
              {categoriaSelecionada}.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContainerProdutos;
