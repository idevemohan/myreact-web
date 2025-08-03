import React from "react";
import macImage from "../assets/macbo1.jpg";

const MacSec = () => {
    return (

        <div className="mt-5 p-12"
            style={{

                backgroundImage: `url(${macImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
            }}>

            <h1 className="text-5xl font-bold  text-center">MacBook Pro</h1>
            <h2 className="text-2xl text-gray-900 text-center mt-4">Silver Colour</h2>
            <h1 className="text-3xl text-gray-900 font-normal text-center">High Performance with M4.</h1>

             <div className="mt-6 flex justify-center gap-6 ">
                <button className="bg-blue-500 text-white text-lg px-8 py-3 rounded-3xl hover:bg-blue-400">Learn more</button>
                <button className=" text-blue-500 bg-transparent text-lg px-8 py-3 rounded-3xl border border-blue-500 hover:bg-blue-500 hover:text-white ">Buy</button>
            </div>

            <p className="mt-10 text-xl text-center font-semibold">
                <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent inline-block">
                    Built for Apple
                </span>{" "}
                <span className="bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent inline-block">
                    Intelligence
                </span>
            </p>

        </div>

    )

}

export default MacSec