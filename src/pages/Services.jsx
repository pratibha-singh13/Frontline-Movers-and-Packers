// src/components/Services.jsx
import React from 'react';
import { Truck, Home, Building, Car, Shield } from 'lucide-react';

const Services = () => {
    return (
        <section className="bg-white py-12 px-6 md:px-20">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-2 text-gray-800">
                    Welcome to Frontline Movers & Packers
                </h2>
                <p className="text-lg font-medium italic text-blue-600 mb-6">
                    "Relations with Relocations..."
                </p>

                <p className="text-md text-gray-600 mb-8">
                    We specialize in providing professional and reliable relocation services tailored to your needs.
                </p>

                <h3 className="text-2xl font-semibold mb-6 text-gray-700">Our Core Services</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
                    <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition">
                        <Home className="text-blue-600 mb-2" />
                        <h4 className="font-semibold text-lg">House Shifting</h4>
                        <p className="text-sm text-gray-600">Seamless and secure home relocation service.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition">
                        <Building className="text-blue-600 mb-2" />
                        <h4 className="font-semibold text-lg">Office Shifting</h4>
                        <p className="text-sm text-gray-600">Expert handling of your office move with minimal disruption.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition">
                        <Car className="text-blue-600 mb-2" />
                        <h4 className="font-semibold text-lg">Vehicle Transportation</h4>
                        <p className="text-sm text-gray-600">Safe transport of your car or bike to your new location.</p>
                    </div>
                    <div className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition">
                        <Shield className="text-blue-600 mb-2" />
                        <h4 className="font-semibold text-lg">Insurance Coverage</h4>
                        <p className="text-sm text-gray-600">Comprehensive insurance options for total peace of mind.</p>
                    </div>
                </div>

                <div className="mt-10 text-gray-700">
                    <h3 className="text-xl font-semibold">Service Plans We Offer</h3>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                        <li>Normal Plan</li>
                        <li>Premium Plan</li>
                    </ul>
                    <p className="mt-3">
                        <strong>Transportation, GST, and Insurance</strong> are included based on the selected service plan.
                    </p>
                </div>

                <p className="mt-6 text-md font-medium text-gray-800">
                    Thank you for choosing <span className="text-blue-600">Frontline Movers & Packers</span>. We're here to help with all your relocation needs!
                </p>
            </div>
        </section>
    );
};

export default Services;
