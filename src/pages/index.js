import Card from "@/components/Card";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const cardId = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
export default function Home() {
  // const [selectedNumbers, setSelectedNumbers] = useState([0, 0]);
  const [selectedNumbers, setSelectedNumbers] = useState([
    {
      id: 0,
      value: 0,
    },
    {
      id: 0,
      value: 0,
    },
  ]);

  const [success, setSuccess] = useState(false);

  const handleSelectNumber = (selectedNumber) => {
    if (selectedNumbers[0].value !== 0) {
      const newSelected2 = [selectedNumbers[0], selectedNumber];
      setSelectedNumbers(newSelected2);
      selectedNumbers[0].value !== selectedNumbers[1].value
        ? setSuccess(false)
        : setSuccess(true);
    } else {
      const newSelected1 = [selectedNumber, 0];
      setSelectedNumbers(newSelected1);
    }
  };

  useEffect(() => {
    if (!success) {
      setSelectedNumbers[
        ({
          id: 0,
          value: 0,
        },
        {
          id: 0,
          value: 0,
        })
      ];
    }
  }, [success]);
  return (
    <main
      className={`min-h-screen grid grid-cols-4 items-center justify-between p-24 ${inter.className}`}
    >
      {cardId.map((number, index) => {
        return (
          <Card
            key={index}
            id={index + 1}
            number={number}
            selectedNumbers={selectedNumbers}
            // setSelectedNumbers={setSelectedNumbers}
            success={success}
            handleSelectNumber={handleSelectNumber}
          />
        );
      })}
    </main>
  );
}
