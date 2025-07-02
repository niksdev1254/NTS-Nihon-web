'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Presentation, BarChart3, Image, Video } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Asset {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'pptx' | 'docx' | 'jpg' | 'mp4';
  size: string;
  category: 'brochure' | 'case-study' | 'pitch-deck' | 'media';
  downloadUrl: string;
  previewUrl?: string;
}

const DownloadAssets = () => {
  const assets: Asset[] = [
    {
      id: '1',
      title: 'NTS Nihon Global Company Brochure',
      description: 'Comprehensive overview of our 11 verticals and services',
      type: 'pdf',
      size: '2.4 MB',
      category: 'brochure',
      downloadUrl: '/assets/nts-company-brochure.pdf',
      previewUrl: '/assets/previews/brochure-preview.jpg'
    },
    {
      id: '2',
      title: 'Investor Pitch Deck 2024',
      description: 'Latest investor presentation with market analysis and growth projections',
      type: 'pptx',
      size: '8.7 MB',
      category: 'pitch-deck',
      downloadUrl: '/assets/nts-investor-pitch-2024.pptx',
      previewUrl: '/assets/previews/pitch-deck-preview.jpg'
    },
    {
      id: '3',
      title: 'Kaamigo Success Stories',
      description: 'Case studies showcasing AI-powered job matching success stories',
      type: 'pdf',
      size: '1.8 MB',
      category: 'case-study',
      downloadUrl: '/assets/kaamigo-case-studies.pdf',
      previewUrl: '/assets/previews/kaamigo-preview.jpg'
    },
    {
      id: '4',
      title: 'Sawari Mobility Solutions',
      description: 'Transportation and mobility services portfolio',
      type: 'pdf',
      size: '3.2 MB',
      category: 'case-study',
      downloadUrl: '/assets/sawari-portfolio.pdf',
      previewUrl: '/assets/previews/sawari-preview.jpg'
    },
    {
      id: '5',
      title: 'India-Japan Trade Report 2024',
      description: 'Comprehensive analysis of trade opportunities between India and Japan',
      type: 'pdf',
      size: '4.1 MB',
      category: 'case-study',
      downloadUrl: '/assets/india-japan-trade-report-2024.pdf',
      previewUrl: '/assets/previews/trade-report-preview.jpg'
    },
    {
      id: '6',
      title: 'NTS Corporate Video',
      description: 'Introduction video showcasing our mission and global presence',
      type: 'mp4',
      size: '45.2 MB',
      category: 'media',
      downloadUrl: '/assets/nts-corporate-video.mp4',
      previewUrl: '/assets/previews/video-preview.jpg'
    },
    {
      id: '7',
      title: 'High-Resolution Logo Pack',
      description: 'NTS Nihon Global logos in various formats and resolutions',
      type: 'jpg',
      size: '12.5 MB',
      category: 'media',
      downloadUrl: '/assets/nts-logo-pack.zip',
      previewUrl: '/assets/previews/logo-pack-preview.jpg'
    },
    {
      id: '8',
      title: 'Cultural Exchange Program Guide',
      description: 'Detailed guide for India-Japan cultural exchange initiatives',
      type: 'pdf',
      size: '2.9 MB',
      category: 'brochure',
      downloadUrl: '/assets/cultural-exchange-guide.pdf',
      previewUrl: '/assets/previews/cultural-guide-preview.jpg'
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return FileText;
      case 'pptx':
        return Presentation;
      case 'docx':
        return FileText;
      case 'jpg':
        return Image;
      case 'mp4':
        return Video;
      default:
        return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'brochure':
        return 'bg-blue-100 text-blue-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      case 'pitch-deck':
        return 'bg-purple-100 text-purple-800';
      case 'media':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleDownload = (asset: Asset) => {
    // Track download event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download', {
        event_category: 'Asset Download',
        event_label: asset.title,
        value: 1,
      });
    }

    // Create download link
    const link = document.createElement('a');
    link.href = asset.downloadUrl;
    link.download = asset.title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const categories = [
    { key: 'all', label: 'All Assets', count: assets.length },
    { key: 'brochure', label: 'Brochures', count: assets.filter(a => a.category === 'brochure').length },
    { key: 'case-study', label: 'Case Studies', count: assets.filter(a => a.category === 'case-study').length },
    { key: 'pitch-deck', label: 'Pitch Decks', count: assets.filter(a => a.category === 'pitch-deck').length },
    { key: 'media', label: 'Media Assets', count: assets.filter(a => a.category === 'media').length },
  ];

  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const filteredAssets = selectedCategory === 'all' 
    ? assets 
    : assets.filter(asset => asset.category === selectedCategory);

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Download Resources
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Access our comprehensive collection of brochures, case studies, pitch decks, and media assets
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3"
      >
        {categories.map((category) => (
          <Button
            key={category.key}
            variant={selectedCategory === category.key ? 'default' : 'outline'}
            onClick={() => setSelectedCategory(category.key)}
            className={`${
              selectedCategory === category.key
                ? 'bg-nts-indigo text-white'
                : 'border-nts-indigo text-nts-indigo hover:bg-nts-indigo hover:text-white'
            }`}
          >
            {category.label} ({category.count})
          </Button>
        ))}
      </motion.div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredAssets.map((asset, index) => {
          const Icon = getIcon(asset.type);
          
          return (
            <motion.div
              key={asset.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col h-full">
                    {/* Preview Image */}
                    {asset.previewUrl && (
                      <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                        <img
                          src={asset.previewUrl}
                          alt={asset.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    
                    {/* Asset Info */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <Icon className="w-5 h-5 text-nts-indigo" />
                        <Badge className={getCategoryColor(asset.category)}>
                          {asset.category.replace('-', ' ')}
                        </Badge>
                      </div>
                      <span className="text-xs text-gray-500 uppercase">
                        {asset.type}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {asset.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 flex-grow line-clamp-3">
                      {asset.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">
                        {asset.size}
                      </span>
                      
                      <Button
                        size="sm"
                        onClick={() => handleDownload(asset)}
                        className="bg-nts-indigo hover:bg-nts-indigo/90 text-white group/btn"
                      >
                        <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-br from-nts-indigo/5 to-nts-green/5 rounded-2xl p-8"
      >
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Need Custom Materials?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Looking for specific information or custom materials for your project? 
          Our team can create tailored resources to meet your needs.
        </p>
        <Button 
          size="lg"
          className="bg-nts-indigo hover:bg-nts-indigo/90 text-white"
        >
          Request Custom Materials
        </Button>
      </motion.div>
    </div>
  );
};

export default DownloadAssets;