'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import CardProduto from '../../../../components/CardProduto';
import IProdutosFiltrados from '@/interface/IProdutosFiltrados';
import { IProdutos } from '@/interface/IProdutos';
import 'swiper/css';

interface Props {
  categoria: string;
  produtos: IProdutosFiltrados;
}

const ProdutosSimilares = ({ categoria, produtos }: Props) => {
  return (
    <Swiper
      slides-per-view={2}
      loop={true}
      className="swiper-container"
      space-between={40}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {produtos[categoria].map((produto: IProdutos, index) => (
        <SwiperSlide key={index}>
          <div className="mr-8">
            <CardProduto produto={produto} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProdutosSimilares;
