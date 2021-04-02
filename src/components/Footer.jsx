import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} Abhinav - It's all a free market</p>
    </footer>
  );
}

export default Footer;
