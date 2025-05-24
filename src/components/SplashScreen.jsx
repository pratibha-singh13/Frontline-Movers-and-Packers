import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const SplashScreen = ({ onFinish }) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            onFinish();
        }, 3000); // Show splash screen for 3 seconds

        return () => clearTimeout(timer);
    }, [onFinish]);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
            <img
                src={logo}
                alt="Frontline Movers & Packers Logo"
                className="w-44 h-44 animate-pulse mb-4"
            />
            <h1 className="text-3xl font-bold text-[#4B0082] mb-2">
                Frontline Movers & Packers
            </h1>
            <p className="text-lg text-[#F9A825] italic mb-1">
                "Relations with relocations..."
            </p>
            <p className="text-md text-gray-700 text-center max-w-md px-4 italic">
                "We move what moves you – safely, swiftly, professionally."
            </p>
        </div>
    );
};

export default SplashScreen;
