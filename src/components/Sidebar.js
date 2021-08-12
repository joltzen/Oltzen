import { Menu } from "@material-ui/icons";
import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";

const Nav = styled.div`
  background: #172449;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  position: fixed;
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
  background: #f6f7f9;
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
