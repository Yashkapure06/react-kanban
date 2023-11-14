import React, { useState } from "react";
import AddEditTaskModal from "../modals/AddEditTaskModal";

const Header = () => {
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);


  return (
    <div className="bg-[#fff] p-4 fixed left-0 dark:bg-[#2b2c37] z-50 right-0 ">
      <header className=" flex justify-between dark:text-white items-center  ">
        {/* Left Side  */}
        <div className=" flex items-center space-x-2  md:space-x-4">
          <h1 className="font-medium text-3xl">Kanban Dashboard</h1> 
          <div className=" flex space-x-4 items-center md:space-x-6 ">
            <button
              className=" button hidden md:block "
              onClick={() => {
                setIsTaskModalOpen((prevState) => !prevState);
              }}
            >
              + Add New Task
            </button>
            <button
              onClick={() => {
                setIsTaskModalOpen((prevState) => !prevState);
              }}
              className=" button py-1 px-3 md:hidden "
            >
              +
            </button>
          </div>
        </div>

      </header>
      {isTaskModalOpen && (
        <AddEditTaskModal
          setIsAddTaskModalOpen={setIsTaskModalOpen}
          type="add"
          device="mobile"
        />
      )}
    </div>
  );
}

export default Header;
