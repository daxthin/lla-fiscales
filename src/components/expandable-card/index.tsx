import { useState } from 'react';
import { IExpandableCardProps } from './types';
import './styles.css';

const ExpandableCard: React.FC<IExpandableCardProps> = ({children, title, subtitle, imgSrc}) => {

    const [expand, setExpand] = useState(false);
    
    return (
        <div className='flex flex-col w-full'>
            <div className={`expandable-card bg-[#F3F3F3] ${expand ? 'rounded-t-2xl bg-[#DCD8E0]' : 'rounded-2xl shadow-md'} flex flex-row justify-around w-full p-6 mt-8`} 
                onClick={()=>setExpand(!expand)}>
                <div className="flex flex-row justify-center items-center">
                    <img src={imgSrc} alt="" />
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold text-2xl">{title}</h2>
                    <span>{subtitle}</span>
                </div>
                <div className="flex flex-row items-start">
                    <img src="assets/images/expand-arrow.png" alt="" className={`${expand ? "rotate-180" : ""}`}/>
                </div>
            </div>
            <div className={`flex flex-col ${expand ? '' : 'hidden'} mt-10`}>
                {children}
            </div>
        </div>
    )
}

export default ExpandableCard;