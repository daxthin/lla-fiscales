export interface IDropdownProps {
    name: string;
}

export interface IDropdownListProps {
    children: React.ReactNode;
    closeButton: () => void;
}