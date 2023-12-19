import React, { useEffect } from "react";
const Card = ({
  number,
  selectedNumbers,
  setSelectedNumbers,
  handleSelectNumber,
  id,
}) => {
  //   useEffect(() => {}, []);
  console.log("SelectedNum : ", selectedNumbers[0]);
  console.log("number : ", number);
  console.log("id : ", id);

  return (
    <>
      {(selectedNumbers[0].value !== number &&
        selectedNumbers[1].value !== number) ||
      (selectedNumbers[0].id !== id && selectedNumbers[1].id !== id) ? (
        <div className="p-16 w-8 h-12 bg-slate-50 text-blue-950 flex items-center justify-center">
          <button onClick={() => handleSelectNumber({ id: id, value: number })}>
            show
          </button>
        </div>
      ) : (
        <div className="p-16 w-8 h-12 bg-slate-50 text-blue-950 flex items-center justify-center">
          {number}
        </div>
      )}
    </>
  );
};

export default Card;
