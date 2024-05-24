import { useState } from "react";

// import DisplayDifficulty from "./components/displayDifficulty/DisplayDifficulty";
// import MenuListItem from "./components/menuListItem/MenuListItem";
import MenuList from "./components/menuList/MenuList";

export function App() {
  const [currentDifficulty, setCurrentDifficulty] = useState("");
  return (
    <>
      <MenuList />
      {/* <MenuListItem difficulty={"Low"} /> */}
      {/* <DisplayDifficulty difficulty={"Low"} /> */}
    </>
  );
}
