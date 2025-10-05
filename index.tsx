import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

// From components/Icons.tsx
const StarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const QuoteIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" transform="scale(-1, 1) translate(-24, 0)" />
    </svg>
);


const OrderNowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" {...props}>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
    </svg>
);

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const ShippingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2.05-1.71a1 1 0 011.13-.09L8 15l2.05-1.71a1 1 0 011.13-.09L13 15z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 16h2a2 2 0 002-2V7a2 2 0 00-2-2h-3.382a1 1 0 00-.894.553L12 8" />
  </svg>
);

const ArrowDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
);

const TickIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

// From components/Header.tsx
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'FREE Bonuses', href: '#bonuses' },
    { name: 'About', href: '#about' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <>
    <div className="bg-yellow-300 text-yellow-900 text-center py-1 text-sm font-semibold">
      Affiliate Disclosure: If you purchase through links on this page, we may earn a commission.
    </div>
    <header className="bg-[#1f2a4a] text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold">
              <img src="https://picsum.photos/seed/logo/180/50" alt="Mitolyn Logo" className="h-10 md:h-12" />
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="hover:text-yellow-400 transition-colors duration-300 font-bold text-base">
                  {link.name}
                </a>
              ))}
              <a href="#order" className="bg-[#00e8fe] text-[#1f2a4a] font-bold py-2 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 text-base flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                Official Website <OrderNowIcon className="ml-2" />
              </a>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <a href="#order" className="bg-[#00e8fe] text-[#1f2a4a] font-bold py-2 px-4 rounded-lg hover:bg-opacity-90 transition text-sm mr-4">
              Order Now
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1f2a4a]">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
    </>
  );
};

// From components/Hero.tsx
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

const Hero: React.FC = () => {
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

// From components/About.tsx
const AboutSection: React.FC = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
                <h2 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight text-center">
                    How Does Mitolyn Work? <br/> <span className="text-blue-600">The Science Behind It</span>
                </h2>
                
                <p className="mt-8 text-lg text-gray-700 leading-relaxed">
                    The core claim behind Mitolyn is based on a recent scientific discovery from Harvard researchers. They studied over 1,700 individuals and found a single common factor in every overweight person: <strong>low levels of mitochondria</strong>. Conversely, slim and toned individuals consistently showed high levels of mitochondria.
                </p>

                <div className="mt-8 md:grid md:grid-cols-5 md:gap-8 items-center">
                    <div className="md:col-span-2 mb-6 md:mb-0">
                        <img src="https://picsum.photos/seed/mito/400/300" alt="Mitochondria in a cell" className="rounded-lg shadow-lg w-full" />
                    </div>
                    <div className="md:col-span-3">
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Think of mitochondria as tiny engines inside every cell of your body. Their job is to convert the food you eat and the fat stored on your body into pure energy (called ATP). This energy fuels everything from your heartbeat to your thoughts.
                        </p>
                        <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                           Mitolyn's formula is designed to support and promote healthy levels of these fat-burning engines. The logic is simple: the more mitochondria you have, the more efficiently your body can burn fat for energy, leading to weight loss and increased vitality.
                        </p>
                    </div>
                </div>

                <div className="mt-12 p-4 bg-gray-50 rounded-lg text-xs text-gray-500 leading-relaxed">
                    <p className="font-bold mb-2">Sources:</p>
                    <p className="mb-1">(a) <strong>Leukocyte mitochondrial DNA copy number...</strong> - pubmed.ncbi.nlm.nih.gov/27367031/</p>
                    <p className="mb-1">(b) <strong>Impaired Mitochondrial Biogenesis...</strong> - pubmed.ncbi.nlm.nih.gov/25972572/</p>
                    <p className="mb-1">(c) <strong>Persistent low body weight in humans is associated with higher mitochondrial activity...</strong> - pubmed.ncbi.nlm.nih.gov/31374571/</p>
                </div>
            </div>
        </section>
    );
};

// From components/Ingredients.tsx
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

