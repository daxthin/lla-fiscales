import { useState } from 'react';
import { IExpandableCardItemProps, IExpandableCardProps } from './types';
import './styles.css';

export const ExpandableCard: React.FC<IExpandableCardProps> = ({children, title, subtitle, imgSrc}) => {

    const [expand, setExpand] = useState(false);
    
    return (
        <div className='flex flex-col w-full rounded-2xl shadow-md mt-8'>
            <div className={`expandable-card bg-[#F3F3F3] ${expand ? 'rounded-t-2xl bg-[#DCD8E0]' : 'rounded-2xl shadow-md'} flex flex-row justify-around w-full p-6`} 
                onClick={()=>setExpand(!expand)}>
                <div className="flex flex-row justify-center items-center">
                    <img draggable={false} src={imgSrc} alt="" />
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold text-2xl">{title}</h2>
                    <span>{subtitle}</span>
                </div>
                <div className="flex flex-row items-start">
                    <img draggable={false} src="assets/images/expand-arrow.png" alt="" className={`${expand ? "rotate-180" : ""}`}/>
                </div>
            </div>
            <div className={`flex flex-col ${expand ? '' : 'hidden'}`}>
                {children}
            </div>
        </div>
    )
}

export const ExpandableCardItem: React.FC<IExpandableCardItemProps> = ({title, description, imgSrc}) => {
    return (
        <div className="border-t grid grid-cols-2 grid-rows-1 border-black pl-10 pr-10 pb-8 pt-8 justify-start items-center">
        <div className='flex flex-row justify-center items-center w-[250px] place-self-center'>
            <img draggable={false} src={imgSrc} className='w-full h-auto' alt="" />
        </div>
        <div>
            <h3 className="font-normal text-2xl">{title}</h3>
            <p>
                {description}
            </p>
        </div>
    </div>
    )
}

