'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Rocket,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const VerticalsPage = () => {
  const { t } = useLanguage();
  const [selectedVertical, setSelectedVertical] = useState<string | null>(null);

  const verticals = [
    {
      id: 'kaamigo',
      icon: BrainCircuit,
      title: 'Kaamigo',
      description: t('vertical.kaamigo'),
      fullDescription: 'Revolutionary AI-powered platform that intelligently matches candidates with opportunities across India and Japan. Our advanced algorithms consider cultural fit, language skills, and career aspirations.',
      features: ['AI-powered matching', 'Cross-cultural assessment', 'Language proficiency testing', 'Career pathway guidance'],
      color: 'from-purple-500 to-pink-500',
      technologies: ['AI/ML', 'NLP', 'React', 'Python'],
      markets: ['India', 'Japan', 'Global Remote']
    },
    {
      id: 'sawari',
      icon: Car,
      title: 'Sawari',
      description: t('vertical.sawari'),
      fullDescription: 'Comprehensive mobility solutions connecting transportation networks between India and Japan. From ride-sharing to logistics optimization.',
      features: ['Smart routing', 'Multi-modal transport', 'Real-time tracking', 'Cost optimization'],
      color: 'from-blue-500 to-cyan-500',
      technologies: ['IoT', 'GPS', 'Mobile Apps', 'Analytics'],
      markets: ['Mumbai', 'Delhi', 'Tokyo', 'Osaka']
    },
    {
      id: 'tradezy',
      icon: TrendingUp,
      title: 'Tradezy',
      description: t('vertical.tradezy'),
      fullDescription: 'Digital platform facilitating seamless international trade between India and Japan with compliance automation and market insights.',
      features: ['Trade documentation', 'Compliance automation', 'Market analysis', 'Logistics tracking'],
      color: 'from-green-500 to-emerald-500',
      technologies: ['Blockchain', 'API Integration', 'Data Analytics', 'Cloud'],
      markets: ['India', 'Japan', 'SEA', 'USA']
    },
    {
      id: 'school',
      icon: GraduationCap,
      title: 'NTS School',
      description: t('vertical.school'),
      fullDescription: 'Interactive language learning platform offering Japanese, English, and Hindi courses with cultural immersion components.',
      features: ['Interactive lessons', 'Cultural immersion', 'Live tutoring', 'Progress tracking'],
      color: 'from-orange-500 to-red-500',
      technologies: ['EdTech', 'Video Streaming', 'AI Tutoring', 'Mobile'],
      markets: ['India', 'Japan', 'Global Online']
    },
    {
      id: 'library',
      icon: Library,
      title: 'NTS Library',
      description: t('vertical.library'),
      fullDescription: 'Comprehensive digital library providing access to knowledge resources, research papers, and cultural content from both countries.',
      features: ['Digital archives', 'Research tools', 'Content curation', 'Multi-language support'],
      color: 'from-indigo-500 to-purple-500',
      technologies: ['Content Management', 'Search Engine', 'Cloud Storage', 'APIs'],
      markets: ['Academic', 'Corporate', 'Individual']
    },
    {
      id: 'tech',
      icon: Code,
      title: 'Tech Services',
      description: t('vertical.tech'),
      fullDescription: 'Custom software development and IT solutions tailored for India-Japan business requirements with cultural and technical expertise.',
      features: ['Custom development', 'System integration', 'Cloud migration', 'Technical consulting'],
      color: 'from-gray-700 to-gray-900',
      technologies: ['Full Stack', 'Cloud', 'DevOps', 'Mobile'],
      markets: ['Enterprise', 'SME', 'Startups']
    },
    {
      id: 'analytics',
      icon: BarChart3,
      title: 'Analytics',
      description: t('vertical.analytics'),
      fullDescription: 'Advanced data analytics and business intelligence solutions providing insights for India-Japan market dynamics.',
      features: ['Predictive analytics', 'Market intelligence', 'Custom dashboards', 'Real-time insights'],
      color: 'from-teal-500 to-cyan-500',
      technologies: ['Big Data', 'Machine Learning', 'Business Intelligence', 'Visualization'],
      markets: ['Enterprise', 'Government', 'Research']
    },
    {
      id: 'hr',
      icon: Users,
      title: 'HR Tech',
      description: t('vertical.hr'),
      fullDescription: 'Modern HR technology solutions addressing unique challenges of cross-cultural workforce management.',
      features: ['Talent management', 'Performance tracking', 'Cultural assessment', 'Compliance automation'],
      color: 'from-rose-500 to-pink-500',
      technologies: ['HR Analytics', 'Automation', 'Mobile Apps', 'AI'],
      markets: ['Corporate', 'Consulting', 'Recruitment']
    },
    {
      id: 'consulting',
      icon: Handshake,
      title: 'Cross-border Consulting',
      description: t('vertical.consulting'),
      fullDescription: 'Strategic consulting services helping businesses navigate India-Japan market entry and expansion opportunities.',
      features: ['Market entry strategy', 'Cultural consulting', 'Regulatory guidance', 'Partnership facilitation'],
      color: 'from-amber-500 to-orange-500',
      technologies: ['Market Research', 'Digital Tools', 'Communication', 'Analytics'],
      markets: ['Enterprise', 'SME', 'Government']
    },
    {
      id: 'cultural',
      icon: Globe,
      title: 'Cultural Exchange',
      description: t('vertical.cultural'),
      fullDescription: 'Programs and platforms fostering deep cultural understanding and exchange between India and Japan.',
      features: ['Exchange programs', 'Cultural events', 'Digital platforms', 'Community building'],
      color: 'from-emerald-500 to-teal-500',
      technologies: ['Event Management', 'Social Platform', 'Video Conferencing', 'Mobile'],
      markets: ['Educational', 'Corporate', 'Individual']
    },
    {
      id: 'accelerator',
      icon: Rocket,
      title: 'Startup Accelerator',
      description: t('vertical.accelerator'),
      fullDescription: 'Comprehensive startup acceleration program connecting Indian and Japanese entrepreneurs with mentorship and funding.',
      features: ['Mentorship programs', 'Funding connections', 'Market access', 'Technical support'],
      color: 'from-violet-500 to-purple-500',
      technologies: ['Platform Development', 'CRM', 'Analytics', 'Communication'],
      markets: ['Startups', 'Investors', 'Mentors']
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nts-indigo via-nts-red to-nts-saffron text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('home.verticals.title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              {t('home.verticals.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Verticals Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verticals.map((vertical, index) => {
              const Icon = vertical.icon;
              const isSelected = selectedVertical === vertical.id;
              
              return (
                <motion.div
                  key={vertical.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  layout
                >
                  <Card 
                    className={`h-full group cursor-pointer transition-all duration-300 border-0 ${
                      isSelected 
                        ? 'shadow-2xl scale-105 ring-2 ring-nts-indigo' 
                        : 'hover:shadow-xl hover:scale-105'
                    }`}
                    onClick={() => setSelectedVertical(isSelected ? null : vertical.id)}
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className={`w-16 h-16 rounded-full bg-gradient-to-br ${vertical.color} flex items-center justify-center group-hover:shadow-lg transition-shadow`}
                          >
                            <Icon className="w-8 h-8 text-white" />
                          </motion.div>
                          
                          <motion.div
                            animate={{ rotate: isSelected ? 45 : 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="w-6 h-6 text-gray-400" />
                          </motion.div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">
                          {vertical.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 flex-grow">
                          {vertical.description}
                        </p>

                        <AnimatePresence>
                          {isSelected && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="border-t border-gray-200 pt-4 mt-4"
                            >
                              <p className="text-sm text-gray-700 mb-4">
                                {vertical.fullDescription}
                              </p>
                              
                              <div className="space-y-3">
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                                  <div className="flex flex-wrap gap-1">
                                    {vertical.features.map((feature) => (
                                      <Badge key={feature} variant="secondary" className="text-xs">
                                        {feature}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Technologies:</h4>
                                  <div className="flex flex-wrap gap-1">
                                    {vertical.technologies.map((tech) => (
                                      <Badge key={tech} variant="outline" className="text-xs">
                                        {tech}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Markets:</h4>
                                  <div className="flex flex-wrap gap-1">
                                    {vertical.markets.map((market) => (
                                      <Badge key={market} className={`text-xs bg-gradient-to-r ${vertical.color} text-white`}>
                                        {market}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              <Button 
                                size="sm" 
                                className="w-full mt-4 bg-nts-indigo hover:bg-nts-indigo/90 text-white"
                              >
                                Learn More <ExternalLink className="w-4 h-4 ml-2" />
                              </Button>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-nts-indigo/5 to-nts-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Explore Our Solutions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get in touch to learn how our verticals can accelerate your India-Japan business objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-nts-indigo hover:bg-nts-indigo/90 text-white px-8 py-3 rounded-full"
              >
                Schedule Consultation
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-nts-indigo text-nts-indigo hover:bg-nts-indigo hover:text-white px-8 py-3 rounded-full"
              >
                Download Brochure
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default VerticalsPage;