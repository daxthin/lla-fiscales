import { IButtonProps } from "./types";

const Button: React.FC<IButtonProps> = ({
  href = "",
  isLink = false,
  disable = false,
  children,
  cb,
}) => {
  return disable ? (
    <button className="text-white bg-gray-500 opacity-50 cursor-not-allowed text-lg font-bold rounded p-2">
      {children}
    </button>
  ) : isLink ? (
    <button 
      className="bg-brand text-white text-lg font-bold shadow-lg rounded-lg p-2 hover:bg-violet-800 hover:outline hover:outline-2 hover:outline-violet-400">
      <a href={href}>{children}</a>
    </button>
  ) : (
    <button
      className="bg-brand text-white text-lg font-bold shadow-lg rounded-lg p-2 hover:bg-violet-800 hover:outline hover:outline-2 hover:outline-violet-400"
      onClick={cb}
    >
      {children}
    </button>
  );
};

export default Button;
