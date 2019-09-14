import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

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
                <NavLink exact to="/" >
                    Home
                </NavLink>
                <NavLink exact to="/characters" >
                   Characters
                </NavLink>
                <NavLink exact to="/locations" >
                    Locations
                </NavLink>
                <NavLink exact to="/episodes" >
                   Episodes
                </NavLink>
            </nav>
        </div>
    )

};
