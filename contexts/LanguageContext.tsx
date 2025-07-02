'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ja' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.verticals': 'Our Verticals',
    'nav.careers': 'Careers',
    'nav.contact': 'Contact',
    'nav.blog': 'Blog',
    
    // Home Page
    'home.hero.title': 'Bridging India & Japan Through Innovation',
    'home.hero.subtitle': 'NTS Nihon Global connects opportunities across borders with cutting-edge technology and cultural understanding',
    'home.hero.cta': 'Explore Our Verticals',
    'home.verticals.title': 'Our 11 Verticals',
    'home.verticals.subtitle': 'Comprehensive solutions spanning technology, culture, and business',
    
    // Verticals
    'vertical.kaamigo': 'AI-Powered Smart Job Matching',
    'vertical.sawari': 'Mobility & Transportation Services',
    'vertical.tradezy': 'International Trade Facilitation',
    'vertical.school': 'Language Learning Platform',
    'vertical.library': 'Knowledge Resources & Global Content',
    'vertical.tech': 'Custom Development & IT Solutions',
    'vertical.analytics': 'AI & Data-Driven Insights',
    'vertical.hr': 'HR Technology Solutions',
    'vertical.consulting': 'Cross-Border Consulting',
    'vertical.cultural': 'Indo-Japan Cultural Exchange',
    'vertical.accelerator': 'Startup Accelerator Program',
    
    // About
    'about.title': 'About NTS Nihon Global',
    'about.mission': 'Our Mission',
    'about.mission.text': 'To bridge the digital and cultural gap between India and Japan, fostering innovation and mutual growth through technology and understanding.',
    'about.vision': 'Our Vision',
    'about.vision.text': 'To become the leading platform connecting India and Japan across all sectors, creating sustainable value for businesses, individuals, and communities.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.india': 'India Office',
    'contact.japan': 'Japan Office',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    
    // Footer
    'footer.description': 'Bridging opportunities between India and Japan through innovative technology solutions and cultural understanding.',
    'footer.quicklinks': 'Quick Links',
    'footer.verticals': 'Verticals',
    'footer.connect': 'Connect With Us',
    'footer.rights': 'All rights reserved.',
  },
  ja: {
    // Navigation
    'nav.home': 'ホーム',
    'nav.about': '私たちについて',
    'nav.verticals': '事業分野',
    'nav.careers': 'キャリア',
    'nav.contact': 'お問い合わせ',
    'nav.blog': 'ブログ',
    
    // Home Page
    'home.hero.title': 'イノベーションでインドと日本を繋ぐ',
    'home.hero.subtitle': 'NTS日本グローバルは、最先端技術と文化的理解により国境を越えた機会を創出します',
    'home.hero.cta': '事業分野を見る',
    'home.verticals.title': '11の事業分野',
    'home.verticals.subtitle': 'テクノロジー、文化、ビジネスにわたる包括的ソリューション',
    
    // Verticals
    'vertical.kaamigo': 'AI搭載スマート求人マッチング',
    'vertical.sawari': 'モビリティ・交通サービス',
    'vertical.tradezy': '国際貿易促進',
    'vertical.school': '語学学習プラットフォーム',
    'vertical.library': '知識リソース・グローバルコンテンツ',
    'vertical.tech': 'カスタム開発・ITソリューション',
    'vertical.analytics': 'AI・データ駆動型インサイト',
    'vertical.hr': 'HRテクノロジーソリューション',
    'vertical.consulting': '国境を越えたコンサルティング',
    'vertical.cultural': '日印文化交流',
    'vertical.accelerator': 'スタートアップアクセラレータープログラム',
    
    // About
    'about.title': 'NTS日本グローバルについて',
    'about.mission': '私たちの使命',
    'about.mission.text': 'インドと日本のデジタル・文化的ギャップを埋め、技術と理解を通じてイノベーションと相互成長を促進することです。',
    'about.vision': '私たちのビジョン',
    'about.vision.text': 'すべてのセクターでインドと日本を結ぶ主要プラットフォームとなり、企業、個人、コミュニティに持続可能な価値を創造することです。',
    
    // Contact
    'contact.title': 'お問い合わせ',
    'contact.india': 'インドオフィス',
    'contact.japan': '日本オフィス',
    'contact.form.name': '氏名',
    'contact.form.email': 'メールアドレス',
    'contact.form.message': 'メッセージ',
    'contact.form.submit': 'メッセージを送信',
    
    // Footer
    'footer.description': '革新的な技術ソリューションと文化的理解を通じて、インドと日本の機会を橋渡しします。',
    'footer.quicklinks': 'クイックリンク',
    'footer.verticals': '事業分野',
    'footer.connect': 'お問い合わせ',
    'footer.rights': '全著作権所有。',
  },
  hi: {
    // Navigation
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.verticals': 'हमारे क्षेत्र',
    'nav.careers': 'करियर',
    'nav.contact': 'संपर्क',
    'nav.blog': 'ब्लॉग',
    
    // Home Page
    'home.hero.title': 'नवाचार के माध्यम से भारत और जापान को जोड़ना',
    'home.hero.subtitle': 'एनटीएस निहोन ग्लोबल अत्याधुनिक तकनीक और सांस्कृतिक समझ के साथ सीमाओं के पार अवसरों को जोड़ता है',
    'home.hero.cta': 'हमारे क्षेत्रों का अन्वेषण करें',
    'home.verticals.title': 'हमारे 11 क्षेत्र',
    'home.verticals.subtitle': 'प्रौद्योगिकी, संस्कृति और व्यापार में व्यापक समाधान',
    
    // Verticals
    'vertical.kaamigo': 'एआई-संचालित स्मार्ट जॉब मैचिंग',
    'vertical.sawari': 'मोबिलिटी और परिवहन सेवाएं',
    'vertical.tradezy': 'अंतर्राष्ट्रीय व्यापार सुविधा',
    'vertical.school': 'भाषा सीखने का प्लेटफॉर्म',
    'vertical.library': 'ज्ञान संसाधन और वैश्विक सामग्री',
    'vertical.tech': 'कस्टम डेवलपमेंट और आईटी समाधान',
    'vertical.analytics': 'एआई और डेटा-संचालित अंतर्दृष्टि',
    'vertical.hr': 'एचआर प्रौद्योगिकी समाधान',
    'vertical.consulting': 'सीमा पार परामर्श',
    'vertical.cultural': 'भारत-जापान सांस्कृतिक आदान-प्रदान',
    'vertical.accelerator': 'स्टार्टअप एक्सेलेरेटर प्रोग्राम',
    
    // About
    'about.title': 'एनटीएस निहोन ग्लोबल के बारे में',
    'about.mission': 'हमारा मिशन',
    'about.mission.text': 'भारत और जापान के बीच डिजिटल और सांस्कृतिक अंतर को पाटना, प्रौद्योगिकी और समझ के माध्यम से नवाचार और पारस्परिक विकास को बढ़ावा देना।',
    'about.vision': 'हमारी दृष्टि',
    'about.vision.text': 'सभी क्षेत्रों में भारत और जापान को जोड़ने वाला प्रमुख प्लेटफॉर्म बनना, व्यवसायों, व्यक्तियों और समुदायों के लिए टिकाऊ मूल्य सृजन करना।',
    
    // Contact
    'contact.title': 'संपर्क में रहें',
    'contact.india': 'भारत कार्यालय',
    'contact.japan': 'जापान कार्यालय',
    'contact.form.name': 'पूरा नाम',
    'contact.form.email': 'ईमेल पता',
    'contact.form.message': 'संदेश',
    'contact.form.submit': 'संदेश भेजें',
    
    // Footer
    'footer.description': 'नवाचार प्रौद्योगिकी समाधान और सांस्कृतिक समझ के माध्यम से भारत और जापान के बीच अवसरों को जोड़ना।',
    'footer.quicklinks': 'त्वरित लिंक',
    'footer.verticals': 'क्षेत्र',
    'footer.connect': 'हमसे जुड़ें',
    'footer.rights': 'सभी अधिकार सुरक्षित।',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('nts-language') as Language;
    if (saved && ['en', 'ja', 'hi'].includes(saved)) {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('nts-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}