
import React from 'react';
import { useState } from 'react';
import { ArrowDownIcon } from './Icons';

const FaqItem: React.FC<{
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}> = ({ question, answer, isOpen, onClick }) => (
    <li className="bg-white/10 border border-white/20 rounded-lg overflow-hidden">
        <h2>
            <button
                onClick={onClick}
                className="w-full flex justify-between items-center text-left p-6 font-bold text-xl md:text-2xl"
                aria-expanded={isOpen}
            >
                <span>{question}</span>
                <ArrowDownIcon className={`w-8 h-8 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`} />
            </button>
        </h2>
        <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-6 pt-0 text-gray-200 text-base md:text-lg leading-relaxed">
                {answer}
            </div>
        </div>
    </li>
);

export const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        { q: "Is Mitolyn right for me?", a: "Do you have deep stubborn fat stores that no diet or exercise seems to remove? Then the answer is yes Mitolyn is right for you. Mitolyn has changed the lives of thousands of women and men from 18 to 80 and is designed to rapidly liquify fat in even the worst cases." },
        { q: "Is Mitolyn safe?", a: "Mitolyn is a natural proprietary formula manufactured in the USA at our FDA registered and GMP certified facility using state of the art, precision engineered machinery and under the strictest and most sterile standards. Each ingredient is 100% plant-based, soy-free, dairy-free, non-GMO, and put through additional third-party inspections and quality control to ensure high purity and potency. As always we advise you to show a bottle of this to your doctor before you take it, just to be safe." },
        { q: "How many bottles should I order?", a: "If you're over 35 years old or carry excess weight, we recommend you take Mitolyn for at least 3 to 6 months so it has enough time to work throughout your entire body to support healthy mitochondria levels, reach your desired weight, and lock it in for years into the future. Every 3 bottle package of Mitolyn comes with the 2 bonus books absolutely free. Or make the smart decision and get the heavily discounted 6 bottle package, which comes with the 2 bonus books absolutely free along with free shipping as well." },
        { q: "What's the best way to take Mitolyn?", a: "Take one capsule of Mitolyn with a big glass of cold water every day. It's bespoke proprietary blend of natural ingredients will get to work dissolving fat for you even when sleeping." },
        { q: "Is this a one time payment?", a: "Yes, your order today is a one-time payment with no auto-ship, subscriptions or hidden charges." },
        { q: "What if Mitolyn doesn't work for me?", a: "Every single bottle of Mitolyn comes with our personal 90-day 100% money back guarantee. If for any reason you're unsatisfied with your results, just return all bottles (even if empty) for a full, no questions asked refund." },
        { q: "What do I do now?", a: "This is the fun part. Click on one of the packages below. Enter your order details on our secure checkout page. After you've finished we'll get your Mitolyn shipped out to you straight away. Order 3 bottles and get the 2 free bonus books, or order 6 bottles and get the 2 free bonus books plus free shipping as well." },
    ];

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-[#1f2a4a] text-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h2 className="text-center text-3xl md:text-5xl font-extrabold leading-tight mb-12">
                    Frequently Asked Questions
                </h2>
                <ul className="space-y-4">
                    {faqs.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.q}
                            answer={faq.a}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </ul>
            </div>
        </section>
    );
};
