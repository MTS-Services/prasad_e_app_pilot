import React, { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: 'What areas do you serve?',
            answer: 'We provide drone services across all 28 states and 8 union territories of India. Our team can deploy within 24-48 hours for most locations.'
        },
        {
            question: 'Are your pilots certified?',
            answer: 'Yes, all our pilots are certified by DGCA (Directorate General of Civil Aviation) and have extensive training and experience in commercial drone operations.'
        },
        {
            question: 'How do I book a drone service?',
            answer: 'You can book our services through our website, mobile app, or by calling our customer service team. We\'ll discuss your requirements and provide a customized quote.'
        },
        {
            question: 'What is the typical turnaround time for data delivery?',
            answer: 'Standard turnaround time is 3-5 business days for processed data. Rush delivery options are available for urgent projects with delivery in 24-48 hours.'
        },
        {
            question: 'How long does pilot training take?',
            answer: 'Our comprehensive pilot training program takes 4-6 weeks, including both theoretical knowledge and practical flying sessions, culminating in DGCA certification.'
        },
        {
            question: 'Can you integrate with our existing systems?',
            answer: 'Yes, we offer API integration and can work with most enterprise systems. Our technical team will coordinate with your IT department for seamless integration.'
        },
        {
            question: 'What data formats do you deliver?',
            answer: 'We deliver data in multiple formats including GeoTIFF, JPG, PNG, PDF reports, CAD files, and 3D models. Custom formats can be provided based on your requirements.'
        },
        {
            question: 'Do you offer subscription packages?',
            answer: 'Yes, we offer flexible subscription packages for regular monitoring and inspection services. Contact us to discuss a custom package that fits your needs.'
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-16 px-4 sm:px-6 md:px-8 lg:px-10 bg-gray-50">
            <div className="lg:w-10/12 mx-auto max-w-7xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg border-2 border-green-500 overflow-hidden transition-all duration-300"
                        >
                            {/* Question Button */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span className="font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </span>
                                <span className="flex-shrink-0 w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded text-xl font-light">
                                    {openIndex === index ? '−' : '+'}
                                </span>
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-300 ${
                                    openIndex === index ? 'max-h-96' : 'max-h-0'
                                }`}
                            >
                                <div className="px-5 pb-5 pt-0 text-gray-600 text-sm md:text-base">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;