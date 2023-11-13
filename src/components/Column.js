import { shuffle } from "lodash";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import boardsSlice from "../redux/boardsSlice";
import Task from "./Task";

function Column({ colIndex }) {
  const colors = [
    "bg-[#f582b9]",
    "bg-[#f58282]",
    "bg-[#9582f5]",
    "bg-[#f59382]",
    "bg-[#eff582]",
    "bg-[#f582e0]",
    "bg-[#f582b9]",
  ];

  

  const dispatch = useDispatch();
  const [color, setColor] = useState(null)
  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const col = board.columns.find((col, i) => i === colIndex);
  useEffect(() => {
    setColor(shuffle(colors).pop())
  }, [dispatch]);



  const handleOnDrop = (e) => {
    const { prevColIndex, taskIndex } = JSON.parse(
      e.dataTransfer.getData("text")
    );

    if (colIndex !== prevColIndex) {
      dispatch(
        boardsSlice.actions.dragTask({ colIndex, prevColIndex, taskIndex })
      );
    }
  };

  const handleOnDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleOnDrop}
      onDragOver={handleOnDragOver}
      className="mt-[120px]  w-full mr-10
    
      "
    >
    
      <div className="
        border border-gray-200  border-opacity-50 rounded-md p-2 mb-4 bg-white
      ">
        <p className=" font-semibold flex  items-center  gap-2 tracking-widest md:tracking-[.2em] text-[#828fa3]">
          <div className={` w-24 h-4 rounded-full ${color} `} />
          {col.name} ({col.tasks.length})
        </p>
      </div>
      <div className="">
        {col.tasks.map((task, index) => (
          <Task key={index} taskIndex={index} colIndex={colIndex} />
        ))}
      </div>
    </div>
  );
}

export default Column;
