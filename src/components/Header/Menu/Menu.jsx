import React from "react";
import ArrowDownIcon from "../../../assets/icon-arrow-down.svg";
import styles from "./Menu.module.css";

const Menu = () => {
  const menuItems = [
    {
      name: "features",
      href: "#",
      type: "link",
      isHovered: false,
      subMenu: [
        { name: "item1", href: "#" },
        { name: "item2", href: "#" },
      ],
    },
    {
      name: "company",
      href: "#",
      type: "link",
      isHovered: false,
      subMenu: [
        { name: "item1", href: "#" },
        { name: "item2", href: "#" },
      ],
    },
    {
      name: "Careers",
      href: "#",
      type: "link",
    },
    {
      name: "about",
      href: "#",
      type: "link",
    },
  ];

  const actionBtns = [
    {
      name: "login",
      buttonType: "ghost-btn",
    },
    {
      name: "register",
      buttonType: "bordered-btn",
    },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles["nav-menu"]}>
        {menuItems.map((item) => (
          <div className={styles["nav-menu-item"]} key={item.name}>
            <a href={item.href}>
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              {item.hasOwnProperty("subMenu") ? (
                <img
                  className={styles.arrow}
                  src={ArrowDownIcon}
                  alt="Arrow Down Icon"
                />
              ) : (
                ""
              )}
            </a>
            {item.hasOwnProperty("subMenu") && (
              <div className={styles["sub-menu"]}>
                {item.subMenu.map((sub) => (
                  <a href={sub.href} key={sub.name}>
                    {sub.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div>
        {actionBtns.map((btn) => (
          <button key={btn.name} className={styles[`${btn.buttonType}`]}>
            {btn.name}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
