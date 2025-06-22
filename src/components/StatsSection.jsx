import React from 'react';

const StatsSection = ({ animatedNumbers }) => {
    return (
        <section className="py-20 bg-slate-800/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-8 text-center">
                    <div className="space-y-2">
                        <div className="text-5xl font-bold text-cyan-400">{animatedNumbers.users.toLocaleString()}+</div>
                        <div className="text-gray-400 text-lg tracking-wide">Active Users</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-5xl font-bold text-blue-400">{animatedNumbers.alerts.toLocaleString()}+</div>
                        <div className="text-gray-400 text-lg tracking-wide">Alerts Sent Daily</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-5xl font-bold text-cyan-400">{animatedNumbers.stocks.toLocaleString()}+</div>
                        <div className="text-gray-400 text-lg tracking-wide">Assets Tracked</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;