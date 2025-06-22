import React from 'react';
import PrimaryButton from './PrimaryButton';

const CtaSection = () => {
    return (
        <section id="pricing" className="py-28">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Take Control of Your Portfolio?</h2>
                <p className="text-xl text-gray-300 mb-10">Join thousands of investors who never miss an opportunity. Get started today.</p>
                <PrimaryButton className="px-12 py-5 text-xl">
                    <span>Start Your 14-Day Free Trial</span>
                </PrimaryButton>
                <p className="text-gray-500 text-sm mt-4">No credit card required.</p>
            </div>
        </section>
    );
};

export default CtaSection;