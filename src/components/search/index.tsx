import { ISearchProps } from './types';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Switch } from './Switch';

const Search: React.FC<ISearchProps> = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  const [ isShow, setIsShow ] = useState<boolean>(false)
  

  return (
    isTabletOrMobile 
      ?
        (
          <>
            <button  onClick={()=>setIsShow(!isShow)} className="search-btn p-2">
              <SearchIcon className='search-btn'/>
            </button>
            { isShow && <Switch />}
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
