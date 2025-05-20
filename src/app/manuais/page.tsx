import getPdf from '@/utils/getPdf';
import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import slugify from 'slugify';

export const metadata = {
  title: 'Manuais - Loja do VRF',
  description: 'Manuais de instalação',
};

const PaginaManuais = () => {
  const path = process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH;
  const { marcas } = getPdf();

  return (
    <section className="flex min-h-[83svh] flex-col items-center justify-center">
      <div className="w-full flex justify-center items-center py-10">
        <h2 className="mx-auto text-2xl md:text-3xl text-secondary font-semibold">
          Escolha o fabricante:
        </h2>
      </div>
      <div className="md:w-11/12 flex items-center justify-center flex-wrap gap-x-7 gap-y-10 md:gap-y-20 lg:w-10/12 mb-10">
        {marcas.map((marca, index) => (
          <div
            key={index}
            className="shadow-lg md:hover:scale-105 duration-300 [--tw-shadow-color:rgba(17, 17, 17, 0.9)] p-5 rounded-lg border border-gray-200"
          >
            <Link
              prefetch={false}
              className="flex flex-col gap-4"
              href={`/manuais/${slugify(marca, {
                lower: true,
                strict: true,
              })}`}
            >
              <div className="mx-auto h-20 w-52 grid place-items-center">
                <ExportedImage
                  placeholder="empty"
                  priority
                  className="w-32"
                  width={150}
                  height={60}
                  src={`${path}/assets/img/marcas/${marca}.png`}
                  alt="`Logo ${marca}`"
                />
              </div>
              <div className="h-40 w-40 flex mx-auto justify-center items-center">
                <ExportedImage
                  placeholder="empty"
                  priority
                  className="aspect-square mx-auto object-cover rounded-md"
                  width={160}
                  height={160}
                  src={`${path}/assets/manuais/icons/${marca}.png`}
                  alt="`Capa marca`"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PaginaManuais;
