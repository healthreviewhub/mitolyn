
import React from 'react';

const BonusCard: React.FC<{
    bonusNumber: number;
    title: string;
    description: string;
    imageSeed: string;
}> = ({ bonusNumber, title, description, imageSeed }) => (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 h-full flex flex-col">
        <div className="relative mx-auto w-48 mb-4">
            <img src={`https://picsum.photos/seed/${imageSeed}/200/280`} alt={title} className="w-full rounded-md shadow-lg" />
            <span className="absolute top-2 right-2 bg-black/70 text-white text-xs font-bold py-1 px-2 rounded">DIGITAL DOWNLOAD</span>
        </div>
        <div className="text-center">
            <p className="text-lg font-bold text-[#00e8fe]">BONUS #{bonusNumber}</p>
            <h3 className="text-2xl font-bold mt-1">{title}</h3>
            <p className="text-yellow-400 font-bold text-lg my-2">100% FREE</p>
        </div>
        <p className="mt-2 text-gray-200 text-center flex-grow">{description}</p>
    </div>
);


export const BonusesSection: React.FC = () => {
    return (
        <section className="bg-[#1f2a4a] text-white py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <h2 className="text-center text-3xl md:text-5xl font-extrabold leading-tight">
                    Order <span className="text-yellow-400">6 Bottles</span> or <span className="text-yellow-400">3 Bottles</span><br className="sm:hidden"/> and Get <span className="underline decoration-yellow-400 decoration-4 underline-offset-4">2 FREE Bonuses</span>!
                </h2>
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <BonusCard 
                        bonusNumber={1}
                        title="1-Day Kickstart Detox"
                        description="Detox, cleanse and flush your organs to aid absorption and kickstart your Mitolyn journey with 20 bizarre 15 second detox tea recipes, using everyday ingredients from your kitchen."
                        imageSeed="book1"
                    />
                    <BonusCard 
                        bonusNumber={2}
                        title="Renew You"
                        description="With your brand-new fast-tracked body comes a new mindset. Discover simple methods you can do right now to instantly relieve stress and calm your mind, boost confidence and reduce anxiety."
                        imageSeed="book2"
                    />
                </div>
            </div>
        </section>
    );
};
