'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import CardProduto from '../../../components/CardProduto';
import { Navigation } from 'swiper/modules';
import { memo, useMemo } from 'react';
import { IProdutos } from '@/interface/IProdutos';

interface Props {
  produtos: IProdutos[];
}

// ajuste quantos por categoria ;-;
const ITEMS_PER_CATEGORY = 10;

// shuffle genérico
function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const SwiperCards = ({ produtos }: Props) => {
  const produtosFiltrados = useMemo(() => {
    const agrupado: Record<string, IProdutos[]> = {};

    // agrupa por categoria
    for (const p of produtos) {
      agrupado[p.categoria] = agrupado[p.categoria] || [];
      agrupado[p.categoria].push(p);
    }

    // embaralha e pega ITEMS_PER_CATEGORY de cada
    return Object.values(agrupado).flatMap((lista) =>
      shuffleArray(lista).slice(0, ITEMS_PER_CATEGORY)
    );
  }, [produtos]);

  return (
    <Swiper
      slidesPerView={2}
      loop
      navigation
      modules={[Navigation]}
      className="lg:w-10/12 md:w-11/12 swiper-container"
      spaceBetween={40}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
        1280: { slidesPerView: 5 },
      }}
    >
      {produtosFiltrados.map((produto, idx) => (
        <SwiperSlide className="my-auto" key={produto.sku + idx}>
          <CardProduto produto={produto} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(SwiperCards);
