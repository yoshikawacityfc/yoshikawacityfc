export const TrainingInfo = (): JSX.Element => {
  return (
    <div className="bg-tertiary py-36">
      <div className="max-w-[1000px] m-auto px-4">
        <h3 className="text-3xl mb-8">練習情報</h3>

        <h4 className="text-xl mb-2">日数（予定）</h4>
        <p>
          <span>【平日】</span>
          <span>週2日（火・木曜日）TR時間は90分</span>
        </p>
        <p className="mb-1">
          <span>【土日・祝日】</span>
          <span>終日試合</span>
        </p>
        <p className="text-sm">
          ※季節や日没関係によって練習時間や練習会場が変更になる場合がございます。
        </p>

        <h4 className="text-xl mt-8 mb-2">場所</h4>
        <p>ワタナベ学園グランド（吉川市保１丁目２１−７ ）</p>
        <iframe
          className="w-full aspect-video rounded border mt-4"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d625.3587076164209!2d139.8454264979048!3d35.87998119384276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sja!2sjp!4v1679140407908!5m2!1sja!2sjp"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
