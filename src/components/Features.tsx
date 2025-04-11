import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { QrCodeIcon } from "lucide-react";

const tabs = [
  {
    label: "Buy/Sell",
    media: "https://coindcx.com/wp-content/uploads/2024/03/1-Buy-Sell-Screen-1-1.mp4",
    description: "Dive into a diverse crypto pool; buy and sell over 500 cryptos with INR"
  },
  {
    label: "Earn",
    media: "https://coindcx.com/wp-content/uploads/2024/03/2-Earn-Screen-1.mp4",
    description: "Make your crypto work for you; earn passive income effortlessly"
  },
  {
    label: "Coins Trading",
    media: "https://coindcx.com/wp-content/uploads/2024/03/5-Spot-Screen-1.mp4",
    description: "Instant access, Infinite trading opportunities"
  },
  {
    label: "Futures Trading",
    media: "https://coindcx.com/wp-content/uploads/2024/03/3-Futures_Screen-1.mp4",
    description: "Amplify your trades with up to 100x leverage across 270+ crypto pairs*"
  },
  {
    label: "Trade Signals",
    media: "https://coindcx.com/wp-content/uploads/2024/03/4-Signal-Screen-1.mp4",
    description: "Trade with the tide; gain insights from the top CoinDCX traders’ signals"
  },
  {
    label: "Web3",
    media: "https://coindcx.com/wp-content/uploads/2024/06/5-Web3-Screen.mp4",
    description: "Access Web3 opportunities with ease, powered by Okto"
  },
];

export const Features = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="bg-white py-16 px-6 md:px-48 flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
      {/* Left side - Tabs */}
      <div className="flex flex-col gap-4 w-full md:w-1/2 text-left">
        <h2 className="text-4xl font-semibold mb-4">One platform,<br />endless possibilities</h2>

        {tabs.map((tab) => (
          <div
            key={tab.label}
            className={`cursor-pointer px-2 py-1 text-xl font-semibold transition-all duration-300 ${activeTab.label === tab.label ? "text-black font-semibold" : "text-gray-500"
              }`}
            onMouseEnter={() => setActiveTab(tab)}
          >
            {tab.label}
            {activeTab.label === tab.label && (
              <span className="inline-block ml-1">→</span>
            )}
          </div>
        ))}

        <div>
          <p className="text-sm text-gray-500 mb-2">Download app</p>
          <div className="flex space-x-2">
            <Button variant="outline" className="gap-2 w-30 text-white bg-[#4965d2]  font-semibold hover:text-white hover:bg-[#4965d2] cursor-pointer">
              <QrCodeIcon className="text-white h-4 w-4" />
              Scan QR
            </Button>
            <Button variant="outline" className="bg-[#4965d2]  gap-2 px-4 py-2  hover:bg-[#4965d2] cursor-pointer">
              <FaApple className=" text-white" />
            </Button>
            <Button variant="outline" className=" bg-[#4965d2] gap-2 px-4 py-2  hover:bg-[#4965d2] cursor-pointer">
              <FaGooglePlay className="text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Right side - Media with emerging phone from background */}
      <div className="relative w-full md:w-1/2 h-96 md:h-auto flex flex-col items-center">
        {/* Background image container */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            <img
              src="https://coindcx.com/wp-content/uploads/2024/03/round-bg-video-.png"
              alt="Background"
              className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg"
            />
          </div>
        </div>

        {/* Phone container that emerges from bottom */}
        <div className="relative z-10 mt-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.media}
              className="relative"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
            >
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden w-64 mx-auto p-2">
                <div className="rounded-2xl overflow-hidden">
                  <video
                    src={activeTab.media}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic description text based on active tab */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab.label}
            className=" text-center mt-8  relative z-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab.description}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
};