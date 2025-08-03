import React from "react";
import phoneImage from "../assets/iPhone4.jpg"

const PhoneSec = () => {
    return (
        <div className="mt-4 p-10 text-center"
            style={{
                backgroundImage: `url(${phoneImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',

            }}>

            <h1 className="text-5xl font-semibold">iPhone</h1>
            <h2 className="mt-4 text-2xl text-gray-800 font-medium">Meet the iPhone 16 family</h2>
            <div className="mt-4 flex justify-center gap-6 ">
                <button className="bg-blue-500 text-white text-lg px-8 py-3 rounded-3xl hover:bg-blue-400">Learn more</button>
                <button className=" text-blue-500 bg-transparent text-lg px-8 py-3 rounded-3xl border border-blue-500 hover:bg-blue-500 hover:text-white ">Shop iPhone</button>
            </div>
  
            <p className="mt-10 text-xl font-semibold">
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

export default PhoneSec