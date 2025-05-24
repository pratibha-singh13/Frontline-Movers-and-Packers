import React from "react";

import houseShifting from "../assets/house-shifting.jpg";
import officeShifting from "../assets/office-shifting.jpg";
import carBikeTransport from "../assets/car-bike-transport.jpg";
import insurance from "../assets/insurance.jpg";
import deals from "../assets/deals.jpg";
import gst from "../assets/gst.jpg";
import odc from "../assets/ODC-Trailer.jpg";
import trailer from "../assets/Trailer.jpg";
import fullLoad from "../assets/full-load-truck.jpg";
import openTruck from "../assets/open-truck.jpg";
import tyreTruck from "../assets/tyre-truck.jpg";
import refrigerated from "../assets/refrigerated.jpg";
import singleAxle from "../assets/s-xl-container.jpg";
import multiAxle from "../assets/m-xl-container.jpg";
import chotaHathi from "../assets/chota-hathi.jpg";
import tata from "../assets/tata-407.jpg";
import industrial from "../assets/industrial.jpg";
import pan from "../assets/pan.jpg";

const services = [
    // 🏠 Relocation Services
    {
        title: "Pan India Transport Service",
        image: pan,
        description:
            "We provide reliable and efficient goods transport services across all states and major cities of India, ensuring seamless connectivity and timely deliveries.",
    },
    {
        title: "House Shifting",
        image: houseShifting,
        description: "Safe and efficient house relocation with careful packing and quick delivery.",
    },
    {
        title: "Office Shifting",
        image: officeShifting,
        description: "Minimize downtime with professional office relocation handled with care.",
    },

    // 🛻 Vehicle Transport Services
    {
        title: "Car/Bike Transport",
        image: carBikeTransport,
        description: "Door-to-door car or bike transport with full safety and secure carriers.",
    },
    {
        title: "Chota Hathi Transport Service",
        image: chotaHathi,
        description: "Light commercial vehicle services, commonly known as 'Chota Hathi', suitable for intra-city deliveries.",
    },

    {
        title: "Refrigerated Goods Transport",
        image: refrigerated,
        description: "Reliable transportation for temperature-sensitive goods using advanced refrigerated vehicles to ensure freshness and compliance with cold chain logistics.",
    },
    {
        title: "Industrial Goods Transport",
        image: industrial,
        description: "Specialized transportation services for heavy machinery, raw materials, and industrial equipment, ensuring safe handling, timely delivery, and compliance with industry standards across sectors.",
    }, {
        title: "Single Axle Container Transport",
        image: singleAxle,
        description: "Cost-effective container transport ideal for moderate loads and short to medium distances. Perfect for light to medium cargo with efficient maneuverability.",
    },
    {
        title: "Multi Axle Container Transport",
        image: multiAxle,
        description: "Heavy-duty transport solution for large, bulky, or high-volume shipments. Ensures stable handling and smooth movement over long distances.",
    },
    {
        title: "Tata 407 Transport Service",
        image: tata,
        description: "Compact and efficient Tata 407 truck services for small to medium-sized cargo deliveries.",
    },

    // 🧾 Support & Documentation
    {
        title: "Insurance Coverage",
        image: insurance,
        description: "Full transit insurance provided to ensure worry-free movement.",
    },
    {
        title: "GST Billing",
        image: gst,
        description: "We offer proper GST bills and ensure all documentation is done smoothly.",
    },
    {
        title: "Normal & Premium Deals",
        image: deals,
        description: "Choose from flexible packages according to your comfort and budget.",
    },

    // 🏗️ Heavy Cargo & Specialized Transport
    {
        title: "ODC Trailer Transport",
        image: odc,
        description: "Specialized transportation for Over Dimensional Cargo (ODC) across India, ensuring safe and efficient delivery of oversized goods.",
    },
    {
        title: "Trailer Transport Service",
        image: trailer,
        description: "Comprehensive trailer transport solutions for various cargo types, tailored to meet diverse logistical needs.",
    },
    {
        title: "Full Load Truck Transport",
        image: fullLoad,
        description: "Dedicated full truckload services ensuring timely and secure delivery of goods without intermediate stops or transfers.",
    },
    {
        title: "20Ft, 22Ft, 32Ft Open Truck Transport",
        image: openTruck,
        description: "Open truck options in various sizes to accommodate different cargo dimensions, suitable for materials not affected by weather conditions.",
    },
    {
        title: "10 Tyre, 12 Tyre Truck Transport",
        image: tyreTruck,
        description: "Heavy-duty truck services with 10 or 12 tyres, designed for transporting substantial loads over long distances.",
    },

];


const Services = () => {
    return (
        <div className="pt-20 px-6 pb-16 bg-gradient-to-b from-[#F9FAFB] to-[#f3f4f6] text-gray-800">
            <h1 className="text-4xl font-bold text-center text-[#4B0082] mb-12">
                Our Services
            </h1>

            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
                    >
                        <img
                            src={service.image}
                            alt={service.title}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-[#4B0082] mb-2">
                                {service.title}
                            </h2>
                            <p className="text-gray-600 text-sm">
                                {service.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
