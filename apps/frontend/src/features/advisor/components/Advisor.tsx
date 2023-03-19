import { advisors } from "../data";

export const Advisor = (): JSX.Element => {
  return (
    <div className="bg-primary py-24">
      <div className="max-w-[1000px] m-auto px-4">
        {advisors.map((advisor, index) => (
          <div key={index} className="mb-32">
            <img
              src={advisor.profileImage}
              alt={advisor.name}
              className="w-[300px] h-[400px] object-cover shadow-2xl rounded m-auto mb-16"
            />

            <div className="text-secondary flex flex-col items-center mb-16">
              <span className="text-2xl mb-4">{advisor.position}</span>
              <p className="text-4xl whitespace-pre-line">{advisor.name}</p>
            </div>

            <p className="text-secondary whitespace-pre-line">
              {advisor.description}
            </p>
          </div>
        ))}

        <div className="text-secondary">
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
