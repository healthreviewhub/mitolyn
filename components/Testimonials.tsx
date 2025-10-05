import React from 'react';
import { QuoteIcon, StarIcon } from './Icons';

const Testimonial: React.FC<{
    name: string;
    location: string;
    headline: string;
    story: string;
    bottles: number;
    avatarSeed: string;
}> = ({ name, location, headline, story, bottles, avatarSeed }) => (
    <div className="md:flex md:space-x-8 items-start">
        <div className="md:flex-shrink-0 w-24 mx-auto md:mx-0 mb-4 md:mb-0">
            <img src={`https://picsum.photos/seed/${avatarSeed}/100/100`} alt={name} className="w-24 h-24 rounded-full shadow-lg border-4 border-white mx-auto" />
        </div>
        <div className="flex-grow">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-700">{headline}</h3>
            <div className="flex items-center my-2">
                <StarIcon className="w-6 h-6 text-yellow-400" />
                <StarIcon className="w-6 h-6 text-yellow-400" />
                <StarIcon className="w-6 h-6 text-yellow-400" />
                <StarIcon className="w-6 h-6 text-yellow-400" />
                <StarIcon className="w-6 h-6 text-yellow-400" />
                <span className="ml-3 font-bold text-green-600">Verified Purchase</span>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed relative pl-10">
                <QuoteIcon className="absolute left-0 top-0 w-8 h-8 text-gray-300" />
                {story}
            </p>
            <div className="mt-4 flex items-center">
                 <img src={`https://picsum.photos/seed/${bottles}-blank/90/90`} alt={`${bottles} bottle package`} className="w-16 h-16 mr-4" />
                <div>
                    <p className="font-bold text-lg">{name} - <span className="font-normal">{location}</span></p>
                    <p className="font-bold text-blue-600 text-sm">Purchased Mitolyn {bottles} Bottles Package</p>
                </div>
            </div>
        </div>
    </div>
);

export const TestimonialsSection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h2 className="text-center text-3xl md:text-5xl font-extrabold leading-tight mb-12">
                    What Are Real Users Saying?<br /> <span className="text-blue-600">Customer Results</span>
                </h2>
                
                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-1 max-w-3xl mx-auto mb-12">
                    {Array.from({ length: 14 }).map((_, i) => (
                         <img key={i} src={`https://picsum.photos/seed/customer${i}/150/150`} alt={`Customer ${i + 1}`} className="w-full h-auto object-cover aspect-square rounded-md shadow-md" />
                    ))}
                </div>

                <div className="space-y-16">
                    <Testimonial
                        name="Peggy B."
                        location="Rexton, MI"
                        headline="Peggy is 35 lbs lighter..."
                        story="I always felt self-conscious about my appearance, especially in social situations. Since trying Mitolyn, I've lost 35 pounds, and for the first time in years, I actually enjoy looking in the mirror. It's incredible how this change has boosted my confidence and made me feel like myself again!"
                        bottles={6}
                        avatarSeed="peggy"
                    />
                     <Testimonial
                        name="Russell L."
                        location="Macon, GA"
                        headline="Russel has torched 29 lbs..."
                        story="No matter what I tried, my weight just wouldn’t budge, especially around my belly. Mitolyn kick-started my metabolism and finally helped me shed 29 stubborn pounds. I feel lighter and more energetic, and my clothes are fitting so much better now — it's a huge relief."
                        bottles={3}
                        avatarSeed="russell"
                    />
                     <Testimonial
                        name="Connie A."
                        location="Montclair, NJ"
                        headline="Connie's dropped 40 lbs..."
                        story="Being overweight made even basic activities exhausting. I could hardly play with my kids without feeling out of breath. After using Mitolyn, I've dropped 40 pounds, and I can keep up with my kids without feeling tired all the time. I have my energy and freedom back!"
                        bottles={6}
                        avatarSeed="connie"
                    />
                </div>
            </div>
        </section>
    );
};