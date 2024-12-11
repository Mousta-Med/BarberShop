import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold mb-4 text-yellow-500">BarberShop</h2>
                        <p className="text-sm text-gray-400">&copy; 2024 BarberShop. All rights reserved.</p>
                    </div>
                    <nav className="mt-6 md:mt-0">
                        <ul className="flex justify-center md:justify-end space-x-6">
                            <li>
                                <a href="#services" className="text-lg hover:text-yellow-500">Services</a>
                            </li>
                            <li>
                                <a href="#about" className="text-lg hover:text-yellow-500">About</a>
                            </li>
                            <li>
                                <a href="#appointment" className="text-lg hover:text-yellow-500">Appointment</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-lg hover:text-yellow-500">Contact</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
                    <div className="text-center md:text-left mb-6 md:mb-0">
                        <p className="text-sm text-gray-400">Visit us at: 123 Barber St, Suite 100, City, Country</p>
                        <p className="text-sm text-gray-400">Phone: (123) 456-7890</p>
                        <p className="text-sm text-gray-400">Email: contact@barbershop.com</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-gray-400">Follow us on:</p>
                        <div className="flex justify-center space-x-4 mt-2">
                            <a href="#" className="text-yellow-500 hover:text-white">
                                <i className="fa fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-yellow-500 hover:text-white">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="#" className="text-yellow-500 hover:text-white">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
