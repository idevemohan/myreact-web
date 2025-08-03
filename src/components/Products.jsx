import React from "react";
import { FaApple } from "react-icons/fa";
import ipadImage from "../assets/ipad1.jpg"
import iwatchImage from "../assets/iwatch.jpg"
import macBookImage from "../assets/macstu.jpg"
import airpodImage from "../assets/airPodd.jpg"
import macProImage from "../assets/maccc.jpg"
import tradeImage from "../assets/trade1.jpg"

const Products = () => {
    return (
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6 m-6">

            <div className="w-full h-[500px] bg-cover bg-center text-center p-16 "
                style={{
                    backgroundImage: `url(${ipadImage})`

                }}>
                <h1 className="text-5xl text-white font-bold text-center">
                    iPad Pro
                </h1>

                <h3 className="text-white text-xl font-medium mt-2">
                    Unbelievably thin.Incredibly powerful.
                </h3>

                <div className="mt-4 flex gap-3 justify-center">
                    <button className="bg-blue-500 text-white rounded-3xl px-6 py-2 hover:bg-blue-400 ">Learn more</button>
                    <button className="bg-transparent text-blue-500 border border-blue-500 rounded-3xl px-5 py-2 hover:bg-blue-500 hover:text-white">Buy</button>
                </div>

                <div>
                    <p className="mt-40 text-xl font-semibold ">
                        <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
                            Built for Apple
                        </span>{" "}
                        <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent inline-block">
                            Intelligence
                        </span>
                    </p>
                </div>


            </div>
            <div className="w-full h-[500px] bg-cover bg-center flex flex-col items-center justify-center "
                style={{
                    backgroundImage: `url(${iwatchImage})`
                }}>
                <div className="flex items-center gap-2 mb-0 ">
                    <span className="text-white text-3xl"><FaApple /></span>
                    <h1 className="text-white text-4xl font-extrabold">WATCH</h1>
                </div>
                <p className="font-bold text-white  text-center">SERIES 10</p>
                <h3 className="text-white font-semibold text-xl">
                    Thinstant classic.
                </h3>

                <div className="mt-4 flex gap-3 justify-center">
                    <button className="bg-blue-500 text-white rounded-3xl px-6 py-2 hover:bg-blue-400 ">Learn more</button>
                    <button className="bg-transparent text-blue-500 border border-blue-500 rounded-3xl px-5 py-2 hover:bg-blue-500 hover:text-white">Buy</button>
                </div>

            </div>

            <div className="w-full h-[500px] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${macBookImage})`
                }}>
                <div className="text-center">
                    <h1 className="text-yellow-500 font-extrabold text-6xl  p-6">
                        MacBook For Students
                    </h1>
                    <button className="bg-white  text-black rounded-3xl px-6 py-2 mt-36 hover:bg-gray-200">
                        Learn more
                    </button>
                </div>

            </div>
            <div className="w-full h-[500px] bg-cover bg-center"
                style={{
                    backgroundImage: `url(${airpodImage})`
                }}>
                <div className=" text-center pt-36 ">
                    <h1 className="text-white text-4xl font-semibold ">
                        AirPods 4
                    </h1>
                    <p className="text-white font-medium text-xl mt-2 ">
                        Iconic.Now supersonic</p>
                    <h4 className="text-white font-medium text-xl mt-2">
                        Available with Active Noise Cancellation.
                    </h4>

                    <div className="mt-4 flex gap-3 justify-center">
                        <button className="bg-blue-500 text-white rounded-3xl px-6 py-2 hover:bg-blue-400 ">Learn more</button>
                        <button className="bg-transparent text-blue-500 border border-blue-500 rounded-3xl px-5 py-2 hover:bg-blue-500 hover:text-white">Buy</button>
                    </div>

                </div>

            </div>
            <div className="w-full h-[500px] bg-cover bg-center text-center p-14"
                style={{
                    backgroundImage: `url(${macProImage})`
                }}>

                <h1 className="text-white font-bold text-4xl ">MacBook Pro</h1>
                <p className="text-white mt-4 text-xl">A Work of smart.</p>
                <div className="mt-4 flex gap-3 justify-center">
                    <button className="bg-blue-500 text-white rounded-3xl px-6 py-2 hover:bg-blue-400 ">Learn more</button>
                    <button className="bg-transparent text-blue-500 border border-blue-500 rounded-3xl px-5 py-2 hover:bg-blue-500 hover:text-white">Buy</button>
                </div>
            </div>

            <div className="w-full h-[500px] bg-cover bg-center text-center p-14"
                style={{
                    backgroundImage: `url(${tradeImage})`
                }}>
                <h1 className="font-bold text-3xl flex justify-center mt-9">
                    <FaApple /> Trade In
                </h1>
                <p className="mt-2 text-xl font-medium">Upgrade and save.It's that easy.</p>
                <button className="bg-blue-500 text-white rounded-3xl mt-4 px-4 py-2 hover:bg-blue-400">
                    Get your estimate
                </button>

            </div>

        </div>

    )


}

export default Products