import React from "react";
import "../sass/SidebarRow.scss";

const SidebarRow = ({ Icon, title, selected }) => {
  return (
    <div className={`sidebarRow  ${selected ? "selected" : ""}`}>
      <Icon className="sidebarRow__icon" />
      <h4 className="sidebarRow__title">{title}</h4>
    </div>
  );
};
export default SidebarRow;
