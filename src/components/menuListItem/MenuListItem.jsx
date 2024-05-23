import { useState } from "react";
import s from "./style.module.css";

const MenuListItems = (props) => {
  const [isHovered, setIsHovered] = useState(false);
  console.log("isHovered: ", isHovered);
  return (
    <>
      <div
        style={{ backgroundColor: isHovered ? "#a5e9ff" : "#eff0ef" }}
        className={s.container}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Set To: {props.difficulty}
      </div>
    </>
  );
};
export default MenuListItems;
