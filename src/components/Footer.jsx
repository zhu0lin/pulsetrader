import React from 'react';
import { TrendingUp } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900/50 border-t border-cyan-500/20 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                            <TrendingUp className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-xl font-bold text-white">StockPulse</span>
                    </div>
                    <div className="flex space-x-6 text-gray-400">
                        <a href="#" className="hover:text-cyan-400 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Terms</a>
                        <a href="#" className="hover:text-cyan-400 transition-colors">Contact</a>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-700/50 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} StockPulse. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;