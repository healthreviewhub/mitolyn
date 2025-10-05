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
        { name: 'Maqui Berry', description: 'exotic purple fruit packed full of the special antioxidant anthocyanin', benefits: ['<strong class="underline decoration-yellow-400">Promotes mitochondria</strong>¹²', 'Supports a healthy heart', 'Supports healthy cholesterol'], imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAACHCAYAAABnStfCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAP+6SURBVHhe7J0FeBzJ+sb753+gIARASBIIgUAgBAIBIRARgqCgCCJ7L6IoiojIriL7l7v32f/zmf/MvO+9szP7zOzsbJBNMplNdhINgUAgBBLIAfJ+7v+qurq6qvD8D5Xl/c//9I+q6qp6ZqZnJokQAkJAOAIJcAIQCAFCIAAQAoQcEAAhQAAhEAIkIBSBECAECIEcIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAk' },
        {
            name: 'Rhodiola',
            description: 'potent adaptogen with over 140 active compounds',
            benefits: ['<strong class="underline decoration-yellow-400">Promotes mitochondria</strong>³⁴', 'Supports cognitive function', 'Supports healthy blood sugar'],
            imageUrl: 'https://picsum.photos/seed/rhodiola/400/267'
        },
        {
            name: 'Astaxanthin',
            description: "special nutrient with unique antioxidant abilities known as the 'king of carotenoids'",
            benefits: ['<strong class="underline decoration-yellow-400">Promotes mitochondria</strong>⁵⁶', 'Supports skin health', 'Supports vision'],
            imageUrl: 'https://picsum.photos/seed/astaxanthin/400/267'
        },
        {
            name: 'Amla Fruit',
            description: 'also known as Indian gooseberry, this ancient fruit has been used for centuries',
            benefits: ['<strong class="underline decoration-yellow-400">Promotes mitochondria</strong>⁷⁸', 'Powerful antioxidant', 'Supports digestion'],
            imageUrl: 'https://picsum.photos/seed/amla/400/267'
        },
        { 
            name: 'Theobroma Cacao', 
            description: 'tropical superfood overflowing with epicatechin - a natural flavonoid', 
            benefits: [
                '<strong class="underline decoration-yellow-400">Promotes mitochondria</strong>⁹¹⁰', 
                'Supports healthy blood pressure', 
                'Natural aphrodisiac'
            ], 
            imageUrl: 'https://picsum.photos/seed/cacao/400/267' 
        },
        { 
            name: 'Schisandra', 
            description: 'powerful calorie-burning red berries brimming with antioxidant compounds', 
            benefits: [
                '<strong class="underline decoration-yellow-400">Promotes mitochondria</strong>¹¹¹²', 
                'Supports liver health', 
                'Maintains skin elasticity'
            ], 
            imageUrl: 'https://picsum.photos/seed/schisandra/400/267' 
        }
    ];

    return (
        <section className="py-16 bg-slate-100" id="ingredients">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <h2 className="text-center text-3xl md:text-5xl text-[#0e3d3f] font-extrabold leading-tight mb-2">
                    What's Inside Mitolyn? <span className="text-blue-600">6 Key Ingredients</span>
                </h2>
                <p className="text-center text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12">
                    Mitolyn contains a blend of 6 carefully-selected, plant-based ingredients designed to target your mitochondria, boost your metabolism, and melt away stubborn fat.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ingredients.map((ingredient, index) => (
                        <IngredientCard key={index} {...ingredient} />
                    ))}
                </div>
            </div>
        </section>
    );
};
