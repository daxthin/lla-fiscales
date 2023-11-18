import { useState } from 'react';
import { IExpandableCardItemProps, IExpandableCardProps } from './types';
import './styles.css';
import { useMediaQuery } from 'react-responsive';

export const ExpandableCard: React.FC<IExpandableCardProps> = ({ children, title, subtitle, imgSrc }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const [expand, setExpand] = useState(false);
  return (
    isTabletOrMobile
      ?
        <section className='flex flex-col w-full rounded-2xl shadow-md mt-8'>
          <div className={`expandable-card bg-[#F3F3F3] ${expand ? 'rounded-t-2xl bg-[#DCD8E0]' : 'rounded-2xl shadow-md'} flex flex-row justify-around w-full p-6`}
            onClick={() => setExpand(!expand)}>
            <picture className="flex flex-row justify-center items-center mr-2">
              <img
                draggable={false}
                src={imgSrc}
                alt="foto que describe que se debe expandir la tarjeta"
              />
            </picture>
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">{title}</h2>
              <span>{subtitle}</span>
            </div>
            <picture className="flex flex-row items-start">
              <img 
                draggable={false} 
                src="assets/images/expand-arrow.png" 
                alt="toggle para expandir la tarjeta" 
                className={`${expand ? "rotate-180" : ""}`} 
              />
            </picture>
          </div>
          <article className={`flex flex-col ${expand ? '' : 'hidden'}`}>
            {children}
          </article>
        </section>
      :
        <section className='flex flex-col w-full rounded-2xl shadow-md mt-8'>
          <div className={`expandable-card bg-[#F3F3F3] ${expand ? 'rounded-t-2xl bg-[#DCD8E0]' : 'rounded-2xl shadow-md'} flex flex-row justify-around w-full p-6`}
            onClick={() => setExpand(!expand)}>
            <picture className="flex flex-row justify-center items-center">
              <img
                draggable={false}
                src={imgSrc}
                alt="foto explicativa de la tarjeta"
              />
            </picture>
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">{title}</h2>
              <span>{subtitle}</span>
            </div>
            <picture className="flex flex-row items-start">
              <img 
                draggable={false} 
                src="assets/images/expand-arrow.png" 
                alt="" 
                className={`${expand ? "rotate-180" : ""}`} 
              />
            </picture>
          </div>
          <article className={`flex flex-col ${expand ? '' : 'hidden'}`}>
            {children}
          </article>
        </section>
  )
}

export const ExpandableCardItem: React.FC<IExpandableCardItemProps> = ({ title, description, imgSrc }) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  return (
    <section className={`border-t border-black pl-10 pr-10 pb-8 pt-8 justify-start items-center grid ${isTabletOrMobile ? 'grid-rows-2 grid-cols-1' : 'grid-cols-2 grid-rows-1'}`} >
      <picture className='flex flex-row justify-center items-center w-[250px] place-self-center'>
        <img draggable={false} src={imgSrc} className='w-full h-auto' alt="imagen explicativa del contenido" />
      </picture>
      <div>
        <h3 className="font-normal text-2xl mb-4">{title}</h3>
        <p className='font-normal text-lg'>
          {description}
        </p>
      </div>
    </section>
  )
}

