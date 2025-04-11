import { FaTelegram, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="bg-white px-48 text-gray-800 py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-5 gap-6">
        <div>
          <h4 className="font-bold mb-2">Company</h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>About Us</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Fees</li>
            <li>Proof of Reserves</li>
            <li>Partners</li>
            <li>Bug Bounty</li>
            <li>Community</li>
            <li>Policy</li>
            <li>C.I.P. Fund</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Product</h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>Coins Trading</li>
            <li>Margin Trading</li>
            <li>Convert</li>
            <li>Futures Trading</li>
            <li>Earn</li>
            <li>VIP</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Support</h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>24/7 Chat Support</li>
            <li>Support Center</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
            <li>Risk Disclosures</li>
            <li>Security</li>
            <li>Media Kit</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Business</h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>Prime</li>
            <li>OTC</li>
            <li>API Broker</li>
            <li>Enterprise</li>
            <li>New Coin Listing</li>
            <li>Ventures</li>
            <li>Affiliate</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Buy Cryptos</h4>
          <ul className="space-y-1 text-sm cursor-pointer">
            <li>Buy Bitcoin</li>
            <li>Buy Ethereum</li>
            <li>Buy Solana</li>
            <li>Buy Ripple</li>
            <li>Buy Dogecoin</li>
            <li>Buy Shiba Inu</li>
            <li>Buy Pepecoin</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-10 text-sm text-gray-700">
        <div className="flex justify-between flex-row">

          <div className="mb-6">
            <h5 className="font-semibold">Contact Us</h5>
            <p className="mt-2">Press Enquiries write to <a href="mailto:media.queries@coindcx.com" className="text-blue-600">media.queries@coindcx.com</a></p>
            <p>Regulatory Issues/Enforcement Authorities: <a href="mailto:legal@coindcx.com" className="text-blue-600">legal@coindcx.com</a></p>
            <p>For Grievance Redressal, <a href="#" className="text-blue-600">Click here</a> to know more.</p>
          </div>
          
          <div>
            <h5 className="font-semibold">Follow us</h5>
            <div className="flex mt-2 items-center gap-4 mb-6">
              <BsGlobe className="text-xl text-gray-800" />
              <FaTelegram className="text-xl text-gray-800" />
              <FaLinkedin className="text-xl text-gray-800" />
              <FaInstagram className="text-xl text-gray-800" />
              <FaYoutube className="text-xl text-gray-800" />
            </div>
          </div>
        </div>

        <div>
          <h5 className="font-semibold mb-1">Disclaimer</h5>
          <p className="text-xs text-gray-600">
            Crypto products & NFTs are unregulated and can be highly risky. There may be no regulatory recourse for any loss from such transactions.
            The information and material contained herein are subject to change without prior notice including prices which may fluctuate based on market demand and supply.
            The material available on the site is proprietary to CoinDCX, its parent, Licensor and/or its affiliates and is for informational purposes and informed investors only.
            This material is not: (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy,
            or (ii) intended to provide accounting, legal, or tax advice, or investment recommendations.
          </p>
          <p className="text-xs mt-3 text-gray-600">
            *Data sourced from Looker app as on 01st May,2023 <br />
            *Data as on 01st May,2023 <br />
            *Quarterly trading volume for Q2 FY’23. Currency conversion rate applied as in data capturing period <br />
            *FIU Registered entity, NEBLIO TECHNOLOGIES PVT LTD <br />
            *Certified in India for May 2023-24 <br />
            *Leverage differs as per token
          </p>
        </div>
        <p className="mt-3 font-semibold text-gray-600">
          © 2025 All rights reserved
        </p>
      </div>
    </footer>
  );
};

