export const BlueGlobe = () => {
  return (
    <div className="bg-[linear-gradient(98.7deg,#101F6C_0%,#080F31_46.91%)] text-white py-16 px-4 md:px-52">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-10">
            Writing crypto growth stories,<br />From India for the world
          </h2>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center gap-4">
              <img
                src="https://coindcx.com/wp-content/uploads/2024/02/coindcx-logo-white.svg"
                alt=""
                className="h-6"
              />
              <p className="text-xs text-gray-500">Crypto Exchange (India)</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <img
                src="https://coindcx.com/wp-content/uploads/2024/02/Okto-White.svg"
                alt=""
                className="h-6"
              />
              <p className="text-xs text-gray-500">DeFi Web3 Wallet</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <img
                src="https://coindcx.com/wp-content/uploads/2024/02/bitoasis-logo.svg"
                alt=""
                className="h-6"
              />
              <p className="text-xs text-gray-500">Partner Exchange (UAE)</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <img
                src="https://coindcx.com/wp-content/uploads/2024/02/DCX-Ventures-Blue.svg"
                alt=""
                className="h-6"
              />
              <p className="text-xs text-gray-500">Investing across Web3 ecosystems</p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <img
                src="https://coindcx.com/wp-content/uploads/2024/02/unfold-23-logo.svg"
                alt=""
                className="h-6"
              />
              <p className="text-xs text-gray-500">Largest Web3 event (India)</p>
            </div>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <video
            className="w-full max-w-md rounded-xl"
            autoPlay
            muted
            loop
            playsInline
            src="https://coindcx.com/wp-content/uploads/2024/03/CoinDCX-International-LP_GLOBE-Animation-1.mp4"
          />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-xl font-semibold  mb-8">Trusted by global investors</h3>
        <div className="flex flex-wrap justify-center gap-8">
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
            <img
              key={i}
              src={`https://coindcx.com/wp-content/uploads/2024/02/${logo}.svg`}
              className="h-8 opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              alt={logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
