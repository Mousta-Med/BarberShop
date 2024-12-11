import React from "react";
import Haircut from "../assets/images/gallery-3.jpg"
import BeardTrim from "../assets/images/gallery-1.jpg"
import Shave from "../assets/images/gallery-2.jpg"

const services = [
    {
        title: "Haircut",
        description: "Classic and modern cuts tailored to your style.",
        img: Haircut
    },
    {
        title: "Beard Trim",
        description: "Keep your beard sharp and clean.",
        img: BeardTrim
    },
    {
        title: "Shave",
        description: "Experience a smooth, relaxing shave.",
        img: Shave
    }
];

const Services = () => {
    return (
        <section id="services" className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white shadow-lg p-6 rounded text-center">
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <img
                                className="w-40 h-40 mx-auto mb-4 rounded-full object-cover shadow-md"
                                src={service.img}
                                alt={service.title}
                            />
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default Services;