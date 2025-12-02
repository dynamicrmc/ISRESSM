import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
}

const SEO: React.FC<SEOProps> = ({ title, description }) => {
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

  }, [title, description]);

  return null;
};

export default SEO;