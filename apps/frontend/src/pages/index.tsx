export default function Web() {
  return (
    <>
      {/* ヘッダー */}
      <header>
        <div>LOGO</div>

        <nav>
          <ul>
            <li>YCFCとは</li>
            <li>クラブコンセプト</li>
            <li>事業</li>
            <li>社会貢献活動</li>
            <li>お問い合わせ</li>
          </ul>
        </nav>
      </header>

      <main>
        {/* ヒーロー */}
        <section>
          <p>吉川市のフットボールの文化を創り・育む</p>
          <div>ヒーロー画像</div>
        </section>

        {/* YCFCとは */}
        <section>
          <div>
            <div>LOGO</div>
            <h2>YCFCとは</h2>
            <p>
              YOSHiKAWA CiTY
              FCは埼玉県吉川市にフットボール文化を創り育む事を理念として活動します。
            </p>
            <button>もっと詳しく</button>
          </div>

          <div>スパイクとボール画像</div>
        </section>

        {/* Jr.ユース */}
        <section>
          <h2>Jr.ユース</h2>
          <p>
            フットボールの力で、人、地域をもっと笑顔にするチームを目指します。
          </p>
          <div>子どもサッカー画像</div>

          <h3>2023年Jr.ユース（U-15始動）</h3>
          <p>
            2023年度から始動する、埼玉県吉川市を拠点に活動をするJr.ユースチームです。【大人の描く想像を超えていく】選手の育成を目指すクラブチームです。スポーツジムとの連携、テクノロジーの活用、各種専門家との交流など選手1人1人の成長の為に全力を尽くします。
          </p>
          <a>
            <p>2023年度始動 第1期期生</p>
            <p>選手募集</p>
            <div>サッカーボール画像</div>
          </a>

          <button>Jr.ユースページへ</button>
        </section>

        {/* 社会貢献 */}
        <section>
          <h2>社会貢献</h2>

          <h3>”次世代のために”</h3>
          <p>将来を担う子ども達が健全に成長出来る場・機会を提供します。</p>

          <h3>”地域と共に”</h3>
          <p>地域の美化活動を行います</p>

          <h3>”誰もがフットボールに親しむ”</h3>
          <p>
            障がい・年齢・性別・LGBTQなどすべての壁を取り払い「誰もがありのままに、自分らしく」心からスポーツを楽しみ、誰も排除しない”多様性”触れる機会をつくります。
          </p>
        </section>

        {/* お知らせ */}
        <section>
          <h2>お知らせ</h2>

          {[...Array(5)].map((i, index) => {
            return (
              <a key={index}>
                <div>サムネイル画像</div>
                <h4>記事タイトル：{i}</h4>
                <p>日付</p>
              </a>
            );
          })}

          <button>もっと見る</button>
        </section>

        {/* スポンサー募集 */}
        <section>
          <div>サラリーマンイラスト画像</div>
          <p>
            クラブを支えて下さるパートナー様を募集しています。
            <br />
            クラブと共に新たな価値を創造するお手伝いが出来ればと考えています。
            <br />
            お問い合わせお待ちしています。
          </p>
        </section>
      </main>

      {/* フッター */}
      <footer>
        <ul>
          <li>YCFCとは</li>
          <li>クラブコンセプト</li>
          <li>事業</li>
          <li>社会貢献活動</li>
          <li>お問い合わせ</li>
        </ul>

        <p>Copyright© YOSHiKAWA CiTY FC All Rights Reserved.</p>
      </footer>
    </>
  );
}
