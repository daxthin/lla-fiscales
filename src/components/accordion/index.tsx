import { IAccordionProps } from "./types";

const Accordion: React.FC<IAccordionProps> = ({children}) => {
  return (
    <div className="accordion w-1/2">
      {children}
    </div>
  );
};

export default Accordion;
