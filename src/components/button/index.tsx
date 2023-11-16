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
    <button className="bg-brand text-white text-lg font-bold rounded p-2">
      <a href={href}>{children}</a>
    </button>
  ) : (
    <button
      className="bg-brand text-white text-lg font-bold rounded p-2"
      onClick={cb}
    >
      {children}
    </button>
  );
};

export default Button;
