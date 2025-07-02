'use client';

import React from 'react';
import { motion } from 'framer-motion';
import DownloadAssets from '@/components/common/DownloadAssets';

const ResourcesPage = () => {
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
              Resources & Downloads
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto opacity-90">
              Access comprehensive materials about NTS Nihon Global and our innovative solutions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Download Assets Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DownloadAssets />
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;