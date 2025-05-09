'use client';

import './inputQuantidade.css';

interface Props {
  valor: number;
  setValor: (valor: number) => void;
  classes: string;
}

const InputQuantidade = ({ valor, setValor, classes }: Props) => {
  return (
    <div
      className={`flex border border-secondary rounded-md items-center ${classes}`}
    >
      <button
        onClick={() => {
          if (valor > 1) {
            setValor(valor - 1);
          }
        }}
        className="w-7 h-full flex items-center justify-center"
      >
        -
      </button>
      <input
        id="inputQuantidade"
        className="w-12 h-full text-center outline-none"
        type="number"
        min="1"
        value={valor}
        onChange={(e) => {
          setValor(parseInt(e.target.value));
        }}
        onBlur={(e) => {
          const val = parseInt(e.target.value);
          if (isNaN(val) || val < 1) {
            setValor(1);
          } else if (val > 99) {
            setValor(99);
          }
        }}
      />
      <button
        onClick={() => {
          if (valor < 99) {
            setValor(valor + 1);
          }
        }}
        className="w-7 h-full flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
};

export default InputQuantidade;
