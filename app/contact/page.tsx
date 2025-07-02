'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  Facebook,
  Instagram
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import GoogleMap from '@/components/common/GoogleMap';
import { localBusinessSchema } from '@/lib/structured-data';

const ContactPage = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    vertical: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_submit', {
        event_category: 'Contact',
        event_label: 'Contact Form',
        value: 1,
      });
    }
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        vertical: ''
      });
    }, 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const offices = [
    {
      country: 'India',
      flag: '🇮🇳',
      city: 'Patna',
      address: 'Fraser Road, Patna\nBihar 800001, India',
      phone: '+91 98765 43210',
      email: 'patna@ntsnihonglobal.com',
      hours: '9:00 AM - 6:00 PM IST',
      color: 'from-nts-saffron to-nts-green'
    },
    {
      country: 'India',
      flag: '🇮🇳',
      city: 'Delhi',
      address: 'Connaught Place\nNew Delhi, Delhi 110001, India',
      phone: '+91 98765 43211',
      email: 'delhi@ntsnihonglobal.com',
      hours: '9:00 AM - 6:00 PM IST',
      color: 'from-nts-saffron to-nts-green'
    },
    {
      country: 'Japan',
      flag: '🇯🇵',
      city: 'Tokyo',
      address: 'Shibuya Sky Building\n2-24-12 Shibuya, Tokyo 150-0002',
      phone: '+81 3-1234-5678',
      email: 'tokyo@ntsnihonglobal.com',
      hours: '9:00 AM - 6:00 PM JST',
      color: 'from-nts-red to-nts-indigo'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-700' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-600' }
  ];

  const verticals = [
    'Kaamigo', 'Sawari', 'Tradezy', 'NTS School', 'NTS Library', 
    'Tech Services', 'Analytics', 'HR Tech', 'Consulting', 
    'Cultural Exchange', 'Startup Accelerator'
  ];

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            localBusinessSchema('mumbai'),
            localBusinessSchema('tokyo')
          ]),
        }}
      />
      
      <div className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-nts-indigo to-nts-green text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('contact.title')}
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
                Ready to bridge your business opportunities between India and Japan? 
                Let's start the conversation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-xl border-0">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">
                      Send Us a Message
                    </h2>
                    
                    {isSubmitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-12"
                      >
                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-gray-600">
                          Thank you for reaching out. We'll get back to you within 24 hours.
                        </p>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              {t('contact.form.name')} *
                            </label>
                            <Input
                              required
                              value={formData.name}
                              onChange={(e) => handleInputChange('name', e.target.value)}
                              placeholder="Your full name"
                              className="w-full"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              {t('contact.form.email')} *
                            </label>
                            <Input
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              placeholder="your.email@company.com"
                              className="w-full"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Company
                          </label>
                          <Input
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            placeholder="Your company name"
                            className="w-full"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Interested Vertical
                          </label>
                          <Select 
                            value={formData.vertical} 
                            onValueChange={(value) => handleInputChange('vertical', value)}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select a vertical" />
                            </SelectTrigger>
                            <SelectContent>
                              {verticals.map((vertical) => (
                                <SelectItem key={vertical} value={vertical.toLowerCase()}>
                                  {vertical}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Subject *
                          </label>
                          <Input
                            required
                            value={formData.subject}
                            onChange={(e) => handleInputChange('subject', e.target.value)}
                            placeholder="Brief subject of your inquiry"
                            className="w-full"
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('contact.form.message')} *
                          </label>
                          <Textarea
                            required
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            placeholder="Tell us about your project or inquiry..."
                            rows={5}
                            className="w-full"
                          />
                        </div>
                        
                        <Button 
                          type="submit"
                          size="lg"
                          className="w-full bg-nts-indigo hover:bg-nts-indigo/90 text-white"
                        >
                          <Send className="w-5 h-5 mr-2" />
                          {t('contact.form.submit')}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Our Global Offices
                  </h2>
                  
                  <div className="space-y-6">
                    {offices.map((office, index) => (
                      <motion.div
                        key={`${office.country}-${office.city}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="overflow-hidden">
                          <div className={`h-2 bg-gradient-to-r ${office.color}`} />
                          <CardContent className="p-6">
                            <div className="flex items-center mb-4">
                              <span className="text-3xl mr-3">{office.flag}</span>
                              <div>
                                <h3 className="text-xl font-semibold text-gray-900">
                                  {office.country} Office
                                </h3>
                                <p className="text-gray-600">{office.city}</p>
                              </div>
                            </div>
                            
                            <div className="space-y-3 text-sm">
                              <div className="flex items-start">
                                <MapPin className="w-4 h-4 text-gray-400 mt-1 mr-3 flex-shrink-0" />
                                <span className="text-gray-700 whitespace-pre-line">
                                  {office.address}
                                </span>
                              </div>
                              
                              <div className="flex items-center">
                                <Phone className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                                <a href={`tel:${office.phone}`} className="text-nts-indigo hover:underline">
                                  {office.phone}
                                </a>
                              </div>
                              
                              <div className="flex items-center">
                                <Mail className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                                <a href={`mailto:${office.email}`} className="text-nts-indigo hover:underline">
                                  {office.email}
                                </a>
                              </div>
                              
                              <div className="flex items-center">
                                <Clock className="w-4 h-4 text-gray-400 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">{office.hours}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Connect With Us
                  </h3>
                  <div className="flex space-x-4">
                    {socialLinks.map(({ icon: Icon, href, label, color }) => (
                      <motion.a
                        key={label}
                        href={href}
                        aria-label={label}
                        className={`p-3 bg-gray-100 rounded-full text-gray-600 transition-colors duration-200 ${color}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Quick Response Promise */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-nts-indigo/5 to-nts-green/5 rounded-lg p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Quick Response Promise
                  </h3>
                  <p className="text-gray-700 text-sm">
                    We understand the importance of timely communication in business. 
                    Our team commits to responding to all inquiries within 24 hours 
                    during business days, and urgent matters within 4 hours.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Interactive Map Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Find Us on the Map
              </h2>
              <p className="text-xl text-gray-600">
                Visit our offices in Patna, Delhi, and Tokyo
              </p>
            </motion.div>
            
            <GoogleMap />
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;