export interface IButtonProps {
    disable?: boolean;
    isLink?: boolean;
    href?: string;
    className?: string;
    children?: string;
    cb?: ()=> void;
}