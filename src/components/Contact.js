import React from "react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-8">
                <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Contact Us</h2>
                <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12">
                    <div className="lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                        <p className="text-gray-700 text-lg mb-6">
                            Have questions or want to book an appointment? We're here to help!
                        </p>
                        <a
                            href="tel:+1234567890"
                            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-full inline-block mb-6 shadow-lg transition duration-300">
                            Call Us: +1 234 567 890
                        </a>
                        <p className="text-gray-700 text-lg mb-4">Or email us at:</p>
                        <a
                            href="mailto:info@barbershop.com"
                            className="text-yellow-600 hover:text-yellow-700 font-bold text-lg underline transition duration-300">
                            info@barbershop.com
                        </a>
                    </div>
                    <div className="lg:w-1/2">
                        <iframe
                            className="rounded-lg shadow-lg"
                            width="100%"
                            height="400"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight="0"
                            marginWidth="0"
                            src="https://maps.google.com/maps?width=550&amp;height=500&amp;hl=en&amp;q=123%20Barber%20St,%20Suite%20100,%20City,%20Country+(BarberShop)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
