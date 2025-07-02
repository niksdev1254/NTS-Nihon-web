export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "NTS Nihon Global",
  "alternateName": "NTS",
  "url": "https://ntsnihonglobal.com",
  "logo": "https://ntsnihonglobal.com/logo.png",
  "description": "NTS Nihon Global bridges digital and service opportunities between India and Japan through innovative technology solutions across 11 verticals.",
  "foundingDate": "2020",
  "founders": [
    {
      "@type": "Person",
      "name": "Rajesh Sharma"
    }
  ],
  "address": [
    {
      "@type": "PostalAddress",
      "streetAddress": "WeWork, Bandra Kurla Complex",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400051",
      "addressCountry": "IN"
    },
    {
      "@type": "PostalAddress",
      "streetAddress": "Shibuya Sky Building, 2-24-12 Shibuya",
      "addressLocality": "Tokyo",
      "postalCode": "150-0002",
      "addressCountry": "JP"
    }
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+91-98765-43210",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    },
    {
      "@type": "ContactPoint",
      "telephone": "+81-3-1234-5678",
      "contactType": "customer service",
      "areaServed": "JP",
      "availableLanguage": ["Japanese", "English"]
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/nts-nihon-global",
    "https://twitter.com/ntsnihonglobal",
    "https://www.facebook.com/ntsnihonglobal"
  ],
  "knowsAbout": [
    "AI Job Matching",
    "Mobility Services",
    "International Trade",
    "Language Learning",
    "Cross-border Consulting",
    "Cultural Exchange",
    "Startup Acceleration"
  ]
};

export const localBusinessSchema = (location: 'mumbai' | 'tokyo') => {
  const locations = {
    mumbai: {
      name: "NTS Nihon Global - Mumbai Office",
      address: {
        streetAddress: "WeWork, Bandra Kurla Complex",
        addressLocality: "Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400051",
        addressCountry: "IN"
      },
      telephone: "+91-98765-43210",
      geo: {
        latitude: 19.0596,
        longitude: 72.8656
      }
    },
    tokyo: {
      name: "NTS Nihon Global - Tokyo Office",
      address: {
        streetAddress: "Shibuya Sky Building, 2-24-12 Shibuya",
        addressLocality: "Tokyo",
        postalCode: "150-0002",
        addressCountry: "JP"
      },
      telephone: "+81-3-1234-5678",
      geo: {
        latitude: 35.6762,
        longitude: 139.6503
      }
    }
  };

  const loc = locations[location];

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": loc.name,
    "image": "https://ntsnihonglobal.com/office-" + location + ".jpg",
    "address": {
      "@type": "PostalAddress",
      ...loc.address
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": loc.geo.latitude,
      "longitude": loc.geo.longitude
    },
    "telephone": loc.telephone,
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
  };
};

export const blogPostSchema = (post: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": post.title,
  "description": post.description,
  "image": post.image || "https://ntsnihonglobal.com/blog-default.jpg",
  "author": {
    "@type": "Person",
    "name": post.author
  },
  "publisher": {
    "@type": "Organization",
    "name": "NTS Nihon Global",
    "logo": {
      "@type": "ImageObject",
      "url": "https://ntsnihonglobal.com/logo.png"
    }
  },
  "datePublished": post.datePublished,
  "dateModified": post.dateModified || post.datePublished,
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": post.url
  }
});

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});