import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = ({ testimonials }) => {
    return (
        <section id="testimonials" className="py-28 bg-slate-800/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Trusted by <span className="text-cyan-400">Thousands</span></h2>
                    <p className="text-xl text-gray-300">See what our users are saying about StockPulse.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <div key={i} className="relative bg-slate-800 p-8 rounded-xl border border-cyan-500/20 
                                    transition-all duration-300 hover:scale-105 hover:border-cyan-400/60 group">
                            <Quote className="absolute top-4 right-4 w-16 h-16 text-slate-700/50 transform transition-transform duration-300 group-hover:scale-110 group-hover:text-cyan-600/30" />
                            <div className="relative z-10">
                                <div className="flex space-x-1 mb-5">
                                    {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                                </div>
                                <p className="text-gray-300 mb-6 italic leading-relaxed">"{t.content}"</p>
                                <div>
                                    <div className="font-semibold text-white">{t.name}</div>
                                    <div className="text-cyan-400 text-sm">{t.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;