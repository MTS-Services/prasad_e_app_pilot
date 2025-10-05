import card from "../images/card1.png"
import card1 from "../images/card2.jpg"
import { FaCalendarAlt } from 'react-icons/fa';

const BlogResearch = () => {
    const blogs = [
        {
            image: card,
            category: 'Industry Insights',
            categoryColor: 'text-green-600',
            title: 'The Future of Precision Agriculture in India',
            description: 'How drone technology is revolutionizing farming practices and increasing yields by up to 30%.',
            date: 'March 15, 2025'
        },
        {
            image: card1,
            category: 'Success Stories',
            categoryColor: 'text-green-600',
            title: '5 Drone Innovations in Construction',
            description: 'Real-world examples of how leading construction firms are using drones to save time and money.',
            date: 'March 15, 2025'
        }
    ];

    return (
        <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-10 bg-white">
            <div className="lg:w-10/12 xl:max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                        Blog & Research
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
                        Explore industry insights, learn from real success stories, and gain in-depth knowledge through our expert whitepapers.
                    </p>
                </div>

                {/* Blog Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-sky-50 rounded-2xl  overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-56 lg:h-80 overflow-hidden">
                                <img 
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                {/* Category */}
                                <p className={`text-sm font-semibold mb-2 ${blog.categoryColor}`}>
                                    {blog.category}
                                </p>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3">
                                    {blog.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 text-sm mb-4">
                                    {blog.description}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between">
                                    {/* Date */}
                                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                                        <FaCalendarAlt className="text-xs" />
                                        <span>{blog.date}</span>
                                    </div>

                                    {/* Learn More Link */}
                                    <a
                                        href="#"
                                        className="text-green-600 font-medium inline-flex items-center gap-2 hover:gap-3 transition-all text-sm"
                                    >
                                        Learn more
                                        <span>→</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center">
                    <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded transition-colors duration-300">
                        View All Blog & Research
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogResearch;