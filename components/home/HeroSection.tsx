'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe, Users, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { event } from '@/lib/analytics';
import Image from 'next/image';

const HeroSection = () => {
  const { t } = useLanguage();

  const stats = [
    { icon: Globe, value: '11', label: 'Verticals' },
    { icon: Users, value: '10K+', label: 'Connections' },
    { icon: Zap, value: '2', label: 'Countries' },
  ];

  const handleCTAClick = () => {
    event({
      action: 'click',
      category: 'Hero CTA',
      label: 'Explore Verticals',
    });
  };

  const handleVideoClick = () => {
    event({
      action: 'click',
      category: 'Hero Video',
      label: 'Watch Video',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-nts-light via-blue-50 to-indigo-50">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-nts-accent/20 to-nts-secondary/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-nts-success/20 to-nts-primary/20 rounded-full blur-xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full border border-gray-200 mb-6"
            >
              <span className="text-nts-primary font-semibold text-sm">🇮🇳 India ⟷ Japan 🇯🇵</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold text-nts-neutral leading-tight mb-6"
            >
              <span className="text-gradient">{t('home.hero.title').split(' ').slice(0, 2).join(' ')}</span>
              <br />
              {t('home.hero.title').split(' ').slice(2).join(' ')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-gray-600 mb-8 max-w-xl"
            >
              {t('home.hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button 
                size="lg" 
                className="bg-nts-primary hover:bg-nts-primary/90 text-white px-8 py-3 rounded-full group"
                onClick={handleCTAClick}
              >
                {t('home.hero.cta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-nts-primary text-nts-primary hover:bg-nts-primary hover:text-white px-8 py-3 rounded-full group"
                onClick={handleVideoClick}
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Video
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="grid grid-cols-3 gap-8"
            >
              {stats.map(({ icon: Icon, value, label }, index) => (
                <div key={label} className="text-center">
                  <div className="flex justify-center mb-2">
                    <Icon className="w-6 h-6 text-nts-primary" />
                  </div>
                  <div className="text-2xl font-bold text-nts-neutral">{value}</div>
                  <div className="text-sm text-gray-600">{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-80 h-80 mx-auto rounded-full border-4 border-dashed border-nts-primary/30 flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="w-64 h-64 bg-gradient-to-br from-nts-primary to-nts-secondary rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image
                      src="/image.png"
                      alt="NTS Nihon Global"
                      width={120}
                      height={120}
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-nts-accent rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold">🇮🇳</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-nts-secondary rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white font-bold">🇯🇵</span>
              </motion.div>

              <motion.div
                animate={{ 
                  x: [0, 20, 0],
                  y: [0, -20, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -left-8 w-12 h-12 bg-nts-success rounded-full flex items-center justify-center shadow-lg"
              >
                <Zap className="w-6 h-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;