'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import CardProduto from '../../../components/CardProduto';
import { Navigation } from 'swiper/modules';
import { memo } from 'react';
import { IProdutos } from '@/interface/IProdutos';

interface Props {
  produtos: IProdutos[];
}

const SwiperCards = ({ produtos }: Props) => {
  return (
    <Swiper
      slidesPerView={2}
      loop={true}
      navigation={true}
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
      {produtos.map((produto, index) => (
        <SwiperSlide className="my-auto" key={index}>
          <CardProduto produto={produto} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default memo(SwiperCards);
