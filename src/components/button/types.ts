export interface IButtonProps {
    disable?: boolean;
    isLink?: boolean;
    href?: string;
    className?: string;
    children?: React.ReactNode;
    cb?: ()=> void;
}

export interface IButtonLinkProps {
    URL: string;
    FILENAME: string;
    children?: string;
}