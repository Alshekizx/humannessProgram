import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" text-white bg-background-dark py-16 px-6 sm:px-12">
            <div className=" text-white max-w-7xl  mx-auto">
                {/* Footer Top Section - Navigation Links */}
                <div className=" text-white grid grid-cols-2 sm:grid-cols-4 gap-12 mb-12">
                    {/* About Section */}
                    <div>
                        <h3 className=" text-white text-lg font-heading font-semibold mb-4">About Us</h3>
                        <ul className=" text-white space-y-2">
                            <li>
                                <Link href="/about/ourStory" className=" text-white text-sm font-body hover:text-accentGreen transition-colors duration-300">
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/impactReports" className=" text-white text-sm font-body hover:text-accentGreen transition-colors duration-300">
                                    Impact Reports
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/sustainability" className=" text-white text-sm font-body hover:text-accentGreen transition-colors duration-300">
                                    Sustainability
                                </Link>
                            </li>
                            <li>
                                <Link href="/about/charitableInitiatives" className=" text-white text-sm font-body hover:text-accentGreen transition-colors duration-300">
                                    Charitable Initiatives
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Products Section */}
                    <div>
                        <h3 className=" text-white text-lg font-heading font-semibold mb-4">Products</h3>
                        <ul className=" text-white space-y-2">
                            <li>
                                <Link href="/products" className=" text-white text-sm font-body hover:text-accentGreen transition-colors duration-300">
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/category1" className=" text-white text-sm font-body hover:text-accentGreen transition-colors duration-300">
                                    New Arrivals
                                </Link>
                            </li>
                            <li>
                                <Link href="/products/category2" className=" text-white text-sm font-body hover:text-accentGreen transition-colors duration-300">
                                    Branded Apparel
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h3 className=" text-white text-lg font-heading font-semibold mb-4">Contact</h3>
                        <ul className=" text-white space-y-2">
                            <li>
                                <p className=" text-white text-sm font-body">
                                    <strong className="text-white">Address:</strong> 123 Humanness St, Lagos, Nigeria
                                </p>
                            </li>
                            <li>
                                <p className=" text-white text-sm font-body">
                                    <strong className="text-white">Email:</strong> contact@humanness.org
                                </p>
                            </li>
                            <li>
                                <p className=" text-white text-sm font-body">
                                    <strong className="text-white">Phone:</strong> +234 123 456 789
                                </p>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h3 className=" text-white text-lg font-heading font-semibold mb-4">Legal</h3>
                        <ul className=" text-white space-y-2">
                            <li>
                                <Link href="/terms" className=" text-white text-sm font-body hover:text-accentGreen transition-colors duration-300">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className=" text-white text-sm font-body hover:text-accentGreen transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Section - Social Media Links */}
                <div className=" text-white flex justify-center gap-8 mb-8">
                    <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                        <FaFacebook className=" text-white text-2xl text-white hover:text-accentGreen transition-colors duration-300" />
                    </Link>
                    <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                        <FaTwitter className=" text-white text-2xl text-white hover:text-accentGreen transition-colors duration-300" />
                    </Link>
                    <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                        <FaInstagram className=" text-white text-2xl text-white hover:text-accentGreen transition-colors duration-300" />
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin className=" text-white text-2xl text-white hover:text-accentGreen transition-colors duration-300" />
                    </Link>
                </div>

                {/* Footer Bottom Section - Copyright */}
                <div className=" text-white text-center text-sm">
                    <p className=" text-white font-body">
                        © 2025 Humanness. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;