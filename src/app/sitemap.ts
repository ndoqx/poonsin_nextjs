import { MetadataRoute } from 'next';

// Placeholder function to simulate fetching dynamic products/categories/articles
// In a real application, replace this with your actual database or CMS fetch logic
async function getDynamicRoutes() {
  // Example data
  return [
    { slug: 'modern-shrines', type: 'collection' },
    { slug: 'traditional-shrines', type: 'collection' },
    { slug: 'how-to-choose-shrine', type: 'article' },
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.poonsinshop.com';

  // Define static routes (internal pages only — external URLs like Google Maps
  // or social media must NOT be in sitemap.xml; use JSON-LD structured data instead)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/collection`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    // About page removed — history section lives on the homepage as an anchor
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Fetch dynamic routes
  const dynamicData = await getDynamicRoutes();

  const dynamicRoutes: MetadataRoute.Sitemap = dynamicData.map((item) => {
    // Determine the path based on the type of content
    const basePath = item.type === 'collection' ? '/collection' : '/articles';

    return {
      url: `${baseUrl}${basePath}/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...dynamicRoutes];
}
