import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  image?: {
    url: string;
    alt?: string;
  };
}

const SEO: React.FC<SEOProps> = ({ title, description, image }) => {
  useEffect(() => {
    // Update Document Title
    document.title = `${title} | ISRESSM`;

    // Helper function to update or create meta tags
    const updateMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update standard meta description
    updateMetaTag('name', 'description', description);

    // Update Open Graph tags for social sharing
    updateMetaTag('property', 'og:title', `${title} | ISRESSM`);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', 'website');

    if (image?.url) {
      updateMetaTag('property', 'og:image', image.url);
      updateMetaTag('property', 'og:image:secure_url', image.url);
      updateMetaTag('name', 'twitter:card', 'summary_large_image');
      updateMetaTag('name', 'twitter:image', image.url);
      if (image.alt) {
        updateMetaTag('property', 'og:image:alt', image.alt);
        updateMetaTag('name', 'twitter:image:alt', image.alt);
      }
    }

  }, [title, description, image]);

  return null;
};

export default SEO;