import React from 'react'
import { Helmet } from 'react-helmet-async'
export default function SEO({ title, description, path = '' }) {
  const site = 'https://www.reliablecarwashil.com'
  return <Helmet>
    <title>{title}</title><meta name="description" content={description} />
    <link rel="canonical" href={`${site}${path}`} />
    <meta property="og:type" content="website" /><meta property="og:site_name" content="Reliable Car Wash & Detailing" />
    <meta property="og:title" content={title} /><meta property="og:description" content={description} />
    <meta property="og:url" content={`${site}${path}`} /><meta property="og:image" content={`${site}/images/reliable-logo.png`} />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
}