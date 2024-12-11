import React, { useState } from "react";
import Bg from "../assets/images/pricing-bg.jpg"
const Appointment = () => {
    const [formData, setFormData] = useState({ name: "", phone: "", email: "", date: "", service: "" });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Appointment Booked:", formData);
        alert("Your appointment has been booked! We Will Call you");
        setFormData({ name: "", phone: "", email: "", date: "", service: "" });
    };

    return (
        <section id="appointment" className="py-16 bg-gray-100 relative" style={{ backgroundImage: `url(${Bg})` }}>
            <div className="absolute inset-0 bg-black bg-opacity-60 mix-blend-multiply z-0"></div>
            <div className="container mx-auto px-4 z-10 relative">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-white text-3xl font-bold mb-8">Book an Appointment</h2>
                    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white shadow-lg p-6 rounded">
                        <div className="mb-4">
                            <label className="block text-left text-gray-600 mb-2" htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                                placeholder="Enter Your full name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-left text-gray-600 mb-2" htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                                placeholder="+1 123 456 698"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-left text-gray-600 mb-2" htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                                placeholder="Enter your Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-left text-gray-600 mb-2" htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-left text-gray-600 mb-2" htmlFor="service">Select Service</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                className="w-full border border-gray-300 p-2 rounded"
                                required
                            >
                                <option value="" disabled>Select a service</option>
                                <option value="Haircut">Haircut</option>
                                <option value="Beard Trim">Beard Trim</option>
                                <option value="Shave">Shave</option>
                            </select>
                        </div>
                        <button
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded w-full"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>


    );
};

export default Appointment;