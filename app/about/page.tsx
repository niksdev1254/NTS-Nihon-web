'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Globe, Users, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutPage = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'Driving technological advancement through creative solutions',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building bridges between cultures and communities',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Delivering world-class quality in everything we do',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Creating positive change across borders',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const leadership = [
    {
      name: 'Rajesh Sharma',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Visionary leader with 15+ years in international business'
    },
    {
      name: 'Yuki Tanaka',
      role: 'COO Japan',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Expert in Japan market dynamics and cultural bridge-building'
    },
    {
      name: 'Priya Patel',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Technology innovator specializing in AI and scalable solutions'
    },
    {
      name: 'Hiroshi Yamamoto',
      role: 'Head of Partnerships',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      bio: 'Strategic partnership expert with deep Japan network'
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nts-indigo to-nts-red text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Connecting cultures, empowering futures, and building bridges between India and Japan through innovation and understanding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-nts-saffron/10 to-nts-red/10 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Target className="w-12 h-12 text-nts-red mr-4" />
                    <h2 className="text-3xl font-bold text-gray-900">
                      {t('about.mission')}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('about.mission.text')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-gradient-to-br from-nts-green/10 to-nts-indigo/10 border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Eye className="w-12 h-12 text-nts-green mr-4" />
                    <h2 className="text-3xl font-bold text-gray-900">
                      {t('about.vision')}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {t('about.vision.text')}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full text-center group hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg transition-shadow`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the visionaries driving our mission forward
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
                  <div className="aspect-square overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-nts-indigo font-medium mb-3">
                      {leader.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {leader.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-20 bg-gradient-to-br from-nts-indigo/5 to-nts-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Global Presence</h2>
            <p className="text-xl text-gray-600 mb-12">
              Connecting opportunities across key markets
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🇮🇳</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">India Hub</h3>
                  <p className="text-gray-600">Mumbai, Maharashtra</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Our India operations serve as the innovation and technology hub, 
                connecting talent across major states including Maharashtra, Delhi, 
                Tamil Nadu, Karnataka, and beyond.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Pune', 'Hyderabad'].map((city) => (
                  <span key={city} className="px-3 py-1 bg-nts-saffron/20 text-nts-saffron rounded-full text-sm">
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4">🇯🇵</span>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Japan Hub</h3>
                  <p className="text-gray-600">Tokyo</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Our Japan operations provide market access and cultural insights 
                across key prefectures including Tokyo, Osaka, Kyoto, Hokkaido, 
                and other major business centers.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Tokyo', 'Osaka', 'Kyoto', 'Yokohama', 'Nagoya', 'Sapporo'].map((city) => (
                  <span key={city} className="px-3 py-1 bg-nts-red/20 text-nts-red rounded-full text-sm">
                    {city}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;