"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale, TooltipItem } from "chart.js";

// Register the required Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale);

const FinancialTransparency = () => {
    // Data for the Pie chart
    const data = {
        labels: ["Feeding Programs", "Clothing Donations", "Administrative Costs", "Sustainability Initiatives"],
        datasets: [
            {
                label: "Donation Allocation",
                data: [45, 25, 15, 15], // Example data in percentages
                backgroundColor: [
                    "#4CAF50", // Green for Feeding Programs
                    "#FF9800", // Orange for Clothing Donations
                    "#2196F3", // Blue for Administrative Costs
                    "#FFC107", // Yellow for Sustainability Initiatives
                ],
                borderColor: "#fff",
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top" as const,
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: TooltipItem<'pie'>) => {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    },
                },
            },
        },
    };

    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-primary mb-8">
                    Where Your Donations Go
                </h2>

                {/* Pie Chart Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="mb-12">
                        <div className="w-full max-w-md mx-auto">
                            <Pie data={data} options={options} />
                        </div>
                    </div>

                    {/* Financial Breakdown Categories */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
                        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 rounded-full bg-green-500 text-white flex items-center justify-center mb-4">
                                <span className="text-xl font-semibold">🍽</span>
                            </div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Feeding Programs</h3>
                            <p className="text-gray-700">45% of donations go toward providing meals and support for the homeless.</p>
                        </div>

                        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4">
                                <span className="text-xl font-semibold">👚</span>
                            </div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Clothing Donations</h3>
                            <p className="text-gray-700">25% of donations are used to provide branded clothing to those in need.</p>
                        </div>

                        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center mb-4">
                                <span className="text-xl font-semibold">💼</span>
                            </div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Administrative Costs</h3>
                            <p className="text-gray-700">15% goes toward supporting operational and organizational functions.</p>
                        </div>

                        <div className="flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md">
                            <div className="w-16 h-16 rounded-full bg-yellow-500 text-white flex items-center justify-center mb-4">
                                <span className="text-xl font-semibold">🌱</span>
                            </div>
                            <h3 className="text-lg font-semibold text-primary mb-2">Sustainability Initiatives</h3>
                            <p className="text-gray-700">15% is allocated to projects that promote long-term environmental and social impact.</p>
                        </div>
                    </div>
                </div>
                {/* Learn More Button */}
                <div className="mt-6">
                    <a
                        href="/path/to/financial-breakdown"
                        className="bg-accentGreen text-white px-6 py-3 rounded-full font-semibold hover:bg-accentGreen/80 transition duration-300"
                    >
                        Learn More
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FinancialTransparency;