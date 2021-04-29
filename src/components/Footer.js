import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
      <li>
          <a href="tel:075-603-7733" className="icon">
            <FontAwesomeIcon
            icon={faPhoneAlt}
            />
          </a>
        </li>
        <li>
          <a href="mailto:k-trade@e-mail.jp" className="icon">
            <FontAwesomeIcon
            icon={faEnvelope}
            />
          </a>
        </li>
        <li>
          <a href="/Contact" className="icon">
            <FontAwesomeIcon
            icon={faAddressBook}
            />
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; K-TRADE</li>
        <li>〒:612-8379 京都府京都市伏見区南寝小屋町59</li>
        <li>TEL:075-603-7733</li>
      </ul>
      <a href="/#" className="button fit primary">
        Back To Top Page
      </a>
    </footer>
  );
}
