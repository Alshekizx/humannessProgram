"use client";

import React, { useState } from "react";

const reportData = [
    { year: "2023", name: "2023 Impact Report", link: "/path/to/2023-report.pdf", initiative: "Feeding Programs" },
    { year: "2022", name: "2022 Impact Report", link: "/path/to/2022-report.pdf", initiative: "Sustainability Initiatives" },
    { year: "2021", name: "2021 Impact Report", link: "/path/to/2021-report.pdf", initiative: "Clothing Donations" },
];

const ArchiveReports = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    // Filter reports based on search term and selected year
    const filteredReports = reportData.filter((report) => {
        const matchesSearch = report.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesYear = selectedYear ? report.year === selectedYear : true;
        return matchesSearch && matchesYear;
    });

    return (
        <section className="bg-gray-100 py-16 px-4">
            <div className="max-w-7xl mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-4xl font-bold text-primary mb-8">
                    Our Track Record
                </h2>

                {/* Search/Filter Section */}
                <div className="mb-8 flex justify-center gap-4">
                    {/* Search Input */}
                    <div className="w-80">
                        <input
                            type="text"
                            placeholder="Search reports"
                            className="w-full px-4 py-2 rounded-lg border border-gray-300"
                            onChange={(e) => setSearchTerm(e.target.value)}
                            value={searchTerm}
                        />
                    </div>

                    {/* Year Filter Dropdown */}
                    <select
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(e.target.value)}
                        className="px-4 py-2 rounded-lg border border-gray-300"
                    >
                        <option value="">Filter by Year</option>
                        <option value="2023">2023</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>
                </div>

                {/* Reports List */}
                <div className="space-y-4">
                    {filteredReports.length > 0 ? (
                        filteredReports.map((report) => (
                            <div key={report.year} className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-semibold text-primary">{report.name}</h3>
                                <p className="text-gray-700 mb-4">Initiative: {report.initiative}</p>
                                <a
                                    href={report.link}
                                    className="text-accentGreen font-semibold hover:text-accentGreen/80 transition duration-300"
                                >
                                    Download Report
                                </a>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-700">No reports found.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ArchiveReports;