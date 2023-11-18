import { ISearchProps } from './types';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';


const Search: React.FC<ISearchProps> = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const [ isShow, setIsShow ] = useState<boolean>(false)

  window.addEventListener("click", (e)=>{
    const className = (e.target as HTMLDivElement).className;
    if(!className.includes("search") || !className.includes("search-btn")) setIsShow(false);
})

  return (
    isTabletOrMobile 
      ?
        (
          <>
            <button  onClick={()=>setIsShow(!isShow)} className="search-btn p-2">
              <SearchIcon />
            </button>
            {
              isShow && 
                <div className={`search absolute z-100 left-[50px] top-[92px] shadow-xl rounded-lg bg-white ${isShow ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  <input type="text" placeholder="Escribe tu búsqueda" className="search-input border-none outline-none w-64 p-2 rounded-lg"/>
                  <button className="search-btn p-2">
                    <SearchIcon />
                  </button>
                </div>
            }
          </>
        ) 
      :
        <div className="w-[350px] border border-black flex flex-row items-center gap-2">
            <div className="p-2">
                <img src="assets/images/Search.png" alt="" />
            </div>
            <input type="text" placeholder="Buscar contenido" className="border-none outline-none"/>
        </div> 
  );
};

export default Search;
