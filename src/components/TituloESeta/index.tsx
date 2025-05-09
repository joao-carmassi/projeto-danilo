import TituloMarca from '@/app/(homepage)/TituloCategoria';
import SetaLink from '../SetaLink';

interface Props {
  marca: string;
}

const TituloESeta = ({ marca }: Props) => {
  return (
    <div className="mb-2 px-2">
      <SetaLink nome={marca} />
      <TituloMarca categoria={marca} />
    </div>
  );
};

export default TituloESeta;
