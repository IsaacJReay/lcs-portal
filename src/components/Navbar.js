import React, { useState } from "react";
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { ThemeContext } from "../contexts/ThemeContext";
import SideHeader from "./SideHeader";
import { Avatar, Popover, Button, Drawer, Radio, Space } from "antd";

function Navbar() {
  // const { setCollapsed } = useContext(ThemeContext);
  // const { setToggled } = useContext(SidebarContext);
  // const onCollapse = () => {
  //   setCollapsed((collapsed) => !collapsed);
  // };
  // const onToggle = () => {
  //   setToggled((toggled) => !toggled);
  // };
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <div className="navbar-bg">
      <div className="navbar">
        <div className="navbar-left">
          <img
            className="desktop-menu"
            onClick={showDrawer}
            // onClick={() => onCollapse()}
            src={require("../assets/icons/menu.png")}
            height={20}
            style={{
              marginLeft: 10,
              marginRight: 20,
              cursor: "pointer",
            }}
            alt="koompi-img"
          />
          <img
            onClick={showDrawer}
            // onClick={() => onToggle()}
            className="mobile-menu"
            src={require("../assets/icons/menu.png")}
            height={20}
            style={{ marginLeft: 10, marginRight: 20, cursor: "pointer" }}
            alt="koompi-img"
          />
          <a href="/">
            <img
              src={require("../assets/Koompi-Black.png")}
              height={40}
              alt="koompi-img"
              className="logo-img"
            />
          </a>
        </div>
        <div className="navbar-right">
          <a
            href="http://admin.koompi.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Popover title={null} content="Admin">
              <Avatar
                size="large"
                // icon={<UserOutlined />}
                icon={
                  <img
                    src="/images/icons/profile.png"
                    alt="admin profile"
                    className="admin-profile"
                  />
                }
                className="user-avatar-offline"
              />
            </Popover>
          </a>
        </div>
      </div>
      {/* <Drawer
        title="Drawer with extra actions"
        placement={placement}
        width={500}
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer> */}
      {/* <SideHeader /> */}
    </div>
  );
}

export default Navbar;
