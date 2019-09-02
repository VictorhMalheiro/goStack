import React from "react";
import facebookLogo from "../assets/img/facebook-1.png";
function Header() {
  return (
    <header>
      <nav>
        <img  src={facebookLogo} />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
