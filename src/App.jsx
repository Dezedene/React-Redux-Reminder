import { useState } from "react";
import s from "./style.module.css";

import DisplayDifficulty from "./components/displayDifficulty/DisplayDifficulty";
// import MenuListItem from "./components/menuListItem/MenuListItem";
import MenuList from "./components/menuList/MenuList";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");

  const updateDifficulty = (difficulty) => {
    setCurrentDifficulty(difficulty);
  };
  return (
    <>
      <h1 className={s.title}>Select your difficulty</h1>
      <div className={s.workSpace}>
        <MenuList
          difficulty={currentDifficulty}
          onItemClick={updateDifficulty}
        />
        <DisplayDifficulty difficulty={currentDifficulty} />
      </div>
    </>
  );
}
