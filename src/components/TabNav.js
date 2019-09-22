import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";


// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function  MenuExampleTabularOnTop (props)  {

  const [activeItem, setActiveItem] = useState();

 
  const handleItemClick = (e, { name }) => setActiveItem(name)
  
    return (
      <div>
        <Menu attached='top' tabular>
        
          <Menu.Item
            name='Home Page'
            icon='home'
            active={activeItem === 'Home Page'}
            onClick={handleItemClick}
            as={Link}
            to="/"
          />
          <Menu.Item
            name='Characters'
            icon='users'
            active={activeItem === 'Characters'}
            onClick={handleItemClick}
            as={Link}
            to="/characters"
          />
          <Menu.Item
            name='Locations'
            icon='map outline'
            active={activeItem === 'Locations'}
            onClick={handleItemClick}
            as={Link}
            to="/locations"
          />
          <Menu.Item
            name='Episodes'
            icon='video camera'
            active={activeItem === 'Episodes'}
            onClick={handleItemClick}
            as={Link}
            to="/episodes"
          />
          
        </Menu>
        
      </div>
    )
  }
