import Link from 'next/link';

const SetaLink = ({ nome }: { nome: string }) => {
  return (
    <div className="breadcrumbs pb-0 text-sm">
      <ul>
        <li>
          <Link prefetch={false} className="" href="/">
            Pagina inicial
          </Link>
        </li>
        <li className="">
          <p className="break-all w-fit">{nome}</p>
        </li>
      </ul>
    </div>
  );
};

export default SetaLink;
