import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

interface CardsProp {
  cardKey?: number;
  selectedCard?: number;
  onClick?: () => void;
}

const Cards = ({ onClick, cardKey, selectedCard }: CardsProp) => {
  const [cardClicked, setCardClicked] = useState<boolean>(false);

  useEffect(() => {
    if (cardKey == selectedCard) {
      setCardClicked(true);
    } else {
      setCardClicked(false);
    }

    // console.log(
    //   `Key is ${cardKey} selectedCard is ${selectedCard}, cardClicked is ${cardClicked}`
    // );
  }, [selectedCard, cardKey]);

  return (
    <div
      className={`flex flex-col gap-2 p-1 rounded-lg`}
      onClick={() => {
        onClick?.();
      }}
    >
      <Skeleton className="w-[350px] h-[180px]" />
      <Skeleton className="w-[300px] h-[20px]" />
      <Skeleton className="w-[100px] h-[20px]" />
    </div>
  );
};

export default Cards;
