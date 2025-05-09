import ExportedImage from 'next-image-export-optimizer';
import Link from 'next/link';
import slugify from 'slugify';

interface Props {
  categoria: string;
}

const TituloMarca = ({ categoria }: Props) => {
  return (
    <Link href={`/marca/${slugify(categoria, { strict: true, lower: true })}`}>
      <ExportedImage
        placeholder="empty"
        width={240}
        height={60}
        loading="lazy"
        className="w-36 md:w-56 mix-blend-normal my-2"
        src={`${process.env.NEXT_PUBLIC_WEBSITE_BASE_PATH}/assets/img/marcas/${categoria}.png`}
        alt={`Logo da ${categoria}`}
      />
    </Link>
  );
};

export default TituloMarca;
