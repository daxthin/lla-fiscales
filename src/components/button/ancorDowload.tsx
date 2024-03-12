import { IButtonLinkProps } from "./types";

export const AncorDownloadLink = ({ URL, FILENAME, children }: IButtonLinkProps) => {

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
      <a
        className='text-blue-700 cursor-pointer'
        onClick={handleDownload}>
        Descargar {children}
      </a>
  );
};