import React from 'react';
import { CheckIcon, ShippingIcon } from './Icons';

// Use the affiliate link provided by the user.
const AFFILIATE_LINK = "https://tinyurl.com/order-mitolyn-today";

const PricingCard: React.FC<{
  tier: string;
  bottles: number;
  supply: number;
  price: number;
  isPopular?: boolean;
  bonuses?: number;
  freeShipping?: boolean;
  desktopImage: string;
  urlParam: string;
}> = ({ tier, bottles, supply, price, isPopular = false, bonuses, freeShipping, desktopImage, urlParam }) => {
  return (
    <div className={`border-4 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 bg-white text-center flex flex-col ${isPopular ? 'border-blue-600' : 'border-transparent'}`}>
      {isPopular && <div className="bg-blue-600 text-white font-bold py-2 text-lg uppercase tracking-wider rounded-t-md">Most Popular</div>}
      {!isPopular && tier && <div className="bg-gray-200 text-gray-700 font-bold py-2 text-lg uppercase tracking-wider rounded-t-md">{tier}</div>}
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-4xl md:text-5xl font-extrabold text-blue-600">{bottles} BOTTLE{bottles > 1 ? 'S' : ''}</h3>
        <p className="text-xl md:text-2xl font-bold text-gray-700 mt-1">{supply} Day Supply</p>
        <img src={desktopImage} alt={`${bottles} bottle(s) of Mitolyn`} className="mx-auto my-4 h-48 md:h-64 object-contain" />
        
        <div className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">${price}</div>
        
        {(bonuses || freeShipping) && (
          <div className="space-y-2 my-6 text-left text-lg font-bold mx-auto max-w-max">
            {bonuses && (
              <p className="flex items-center text-green-600"><CheckIcon className="w-6 h-6 mr-2" /> {bonuses} FREE BONUSES!</p>
            )}
            {freeShipping && (
              <p className="flex items-center text-red-600"><ShippingIcon className="w-6 h-6 mr-2" /> FREE US SHIPPING!</p>
            )}
          </div>
        )}

        <div className="mt-auto">
          <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="bg-yellow-400 text-gray-900 font-bold py-4 px-6 rounded-lg text-2xl shadow-lg hover:bg-yellow-500 transition-colors duration-300 inline-block">
            Add To Cart
          </a>
          <img src="https://picsum.photos/seed/cards/250/30" alt="Payment methods" className="mx-auto mt-4" />
        </div>
      </div>
    </div>
  );
};

export const PricingSection: React.FC = () => {
    return (
        <section className="py-16 bg-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <h2 className="text-center text-3xl md:text-5xl text-[#0e3d3f] font-extrabold leading-tight mb-2">Where to Buy Mitolyn & Pricing</h2>
                <p className="text-center text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-8">
                    Mitolyn is only available through their official website. This ensures you receive the genuine product and are covered by the 90-day money-back guarantee. Click any package below to be taken to the secure checkout page.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
                    <PricingCard
                        tier="Basic"
                        bottles={1}
                        supply={30}
                        price={79}
                        desktopImage="https://picsum.photos/seed/1-bottle/200/250"
                        urlParam="1"
                    />
                    <PricingCard
                        tier="Most Popular"
                        bottles={6}
                        supply={180}
                        price={294}
                        isPopular={true}
                        bonuses={2}
                        freeShipping={true}
                        desktopImage="https://picsum.photos/seed/6-bottles/350/250"
                        urlParam="6"
                    />
                    <PricingCard
                        tier="Bundle"
                        bottles={3}
                        supply={90}
                        price={177}
                        bonuses={2}
                        desktopImage="https://picsum.photos/seed/3-bottles/300/250"
                        urlParam="3"
                    />
                </div>
            </div>
        </section>
    );
};