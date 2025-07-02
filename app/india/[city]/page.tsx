'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Building, TrendingUp, Phone, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useParams } from 'next/navigation';

const IndianCityPage = () => {
  const params = useParams();
  const city = params.city as string;
  
  // City data mapping
  const cityData: Record<string, any> = {
    mumbai: {
      name: 'Mumbai',
      state: 'Maharashtra',
      population: '20.4 million',
      description: 'Financial capital of India and major business hub',
      opportunities: ['Fintech', 'Entertainment', 'Manufacturing', 'Logistics'],
      keyIndustries: ['Banking & Finance', 'Entertainment', 'Textiles', 'Pharmaceuticals'],
      coordinates: { lat: 19.0760, lng: 72.8777 }
    },
    delhi: {
      name: 'Delhi',
      state: 'Delhi',
      population: '32.9 million',
      description: 'Capital territory and political center of India',
      opportunities: ['Government Tech', 'Automotive', 'Tourism', 'Education'],
      keyIndustries: ['Government', 'Automotive', 'IT Services', 'Tourism'],
      coordinates: { lat: 28.6139, lng: 77.2090 }
    },
    bangalore: {
      name: 'Bangalore',
      state: 'Karnataka',
      population: '12.3 million',
      description: 'Silicon Valley of India and IT capital',
      opportunities: ['Software Development', 'Biotechnology', 'Aerospace', 'R&D'],
      keyIndustries: ['Information Technology', 'Biotechnology', 'Aerospace', 'Research'],
      coordinates: { lat: 12.9716, lng: 77.5946 }
    },
    patna: {
      name: 'Patna',
      state: 'Bihar',
      population: '2.0 million',
      description: 'Historic capital of Bihar with growing opportunities',
      opportunities: ['Agriculture Tech', 'Education', 'Healthcare', 'Government Services'],
      keyIndustries: ['Agriculture', 'Education', 'Government', 'Small Scale Industries'],
      coordinates: { lat: 25.5941, lng: 85.1376 }
    }
  };

  const currentCity = cityData[city] || {
    name: city.charAt(0).toUpperCase() + city.slice(1),
    state: 'India',
    population: 'N/A',
    description: 'Emerging market with growing opportunities',
    opportunities: ['Technology', 'Business Services', 'Manufacturing', 'Trade'],
    keyIndustries: ['Services', 'Manufacturing', 'Trade', 'Technology'],
    coordinates: { lat: 20.5937, lng: 78.9629 }
  };

  const services = [
    {
      title: 'Kaamigo Job Matching',
      description: `AI-powered job matching services connecting ${currentCity.name} talent with Japanese opportunities`,
      icon: Users
    },
    {
      title: 'Business Consulting',
      description: `Strategic consulting for Japanese companies entering ${currentCity.name} market`,
      icon: Building
    },
    {
      title: 'Cultural Exchange',
      description: `Language learning and cultural programs for ${currentCity.name} professionals`,
      icon: TrendingUp
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nts-saffron to-nts-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <span className="text-6xl mr-4">🇮🇳</span>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold">
                  NTS in {currentCity.name}
                </h1>
                <p className="text-xl opacity-90">{currentCity.state}, India</p>
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
                      <MapPin className="w-5 h-5 text-nts-indigo mr-3" />
                      <div>
                        <p className="font-medium text-gray-900">{currentCity.name}</p>
                        <p className="text-sm text-gray-600">{currentCity.state}, India</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-nts-indigo mr-3" />
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
                        className="p-4 bg-gradient-to-br from-nts-indigo/5 to-nts-green/5 rounded-lg"
                      >
                        <h3 className="font-semibold text-gray-900 mb-2">{opportunity}</h3>
                        <p className="text-sm text-gray-600">
                          Growing sector with significant Japan-India collaboration potential
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
              Comprehensive solutions connecting {currentCity.name} with Japanese markets
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
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-nts-indigo to-nts-green flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg transition-shadow"
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
      <section className="py-20 bg-gradient-to-br from-nts-indigo/5 to-nts-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Connect {currentCity.name} with Japan?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's explore opportunities for collaboration and growth
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-nts-indigo hover:bg-nts-indigo/90 text-white px-8 py-3 rounded-full"
              >
                <Phone className="w-5 h-5 mr-2" />
                Schedule Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-nts-indigo text-nts-indigo hover:bg-nts-indigo hover:text-white px-8 py-3 rounded-full"
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

export default IndianCityPage;