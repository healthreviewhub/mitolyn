
import React from 'react';

export const Footer: React.FC = () => {
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
