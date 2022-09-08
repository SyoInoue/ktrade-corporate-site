import React from 'react';
import Layout from '../components/Layout';

const IndexPage = () => (
  <Layout fullMenu>
    <article id="main">
      <header>
        <h2>お問い合わせ</h2>
        <p>
          大型ゴミ回収、お荷物移動のご相談や
          <br />
          商品に関してのお問い合わせ等お気軽にご連絡ください。
        </p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          <section>
            <h4>●お問い合わせフォーム</h4>
            <form method="post" netlify>
              <div className="row gtr-uniform">
                <div className="col-6 col-12-xsmall">
                  <input
                    type="text"
                    name="demo-name"
                    id="demo-name"
                    defaultValue=""
                    placeholder="お名前"
                  />
                </div>
                <div className="col-6 col-12-xsmall">
                  <input
                    type="email"
                    name="demo-email"
                    id="demo-email"
                    defaultValue=""
                    placeholder="メールアドレス"
                  />
                </div>
                <div className="col-12">
                  <select name="demo-category" id="demo-category">
                    <option value="">- お問い合わせ内容 -</option>
                    <option value="1">大型ゴミ回収のご相談</option>
                    <option value="1">お引っ越し手伝いのご相談</option>
                    <option value="1">お見積もりに関して</option>
                    <option value="1">販売商品に関して</option>
										<option value="1">その他お問い合わせ</option>
                  </select>
                </div>
                <div className="col-6 col-12">
                  <input
                    type="text"
                    name="demo-name"
                    id="demo-name"
                    defaultValue=""
                    placeholder="件名"
                  />
                </div>
                <div className="col-12">
                  <textarea
                    name="demo-message"
                    id="demo-message"
                    placeholder="本文"
                    rows="6"
                  ></textarea>
                </div>
                <div className="col-12">
                  <ul className="actions">
                    <li>
                      <input
                        type="submit"
                        value="送信"
                        className="primary"
                      />
                    </li>
                    <li>
                      <input type="reset" value="リセット" />
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </section>
        </div>
      </section>
    </article>
  </Layout>
);

export default IndexPage;
