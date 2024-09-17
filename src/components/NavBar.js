import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aTags = links.map(link => {
    return <a key={link} href={`#${link}`}>{link}</a>
  })

  return <nav>{aTags}</nav>;
}

export default NavBar;
