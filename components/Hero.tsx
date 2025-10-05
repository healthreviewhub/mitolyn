import React from 'react';
import { StarIcon } from './Icons';

const Rating: React.FC<{ label: string; score: number }> = ({ label, score }) => (
    <div className="flex justify-between items-center border-b border-gray-200 py-2">
        <span className="font-semibold">{label}</span>
        <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className={`w-5 h-5 ${i < score ? 'text-yellow-400' : 'text-gray-300'}`} />
            ))}
        </div>
    </div>
);

export const Hero: React.FC = () => {
    return (
        <section className="bg-slate-50 text-gray-800 pt-12 pb-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center">
                     <p className="font-bold text-lg text-blue-600">An Independent Review of Mitolyn</p>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight capitalize mt-2">Mitolyn Review</h1>
                    <p className="mt-4 text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                        Is Mitolyn the secret to unlocking weight loss, or just clever marketing? I dug into the science, ingredients, and real user reviews to find out the truth. Here's what you need to know before you buy.
                    </p>
                </div>

                <div className="mt-12 md:grid md:grid-cols-2 md:gap-12 items-center">
                    <div>
                        <img src="https://picsum.photos/seed/product-home/500/500" alt="Mitolyn Product Bottle" className="mx-auto w-full max-w-sm rounded-lg shadow-2xl" />
                    </div>
                    <div className="mt-8 md:mt-0 bg-white p-6 rounded-lg shadow-xl border">
                        <h3 className="text-2xl font-bold text-center mb-4">Mitolyn: At a Glance</h3>
                        <Rating label="Effectiveness" score={5} />
                        <Rating label="Ingredients" score={5} />
                        <Rating label="Safety" score={5} />
                        <Rating label="Value for Money" score={4} />
                        <div className="flex justify-between items-center pt-3 font-bold text-lg">
                            <span>Overall Rating</span>
                            <span>4.8 / 5</span>
                        </div>
                        <a href="#order" className="mt-6 block w-full bg-yellow-400 text-gray-900 font-bold py-4 px-6 rounded-lg text-xl shadow-lg hover:bg-yellow-500 transition-colors duration-300 text-center">
                            Check Price on Official Website &raquo;
                        </a>
                        <p className="text-center text-sm mt-2 text-gray-500">90-Day Money-Back Guarantee</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
