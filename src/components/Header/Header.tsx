import React from 'react';
import './Header.css';
import LinkButton from '../LinkButton/LinkButton';

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        NeoBank
      </a>
      <nav>
        <ul className="header__nav">
          <li>
            <a className="header__nav-item" href="/loan">
              Credit card
            </a>
          </li>
          <li>
            <a className="header__nav-item" href="#">
              Product
            </a>
          </li>
          <li>
            <a className="header__nav-item" href="#">
              Account
            </a>
          </li>
          <li>
            <a className="header__nav-item" href="#">
              Resources
            </a>
          </li>
        </ul>
      </nav>
      <LinkButton text="Online Bank" link="/" />
    </header>
  );
}
