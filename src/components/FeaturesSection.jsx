import React from 'react';
import { Bell, Zap, Shield } from 'lucide-react';

const features = [
    { icon: Bell, title: "Smart Alerts", desc: "Get notified instantly when stocks hit your target prices via email, SMS, or push notifications." },
    { icon: Zap, title: "Real-Time Data", desc: "Access live market data with minimal delay. Never miss a crucial moment in the market." },
    { icon: Shield, title: "Secure & Reliable", desc: "Bank-level security with 99.9% uptime. Your data and alerts are always protected and private." }
];

const FeaturesSection = () => {
    return (
        <section id="features" className="py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Everything You Need to Stay <span className="text-cyan-400">Informed</span></h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">Our powerful platform combines real-time data with intelligent alerts to keep you ahead of market movements.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, i) => (
                        <div key={i} className="relative bg-slate-800/50 p-8 rounded-xl border border-cyan-500/20
                                    transition-all duration-300 hover:border-cyan-500/50 hover:scale-[1.03] hover:bg-slate-800 group">
                            <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110">
                                <feature.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-4">{feature.title}</h3>
                            <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;