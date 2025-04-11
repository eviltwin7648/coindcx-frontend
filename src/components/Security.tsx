export const Security = () => {
  const securityStandards = [
    {
      img: "https://coindcx.com/wp-content/uploads/2024/03/Spot-illustrations.svg",
      title: "F.I.U. Compliant",
      description: "Complying with the Indian anti money laundering laws",
    },
    {
      img: "https://coindcx.com/wp-content/uploads/2024/03/Spot-illustrations-1.svg",
      title: "ISO/IEC 27001:2022",
      description: "Certified for following global standards of security",
    },
    {
      img: "https://coindcx.com/wp-content/uploads/2024/03/Spot-illustrations-2.svg",
      title: "Proof of Reserve",
      description: "All assets are regularly monitored and audited by third party",
    },
  ];

  const userExperience = [
    {
      img: "https://coindcx.com/wp-content/uploads/2024/03/Spot-illustrations-3.svg",
      title: "24×7 Support",
      description: "Rely on our 24×7 Live chat support. Always here, always ready",
    },
    {
      img: "https://coindcx.com/wp-content/uploads/2024/03/Spot-illustrations-4.svg",
      title: "Free INR Deposits & Withdrawals",
      description: "Enjoy unlimited INR bank transfers at any time, free of charge",
    },
    {
      img: "https://coindcx.com/wp-content/uploads/2024/03/Spot-illustrations-5.svg",
      title: "Automated Tax Reports",
      description: "Generate your crypto tax reports in less than 2 minutes",
    },
  ];

  const Block = (item: { img: string; title: string; description: string }) => (
    <div className="text-center md:text-left space-y-3 max-w-xs mx-auto md:mx-0">
      <img
        src={item.img}
        alt={item.title}
        className="h-12 w-12 md:h-15 md:w-15 mx-auto md:mx-0"
      />
      <h3 className="font-semibold text-xl md:text-2xl">{item.title}</h3>
      <p className="text-sm md:text-md text-gray-600">{item.description}</p>
    </div>
  );

  return (
    <>
      <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-52 bg-[#f8f8f8]">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Matching global <br /> security & safety standards
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-20">
          {securityStandards.map((item, index) => (
            <div key={index}>{Block(item)}</div>
          ))}
        </div>
      </section>
      <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-52">
        <div className="mb-8 md:mb-12 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight">
            Prioritising your <br /> crypto experience
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {userExperience.map((item, index) => (
            <div key={index}>{Block(item)}</div>
          ))}
        </div>
      </section>
    </>
  );
};