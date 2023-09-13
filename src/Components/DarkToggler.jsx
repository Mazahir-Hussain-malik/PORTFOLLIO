import React, { useState, useEffect } from "react";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const DarkToggler = () => {
  const [toggle, setToggle] = useState(true);
  const [theme, setTheme] = useState("dark-theme");

  const changeTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  setTimeout(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <>
      <div onClick={() => setToggle(!toggle)}>
        {toggle ? (
          <div>
            <MdOutlineDarkMode onClick={changeTheme} className="text-[20px]" />{" "}
          </div>
        ) : (
          <div>
            <MdOutlineLightMode onClick={changeTheme} className="text-[20px]" />
          </div>
        )}
      </div>
    </>
  );
};

export default DarkToggler;
