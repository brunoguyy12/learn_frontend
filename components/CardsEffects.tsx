"use client";
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { XCircleIcon } from "lucide-react";
import Selection from "./Selection";
import ClickOutside from "./ClickOutside";

const CardsEffects = () => {
  const [selectedCard, setselectedCard] = useState<number | undefined>();

  useEffect(() => {
    console.log(selectedCard);
  }, [selectedCard]);

  return (
    <>
      <div className="my-6 mx-auto gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardsNum.map((elt, i) => {
          return (
            <>
              <Cards
                key={i}
                cardKey={elt}
                onClick={() => {
                  setselectedCard(elt);
                }}
                selectedCard={selectedCard}
              />
              {selectedCard === elt && (
                <div className="fixed z-40 top-0 left-0 w-full h-full bg-black/70">
                  <span className="p-1 rounded-full bg-white absolute right-2 top-2">
                    <XCircleIcon className="size-10  drop-shadow-md shadow-slate-700" />
                  </span>
                </div>
              )}
              <div
                className={`fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center transition duration-300
                ${
                  selectedCard === elt
                    ? "scale-100 opacity-1"
                    : "scale-0 opacity-0"
                }`}
              >
                <ClickOutside
                  onClick={() => {
                    setselectedCard(undefined);
                  }}
                >
                  <Selection elt={elt} />
                </ClickOutside>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CardsEffects;

const cardsNum = [0, 1, 2];
