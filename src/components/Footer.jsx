import React from "react";

const Footer = () => {
    const FooterData = [
        {
            title: "Shop & Learn",
            links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods",
                "TV & Home", "AirTag", "Accessories", "Gift Cards"],
        },
        {
            title: "Account",
            links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"],
        },
        {
            title: "Entertainment",
            links: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade",
                "Apple Podcasts", "Apple Books", "App Store"],
        },
        {
            title:"Apple Store",
            links:["Find a Store","Genius Bar","Today At Apple","Group Reservations",
                "Apple Camp","Apple Trade In","Ways To Buy","Recycling Programme",
                "Order Status","Shopping Help"]
        },
        {
            title: "Apple Values",
            links: ["Accessibility", "Environment", "Education", "Privacy", "Supply Chain Innovation"],
        },
        {
            title: "About Apple",
            links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"]
        },
         {
            title: "For Business",
            links: ["Apple and Business", "Shop for Business"],
        },
        {
            title: "For Education",
            links: ["Apple and Education", "Shop for Education", "Shop for University"],
        },
        {
            title: "For Healthcare",
            links: ["Apple in Healthcare", "Mac in Healthcare", "Health on Apple Watch"],
        },
        {
            title: "Apple Wallet",
            links: ["Wallet"],
        }
    ];

    const FooterMenu = ({ title, links }) => {
        const [isOpen, setIsOpen] = React.useState(false);

        return (
            <div className="mt-6">
                <h4
                    className="text-black font-bold cursor-pointer flex justify-between items-center md:cursor-default"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {title}
                    <span className="md:hidden">{isOpen ? "-" : "+"}</span>
                </h4>
                <ul className={`mt-2 ${isOpen ? "block" : "hidden"} md:block`}>
                    {links.map((link, i) => (
                        <li key={i} className="mt-2 hover:underline">{link}</li>
                    ))}
                </ul>
            </div>
        );
    };



    return (
        <div className=" bg-gray-100 text-gray-600 text-xs p-8 mt-8">
            <div className="max-w-5xl mx-auto leading-relaxed">
                <p className="">
                    ◊No Cost EMI is available with the purchase of an eligible product made using qualifying cards on 3-, 6-, 9- or 12-month tenures from most leading card issuers. Eligible AirPods, HomePod and Beats products are available with No Cost EMI on 3- and 6-month tenures only. Monthly pricing is rounded to the nearest rupee. Exact pricing will be provided by your card issuer, subject to your card issuer’s terms and conditions. Minimum order spend applies as per your card issuer’s threshold. No Cost EMI is not available to business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Card eligibility is subject to terms and conditions between you and your card issuer. Offer may be revised or withdrawn at any time without any prior notice. Terms
                </p>
                <p className="mt-4">
                    Representative example:
                </p>
                <p className="mt-2">
                    A purchase of ₹79900.00 repaid over 12 months with an interest rate of 15.99% p.a. and No Cost EMI savings of ₹6514.00 requires monthly payments of ₹6658.00. Total amount payable: ₹79900.00.
                </p>
                <p className="mt-4">
                    ‡Instant cashback is available with the purchase of an eligible product with qualifying American Express, Axis Bank and ICICI Bank cards only. Minimum transaction value of ₹10001.00 applies. Click here to see instant cashback amounts and eligible devices. Instant cashback is available for up to two orders per rolling 90-day period with an eligible card. Card eligibility is subject to terms and conditions between you and your card issuer. Total transaction value is calculated after any trade-in credit or eligible discount is applied. Any subsequent order adjustment(s) or cancellation(s) may result in instant cashback being recalculated, and any refund may be adjusted to account for instant cashback clawback; this may result in no refund being made to you. Offer may be revised or withdrawn at any time without any prior notice. Additional terms apply. Instant cashback is not available to Business customers and cannot be combined with Apple Store for Education or Corporate Employee Purchase Plan pricing. Multiple separate orders cannot be combined for instant cashback.
                </p>
                <p className="mt-2">
                    *Apple Education Pricing is available to current and newly accepted college students and their parents, as well as teachers and staff at all levels. For more information, visit apple.com/in-edu/store.
                </p>
                <p className="mt-4">
                    1. Qualified Purchasers can receive Promotion Savings when they purchase an eligible Mac or iPad with their choice of a Promotion Product at a Qualifying Location. Customers will be charged for all items in their cart, including the Promotion Product. Only one Promotion Product can be obtained per eligible Mac or iPad per Qualified Purchaser. The offer is subject to availability, while supplies last. View full terms and conditions of offer here.
                </p>
                <p className="mt-2">
                    2. Available in two models: AirPods 4 and AirPods 4 with Active Noise Cancellation.
                </p>
                <p className="mt-2">
                    Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, iPhone 15 Pro Max, iPad mini (A17 Pro), and iPad and Mac models with M1 and later, with Siri and device language set to the same supported language, as part of an iOS 18, iPadOS 18 and macOS Sequoia software update. Supported languages include English, French, German, Italian, Portuguese (Brazil), Spanish, Japanese, Korean and Chinese (Simplified). More languages are coming over the course of the year, including Vietnamese. Some features may not be available in all regions or languages.
                </p>
                <p className="mt-2">
                    A subscription is required for Apple TV+.
                </p>
                <p className="mt-2">
                    Features are subject to change. Some features, applications and services may not be available in all regions or all languages.
                </p>
            </div>

            <hr className="border-gray-400 mt-6" />

            <div className="md:grid grid-cols-5 gap-8 mt-6">
                {FooterData.map((section, idx) => (
                    <FooterMenu key={idx}
                        title={section.title}
                        links={section.links} />

                ))}



            </div>
            <p className="mt-6">
                More ways to shop: Find an Apple Store or other retailer near you. Or call 000800 040 1966.
            </p>
            <hr className="border-gray-400 mt-6" />

            <div className="mt-4 flex flex-col md:flex-row justify-between text-sm">
                <div className="flex gap-4">
                    <p>
                        Copyright
                        &copy; 2025 Apple Inc.
                        All Rights Reserved.
                    </p>
                    <p>
                        Privacy Policy | Terms of Use | Sales Policy | Legal | Site Map
                    </p>
                </div>
                <h4>India</h4>
            </div>

        </div>
    )

}

export default Footer