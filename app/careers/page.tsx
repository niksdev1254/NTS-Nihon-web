'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Briefcase, 
  Heart, 
  Coffee, 
  Globe,
  Search,
  Filter
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';

const CareersPage = () => {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [locationFilter, setLocationFilter] = useState('all');
  const [departmentFilter, setDepartmentFilter] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Technology',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '3-5 years',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      description: 'Join our tech team to build innovative solutions connecting India and Japan.',
      urgent: true
    },
    {
      id: 2,
      title: 'AI/ML Engineer',
      department: 'Technology',
      location: 'Tokyo, Japan',
      type: 'Full-time',
      experience: '2-4 years',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Docker'],
      description: 'Work on cutting-edge AI solutions for our Kaamigo platform.',
      urgent: false
    },
    {
      id: 3,
      title: 'Business Development Manager',
      department: 'Sales',
      location: 'Delhi, India',
      type: 'Full-time',
      experience: '4-6 years',
      skills: ['Sales', 'Strategy', 'Japanese Language', 'B2B'],
      description: 'Drive business growth and partnerships between Indian and Japanese markets.',
      urgent: false
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '2-3 years',
      skills: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
      description: 'Create beautiful, user-centric designs for our digital platforms.',
      urgent: false
    },
    {
      id: 5,
      title: 'Cultural Exchange Coordinator',
      department: 'Operations',
      location: 'Osaka, Japan',
      type: 'Full-time',
      experience: '1-3 years',
      skills: ['Event Management', 'Hindi/English', 'Cultural Awareness', 'Project Management'],
      description: 'Coordinate cultural exchange programs and events between India and Japan.',
      urgent: true
    },
    {
      id: 6,
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Bangalore, India',
      type: 'Full-time',
      experience: '1-2 years',
      skills: ['SQL', 'Python', 'Tableau', 'Excel'],
      description: 'Analyze data to provide insights for our various verticals.',
      urgent: false
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Global Exposure',
      description: 'Work with teams across India and Japan'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: Coffee,
      title: 'Flexible Work',
      description: 'Hybrid work options and flexible schedules'
    },
    {
      icon: Star,
      title: 'Learning & Growth',
      description: 'Continuous learning opportunities and career development'
    },
    {
      icon: Users,
      title: 'Diverse Culture',
      description: 'Inclusive environment celebrating diversity'
    },
    {
      icon: Briefcase,
      title: 'Competitive Package',
      description: 'Attractive salary and performance bonuses'
    }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesLocation = locationFilter === 'all' || 
                           job.location.toLowerCase().includes(locationFilter.toLowerCase());
    
    const matchesDepartment = departmentFilter === 'all' || 
                             job.department.toLowerCase() === departmentFilter.toLowerCase();
    
    return matchesSearch && matchesLocation && matchesDepartment;
  });

  return (
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
              {t('nav.careers')}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90 mb-8">
              Join our mission to bridge India and Japan through innovation and cultural understanding
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm opacity-80">Team Members</div>
              </div>
              <div>
                <div className="text-3xl font-bold">11</div>
                <div className="text-sm opacity-80">Verticals</div>
              </div>
              <div>
                <div className="text-3xl font-bold">2</div>
                <div className="text-sm opacity-80">Countries</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Search Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Open Positions</h2>
            
            {/* Search and Filters */}
            <div className="bg-white rounded-lg p-6 shadow-lg mb-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Search jobs, skills, or departments..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                
                <Select value={locationFilter} onValueChange={setLocationFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Locations</SelectItem>
                    <SelectItem value="india">India</SelectItem>
                    <SelectItem value="japan">Japan</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
                
                <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                  <SelectTrigger>
                    <SelectValue placeholder="Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="operations">Operations</SelectItem>
                    <SelectItem value="analytics">Analytics</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-semibold text-gray-900">
                                  {job.title}
                                </h3>
                                {job.urgent && (
                                  <Badge className="bg-nts-red text-white">Urgent</Badge>
                                )}
                              </div>
                              <div className="flex items-center gap-4 text-gray-600 text-sm">
                                <div className="flex items-center gap-1">
                                  <Briefcase className="w-4 h-4" />
                                  {job.department}
                                </div>
                                <div className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {job.location}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {job.type}
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <p className="text-gray-700 mb-3">{job.description}</p>
                          
                          <div className="mb-4">
                            <span className="text-sm font-medium text-gray-900 mr-2">
                              Experience: {job.experience}
                            </span>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {job.skills.map((skill) => (
                              <Badge key={skill} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="lg:ml-6 lg:flex-shrink-0">
                          <Button className="w-full lg:w-auto bg-nts-indigo hover:bg-nts-indigo/90 text-white">
                            Apply Now
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No jobs found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm('');
                    setLocationFilter('all');
                    setDepartmentFilter('all');
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a diverse, innovative team that's shaping the future of India-Japan collaboration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
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
                        className="w-16 h-16 rounded-full bg-gradient-to-br from-nts-indigo to-nts-green flex items-center justify-center mb-4 mx-auto group-hover:shadow-lg transition-shadow"
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-br from-nts-saffron/5 to-nts-red/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Experience the unique blend of Indian warmth and Japanese precision in our work culture
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nts-saffron/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Environment</h3>
                    <p className="text-gray-600">Work together across cultures and time zones to achieve common goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nts-red/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Growth Mindset</h3>
                    <p className="text-gray-600">Continuous learning and personal development are at the core of our culture.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-nts-green/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Focus</h3>
                    <p className="text-gray-600">Encouraged to think creatively and bring new ideas to life.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-nts-indigo to-nts-red rounded-2xl flex items-center justify-center text-white text-center p-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Join Our Team</h3>
                  <p className="text-lg opacity-90 mb-6">
                    Be part of something bigger than yourself
                  </p>
                  <Button 
                    variant="secondary"
                    size="lg"
                    className="bg-white text-nts-indigo hover:bg-gray-100"
                  >
                    View All Positions
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;