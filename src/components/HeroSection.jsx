import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

const HeroSection = () => {
    return (
        <section className="relative pt-24 pb-32 overflow-hidden">
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-blue-900/50 to-cyan-800/30 rounded-full blur-3xl opacity-40 animate-[spin_20s_linear_infinite]"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                        Never Miss a <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Market Move</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
                        Get instant, intelligent alerts when your stocks hit target prices. Stay ahead of the market with real-time notifications that matter.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <PrimaryButton>
                            <span>Start Free Trial</span>
                            <ArrowRight className="w-5 h-5" />
                        </PrimaryButton>
                        <button className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-300 transition-colors group">
                            <div className="w-14 h-14 bg-cyan-500/10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-cyan-500/20 group-hover:scale-110">
                                <Play className="w-6 h-6 ml-1" />
                            </div>
                            <span className="text-lg font-semibold">Watch Demo</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;