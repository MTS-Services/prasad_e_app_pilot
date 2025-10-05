import CForm from "../Components/Form/CForm";
import banner from "../images/aboutBanner.jpg";

const Contact = () => {
  return (
     <div>
          <div
            style={{ backgroundImage: `url(${banner})` }}
            className="relative h-[270px] bg-cover bg-center flex items-center justify-center"
          >
            {/* bg-gradient-to-l from-gray-500 via-green-600/15 to-white/35 */}
            <div className='absolute bg-gradient-to-l from-[#00C805] to-[#006202] inset-0'></div>
            <div className="lg:hidden absolute bg-gray-600/50 inset-0"></div>
            <div className="z-30 w-11/12 lg:w-10/12 xl:max-w-7xl mx-auto">
              <div className="">
                <div className="text-white max-w-2xl">
              
                <h1 className="leading-relaxed text-left text-3xl sm:text-4xl md:text-5xl font-bold mt-4 sm:mt-0">Contact Us</h1>
                <p className="text-white text-base sm:text-lg md:text-xl py-3">Ready to transform your operations with drone technology? Get in touch with our team today.</p>
                
                </div>
              </div>
            </div>
          </div>
    
         <CForm/>
        </div>
  );
};

export default Contact;
