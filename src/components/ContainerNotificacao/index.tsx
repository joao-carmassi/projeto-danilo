import './ContainerNotificacao.css';

const ContainerNotificacao = () => {
  return (
    <div
      id="containerNotificacao"
      className="fixed w-full duration-500 flex flex-col items-center md:items-end gap-2 -bottom-28 p-3 right-0 z-50"
    >
      <div role="alert" className="alert bg-green-500 w-fit text-base-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 hidden md:inline shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Item adicionado ao carrinho!</span>
      </div>
    </div>
  );
};

export default ContainerNotificacao;
