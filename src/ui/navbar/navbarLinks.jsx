import React, { memo } from "react";
import styles from "../../assets/css/navbar.module.css";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavbarLinks = ({ ochish, handleClick, anchorEl, handleClose }) => {
  return (
    <div className={styles.navigateItem}>
      <NavLink to="/">Asosiy</NavLink>

      <Button
        id="basic-button"
        aria-controls={ochish ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={ochish ? "true" : undefined}
        onClick={handleClick}
      >
        Kategoriya
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={ochish}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem className={styles.CategoriesLinks} onClick={handleClose}>
          <NavLink to="/product_list?categories=Aksessuarlar">
            Aksessuarlar
          </NavLink>
        </MenuItem>
        <MenuItem className={styles.CategoriesLinks} onClick={handleClose}>
          <NavLink to="/product_list?categories=Smartfon">Smartfonlar</NavLink>
        </MenuItem>
        <MenuItem className={styles.CategoriesLinks} onClick={handleClose}>
          <NavLink to="/product_list?categories=Maishiy Texnika">
            Maishiy Texnika
          </NavLink>
        </MenuItem>
        <MenuItem className={styles.CategoriesLinks} onClick={handleClose}>
          <NavLink to="/product_list?categories=ChinniBuyumlar">
            Chinni Buyumlar
          </NavLink>
        </MenuItem>
        <MenuItem className={styles.CategoriesLinks} onClick={handleClose}>
          <NavLink to="/product_list?categories=Go'zallik va Parvarish">
            Go'zallik va Parvarish
          </NavLink>
        </MenuItem>

        <MenuItem className={styles.CategoriesLinks} onClick={handleClose}>
          <NavLink to="/product_list?categories=O'yinchoqlar">
            O'yinchoqlar
          </NavLink>
        </MenuItem>
      </Menu>

      <NavLink to="/aboutus">Biz Haqimizda</NavLink>
      <NavLink to="/news">Yangiliklar</NavLink>
      <NavLink to="/faq">K.B.S</NavLink>
    </div>
  );
};

export default memo(NavbarLinks)
