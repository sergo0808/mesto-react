import React from 'react';
import headerLogo from '../images/logo.svg'

function Header() {
  return (
  <div className="header">
    <img className="header__logo" src={headerLogo} alt="Логотип" />
  </div>
  )

}

export default Header