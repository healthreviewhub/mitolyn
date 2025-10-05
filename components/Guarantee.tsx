
import React from 'react';

export const GuaranteeSection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <h2 className="text-center text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
                    100% Satisfaction<br/>
                    <span className="text-blue-600">90-Day Money Back Guarantee</span>
                </h2>
                <div className="mt-12 md:flex md:items-center md:space-x-8">
                    <div className="md:flex-shrink-0 text-center mb-8 md:mb-0">
                        <img src="https://picsum.photos/seed/guarantee-seal/200/200" alt="90-Day Money Back Guarantee" className="mx-auto w-40 md:w-48" />
                    </div>
                    <div>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                            Your order today is protected by my iron-clad 90-day <strong>100% money-back guarantee</strong>. If you are not astonished how fast your deep stubborn fat stores <strong>melt</strong> away into pure energy, or shocked as you admire your new <strong>toned</strong>, <strong>slim</strong> body in the mirror, then at any time in the next <strong>90 days</strong> let us know and we'll refund every single penny of your investment. No questions asked.
                        </p>
                    </div>
                </div>
                <div className="text-center mt-12">
                    <img src="https://picsum.photos/seed/fda-logos/500/50" alt="FDA, GMP, Made in USA" className="mx-auto" />
                    <p className="mt-4 text-gray-600 font-semibold text-lg">
                        <strong>Mitolyn is proudly manufactured in the USA</strong> with the finest of domestic and foreign ingredients.
                    </p>
                </div>
            </div>
        </section>
    );
};
