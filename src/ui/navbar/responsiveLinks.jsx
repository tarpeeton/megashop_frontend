import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import styles from "../../assets/css/navbar.module.css";
import { NavLink } from "react-router-dom";

const ResponsiveLinks = ({ handleCloseCotegories, cotegories }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={cotegories}
      open={Boolean(cotegories)} // Ensure open receives a boolean value
      onClose={handleCloseCotegories}
      marginThreshold={0}
      slotProps={{
        paper: {
          sx: {
            width: "100%",
            height: "100%",
            maxWidth: "100%",
            left: "0px",
            right: "0px",
          },
        },
      }}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
        }}
        className={styles.MenuITEMS}
      >
        <NavLink onClick={handleCloseCotegories} to="/">
          Asosiy
        </NavLink>
        <NavLink onClick={handleCloseCotegories} to="/aboutus">
          Biz Haqimizda
        </NavLink>
        <NavLink onClick={handleCloseCotegories} to="/news">
          Yangiliklar
        </NavLink>
        <NavLink onClick={handleCloseCotegories} to="/faq">
          K.B.S
        </NavLink>
      </MenuItem>
      <div className={styles.categoriesInMob}>
        <NavLink
          onClick={handleCloseCotegories}
          to="/product_list?categories=Aksessuarlar"
        >
          Aksessuarlar
        </NavLink>
        <NavLink
          onClick={handleCloseCotegories}
          to="/product_list?categories=Smartfon"
        >
          Smartfonlar
        </NavLink>
        <NavLink
          onClick={handleCloseCotegories}
          to="/product_list?categories=Maishiy Texnika"
        >
          Maishiy Texnika
        </NavLink>
        <NavLink
          onClick={handleCloseCotegories}
          to="/product_list?categories=ChinniBuyumlar"
        >
          Chinni Buyumlar
        </NavLink>
        <NavLink
          onClick={handleCloseCotegories}
          to="/product_list?categories=Go'zallik va Parvarish"
        >
          Go'zallik va Parvarish
        </NavLink>
        <NavLink
          onClick={handleCloseCotegories}
          to="/product_list?categories=O'yinchoqlar"
        >
          O'yinchoqlar
        </NavLink>
      </div>
    </Menu>
  );
};

export default ResponsiveLinks;
