const fs = require('fs');
const path = require('path');

// Indian states and major cities
const indianLocations = [
  'mumbai', 'delhi', 'bangalore', 'chennai', 'pune', 'hyderabad', 'kolkata', 
  'ahmedabad', 'jaipur', 'lucknow', 'kanpur', 'nagpur', 'indore', 'thane',
  'bhopal', 'visakhapatnam', 'pimpri-chinchwad', 'patna', 'vadodara', 'ghaziabad',
  'ludhiana', 'agra', 'nashik', 'faridabad', 'meerut', 'rajkot', 'kalyan-dombivali',
  'vasai-virar', 'varanasi', 'srinagar', 'aurangabad', 'dhanbad', 'amritsar',
  'navi-mumbai', 'allahabad', 'ranchi', 'howrah', 'coimbatore', 'jabalpur'
];

// Japanese prefectures and major cities
const japaneseLocations = [
  'tokyo', 'osaka', 'kyoto', 'yokohama', 'nagoya', 'sapporo', 'kobe', 'fukuoka',
  'hiroshima', 'sendai', 'kitakyushu', 'chiba', 'sakai', 'niigata', 'hamamatsu',
  'kumamoto', 'sagamihara', 'shizuoka', 'okayama', 'kagoshima', 'funabashi',
  'hachioji', 'kawasaki', 'matsuyama', 'utsunomiya', 'daitou', 'nara', 'suita',
  'kashiwa', 'toyama', 'toyota', 'kanazawa', 'tsukuba', 'oita', 'naha', 'miyazaki'
];

// Global markets
const globalLocations = [
  'usa', 'singapore', 'uk', 'germany', 'australia', 'canada', 'france', 'netherlands',
  'south-korea', 'thailand', 'malaysia', 'indonesia', 'philippines', 'vietnam'
];

// Verticals
const verticals = [
  'kaamigo', 'sawari', 'tradezy', 'nts-school', 'nts-library', 'tech-services',
  'analytics', 'hr-tech', 'consulting', 'cultural-exchange', 'startup-accelerator'
];

const generateSitemap = () => {
  const baseUrl = 'https://ntsnihonglobal.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Main pages
  const mainPages = [
    { url: '', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.9', changefreq: 'monthly' },
    { url: '/verticals', priority: '0.9', changefreq: 'weekly' },
    { url: '/careers', priority: '0.8', changefreq: 'daily' },
    { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog', priority: '0.7', changefreq: 'daily' },
    { url: '/resources', priority: '0.7', changefreq: 'weekly' }
  ];

  mainPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  });

  // Vertical pages
  verticals.forEach(vertical => {
    sitemap += `
  <url>
    <loc>${baseUrl}/verticals/${vertical}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
  });

  // Indian location pages
  indianLocations.forEach(location => {
    sitemap += `
  <url>
    <loc>${baseUrl}/india/${location}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Japanese location pages
  japaneseLocations.forEach(location => {
    sitemap += `
  <url>
    <loc>${baseUrl}/japan/${location}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  });

  // Global market pages
  globalLocations.forEach(location => {
    sitemap += `
  <url>
    <loc>${baseUrl}/global/${location}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
  });

  // Legal pages
  const legalPages = ['privacy', 'terms', 'cookies'];
  legalPages.forEach(page => {
    sitemap += `
  <url>
    <loc>${baseUrl}/${page}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  // Write sitemap to public directory
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

// Generate robots.txt
const generateRobotsTxt = () => {
  const robotsTxt = `User-agent: *
Allow: /

# SEO-optimized sitemap
Sitemap: https://ntsnihonglobal.com/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1

# Block admin and sensitive areas
Disallow: /admin/
Disallow: /api/
Disallow: /.env
Disallow: /config/

# Allow important pages
Allow: /
Allow: /about
Allow: /verticals
Allow: /careers
Allow: /contact
Allow: /blog
Allow: /resources

# Specific locations for SEO
${indianLocations.map(loc => `Allow: /india/${loc}`).join('\n')}

${japaneseLocations.map(loc => `Allow: /japan/${loc}`).join('\n')}

${globalLocations.map(loc => `Allow: /global/${loc}`).join('\n')}`;

  const publicDir = path.join(process.cwd(), 'public');
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);
  console.log('Robots.txt generated successfully!');
};

if (require.main === module) {
  generateSitemap();
  generateRobotsTxt();
}

module.exports = { generateSitemap, generateRobotsTxt };