
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  path,
  image = 'https://i.ibb.co/mFTZzxrG/MPF.png',
  type = 'website'
}) => {
  const siteUrl = typeof window !== 'undefined' 
    ? window.location.origin 
    : 'https://mpf-nigeria.org';
  const fullUrl = `${siteUrl}${path}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title} | Military Prayer Fellowship (MPF)</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Military Prayer Fellowship (MPF)" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEO;
