import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <img class="avatar" src="https://api.adorable.io/avatars/200/" />
        <div>
          <span>Meu perfil</span>
          <i className="material-icons">account_circle</i>
        </div>
      </nav>
    </header>
  );
}

export default Header;
