import React from 'react';
import './SidebarRow.css';

function SidebarRow({selected, Icon,title}){
    return(
      <div className={`SidebarRow ${selected && "selected"}`}>
        <Icon className="SidebarRow__icon"/>
        <h3>{title}</h3>
      </div> 
    )
}

export default SidebarRow;