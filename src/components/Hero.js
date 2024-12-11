import React from "react";
import HeroImage from "../assets/images/hero-banner.jpg"

const Hero = () => {
    return (
        <section
            className="bg-cover bg-center h-[80vh] flex items-center justify-center text-center text-white"
            style={{ backgroundImage: `url(${HeroImage})` }}
        >
            <div className="bg-black bg-opacity-50 p-10 rounded-md">
                <h2 className="text-4xl font-bold mb-4">Your Style, Our Passion</h2>
                <p className="text-lg mb-6">Professional grooming services tailored just for you.</p>
                <a
                    href="#appointment"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded"
                >
                    Book Now
                </a>
            </div>
        </section>
    );
};

export default Hero;