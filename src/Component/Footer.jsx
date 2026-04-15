import React from 'react';
import { FaInstagram, FaFacebookF, FaXTwitter } from "react-icons/fa6";
const Footer = () => {
    return (
        <div className=' bg-[#244D3F]'>
            <footer className="container mx-auto text-white py-12">
                <div className="container mx-auto px-4">

                    {/* Brand and Tagline */}
                    <div className="flex flex-col items-center text-center mb-8">
                        <h2 className="text-4xl font-bold mb-4 tracking-tight">KeenKeeper</h2>
                        <p className="text-sm max-w-xl opacity-90 font-light leading-relaxed">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                        </p>
                    </div>

                    {/* Social Links Section */}
                    <div className="flex flex-col items-center mb-16">
                        <span className="text-sm font-medium mb-5">Social Links</span>
                        <div className="flex gap-3">
                            {/* White Circular Icons */}
                            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#244D3F] hover:scale-110 transition-transform">
                                <FaInstagram size={18} />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#244D3F] hover:scale-110 transition-transform">
                                <FaFacebookF size={18} />
                            </a>
                            <a href="#" className="w-9 h-9 bg-white rounded-full flex items-center justify-center text-[#244D3F] hover:scale-110 transition-transform">
                                <FaXTwitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Bottom Bar: Copyright & Legal */}
                    <div className="flex flex-col md:flex-row justify-between items-center text-[13px] opacity-60 gap-4">
                        <p>© 2026 KeenKeeper. All rights reserved.</p>
                        <div className="flex gap-8">
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-white transition-colors">Cookies</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;