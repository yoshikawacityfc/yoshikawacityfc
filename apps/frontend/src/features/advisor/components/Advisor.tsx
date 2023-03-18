export const Advisor = (): JSX.Element => {
  return (
    <div className="bg-primary py-24">
      <div className="max-w-[1000px] m-auto px-4">
        <img
          src="/suzuki-takayuki.jpeg"
          alt="鈴木隆行"
          className="w-72 shadow-2xl rounded m-auto mb-16"
        />

        <div className="text-secondary flex flex-col items-center mb-16">
          <span className="text-2xl mb-4">テクニカルアドバイザー</span>
          <p className="text-4xl">鈴木隆行</p>
        </div>

        <p className="text-secondary mb-4">
          YOSHiKAWA CiTY FC
          U-15では、選手の育成サポートとしてこの度、「元日本代表FWの鈴木隆行氏」にテクニカルアドバイザーに就任頂きました。
        </p>

        <p className="text-secondary mb-4">
          不定期になりますが、YOSHiKAWA CiTY
          FCの選手に日本のトップで活躍していた鈴木さんから直接指導を受ける機会を提供する事で、サッカーの技術だけに限らず、サッカーに対する考え方、意識、振る舞い等を肌で感じてもらいます。
        </p>

        <p className="text-secondary mb-4">
          本物に触れる。中学生の時期に頭ではなく五感で感じ、体験することでサッカー選手としての成長速度を上げることが出来ればと考えています。
        </p>

        <p className="text-secondary mb-4">
          また、鈴木氏は指導者最高ランクであるS級ライセンス保持者であります。
          YOSHiKAWA CiTY
          FCのコーチ陣もこの機会に指導についても貪欲に学ばせて頂きます。
        </p>

        <p className="text-secondary">
          YOSHiKAWA CiTY
          FCの選手達と共にコーチ陣も成長しながらチームを創り上げていきます。
        </p>

        <div className="mt-24 text-secondary">
          <h3 className="text-4xl mb-8">“サッカー以外でも交流していきます”</h3>

          <p className="mb-4">
            このようにサッカーに関係した専門家との交流をはじめ、サッカー以外の体験や、交流などを通じて様々な人と関わるなかで、社会性を身につけ、人としての成長に繋げていきます。
          </p>

          <p className="mb-4">
            人としての成長がサッカーの上達を早め、人生の選択肢を増やす事になるとクラブでは考えています。
          </p>

          <p className="mb-4">
            一見、サッカーとは関係のないような活動にも一生懸命、前向きに取り組める選手を待っています。
          </p>
        </div>
      </div>
    </div>
  );
};
