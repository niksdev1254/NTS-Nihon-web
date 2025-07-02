'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  BrainCircuit, 
  Car, 
  TrendingUp, 
  GraduationCap, 
  Library, 
  Code, 
  BarChart3, 
  Users, 
  Handshake, 
  Globe, 
  Rocket 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const VerticalsSection = () => {
  const { t } = useLanguage();

  const verticals = [
    {
      id: 'kaamigo',
      icon: BrainCircuit,
      title: 'Kaamigo',
      description: t('vertical.kaamigo'),
      color: 'from-nts-purple to-nts-secondary',
      delay: 0.1
    },
    {
      id: 'sawari',
      icon: Car,
      title: 'Sawari',
      description: t('vertical.sawari'),
      color: 'from-nts-primary to-nts-accent',
      delay: 0.2
    },
    {
      id: 'tradezy',
      icon: TrendingUp,
      title: 'Tradezy',
      description: t('vertical.tradezy'),
      color: 'from-nts-success to-nts-gold',
      delay: 0.3
    },
    {
      id: 'school',
      icon: GraduationCap,
      title: 'NTS School',
      description: t('vertical.school'),
      color: 'from-nts-accent to-nts-secondary',
      delay: 0.4
    },
    {
      id: 'library',
      icon: Library,
      title: 'NTS Library',
      description: t('vertical.library'),
      color: 'from-nts-primary to-nts-purple',
      delay: 0.5
    },
    {
      id: 'tech',
      icon: Code,
      title: 'Tech Services',
      description: t('vertical.tech'),
      color: 'from-nts-neutral to-nts-primary',
      delay: 0.6
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Analytics',
      description: t('vertical.analytics'),
      color: 'from-nts-success to-nts-accent',
      delay: 0.7
    },
    {
      id: 'hr',
      icon: Users,
      title: 'HR Tech',
      description: t('vertical.hr'),
      color: 'from-nts-secondary to-nts-purple',
      delay: 0.8
    },
    {
      id: 'consulting',
      icon: Handshake,
      title: 'Cross-border Consulting',
      description: t('vertical.consulting'),
      color: 'from-nts-gold to-nts-accent',
      delay: 0.9
    },
    {
      id: 'cultural',
      icon: Globe,
      title: 'Cultural Exchange',
      description: t('vertical.cultural'),
      color: 'from-nts-success to-nts-primary',
      delay: 1.0
    },
    {
      id: 'accelerator',
      icon: Rocket,
      title: 'Startup Accelerator',
      description: t('vertical.accelerator'),
      color: 'from-nts-purple to-nts-secondary',
      delay: 1.1
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nts-neutral mb-6">
            {t('home.verticals.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('home.verticals.subtitle')}
          </p>
        </motion.div>

        {/* Verticals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {verticals.map((vertical) => {
            const Icon = vertical.icon;
            return (
              <motion.div
                key={vertical.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: vertical.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center h-full">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${vertical.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <h3 className="text-lg font-semibold text-nts-neutral mb-3">
                        {vertical.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                        {vertical.description}
                      </p>
                      
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="mt-4 pt-4 border-t border-gray-100 w-full"
                      >
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-nts-primary hover:text-nts-primary hover:bg-nts-primary/10 w-full"
                        >
                          Learn More →
                        </Button>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="bg-nts-primary hover:bg-nts-primary/90 text-white px-8 py-3 rounded-full"
          >
            Explore All Verticals
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default VerticalsSection;