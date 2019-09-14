import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
  return (
    <div>
      <nav>
        <NavLink
          exact
          to="/"
          style={{ padding: "0 8px" }}
          activeStyle={{
            fontWeight: "bold",
            background: 'lightgrey'
          }}
        >
          Home
        </NavLink>
        <NavLink exact to="/characters" style={{ padding: "0 8px" }} activeStyle={{
            fontWeight: "bold",
            background: 'lightgrey'
          }}>
          Characters
        </NavLink>
        <NavLink exact to="/locations" style={{ padding: "0 8px" }} activeStyle={{
            fontWeight: "bold",
            background: 'lightgrey'
          }}>
          Locations
        </NavLink>
        <NavLink exact to="/episodes" style={{ padding: "0 8px" }} activeStyle={{
            fontWeight: "bold",
            background: 'lightgrey'
          }}>
          Episodes
        </NavLink>
      </nav>
    </div>
  );
}
