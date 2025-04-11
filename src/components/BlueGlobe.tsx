export const BlueGlobe = () => {
  return (
    <div className="bg-[linear-gradient(98.7deg,#101F6C_0%,#080F31_46.91%)] text-white py-12 px-4 sm:px-6 md:px-12 lg:px-52">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 md:gap-10">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-8 text-center lg:text-left">
            Writing crypto growth stories,<br />From India for the world
          </h2>
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 md:gap-8">
            {[
              {
                src: "https://coindcx.com/wp-content/uploads/2024/02/coindcx-logo-white.svg",
                alt: "CoinDCX",
                text: "Crypto Exchange (India)",
              },
              {
                src: "https://coindcx.com/wp-content/uploads/2024/02/Okto-White.svg",
                alt: "Okto",
                text: "DeFi Web3 Wallet",
              },
              {
                src: "https://coindcx.com/wp-content/uploads/2024/02/bitoasis-logo.svg",
                alt: "BitOasis",
                text: "Partner Exchange (UAE)",
              },
              {
                src: "https://coindcx.com/wp-content/uploads/2024/02/DCX-Ventures-Blue.svg",
                alt: "DCX Ventures",
                text: "Investing across Web3 ecosystems",
              },
              {
                src: "https://coindcx.com/wp-content/uploads/2024/02/unfold-23-logo.svg",
                alt: "Unfold 23",
                text: "Largest Web3 event (India)",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3 w-[45%] sm:w-[30%] lg:w-auto"
              >
                <img src={item.src} alt={item.alt} className="h-5 md:h-6" />
                <p className="text-xs text-gray-400 text-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center mt-6 lg:mt-0">
          <video
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl"
            autoPlay
            muted
            loop
            playsInline
            src="https://coindcx.com/wp-content/uploads/2024/03/CoinDCX-International-LP_GLOBE-Animation-1.mp4"
          />
        </div>
      </div>

      <div className="mt-12 md:mt-20">
        <h3 className="text-lg sm:text-xl font-semibold mb-6 md:mb-8 text-center lg:text-left">
          Trusted by global investors
        </h3>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {[
            "steadview-logo",
            "b-capital-logo",
            "polychain-capital-logo",
            "Kingsway-capital",
            "JumpCapital",
            "pantera-logo",
            "bain-capital-logo",
            "coinbase-logo",
          ].map((logo, i) => (
            <div
              key={i}
              className="flex justify-center w-[30%] sm:w-[23%] md:w-[20%] lg:w-auto"
            >
              <img
                src={`https://coindcx.com/wp-content/uploads/2024/02/${logo}.svg`}
                className="h-6 md:h-8 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                alt={logo}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};