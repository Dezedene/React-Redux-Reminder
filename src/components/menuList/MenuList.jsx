import MenuListItems from "../menuListItem/MenuListItem";
import s from "./style.module.css";

const MenuList = ({ difficulty, onItemClick }) => {
  return (
    <div className={s.container}>
      <MenuListItems
        onClick={onItemClick}
        difficulty="Low"
        isSelected={difficulty === "Low"}
      />
      <MenuListItems
        onClick={onItemClick}
        difficulty="Medium"
        isSelected={difficulty === "Medium"}
      />
      <MenuListItems
        onClick={onItemClick}
        difficulty="High"
        isSelected={difficulty === "High"}
      />
      <MenuListItems
        onClick={onItemClick}
        difficulty="Insane"
        isSelected={difficulty === "Insane"}
      />
    </div>
  );
};
export default MenuList;
