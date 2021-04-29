import React from 'react';
import Layout from '../components/Layout';
import Scroll from '../components/Scroll';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
import Iframe from 'react-iframe';
import { Link } from 'gatsby';

const IndexPage = () => (
  <Layout fullMenu>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                K-TRADEってどんな会社？
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>What's K-TRADE？</h2>
          <p>
            京都を拠点に大型ゴミの回収や引っ越しのお手伝い、家電の買取から、
            <br />
            楽天/Amazon/Yahooオークションを使ったEコマースをメイン事業とする会社です。
            <br />
            活動範囲は京都、大阪、滋賀等関西圏を中心に活動しており、
            <br />
            ネット販売は全国を対象に幅広く活動しています。
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-truck-moving solid  major style1">
              <span className="label">truck</span>
            </span>
          </li>
          <li>
            <span className="icon fa-building solid major style2">
              <span className="label">building</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-handshake major style3">
              <span className="label">handshake</span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>関西圏にて大型ゴミ/家具家電/回収に伺います。</h2>
          <p>
            エリア内でご依頼頂ければ、日程を調整し回収に伺います。
            <br />
            どんなものでも原則回収可能でございます。
            <br />
            まずは<Link to="/Contact">ご相談</Link>ください。
            <br />
            <br />
            回収可能エリア
            <br />
            京都市、長岡京市、宇治市、八幡市、城陽市、向日市、亀岡市、京田辺市、
            大阪市、枚方市、高槻市、茨木市、東大阪市、寝屋川市、交野市、守口市、
            門真市、大津市、彦根市、長浜市、守山市...その他エリア要相談
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            家具家電、オーディオ類、その他古物激レア品等
            <br />
            楽天/ヤフオク/Amazonにて業界最安値で出品中。
          </h2>
          <p>
            <a href="https://www.rakuten.co.jp/ktrade/"
              target="_blank"
              rel="noopener" >楽天市場</a>、
            <a href="https://auctions.yahoo.co.jp/seller/k_trade_1?"
              target="_blank"
              rel="noopener" >Yahooオークション</a>、
            <a href="https://www.amazon.co.jp/s?me=AAUB79ML89TXX&marketplaceID=A1VC38T7YXB528"
              target="_blank"
              rel="noopener">amazon.com</a>にて、
            <br />
            業界最安値で商品を出品しております。
            <br />
            近場のお客様は弊社の方まで来て頂ければ、
            <br />
            直接のお取引も可能でございます。
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>京都を拠点に活動しております。</h2>
          <p>歴史の都、京都を中心にお客様第一のサービスを徹底して参ります。</p>
        </div>
      </section>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>会社概要</h2>
          <ul>
            <li>社名 : K-TRADE</li>
            <li>郵便番号 : 612-8379</li>
            <li>所在地 : 京都府京都市伏見区南寝小屋町59</li>
            <li>代表者名 : 田中和行</li>
            <li>電話番号 : 075-603-7733</li>
            <li>メールアドレス : k-trade@e-mail.jp</li>
            <li>取引銀行 : 京都中央信用金庫 / 楽天銀行 / PayPay銀行</li>
          </ul>
        </header>
      </div>
    </section>

    <section id="three" className="style3">
        <Iframe
          width="100%"
          height="600px"
          style="border:0"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJyQW3eH4FAWARjLP56bYP5KU&key=AIzaSyBy32XwINCF1oOcEJ_zZsWk1o_ZxkfbKBU"
        />
    </section>
  </Layout>
);

export default IndexPage;
