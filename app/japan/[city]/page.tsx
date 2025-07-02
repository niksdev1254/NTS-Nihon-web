'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Building, TrendingUp, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useParams } from 'next/navigation';

const JapaneseCityPage = () => {
  const params = useParams();
  const city = params.city as string;
  
  // City data mapping
  const cityData: Record<string, any> = {
    tokyo: {
      name: 'Tokyo',
      prefecture: 'Tokyo',
      population: '37.4 million',
      description: 'Global financial center and technology hub of Japan',
      opportunities: ['Fintech', 'AI/ML', 'Robotics', 'Digital Transformation'],
      keyIndustries: ['Finance', 'Technology', 'Manufacturing', 'Services'],
      coordinates: { lat: 35.6762, lng: 139.6503 }
    },
    osaka: {
      name: 'Osaka',
      prefecture: 'Osaka',
      population: '19.2 million',
      description: 'Commercial heart of western Japan',
      opportunities: ['Manufacturing', 'Pharmaceuticals', 'Food Industry', 'Logistics'],
      keyIndustries: ['Manufacturing', 'Pharmaceuticals', 'Steel', 'Chemicals'],
      coordinates: { lat: 34.6937, lng: 135.5023 }
    },
    kyoto: {
      name: 'Kyoto',
      prefecture: 'Kyoto',
      population: '1.5 million',
      description: 'Cultural capital with traditional and modern industries',
      opportunities: ['Traditional Crafts', 'Tourism', 'Electronics', 'Education'],
      keyIndustries: ['Electronics', 'Traditional Crafts', 'Tourism', 'Education'],
      coordinates: { lat: 35.0116, lng: 135.7681 }
    },
    yokohama: {
      name: 'Yokohama',
      prefecture: 'Kanagawa',
      population: '3.7 million',
      description: 'Major port city and business center',
      opportunities: ['Shipping', 'Automotive', 'Biotechnology', 'International Trade'],
      keyIndustries: ['Shipping', 'Automotive', 'Steel', 'Chemicals'],
      coordinates: { lat: 35.4437, lng: 139.6380 }
    }
  };

  const currentCity = cityData[city] || {
    name: city.charAt(0).toUpperCase() + city.slice(1),
    prefecture: 'Japan',
    population: 'N/A',
    description: 'Important Japanese city with business opportunities',
    opportunities: ['Technology', 'Manufacturing', 'Services', 'Innovation'],
    keyIndustries: ['Manufacturing', 'Services', 'Technology', 'Trade'],
    coordinates: { lat: 36.2048, lng: 138.2529 }
  };

  const services = [
    {
      title: 'Market Entry Support',
      description: `Comprehensive support for Indian companies entering ${currentCity.name} market`,
      icon: Building
    },
    {
      title: 'Talent Acquisition',
      description: `Connect with skilled Indian professionals for ${currentCity.name} opportunities`,
      icon: Users
    },
    {
      title: 'Cultural Bridge',
      description: `Cultural consulting and language services for smooth business operations`,
      icon: TrendingUp
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nts-red to-nts-indigo text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">🇯🇵</span>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold">
                  NTS in {currentCity.name}
                </h1>
                <p className="text-xl opacity-90">{currentCity.prefecture}, Japan</p>
              </div>
            </div>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              {currentCity.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* City Overview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* City Stats */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">City Overview</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-nts-red mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{currentCity.name}</p>
                        <p className="text-sm text-gray-600">{currentCity.prefecture}, Japan</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-nts-red mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">Population</p>
                        <p className="text-sm text-gray-600">{currentCity.population}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Industries</h3>
                    <div className="flex flex-wrap gap-2">
                      {currentCity.keyIndustries.map((industry: string) => (
                        <Badge key={industry} variant="secondary">
                          {industry}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Opportunities in {currentCity.name}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentCity.opportunities.map((opportunity: string, index: number) => (
                      <motion.div
                        key={opportunity}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="p-4 bg-gradient-to-br from-nts-red/5 to-nts-indigo/5 rounded-lg"
                      >
                        <h3 className="font-semibold text-gray-900 mb-2">{opportunity}</h3>
                        <p className="text-sm text-gray-600">
                          High-potential sector for India-Japan business collaboration
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Services in {currentCity.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bridging Indian innovation with {currentCity.name} business opportunities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-nts-red to-nts-indigo flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg transition-shadow"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-br from-nts-red/5 to-nts-indigo/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Expand to {currentCity.name}?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's explore how we can help your business succeed in Japan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-nts-red hover:bg-nts-red/90 text-white px-8 py-3 rounded-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-nts-red text-nts-red hover:bg-nts-red hover:text-white px-8 py-3 rounded-full"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Inquiry
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JapaneseCityPage;