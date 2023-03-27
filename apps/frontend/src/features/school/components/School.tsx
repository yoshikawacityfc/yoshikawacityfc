export const School = (): JSX.Element => {
  return (
    <div className="p-16 shadow-lg rounded-md max-w-[1000px] m-auto bg-secondary">
      <h2 className="font-semibold text-5xl sm:text-6xl text-center">
        CiTY SCHOOL
      </h2>

      <div>
        <div>
          <h3>通常コース</h3>
          <p>
            ウォーミングアップ後、様々な条件、形を用いて試合を行います。試合をする中で、個人戦術、技術を習得できるようにしていきます。
          </p>
          <ul>
            <li>対象学年: 小学1年生〜小学6年生</li>
            <li>年会費: 3,000円</li>
            <li>参加費: 1,000円/回</li>
            <li>5回券: 4,000円</li>
            <li>10回券: 7,000円</li>
            <li>見学・体験随時受付中（体験1回無料）</li>
          </ul>
        </div>

        <div>
          <h3>スキルアップコース</h3>
          <p>
            身体の向き、ボールを置く位置、パスの質、ゴールを奪うシュート、動き出し、ドリブル、ボールを奪う攻撃的な守備、細かいプレーの部分はもちろんのこと、サッカーに対しての向き合い方も細かく指導します！
          </p>
          <ul>
            <li>对象学年: 小学4年生～6年生</li>
            <li>日時: 毎週水曜 18時半〜20時</li>
            <li>場所: 吉川市立栄小学校</li>
            <li>定員: 20名</li>
            <li>月会費: 6,000円（※1回2,000円で参加可能）</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
