"use client";

import React from "react";

const FuturePlansAndGoals = () => {
    return (
        <section className="py-16 bg-gray-100 px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Headline */}
                <h2 className="text-4xl font-bold text-primary mb-6">Looking Ahead</h2>
                <p className="text-lg text-gray-600 mb-12">
                    Our journey towards sustainability is far from over. We are committed to continuous improvement and have exciting plans for the future.
                </p>

                {/* Future Goals */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Goal 1: Carbon Neutral by 2030 */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-primary mb-4">Carbon Neutral by 2030</h3>
                        <p className="text-gray-600">
                            We are committed to becoming carbon neutral by 2030. This means reducing our emissions and offsetting the rest through sustainable practices and green technologies.
                        </p>
                    </div>

                    {/* Goal 2: Expanding Recycling Programs */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-primary mb-4">Expanding Recycling Programs</h3>
                        <p className="text-gray-600">
                            We are looking to expand our recycling programs in all of our operations, making sure that waste is minimized, reused, and recycled wherever possible.
                        </p>
                    </div>

                    {/* Goal 3: Launching New Green Product Lines */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-semibold text-primary mb-4">Launching New Green Product Lines</h3>
                        <p className="text-gray-600">
                            We plan to introduce new sustainable product lines made from recycled materials, renewable resources, and eco-friendly processes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FuturePlansAndGoals;