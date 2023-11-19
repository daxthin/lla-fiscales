import { useMediaQuery } from "react-responsive";
import { IButtonLinkProps } from "./types";

export const DownloadLink = ({ URL, FILENAME, children }: IButtonLinkProps) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

  const handleDownload = async () => {
    try {
      const response = await fetch(URL);
      const blob = await response.blob();
      const downloadUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.setAttribute('download', FILENAME);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  };

  return (
    <div className={`flex ${isTabletOrMobile ? "place-content-center" : " justify-end mr-20"}`}>
      <button
        className="bg-brand text-white text-lg font-bold shadow-xl w-[300px] h-auto mb-4 rounded-lg p-2 hover:bg-violet-800 hover:outline hover:outline-2 hover:outline-violet-400 cursor-pointer"
        onClick={handleDownload}>
        Descargar {children}
      </button>
    </div>
  );
};