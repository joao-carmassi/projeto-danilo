'use client';

import { useDispatch } from 'react-redux';
import './ContainerHeader.css';
import { useEffect } from 'react';
import { mudaBlock } from '@/store/slices/abreNav';

const InputEscondeNav = () => {
  useEffect(() => {
    const divInput = document.getElementById('idMenuBotao') as HTMLElement;
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        divInput.classList.add('hidden');
      } else {
        divInput.classList.remove('hidden');
      }
    });
  }, []);

  const dispatch = useDispatch();

  return (
    <div id="idMenuBotao" className="hidden">
      <input
        className="check-icon hidden"
        id="check-icon"
        name="check-icon"
        type="checkbox"
        onClick={() => dispatch(mudaBlock())}
      />
      <label className="icon-menu" htmlFor="check-icon">
        <div className="bar bar--1"></div>
        <div className="bar bar--2"></div>
        <div className="bar bar--3"></div>
      </label>
    </div>
  );
};

export default InputEscondeNav;
