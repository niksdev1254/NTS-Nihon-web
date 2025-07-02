'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar,
  User,
  ArrowRight,
  Search,
  Tag,
  Clock,
  TrendingUp,
  Globe,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', count: 24 },
    { id: 'technology', name: 'Technology', count: 8 },
    { id: 'business', name: 'Business', count: 6 },
    { id: 'culture', name: 'Culture', count: 5 },
    { id: 'innovation', name: 'Innovation', count: 3 },
    { id: 'market-insights', name: 'Market Insights', count: 2 }
  ];

  const featuredPost = {
    id: 1,
    title: 'The Future of AI-Powered Job Matching: Lessons from India and Japan',
    excerpt: 'Exploring how artificial intelligence is revolutionizing recruitment processes across two of Asia\'s largest economies, and what it means for the global workforce.',
    content: 'In an era where talent acquisition has become increasingly complex, artificial intelligence emerges as a game-changer...',
    author: 'Rajesh Sharma',
    authorImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Technology',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
    tags: ['AI', 'Recruitment', 'India', 'Japan', 'Future of Work'],
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Cross-Cultural Business Etiquette: Navigating India-Japan Partnerships',
      excerpt: 'Understanding cultural nuances that can make or break business relationships between Indian and Japanese companies.',
      author: 'Yuki Tanaka',
      authorImage: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Culture',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      tags: ['Business Culture', 'Partnerships', 'Etiquette']
    },
    {
      id: 3,
      title: 'Digital Transformation in Japanese Enterprises: An Indian Perspective',
      excerpt: 'How Indian tech companies are helping Japanese businesses embrace digital transformation.',
      author: 'Priya Patel',
      authorImage: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      tags: ['Digital Transformation', 'Enterprise', 'Innovation']
    },
    {
      id: 4,
      title: 'Mobility Revolution: How Sawari is Changing Transportation in Asia',
      excerpt: 'A deep dive into our mobility platform and its impact on urban transportation solutions.',
      author: 'Hiroshi Yamamoto',
      authorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-08',
      readTime: '5 min read',
      category: 'Innovation',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      tags: ['Mobility', 'Transportation', 'Urban Planning']
    },
    {
      id: 5,
      title: 'Language Learning in the Digital Age: NTS School Success Stories',
      excerpt: 'How our language learning platform is breaking down communication barriers between cultures.',
      author: 'Anita Singh',
      authorImage: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-05',
      readTime: '4 min read',
      category: 'Culture',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      tags: ['Education', 'Language Learning', 'Technology']
    },
    {
      id: 6,
      title: 'Market Analysis: E-commerce Trends in India and Japan',
      excerpt: 'Comparative analysis of e-commerce growth patterns and consumer behavior in both markets.',
      author: 'Kenji Nakamura',
      authorImage: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'Market Insights',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      tags: ['E-commerce', 'Market Analysis', 'Consumer Behavior']
    },
    {
      id: 7,
      title: 'Startup Ecosystem: India-Japan Cross-Border Opportunities',
      excerpt: 'Exploring the growing startup ecosystem and investment opportunities between the two nations.',
      author: 'Ravi Kumar',
      authorImage: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      date: '2024-01-01',
      readTime: '6 min read',
      category: 'Business',
      image: 'https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop',
      tags: ['Startups', 'Investment', 'Entrepreneurship']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = categoryFilter === 'all' || 
                           post.category.toLowerCase().replace(' ', '-') === categoryFilter;
    
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
              Insights & Stories
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Discover the latest trends, insights, and stories from the India-Japan business corridor
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search articles, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Badge className="mb-4 bg-nts-red text-white">Featured Article</Badge>
            
            <Card className="overflow-hidden shadow-2xl border-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative aspect-video lg:aspect-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-nts-indigo text-white">
                      {featuredPost.category}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={featuredPost.authorImage}
                      alt={featuredPost.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-sm text-gray-600">
                      <p className="font-medium">{featuredPost.author}</p>
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredPost.date)}</span>
                        <span>•</span>
                        <Clock className="w-4 h-4" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="bg-nts-indigo hover:bg-nts-indigo/90 text-white group">
                    Read Full Article
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Articles</h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('');
                    setCategoryFilter('all');
                  }}
                >
                  Show All Articles
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="h-full overflow-hidden group hover:shadow-xl transition-all duration-300 border-0">
                      <div className="relative aspect-video overflow-hidden">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-white/90 text-gray-900">
                            {post.category}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <img
                            src={post.authorImage}
                            alt={post.author}
                            className="w-8 h-8 rounded-full object-cover"
                          />
                          <div className="text-xs text-gray-600">
                            <p className="font-medium">{post.author}</p>
                            <div className="flex items-center space-x-1">
                              <span>{formatDate(post.date)}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                        </div>
                        
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                          {post.tags.length > 2 && (
                            <Badge variant="outline" className="text-xs">
                              +{post.tags.length - 2}
                            </Badge>
                          )}
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          className="w-full text-nts-indigo hover:text-nts-indigo hover:bg-nts-indigo/10 group/btn"
                        >
                          Read More
                          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-br from-nts-indigo/5 to-nts-green/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-nts-indigo/10 rounded-full">
                <TrendingUp className="w-8 h-8 text-nts-indigo" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get the latest insights on India-Japan business trends delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                placeholder="Enter your email address"
                className="flex-1"
              />
              <Button className="bg-nts-indigo hover:bg-nts-indigo/90 text-white">
                <Zap className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-gray-500 mt-4">
              No spam, unsubscribe at any time. Read our{' '}
              <a href="/privacy" className="text-nts-indigo hover:underline">
                Privacy Policy
              </a>.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;