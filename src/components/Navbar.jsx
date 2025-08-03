import React, { useState } from "react";
import { FaApple, FaSearch, FaShoppingBag, FaBars,FaTimes } from "react-icons/fa"
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-white px-4 py-3 shadow-sm sticky top-0 z-50 ">
            <div className="flex items-center justify-evenly max-w-8xl ">

                <div className="text-xl px-0 ">
                    <FaApple />
                </div>

                <ul className="hidden md:flex gap-7 text-16px text-gray-700">

                    <li className="cursor-pointer hover:text-black">Store</li>
                    <li className="cursor-pointer hover:text-black">Mac</li>
                    <li className="cursor-pointer hover:text-black">iPad</li>
                    <li className="cursor-pointer hover:text-black">iPhone</li>
                    <li className="cursor-pointer hover:text-black">Watch</li>
                    <li className="cursor-pointer hover:text-black">AirPods</li>
                    <li className="cursor-pointer hover:text-black">TV & Home</li>
                    <li className="cursor-pointer hover:text-black">Entertainment</li>
                    <li className="cursor-pointer hover:text-black">Accessories</li>
                    <li className="cursor-pointer hover:text-black">Support</li>

                </ul>
                <div className="flex justify-between md:flex items-center gap-7 text-lg ">
                    <FaSearch className="cursor-pointer" />
                    <FaShoppingBag className="cursor-pointer" />
                    { menuOpen ? (
                        <FaTimes className="md:hidden cursor-pointer" onClick={() => setMenuOpen(false)} />
                    ) : (
                        <FaBars className="md:hidden cursor-pointer" onClick={() => setMenuOpen(true)} />
                    )}

                    {/* <FaBars className="md:hidden cursor-pointer"
                        onClick={() => setMenuOpen(!menuOpen)}
                    /> */}
                </div>
            </div>
            <div className="sm:text-4px md:flex justify-center mt-2">
                <p className="">Get up to 12 months of No Cost EMI plus up to ₹8000.00 instant cashback on selected products with eligible cards.</p>
                <p className="text-blue-500 hover:underline">Shop</p>

            </div>

            {menuOpen && (
                <ul className="flex flex-col md:hidden gap-4 mt-4 p-8 bg-gray-100 text-gray-700 text-base font-medium">
                    <li className="hover:text-black cursor-pointer">Store</li>
                    <li className="hover:text-black cursor-pointer">Mac</li>
                    <li className="hover:text-black cursor-pointer">iPad</li>
                    <li className="hover:text-black cursor-pointer">iPhone</li>
                    <li className="hover:text-black cursor-pointer">Watch</li>
                    <li className="hover:text-black cursor-pointer">AirPods</li>
                    <li className="hover:text-black cursor-pointer">TV & Home</li>
                    <li className="hover:text-black cursor-pointer">Entertainment</li>
                    <li className="hover:text-black cursor-pointer">Accessories</li>
                    <li className="hover:text-black cursor-pointer">Support</li>
                </ul>
            )}


        </nav>

    )
}

export default Navbar