const IngredientsSection: React.FC = () => {
    const ingredients = [
        { name: 'Maqui Berry', description: 'exotic purple fruit packed full of the special antioxidant anthocyanin', benefits: ['<strong class="underline decoration-yellow-400">Promotes mitochondria</strong>¹²', 'Supports a healthy heart', 'Supports healthy cholesterol'], imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARAAAACHCAYAAABnStfCAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAP+6SURBVHhe7J0FeBzJ+sb753+gIARASBIIgUAgBAIBIRARgqCgCCJ7L6IoiojIriL7l7v32f/zmf/MvO+9szP7zOzsbJBNMplNdhINgUAgBBLIAfJ+7v+qurq6qvD8D5Xl/c//9I+q6qp6ZqZnJokQAkJAOAIJcAIQCAFCIAAQAoQcEAAhQAAhEAIkIBSBECAECIEcIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAgcQCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAkIgEAgBhAAAIAQIAYQAEMgBAoQQIAAQCAHSAAIgQAg1QCAXCCBAAChAIAxIAwgAgVAQAhEIAEIAAQCAEIQAECAECAAIQUIGEECAECACEIgEIAQIAYQQIAAQCAFCIAQIQCAEIBAChCAQAIQcIAAQCAFIgBAgBAgBhCAQAkIgEIgBAoQQIAAQCAFCIAQIQUICIBAChAAhQAgQAoQAECAEIBAChCAQAk' },
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


// From components/Bonuses.tsx
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


const BonusesSection: React.FC = () => {
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

// From components/Testimonials.tsx
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

const TestimonialsSection: React.FC = () => {
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

// From components/Verdict.tsx
const Verdict: React.FC = () => {
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

// From components/Pricing.tsx
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
  const AFFILIATE_LINK = "https://tinyurl.com/order-mitolyn-today";
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

const PricingSection: React.FC = () => {
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

// From components/Guarantee.tsx
const GuaranteeSection: React.FC = () => {
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

// From components/Faq.tsx
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

const FaqSection: React.FC = () => {
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

// From components/Footer.tsx
const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0e3d3f] text-white pt-10 pb-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
                 <div className="mb-8">
                    <p className="text-center text-gray-400 font-bold mb-4">Scientific References:</p>
                     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
                        <img src="https://picsum.photos/seed/ref1/200/50" alt="Reference logo 1" className="mx-auto grayscale opacity-70" />
                        <img src="https://picsum.photos/seed/ref2/200/50" alt="Reference logo 2" className="mx-auto grayscale opacity-70" />
                        <img src="https://picsum.photos/seed/ref3/200/50" alt="Reference logo 3" className="mx-auto grayscale opacity-70" />
                        <img src="https://picsum.photos/seed/ref4/200/50" alt="Reference logo 4" className="mx-auto grayscale opacity-70" />
                    </div>
                </div>

                <div className="flex justify-center space-x-4 sm:space-x-8 text-sm sm:text-base font-bold mb-8">
                    <a href="#order" className="hover:text-yellow-400">Get Started</a>
                    <a href="#support" className="hover:text-yellow-400">Support</a>
                    <a href="#terms" className="hover:text-yellow-400">Terms</a>
                    <a href="#privacy" className="hover:text-yellow-400">Privacy</a>
                </div>

                <div className="text-xs text-gray-400 text-justify leading-relaxed">
                    <p>
                        Statements found on this website have not been evaluated by the Food and Drug Administration. Products on this website are not intended to diagnose, treat, cure, or prevent any disease. If you are pregnant, nursing, taking medication, or have a medical condition, consult your physician before using our products.
                    </p>
                    <p className="mt-4">
                        ClickBank® is a registered trademark of Click Sales, Inc., a Delaware corporation located at 1444 S. Entertainment Ave., Suite 410 Boise, ID 83709, USA and used by permission. ClickBank's role as retailer does not constitute an endorsement, approval or review of these products or any claim, statement or opinion used in promotion of these products.
                    </p>
                </div>
                 <p className="text-center text-gray-500 text-sm mt-8">&copy; {new Date().getFullYear()} Mitolyn. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

// From App.tsx
const App: React.FC = () => {
  return (
    <div className="bg-white text-gray-800 text-lg">
      <Header />
      <main>
        <Hero />
        <div id="about">
          <AboutSection />
        </div>
        <div id="ingredients">
          <IngredientsSection />
        </div>
         <div id="bonuses">
         <BonusesSection />
        </div>
        <TestimonialsSection />
        <Verdict />
        <div id="order">
          <PricingSection />
        </div>
        <GuaranteeSection />
        <div id="faq">
          <FaqSection />
        </div>
        <Footer />
      </main>
    </div>
  );
};

// From original index.tsx
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
