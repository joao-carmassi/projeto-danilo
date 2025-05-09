'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/virtual';
import CardProduto from '@/components/CardProduto';
import { IProdutos } from '@/interface/IProdutos';
import { Autoplay, Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { memo, useMemo } from 'react';

interface Props {
  produtos: IProdutos[];
}

// ajuste aqui quantos produtos por marca ;-;
const ITEMS_PER_BRAND = 10;

// função simples de shuffle
function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const SwiperNavProdutos = ({ produtos }: Props) => {
  const produtosFiltrados = useMemo(() => {
    const agrupado: Record<string, IProdutos[]> = {};

    // agrupa por marca
    for (const p of produtos) {
      agrupado[p.marca] = agrupado[p.marca] || [];
      agrupado[p.marca].push(p);
    }

    // embaralha e pega ITEMS_PER_BRAND de cada
    return Object.values(agrupado).flatMap((lista) =>
      shuffleArray(lista).slice(0, ITEMS_PER_BRAND)
    );
  }, [produtos]);

  return (
    <Swiper
      slidesPerView={2}
      loop
      navigation
      autoplay={{ delay: 5000 }}
      modules={[Navigation, Autoplay, Virtual]}
      className="swiper-container swiperNav"
    >
      {produtosFiltrados.map((produto, idx) => (
        <SwiperSlide key={produto.sku + idx} virtualIndex={idx}>
          <div className="mx-2 border border-gray-400">
            <CardProduto produto={produto} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(SwiperNavProdutos);
