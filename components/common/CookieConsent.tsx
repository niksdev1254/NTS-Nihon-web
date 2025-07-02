'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Settings, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import Cookies from 'js-cookie';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  useEffect(() => {
    const consent = Cookies.get('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    } else {
      try {
        const savedPreferences = JSON.parse(consent);
        setPreferences(savedPreferences);
      } catch (error) {
        setShowBanner(true);
      }
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setPreferences(allAccepted);
    Cookies.set('cookie-consent', JSON.stringify(allAccepted), { expires: 365 });
    setShowBanner(false);
    
    // Initialize analytics if accepted
    if (allAccepted.analytics) {
      initializeAnalytics();
    }
  };

  const acceptSelected = () => {
    Cookies.set('cookie-consent', JSON.stringify(preferences), { expires: 365 });
    setShowBanner(false);
    setShowSettings(false);
    
    // Initialize analytics if accepted
    if (preferences.analytics) {
      initializeAnalytics();
    }
  };

  const rejectAll = () => {
    const minimal = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setPreferences(minimal);
    Cookies.set('cookie-consent', JSON.stringify(minimal), { expires: 365 });
    setShowBanner(false);
  };

  const initializeAnalytics = () => {
    // Initialize Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: preferences.marketing ? 'granted' : 'denied',
        functionality_storage: preferences.functional ? 'granted' : 'denied',
      });
    }
  };

  const cookieTypes = [
    {
      key: 'necessary' as keyof CookiePreferences,
      title: 'Necessary Cookies',
      description: 'Essential for the website to function properly. Cannot be disabled.',
      disabled: true,
    },
    {
      key: 'analytics' as keyof CookiePreferences,
      title: 'Analytics Cookies',
      description: 'Help us understand how visitors interact with our website.',
      disabled: false,
    },
    {
      key: 'marketing' as keyof CookiePreferences,
      title: 'Marketing Cookies',
      description: 'Used to track visitors across websites for advertising purposes.',
      disabled: false,
    },
    {
      key: 'functional' as keyof CookiePreferences,
      title: 'Functional Cookies',
      description: 'Enable enhanced functionality and personalization.',
      disabled: false,
    },
  ];

  return (
    <>
      {/* Cookie Banner */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4"
          >
            <Card className="mx-auto max-w-4xl bg-white/95 backdrop-blur-md shadow-2xl border-0">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Cookie className="w-8 h-8 text-nts-indigo" />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      We use cookies to enhance your experience
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      We use cookies and similar technologies to provide the best experience on our website. 
                      Some are necessary for functionality, while others help us improve our services and understand how you use our site.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        onClick={acceptAll}
                        className="bg-nts-indigo hover:bg-nts-indigo/90 text-white"
                      >
                        <Check className="w-4 h-4 mr-2" />
                        Accept All
                      </Button>
                      
                      <Button
                        variant="outline"
                        onClick={() => setShowSettings(true)}
                        className="border-nts-indigo text-nts-indigo hover:bg-nts-indigo hover:text-white"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Customize
                      </Button>
                      
                      <Button
                        variant="ghost"
                        onClick={rejectAll}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        Reject All
                      </Button>
                    </div>
                  </div>
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowBanner(false)}
                    className="flex-shrink-0"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cookie Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Cookie Preferences
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6">
            <p className="text-sm text-gray-600">
              Manage your cookie preferences. You can enable or disable different types of cookies below.
            </p>
            
            <div className="space-y-4">
              {cookieTypes.map((type) => (
                <div key={type.key} className="flex items-start justify-between p-4 border rounded-lg">
                  <div className="flex-grow">
                    <h4 className="font-medium text-gray-900 mb-1">{type.title}</h4>
                    <p className="text-sm text-gray-600">{type.description}</p>
                  </div>
                  
                  <Switch
                    checked={preferences[type.key]}
                    onCheckedChange={(checked) => 
                      setPreferences(prev => ({ ...prev, [type.key]: checked }))
                    }
                    disabled={type.disabled}
                    className="ml-4"
                  />
                </div>
              ))}
            </div>
            
            <div className="flex justify-end gap-3 pt-4 border-t">
              <Button variant="outline" onClick={() => setShowSettings(false)}>
                Cancel
              </Button>
              <Button onClick={acceptSelected} className="bg-nts-indigo hover:bg-nts-indigo/90 text-white">
                Save Preferences
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;