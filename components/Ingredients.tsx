import React from 'react';
import { TickIcon } from './Icons';

const IngredientCard: React.FC<{
    name: string;
    description: string;
    benefits: string[];
    imageUrl: string;
}> = ({ name, description, benefits, imageUrl }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
        <img src={imageUrl} alt={name} className="w-full h-48 object-cover" />
        <div className="p-6 flex-grow flex flex-col">
            <h3 className="text-2xl font-bold text-blue-700 text-center">{name}</h3>
            <p className="text-sm italic text-gray-600 mt-2 text-center">{description}</p>
            <ul className="mt-4 space-y-2 flex-grow">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                        <TickIcon className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span dangerouslySetInnerHTML={{ __html: benefit }} />
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export const IngredientsSection: React.FC = () => {
    const ingredients = [
        { name: 'Maqui Berry', description: 'exotic purple fruit packed full of the special antioxidant anthocyanin', benefits: ['<strong class="underline decoration-yellow-400">Promotes mitochondria</strong>¹²', 'Supports a healthy heart', 'Supports healthy cholesterol'], imageUrl: 'https://picsum.photos/seed/maqui/400/300' },
        { name: 'Grape Seed Extract', description: 'rich in powerful antioxidants and oligomeric proanthocyanidin complexes', benefits: ['Supports healthy blood pressure', '<strong class="underline decoration-yellow-400">Boosts energy levels</strong>', 'Improves blood flow'], imageUrl: 'https://picsum.photos/seed/grape/400/300' },
        { name: 'African Mango', description: 'a potent extract known to support weight management', benefits: ['Aids in breaking down fats', 'Supports healthy cholesterol', '<strong class="underline decoration-yellow-400">Reduces appetite</strong>'], imageUrl: 'https://picsum.photos/seed/mango/400/300' },
        { name: 'Eleuthero Root', description: 'an adaptogen that helps the body handle stress', benefits: ['Increases energy and stamina', 'Improves mental function', '<strong class="underline decoration-yellow-400">Reduces fatigue</strong>'], imageUrl: 'https://picsum.photos/seed/eleuthero/400/300' },
        { name: 'Astragalus Root', description: 'a foundational herb in Traditional Chinese Medicine', benefits: ['<strong class="underline decoration-yellow-400">Supports immune function</strong>', 'Protects the body from stress', 'Promotes healthy aging'], imageUrl: 'https://picsum.photos/seed/astragalus/400/300' },
        { name: 'Gymnema Sylvestre', description: 'known as the "destroyer of sugar" in Hindi', benefits: ['<strong class="underline decoration-yellow-400">Reduces sugar cravings</strong>', 'Supports healthy blood sugar', 'Helps block sugar absorption'], imageUrl: 'https://picsum.photos/seed/gymnema/400/300' },
    ];

    return (
        <section className="py-16 bg-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                <h2 className="text-center text-3xl md:text-5xl font-extrabold text-[#0e3d3f] leading-tight mb-4">
                    Inside Every Mitolyn Capsule: <br /><span className="text-blue-600">6 Clinically-Proven Ingredients</span>
                </h2>
                <p className="text-center text-xl text-gray-700 max-w-3xl mx-auto mb-12">
                    Mitolyn's power comes from its unique blend of six natural, plant-based ingredients, each carefully selected to support your body's mitochondria and accelerate fat loss.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ingredients.map((ingredient, index) => (
                        <IngredientCard
                            key={index}
                            name={ingredient.name}
                            description={ingredient.description}
                            benefits={ingredient.benefits}
                            imageUrl={ingredient.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};