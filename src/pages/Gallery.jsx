import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.jpg";
import gallery3 from "../assets/gallery3.jpg";
import gallery4 from "../assets/gallery4.jpg";
import gallery5 from "../assets/gallery5.jpg";
import gallery6 from "../assets/gallery6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const Gallery = () => {
    return (
        <div className="pt-16 px-6 py-12 bg-[#F3F4F6] text-[#333333]">
            <h1 className="text-4xl font-bold text-center text-[#4B0082] mb-12">
                Our Gallery
            </h1>
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {images.map((img, idx) => (
                    <div
                        key={idx}
                        className="overflow-hidden rounded-xl shadow-md bg-white cursor-pointer transition duration-300 hover:shadow-xl hover:ring-4 hover:ring-[#F9A825]"
                    >
                        <img
                            src={img}
                            alt={`gallery-${idx + 1}`}
                            className="w-full h-64 object-cover transform transition duration-300 hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
