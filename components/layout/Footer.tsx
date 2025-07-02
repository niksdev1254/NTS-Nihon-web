'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Mail, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram,
  ExternalLink 
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Image from 'next/image';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/about', label: t('nav.about') },
    { href: '/verticals', label: t('nav.verticals') },
    { href: '/careers', label: t('nav.careers') },
    { href: '/contact', label: t('nav.contact') },
    { href: '/blog', label: t('nav.blog') },
  ];

  const verticals = [
    'Kaamigo',
    'Sawari',
    'Tradezy',
    'NTS School',
    'NTS Library',
    'Tech Services',
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-nts-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="relative w-8 h-8 overflow-hidden rounded-lg">
                <Image
                  src="/image.png"
                  alt="NTS Nihon Global Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-lg font-bold">NTS</span>
                <span className="text-md font-medium ml-1">Nihon Global</span>
              </div>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md text-sm">
              {t('footer.description')}
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-nts-accent" />
                <div className="text-sm">
                  <p className="font-medium">India: Mumbai, Delhi, Patna</p>
                  <p className="font-medium">Japan: Tokyo</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-nts-success" />
                <a href="mailto:info@ntsnihonglobal.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@ntsnihonglobal.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-md font-semibold mb-3">{t('footer.quicklinks')}</h3>
            <ul className="space-y-1">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Verticals */}
          <div>
            <h3 className="text-md font-semibold mb-3">{t('footer.verticals')}</h3>
            <ul className="space-y-1">
              {verticals.map((vertical) => (
                <li key={vertical}>
                  <Link 
                    href={`/verticals#${vertical.toLowerCase()}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center text-sm"
                  >
                    {vertical}
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-3 md:mb-0">
              <h4 className="text-sm font-medium">{t('footer.connect')}</h4>
              <div className="flex space-x-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="w-4 h-4" />
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-xs">
                © {new Date().getFullYear()} NTS Nihon Global. {t('footer.rights')}
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-3 mt-1 text-xs text-gray-500">
                <Link href="/privacy" className="hover:text-gray-300">Privacy</Link>
                <Link href="/terms" className="hover:text-gray-300">Terms</Link>
                <Link href="/cookies" className="hover:text-gray-300">Cookies</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;