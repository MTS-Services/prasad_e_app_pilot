import banner1 from '../images/banner1.png';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';

const Gallery = () => {
    const galleryItems = [
        {
            image: banner1,
            category: 'Agriculture',
            title: 'Precision crop monitoriny',
            size: 'small'
        },
        {
            image: banner2,
            category: 'Construction',
            title: 'Construction site progress',
            size: 'small'
        },
        {
            image: banner3,
            category: 'Energy',
            title: 'Solar farm inspection',
            size: 'large'
        }
    ];

    return (
        <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-10 bg-gray-50">
            <div className="lg:w-10/12 xl:max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Gallery
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
                        Explore our portfolio of aerial photography and videography. Real projects, real results from across India.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
                    {/* First Row - Two Cards */}
                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer">
                        <img 
                            src={galleryItems[0].image}
                            alt={galleryItems[0].title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 bg-white/5 backdrop-blur-xs w-full text-white">
                            <p className="text-xs md:text-sm mb-1 opacity-90">{galleryItems[0].category}</p>
                            <h3 className="text-lg md:text-xl font-semibold">{galleryItems[0].title}</h3>
                        </div>
                    </div>

                    <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden group cursor-pointer">
                        <img 
                            src={galleryItems[1].image}
                            alt={galleryItems[1].title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 bg-white/5 backdrop-blur-xs w-full text-white">
                            <p className="text-xs md:text-sm mb-1 opacity-90">{galleryItems[1].category}</p>
                            <h3 className="text-lg md:text-xl font-semibold">{galleryItems[1].title}</h3>
                        </div>
                    </div>

                    {/* Second Row - Full Width Card */}
                    <div className="relative md:col-span-2 h-64 md:h-96 rounded-2xl overflow-hidden group cursor-pointer">
                        <img 
                            src={galleryItems[2].image}
                            alt={galleryItems[2].title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6 bg-white/5 backdrop-blur-xs w-full text-white">
                            <p className="text-xs md:text-sm mb-1 opacity-90">{galleryItems[2].category}</p>
                            <h3 className="text-lg md:text-xl font-semibold">{galleryItems[2].title}</h3>
                        </div>
                    </div>
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded transition-colors duration-300">
                        View All Services
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Gallery;