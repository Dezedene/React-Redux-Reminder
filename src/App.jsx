import DisplayDifficulty from "./components/displayDifficulty/DisplayDifficulty";
import MenuListItem from "./components/menuListItem/MenuListItem";

export function App() {
  return (
    <>
      <MenuListItem difficulty={"Low"} />
      <DisplayDifficulty difficulty={"Low"} />
    </>
  );
}
