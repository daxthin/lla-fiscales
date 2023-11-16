import { useState } from 'react';
import { IExpandableCardProps } from './types';
import './styles.css';

const ExpandableCard: React.FC<IExpandableCardProps> = ({children}) => {

    const [expand, setExpand] = useState(false);
    
    return (
        <div className='flex flex-col w-full'>
            <div className={`expandable-card bg-[#F3F3F3] ${expand ? 'rounded-t-2xl bg-[#DCD8E0]' : 'rounded-2xl shadow-md'} flex flex-row justify-around w-full p-6 mt-8`} 
                onClick={()=>setExpand(!expand)}>
                <div className="flex flex-row justify-center items-center">
                    <img src="../../../public/space-before-graph.png" alt="" />
                </div>
                <div className="flex flex-col">
                    <h2 className="font-bold text-2xl">Recomendaciones antes de empezar</h2>
                    <span>Paso a paso</span>
                </div>
                <div className="flex flex-row items-start">
                    <img src="../../../public/expand-arrow.png" alt="" className={`${expand ? "rotate-180" : ""}`}/>
                </div>
            </div>
            <div className={`flex flex-col ${expand ? '' : 'hidden'} mt-10`}>
                {children}
            </div>
        </div>
    )
}

export default ExpandableCard;