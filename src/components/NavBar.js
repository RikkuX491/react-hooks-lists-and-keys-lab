import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aElements = links.map(link => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>{aElements}</nav>;
}

export default NavBar;
