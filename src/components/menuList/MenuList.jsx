import MenuListItems from "../menuListItem/MenuListItem";
import { DIFFICULTIES } from "./constant";
import s from "./style.module.css";

const MenuList = ({ difficulty, onItemClick }) => {
  return (
    <div className={s.container}>
      {DIFFICULTIES.map((diff, i) => (
        <MenuListItems
          key={i}
          onClick={onItemClick}
          difficulty={diff}
          isSelected={difficulty === diff}
        />
      ))}
    </div>
  );
};
export default MenuList;
