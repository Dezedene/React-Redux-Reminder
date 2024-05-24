import MenuListItems from "../menuListItem/MenuListItem";
import s from "./style.module.css";

const MenuList = (props) => {
  return (
    <div className={s.container}>
      <MenuListItems difficulty="Low" />
      <MenuListItems difficulty="Medium" />
      <MenuListItems difficulty="High" />
      <MenuListItems difficulty="Insane" />
    </div>
  );
};
export default MenuList;
