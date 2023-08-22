import React from 'react';
import './Header.css';
import LinkButton from '../LinkButton/LinkButton';
import { headerLinks } from '__mocks__/HeaderLinks.mock';

export default function Header() {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        NeoBank
      </a>
      <nav>
        <ul className="header__nav">
          {headerLinks.map((item, index) => (
            <li key={index}>
              <LinkButton elementClassName="header__nav-item" text={item.text} link={item.link} />
            </li>
          ))}
        </ul>
      </nav>
      <LinkButton text="Online Bank" link="/" />
    </header>
  );
}
