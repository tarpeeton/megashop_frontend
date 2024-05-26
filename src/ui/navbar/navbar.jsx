import React, { memo, useState } from "react";

import styles from "../../assets/css/navbar.module.css";
// Import Phone icon its MUI
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
// import Profile from "./profile.jsx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import NavbarLinks from "./navbarLinks.jsx";
import ResponsiveLinks from "./responsiveLinks.jsx";

const Header = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const navigate = useNavigate();
  const loginNavigate = () => navigate("/login");

  const [anchorEl, setAnchorEl] = useState(false);
  const [cotegories, setCotegories] = useState(null);

  const ochish = Boolean(anchorEl);
  const open = Boolean(cotegories);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCotegories = (event) => {
    if (open) {
      // Agar menuni ko'rsatilayotgan bo'lsa, uni yopish
      setCotegories(null);
    } else {
      // Agar menuni yopilgan bo'lsa, uni ochish
      setCotegories(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseCotegories = () => {
    setCotegories(null);
  };

  const navigateToSearch = () => {
    navigate("/search/product");
  };
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.phoneNumber}>
          <div className={styles.phoneNumberRow}>
            <PhoneIcon style={{ fontSize: "16px" }} />
            <p className={styles.text}>+998917888041</p>
          </div>
        </div>
        <div className={styles.Description}>
          <p className={styles.text}>O`ZBEKISTON BO`YLAB YETKAZIB BERISH</p>
        </div>
        <div className={styles.Navigation}>
          {isLoggedIn ? (
            <>
              <NavLink
                to={"/shopingBug"}
                style={{ display: "flex", color: "#d300ff" }}
              >
                <ShoppingCartIcon
                  style={{ cursor: "pointer" }}
                  onClick={() => console.log("Koriznka")}
                />
              </NavLink>
            </>
          ) : (
            <button onClick={loginNavigate} className={styles.LoginButton}>
              Kirish
            </button>
          )}
        </div>
      </div>
      {/* NaviagtionBars*/}
      <div className={styles.navigationBar}>
        <button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleCotegories}
          className={styles.NavigationHamburger}
        >
          <MenuOpenIcon />{" "}
        </button>
        <div className={styles.intro}>
          <NavLink to="/">
            <img
              src="https://ucarecdn.com/9fd34c07-8226-45ce-b6f6-4ddf4ee911e0/-/preview/201x184/"
              alt="logo"
            />
            Megashop
          </NavLink>
        </div>
        {/*Navigate item*/}

        <NavbarLinks
          anchorEl={anchorEl}
          ochish={ochish}
          handleClick={handleClick}
          handleClose={handleClose}
        />

        {/*  ?Seach  */}
        <div className={styles.seachNavigate}>
          <button
            onClick={() => navigateToSearch()}
            style={{ border: "none", outline: "none", background: "inherit" }}
          >
            <SearchIcon style={{ fontSize: 32 }} />
          </button>
        </div>
      </div>
      {/* Telefon qurilmalarida Linklar korinishi uchun */}
      <ResponsiveLinks
        cotegories={cotegories}
        handleCloseCotegories={handleCloseCotegories}
      />
    </>
  );
};

export default memo(Header);
