import { ArrowRight } from "lucide-react"

export const CryptoPrices = () => {
  const coins = [
    {
      name: "Bitcoin",
      symbol: "BTC",
      price: "₹71,04,028.92",
      icon: "https://coindcx.com/wp-content/uploads/2024/02/btc.svg",
    },
    {
      name: "Ethereum",
      symbol: "ETH",
      price: "₹1,38,364.09",
      icon: "https://coindcx.com/wp-content/uploads/2024/02/ethereum.svg",
    },
    {
      name: "Ripple",
      symbol: "XRP",
      price: "₹178.47",
      icon: "https://coindcx.com/wp-content/uploads/2024/02/xrp.svg",
    },
    {
      name: "BNB",
      symbol: "BNB",
      price: "₹51,319.79",
      icon: "https://coindcx.com/wp-content/uploads/2024/03/bnbinr.svg",
    },
    {
      name: "Solana",
      symbol: "SOL",
      price: "₹13,319.73",
      icon: "https://coindcx.com/wp-content/uploads/2024/03/solinr.svg",
    },
  ]

  return (
    <section className="bg-[radial-gradient(at_center_center,_#132D97_0%,_#06063C_100%)] text-white py-30 px-6 md:pl-48">
      <div className="flex justify-between items-center mb-15">
        <h2 className="text-4xl font-semibold">Top crypto today</h2>
        <button className="flex items-center text-sm md:text-base text-white font-medium hover:underline pr-48">
          View All 500+ Assets <ArrowRight className="ml-1 h-4 w-4" />
        </button>
      </div>

      <div className="overflow-x-auto whitespace-nowrap scrollbar-hide flex gap-4">
        {coins.map((coin, index) => (
          <div
            key={index}
            className="flex  items-center bg-[#293f9b] px-5 py-4 rounded-2xl space-x-4 "
          >
            <img src={coin.icon} alt={coin.name} className="h-8 w-8 rounded-full" />
            <div className="flex flex-col">
              <span className="text-white font-medium">{coin.name}</span>
              <span className="text-sm text-gray-300">{coin.symbol}</span>
            </div>
            <div className="ml-auto text-white font-semibold">{coin.price}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
