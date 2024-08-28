import Cards from "./Cards";
import Skeleton from "./Skeleton";

interface SelectionProps {
  elt: number;
}

const Selection = ({ elt }: SelectionProps) => {
  return (
    <div className="w-[700px] h-[400px] bg-white rounded-lg flex flex-col gap-2 p-10">
      <Cards />
      <hr className="h-1" />
      <span>{elt}</span>
    </div>
  );
};

export default Selection;
