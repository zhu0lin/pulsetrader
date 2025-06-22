import React from 'react';
import { TrendingUp, Menu, X } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

const Navigation = ({ isMenuOpen, setIsMenuOpen }) => {
    return (
        <nav className="bg-slate-900/80 backdrop-blur-lg border-b border-cyan-500/20 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center space-x-3 group">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                            <TrendingUp className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-white">StockPulse</span>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#features" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Features</a>
                        <a href="#testimonials" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Reviews</a>
                        <a href="#pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-200">Pricing</a>
                        <button className="text-gray-300 hover:text-white transition-colors duration-200">Sign In</button>
                        <PrimaryButton className="px-6 py-2 text-base">
                            <span>Get Started</span>
                        </PrimaryButton>
                    </div>

                    <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-slate-800/90 border-t border-cyan-500/20">
                        <div className="px-2 pt-2 pb-3 space-y-2">
                            <a href="#features" className="block px-3 py-2 text-gray-300 hover:bg-slate-700/50 rounded-md">Features</a>
                            <a href="#testimonials" className="block px-3 py-2 text-gray-300 hover:bg-slate-700/50 rounded-md">Reviews</a>
                            <a href="#pricing" className="block px-3 py-2 text-gray-300 hover:bg-slate-700/50 rounded-md">Pricing</a>
                            <button className="block w-full text-left px-3 py-2 text-gray-300 hover:bg-slate-700/50 rounded-md">Sign In</button>
                            <PrimaryButton className="w-full mt-2">
                                <span>Get Started</span>
                            </PrimaryButton>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;