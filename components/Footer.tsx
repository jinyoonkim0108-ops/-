
import React from 'react';
import { TranslationStrings } from '../types';

interface FooterProps {
  t: TranslationStrings;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-4 gap-12 mb-12 border-b pb-12">
          <div>
            <h4 className="font-bold mb-4">CUSTOMER SERVICE</h4>
            <div className="text-2xl font-black text-pink-600 mb-2">1588-0000</div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Mon-Fri 09:00 - 18:00<br />
              Lunch 12:00 - 13:00<br />
              Weekend/Holiday Off
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">ABOUT US</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-pink-600 cursor-pointer">Company Introduction</li>
              <li className="hover:text-pink-600 cursor-pointer">Recruit</li>
              <li className="hover:text-pink-600 cursor-pointer">Partnership</li>
              <li className="hover:text-pink-600 cursor-pointer">Global Business</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">HELP & SUPPORT</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-pink-600 cursor-pointer">Shipping Policy</li>
              <li className="hover:text-pink-600 cursor-pointer">Returns & Exchanges</li>
              <li className="hover:text-pink-600 cursor-pointer">Membership Benefits</li>
              <li className="hover:text-pink-600 cursor-pointer">FAQ</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">LEGAL</h4>
            <ul className="text-sm text-gray-500 space-y-2">
              <li className="hover:text-pink-600 cursor-pointer">Terms of Service</li>
              <li className="hover:text-pink-600 cursor-pointer font-bold text-gray-800">Privacy Policy</li>
              <li className="hover:text-pink-600 cursor-pointer">Email Security</li>
              <li className="hover:text-pink-600 cursor-pointer">Location Policy</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <div className="max-w-3xl">
            <p className="mb-2">{t.footerInfo}</p>
            <p>CEO: John Doe | Address: 123 Fashion Ave, Seoul, Korea | Business License: 123-45-67890</p>
            <p className="mt-2">© 2024 PREMIUM MALL CLONE. ALL RIGHTS RESERVED.</p>
          </div>
          <div className="flex space-x-4">
            <img src="https://picsum.photos/40/25?random=100" alt="payment" className="grayscale opacity-50" />
            <img src="https://picsum.photos/40/25?random=101" alt="payment" className="grayscale opacity-50" />
            <img src="https://picsum.photos/40/25?random=102" alt="payment" className="grayscale opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
