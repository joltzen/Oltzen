import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Menu } from "@material-ui/icons";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "./Sidebar.css";

const Nav = styled.div`
  background: #133462;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  color: #fff;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #fff;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 50px;
  left: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav className="navbar">
          <NavIcon className="navicon" to="#">
            <Menu onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav className="sidebar" sidebar={sidebar}>
          <SidebarWrap className="sidebarWrapper">
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
