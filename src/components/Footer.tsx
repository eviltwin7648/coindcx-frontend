import { FaTelegram, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-white px-4 sm:px-6 md:px-12 lg:px-48 text-gray-800 py-8 sm:py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto flex flex-wrap gap-3 justify-between sm:gap-8">
        {[
          {
            title: "Company",
            items: [
              "About Us",
              "Blog",
              "Careers",
              "Fees",
              "Proof of Reserves",
              "Partners",
              "Bug Bounty",
              "Community",
              "Policy",
              "C.I.P. Fund",
            ],
          },
          {
            title: "Product",
            items: [
              "Coins Trading",
              "Margin Trading",
              "Convert",
              "Futures Trading",
              "Earn",
              "VIP",
            ],
          },
          {
            title: "Support",
            items: [
              "24/7 Chat Support",
              "Support Center",
              "Terms of Use",
              "Privacy Policy",
              "Risk Disclosures",
              "Security",
              "Media Kit",
            ],
          },
          {
            title: "Business",
            items: [
              "Prime",
              "OTC",
              "API Broker",
              "Enterprise",
              "New Coin Listing",
              "Ventures",
              "Affiliate",
            ],
          },
          {
            title: "Buy Cryptos",
            items: [
              "Buy Bitcoin",
              "Buy Ethereum",
              "Buy Solana",
              "Buy Ripple",
              "Buy Dogecoin",
              "Buy Shiba Inu",
              "Buy Pepecoin",
            ],
          },
        ].map((section, index) => (
          <div
            key={index}
            className=""
          >
            <h4 className="font-bold mb-2 text-base sm:text-lg text-left">{section.title}</h4>
            <ul className="flex flex-wrap lg:flex-col gap-x-2 gap-y-1 text-xs sm:text-sm cursor-pointer">
              {section.items.map((item, i) => (
                <li key={i} className="w-[calc(50%-0.5rem)] lg:w-auto">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto mt-8 sm:mt-10 text-gray-700">
        <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8">
          <div className="text-left">
            <h5 className="font-semibold text-base sm:text-lg">Contact Us</h5>
            <div className="mt-2 text-xs sm:text-sm space-y-1">
              <p>
                Press Enquiries write to{" "}
                <a
                  href="mailto:media.queries@coindcx.com"
                  className="text-blue-600"
                >
                  media.queries@coindcx.com
                </a>
              </p>
              <p>
                Regulatory Issues/Enforcement Authorities:{" "}
                <a href="mailto:legal@coindcx.com" className="text-blue-600">
                  legal@coindcx.com
                </a>
              </p>
              <p>
                For Grievance Redressal,{" "}
                <a href="#" className="text-blue-600">
                  Click here
                </a>{" "}
                to know more.
              </p>
            </div>
          </div>

          <div className="text-left">
            <h5 className="font-semibold text-base sm:text-lg">Follow us</h5>
            <div className="flex mt-2 items-center gap-4">
              <BsGlobe className="text-lg sm:text-xl text-gray-800" />
              <FaTelegram className="text-lg sm:text-xl text-gray-800" />
              <FaLinkedin className="text-lg sm:text-xl text-gray-800" />
              <FaInstagram className="text-lg sm:text-xl text-gray-800" />
              <FaYoutube className="text-lg sm:text-xl text-gray-800" />
            </div>
          </div>
        </div>

        <div className="mt-8 text-left">
          <h5 className="font-semibold mb-1 text-base sm:text-lg">Disclaimer</h5>
          <p className="text-xs text-gray-600">
            Crypto products & NFTs are unregulated and can be highly risky. There
            may be no regulatory recourse for any loss from such transactions. The
            information and material contained herein are subject to change without
            prior notice including prices which may fluctuate based on market
            demand and supply. The material available on the site is proprietary to
            CoinDCX, its parent, Licensor and/or its affiliates and is for
            informational purposes and informed investors only. This material is
            not: (i) an offer, or solicitation of an offer, to invest in, or to buy
            or sell, any interests or shares, or to participate in any investment
            or trading strategy, or (ii) intended to provide accounting, legal, or
            tax advice, or investment recommendations.
          </p>
          <p className="text-xs mt-3 text-gray-600">
            *Data sourced from Looker app as on 01st May,2023 <br />
            *Data as on 01st May,2023 <br />
            *Quarterly trading volume for Q2 FY’23. Currency conversion rate
            applied as in data capturing period <br />
            *FIU Registered entity, NEBLIO TECHNOLOGIES PVT LTD <br />
            *Certified in India for May 2023-24 <br />
            *Leverage differs as per token
          </p>
        </div>
        <p className="mt-6 text-xs sm:text-sm font-semibold text-gray-600 text-left">
          © 2025 All rights reserved
        </p>
      </div>
    </footer>
  );
};