import React from 'react';

export const AboutSection: React.FC = () => {
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