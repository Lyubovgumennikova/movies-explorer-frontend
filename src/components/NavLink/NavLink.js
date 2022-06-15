import React from "react";

function NavLink({ styleSettings }) {
  return (
    <ul className={styleSettings.container}>
      <a
        className={styleSettings.link}
        href="https://www.facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        Facebook
      </a>
      <a
        className={styleSettings.link}
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        Github
      </a>
    </ul>
  );
}

export default NavLink;
