import { ISearchProps } from './types';
import SearchIcon from '@mui/icons-material/Search';
import { useMediaQuery } from 'react-responsive';

const Search: React.FC<ISearchProps> = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  return (
    isTabletOrMobile ?
        <button className="p-2">
          <SearchIcon />
        </button> :
        <div className="w-[350px] border border-black flex flex-row items-center gap-2">
            <div className="p-2">
                <img src="assets/images/Search.png" alt="" />
            </div>
            <input type="text" placeholder="Buscar contenido" className="border-none outline-none"/>
        </div> 
  );
};

export default Search;
