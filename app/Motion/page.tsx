"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cards from "@/components/Cards"; // Assume this is your card component

const cardsNum = [0, 1, 2];

const Motion = () => {
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  return (
    <div className="my-6 mx-auto gap-2 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 relative">
      {cardsNum.map((elt, i) => (
        <motion.div
          key={i}
          layoutId={`card-${i}`}
          onClick={() => setSelectedCard(elt)}
        >
          <Cards cardKey={elt} />
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedCard !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCard(null)}
            />
            <motion.div
              className="fixed z-50 flex justify-center items-center w-full h-full top-0 left-0"
              layoutId={`card-${selectedCard}`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <div className="relative bg-white p-8 rounded-lg w-3/4 h-3/4">
                <button
                  className="absolute top-4 right-4 text-black"
                  onClick={() => setSelectedCard(null)}
                >
                  &times;
                </button>
                <h1 className="text-2xl">Card {selectedCard + 1}</h1>
                <p>
                  This is the content of the modal for card {selectedCard + 1}.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Motion;
