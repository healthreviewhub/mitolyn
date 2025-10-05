import React from 'react';

export const Verdict: React.FC = () => {
    // IMPORTANT FOR AFFILIATE: This now uses your affiliate link.
    const AFFILIATE_LINK = "https://tinyurl.com/order-mitolyn-today";

    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h2 className="text-center text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-12">
                    Final Verdict: <span className="text-blue-600">Is Mitolyn Worth It?</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-green-100 border-l-4 border-green-500 p-6 rounded-r-lg">
                        <h3 className="text-2xl font-bold text-green-800 mb-4">Pros</h3>
                        <ul className="space-y-2 list-disc list-inside text-green-900">
                            <li>Made from 6 natural, plant-based ingredients.</li>
                            <li>Targets the root cause of slow metabolism (mitochondria).</li>
                            <li>Manufactured in an FDA-registered, GMP-certified facility in the USA.</li>
                            <li>Comes with a 90-day, no-questions-asked money-back guarantee.</li>
                            <li>Free bonuses and shipping available with larger packages.</li>
                            <li>Positive customer reviews report significant weight loss.</li>
                        </ul>
                    </div>
                     <div className="bg-red-100 border-l-4 border-red-500 p-6 rounded-r-lg">
                        <h3 className="text-2xl font-bold text-red-800 mb-4">Cons</h3>
                        <ul className="space-y-2 list-disc list-inside text-red-900">
                            <li>Only available for purchase online through the official website.</li>
                            <li>Results may vary from person to person.</li>
                            <li>The 6-bottle package is required for the best value and free shipping.</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 bg-white p-8 rounded-lg shadow-xl border">
                    <p className="text-lg text-gray-700 leading-relaxed">
                        After a thorough review of its ingredients, the science behind it, and the overwhelmingly positive customer feedback, <strong>Mitolyn appears to be a legitimate and effective weight loss supplement.</strong> Its unique approach of targeting mitochondrial function is backed by scientific concepts and offers a promising solution for those who have struggled with stubborn fat.
                    </p>
                     <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                       The 90-day money-back guarantee makes it a risk-free investment. If you're looking for a natural supplement to boost your metabolism and help you finally achieve your weight loss goals, Mitolyn is definitely worth trying. For the best results and value, the 6-bottle package is the recommended choice.
                    </p>
                    <div className="text-center mt-8">
                         <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="bg-green-600 text-white font-bold py-5 px-10 rounded-lg text-2xl shadow-lg hover:bg-green-700 transition-colors duration-300 inline-block animate-pulse">
                            &raquo; Click Here to Get Mitolyn at the Lowest Price Guaranteed &laquo;
                        </a>
                        <p className="text-center text-sm mt-3 text-gray-500">Visit The Official Website To Secure Your Discount!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};