import create from "zustand";

//Store
interface IReduceToogle {
  isToggle: boolean;
  toggleChange: (collapse: boolean) => void;
}

export const useReduceToogle = create<IReduceToogle>((set) => ({
  isToggle: false,
    toggleChange: (collapse) => {
    set({ isToggle: !collapse });
  },
}));