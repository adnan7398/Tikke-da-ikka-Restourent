import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogType?: string;
  ogImage?: string;
}

const SEOHead: React.FC<SEOProps> = ({ 
  title = "Tikke Da Ikka - Authentic North Indian Restaurant in Lucknow",
  description = "Tikke Da Ikka offers delicious authentic North Indian cuisine in Ashiyana, Lucknow. Enjoy our tandoori specialties, flavorful curries, and biryanis. Book a table or order online for delivery.",
  keywords = "Tikke Da Ikka, North Indian Restaurant, Lucknow Restaurant, Best Restaurant in Ashiyana, Indian Food Lucknow",
  ogType = "website",
  ogImage = "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Geo tags */}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Lucknow" />
      <meta name="geo.position" content="26.87;80.94" />
      <meta name="ICBM" content="26.87, 80.94" />
    </Helmet>
  );
};

export default SEOHead;