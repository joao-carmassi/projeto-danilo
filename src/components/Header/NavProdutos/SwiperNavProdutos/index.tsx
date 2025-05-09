'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/virtual';
import CardProduto from '@/components/CardProduto';
import { IProdutos } from '@/interface/IProdutos';
import { Autoplay, Navigation, Virtual } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { memo } from 'react';

interface Props {
  produtos: IProdutos[];
}

const SwiperNavProdutos = ({ produtos }: Props) => {
  return (
    <Swiper
      slidesPerView={2} // usa camelCase, não “slides-per-view”
      loop={true}
      navigation
      autoplay={{ delay: 5000 }}
      modules={[Navigation, Autoplay, Virtual]}
      className="swiper-container swiperNav"
    >
      {produtos.map((produto, idx) => (
        <SwiperSlide key={idx} virtualIndex={idx}>
          <div className="mx-2 border-gray-400">
            <CardProduto produto={produto} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(SwiperNavProdutos);
