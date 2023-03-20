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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1060.270533098094!2d139.84543417061897!3d35.879432718161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018975cc7674a43%3A0x10b3d65636e5e4ea!2z44Ov44K_44OK44OZ5a2m5ZyS77yI5a2m5qCh5rOV5Lq677yJ5pys6YOo!5e0!3m2!1sja!2sjp!4v1679145951003!5m2!1sja!2sjp"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
