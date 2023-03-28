import React from "react";
import ArrowDownIcon from "../../../assets/icon-arrow-down.svg";
import TodoIcon from "../../../assets/icon-todo.svg";
import IconCalendar from "../../../assets/icon-calendar.svg";
import IconReminders from "../../../assets/icon-reminders.svg";
import IconPlanning from "../../../assets/icon-planning.svg";
import styles from "./Menu.module.css";

const Menu = () => {
  const menuItems = [
    {
      name: "features",
      href: "#",
      type: "link",
      isHovered: false,
      subMenu: [
        { name: "Todo list", href: "#", icon: TodoIcon },
        { name: "Calendar", href: "#", icon: IconCalendar },
        { name: "Reminders", href: "#", icon: IconReminders },
        { name: "Planning", href: "#", icon: IconPlanning },
      ],
    },
    {
      name: "company",
      href: "#",
      type: "link",
      isHovered: false,
      subMenu: [
        { name: "History", href: "#" },
        { name: "Our Team", href: "#" },
        { name: "Blog", href: "#" },
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
          <div className={styles["nav-menu__item"]} key={item.name}>
            <a href={item.href} className={styles["nav-menu__item___link"]}>
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
                  <a
                    className={styles["sub-menu__link"]}
                    href={sub.href}
                    key={sub.name}
                  >
                    {sub.icon && <img src={sub.icon} alt="" />}
                    <span>
                      {sub.name.charAt(0).toUpperCase() + sub.name.slice(1)}
                    </span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <div className={styles["btn-group"]}>
        {actionBtns.map((btn) => (
          <button key={btn.name} className={styles[`${btn.buttonType}`]}>
            {btn.name.charAt(0).toUpperCase() + btn.name.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Menu;
