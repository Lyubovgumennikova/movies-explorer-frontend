import React from "react";

function NavReview({ styleSettings }) {
  return (
    <ul className={styleSettings.container}>
      <a
        className={styleSettings.link}
        href="https://www.facebook.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Facebook
      </a>
      <a
        className={styleSettings.link}
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </ul>
  );
}

export default NavReview;
