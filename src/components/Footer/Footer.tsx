import React from 'react';
import './Footer.css';
import logo from '../../images/logo.svg';
import { footerLinks } from '__mocks__/FooterLinks.mock';
import LinkButton from 'components/LinkButton/LinkButton';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__content">
          <img src={logo} alt="logo" />
          <div>
            <a className="footer__contacts footer__contacts_phone" href="tel:+74959842513">
              +7 (495) 984 25 13
            </a>
            <a className="footer__contacts footer__contacts_mail" href="mailto:info@neoflex.ru">
              info@neoflex.ru
            </a>
          </div>
        </div>
        <ul className="footer__links">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <LinkButton elementClassName="footer__link" link={item.link} text={item.text} linkTarget="_blank" />
            </li>
          ))}
        </ul>
        <p className="footer__text">
          We use cookies to personalize our services and improve the user experience of our website. Cookies are small
          files containing information about previous visits to a website. If you do not want to use cookies, please
          change your browser settings
        </p>
      </div>
    </footer>
  );
}
