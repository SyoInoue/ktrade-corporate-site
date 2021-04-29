import React from 'react';
import { Link } from 'gatsby';

export default function Nav({ onMenuToggle = () => {} }) {
  return (
    <nav id="nav">
      <ul>
        <li className="special">
          <a
            href="#menu"
            onClick={e => {
              e.preventDefault();
              onMenuToggle();
            }}
            className="menuToggle"
          >
            <span>Menu</span>
          </a>
          <div id="menu">
            <ul>
              <li>
                <Link to="/">K-TRADE</Link>
              </li>
              <li>
                <Link to="/About">会社案内</Link>
              </li>
              <li>
                <Link to="https://www.rakuten.co.jp/ktrade/"
                target="_blank"
                rel="noopener"
                >楽天市場</Link>
              </li>
              <li>
                <Link
                to="https://auctions.yahoo.co.jp/seller/k_trade_1?"
                target="_blank"
                rel="noopener"
                >Yahoo!オークション</Link>
              </li>
              <li>
                <Link to="https://www.amazon.co.jp/s?me=AAUB79ML89TXX&marketplaceID=A1VC38T7YXB528"
                target="_blank"
                rel="noopener"
                >amazon.com</Link>
              </li>
              <li>
                <Link to="/Contact">お問い合わせ</Link>
              </li>
            </ul>
            <a
              className="close"
              onClick={e => {
                e.preventDefault();
                onMenuToggle();
              }}
              href="#menu"
            >
              {''}
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}
