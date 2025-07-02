'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface Office {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  lat: number;
  lng: number;
  country: string;
  flag: string;
}

const offices: Office[] = [
  {
    id: 'patna',
    name: 'NTS Nihon Global - Patna Office',
    address: 'Fraser Road, Patna, Bihar 800001, India',
    phone: '+91 98765 43210',
    email: 'patna@ntsnihonglobal.com',
    hours: '9:00 AM - 6:00 PM IST',
    lat: 25.5941,
    lng: 85.1376,
    country: 'India',
    flag: '🇮🇳'
  },
  {
    id: 'delhi',
    name: 'NTS Nihon Global - Delhi Office',
    address: 'Connaught Place, New Delhi, Delhi 110001, India',
    phone: '+91 98765 43211',
    email: 'delhi@ntsnihonglobal.com',
    hours: '9:00 AM - 6:00 PM IST',
    lat: 28.6139,
    lng: 77.2090,
    country: 'India',
    flag: '🇮🇳'
  },
  {
    id: 'tokyo',
    name: 'NTS Nihon Global - Tokyo Office',
    address: 'Shibuya Sky Building, 2-24-12 Shibuya, Tokyo 150-0002, Japan',
    phone: '+81 3-1234-5678',
    email: 'tokyo@ntsnihonglobal.com',
    hours: '9:00 AM - 6:00 PM JST',
    lat: 35.6762,
    lng: 139.6503,
    country: 'Japan',
    flag: '🇯🇵'
  }
];

declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const GoogleMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [selectedOffice, setSelectedOffice] = useState<Office | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [map, setMap] = useState<any>(null);

  useEffect(() => {
    const loadGoogleMaps = () => {
      if (window.google) {
        initializeMap();
        return;
      }

      window.initMap = initializeMap;
      
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || 'YOUR_API_KEY'}&callback=initMap`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    };

    const initializeMap = () => {
      if (!mapRef.current || !window.google) return;

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        zoom: 4,
        center: { lat: 30.0, lng: 100.0 }, // Center between India and Japan
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry.fill',
            stylers: [{ color: '#f5f5f5' }]
          },
          {
            featureType: 'water',
            elementType: 'geometry',
            stylers: [{ color: '#e9e9e9' }, { lightness: 17 }]
          },
          {
            featureType: 'administrative',
            elementType: 'labels.text.stroke',
            stylers: [{ color: '#ffffff' }, { weight: 6 }]
          },
          {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [{ color: '#3F3D56' }]
          }
        ],
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true,
      });

      setMap(mapInstance);

      // Add markers for each office
      offices.forEach((office) => {
        const marker = new window.google.maps.Marker({
          position: { lat: office.lat, lng: office.lng },
          map: mapInstance,
          title: office.name,
          icon: {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="#3F3D56" stroke="#ffffff" stroke-width="2"/>
                <circle cx="20" cy="20" r="8" fill="#ffffff"/>
                <text x="20" y="25" text-anchor="middle" fill="#3F3D56" font-size="12" font-weight="bold">${office.flag}</text>
              </svg>
            `)}`,
            scaledSize: new window.google.maps.Size(40, 40),
            anchor: new window.google.maps.Point(20, 20),
          },
        });

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 250px;">
              <h3 style="margin: 0 0 8px 0; color: #3F3D56; font-size: 16px; font-weight: bold;">${office.name}</h3>
              <p style="margin: 4px 0; color: #666; font-size: 14px;"><strong>📍</strong> ${office.address}</p>
              <p style="margin: 4px 0; color: #666; font-size: 14px;"><strong>📞</strong> ${office.phone}</p>
              <p style="margin: 4px 0; color: #666; font-size: 14px;"><strong>✉️</strong> ${office.email}</p>
              <p style="margin: 4px 0; color: #666; font-size: 14px;"><strong>🕒</strong> ${office.hours}</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(mapInstance, marker);
          setSelectedOffice(office);
        });
      });

      setMapLoaded(true);
    };

    loadGoogleMaps();
  }, []);

  const focusOffice = (office: Office) => {
    if (map) {
      map.setCenter({ lat: office.lat, lng: office.lng });
      map.setZoom(15);
      setSelectedOffice(office);
    }
  };

  return (
    <div className="space-y-8">
      {/* Office Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {offices.map((office, index) => (
          <motion.div
            key={office.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card 
              className={`cursor-pointer transition-all duration-300 hover:shadow-xl ${
                selectedOffice?.id === office.id ? 'ring-2 ring-nts-indigo shadow-xl' : ''
              }`}
              onClick={() => focusOffice(office)}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{office.flag}</span>
                  <div>
                    <h3 className="font-semibold text-gray-900">{office.country} Office</h3>
                    <p className="text-sm text-gray-600">{office.name.split(' - ')[1]}</p>
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{office.address}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-nts-indigo hover:underline">
                      {office.phone}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-nts-indigo hover:underline">
                      {office.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{office.hours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Interactive Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <Card className="overflow-hidden shadow-xl">
          <div className="relative">
            <div
              ref={mapRef}
              className="w-full h-96 md:h-[500px] bg-gray-100"
            />
            
            {!mapLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-nts-indigo mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading interactive map...</p>
                </div>
              </div>
            )}
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default GoogleMap;