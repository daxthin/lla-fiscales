import { isMobile } from 'react-device-detect';

const Search = () => {
  console.log(isMobile);
  return (
        isMobile ?
        <button className="p-2">
          <img src="assets/images/Search.png" alt="" />
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
