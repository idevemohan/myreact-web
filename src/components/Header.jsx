import React from "react";
import headerImage from "../assets/airpods.jpg";
import macImage from "../assets/macc.png";
import ipadImage from "../assets/ipad.png";

const Header = () => {
    return (
        <section className="mt-2 p-4 relative flex flex-col items-center justify-center"
            style={{
                backgroundImage: `url(${headerImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
            }}>
            <div className="relative w-fit">
                <h1 className="bg-blue-500 text-white px-8 py-2 text-3xl font-bold rounded-3xl relative leading-tight text-left max-w-xs">
                    Buy Mac <br />
                    or iPad <br />
                    for College
                </h1>

                <img src={macImage} alt="Mac" className=" absolute  top-[-35px] right-[-50px] w-[120px] h-auto object-contain" />
                <img src={ipadImage} alt="iPad" className="absolute bottom-[-0px] right-[-50px] w-[70px] h-auto object-contain" />

            </div>
            <h3 className="bg-blue-500 text-white text-xl font-bold mt-2 rounded-3xl rounded-br-none px-3 py-1 relative">
                With Education Savings.
                
            </h3>

            <h1 className="bg-blue-500 text-white font-bold text-3xl mt-3 rounded-3xl rounded-br-none px-8 py-4">
                Choose <br /> 
                Airpods or <br />
                an eligible <br />
                accessory
            </h1>
           
           <button className="text-blue-500 bg-transparent border border-blue-500 rounded-2xl text-xl mt-5 px-8 py-2 hover:bg-blue-500 hover:text-white">Shop</button>

        </section>
    )

}

export default Header