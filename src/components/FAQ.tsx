import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export const FAQ = () => {
    return (
        <section className="w-full mx-auto px-4 md:px-8 lg:px-16 xl:px-24 2xl:px-48 py-6 md:py-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-8">
                Have Questions? We've Got Answers
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-2">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer hover:no-underline">Is crypto legal in India</AccordionTrigger>
                    <AccordionContent className="text-base md:text-lg text-muted-foreground">
                        Yes, crypto is legal in India. The country does not have a specific ban on crypto, but it is regulated under certain financial guidelines. Cryptos like Bitcoin, Ethereum, and XRP can be legally traded, bought, and sold, provided users comply with the legal frameworks and tax regulations.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer hover:no-underline">Which is the best crypto exchange in India</AccordionTrigger>
                    <AccordionContent className="text-base md:text-lg text-muted-foreground">
                        CoinDCX is considered one of the best crypto exchanges in India due to its secure platform, user-friendly interface, and wide range of supported cryptos. It offers seamless buying, selling, and trading services while ensuring compliance with local regulations and security standards.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer hover:no-underline">How to buy bitcoin and other crypto in India?</AccordionTrigger>
                    <AccordionContent className="text-base md:text-lg text-muted-foreground">
                        To buy Bitcoin and other cryptos in India, sign up on CoinDCX, complete the KYC verification, deposit INR using your preferred payment method, and select the crypto you want to purchase. Once the transaction is confirmed, you can easily store and track your holdings through the app.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                    <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer hover:no-underline">Which is the best crypto app for trading?</AccordionTrigger>
                    <AccordionContent className="text-base md:text-lg text-muted-foreground">
                        CoinDCX is the top crypto trading app in India, offering a user-friendly interface, 24/7 access, and robust security features. It supports over 500 cryptos and provides real-time updates, making it ideal for both beginners and experienced traders.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                    <AccordionTrigger className="text-lg md:text-xl lg:text-2xl font-semibold cursor-pointer hover:no-underline">What is the safest crypto exchange?</AccordionTrigger>
                    <AccordionContent className="text-base md:text-lg text-muted-foreground">
                        CoinDCX is known for its strong security measures, including two-factor authentication (2FA), cold storage for assets, and regulatory compliance. These features make it one of the safest crypto exchanges in India for buying, selling, and storing cryptos.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <div className="flex flex-col md:flex-row flex-wrap gap-3 md:gap-5 mt-8 md:mt-12">
                <div className="flex justify-center md:justify-start">
                    <img
                        src="https://coindcx.com/wp-content/uploads/2024/02/coindcx-logo.svg"
                        alt="CoinDCX Logo"
                        className="h-6"
                    />
                </div>
                <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <img src="https://coindcx.com/wp-content/uploads/2024/02/FIU-registered-blue-2025.svg" alt="FIU" className="h-8 md:h-10" />
                    <img src="https://coindcx.com/wp-content/uploads/2024/02/ISO-27001_2022-blue.svg" alt="ISO 27001:2022" className="h-8 md:h-10" />
                    <img src="https://coindcx.com/wp-content/uploads/2024/02/ISO-27701_2019-blue.svg" alt="ISO 27701:2019" className="h-8 md:h-10" />
                    <img src="https://coindcx.com/wp-content/uploads/2024/02/registered-users-blue-2025.svg" alt="Registered Users" className="h-8 md:h-10" />
                    <img src="https://coindcx.com/wp-content/uploads/2024/02/crypto-assets-blue-2025.svg" alt="Crypto Assets" className="h-8 md:h-10" />
                    <img src="https://coindcx.com/wp-content/uploads/2024/02/qtrly-trading-vol-blue-2025.svg" alt="Quarterly Trading Vol" className="h-8 md:h-10" />
                </div>
            </div>
        </section>
    )
}