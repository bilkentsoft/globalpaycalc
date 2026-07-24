// SEO & Schema.org JSON-LD Structured Data Generator
export const generateSeoSchema = ({ type, url, name, description, faqs = [], breadcrumbs = [] }) => {
  const baseSchema = {
    "@context": "https://schema.org",
  };

  if (type === 'WebApplication') {
    return {
      ...baseSchema,
      "@type": "WebApplication",
      "name": name,
      "url": url,
      "description": description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      }
    };
  }

  if (type === 'FAQPage') {
    return {
      ...baseSchema,
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  if (type === 'BreadcrumbList') {
    return {
      ...baseSchema,
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  }

  if (type === 'Organization') {
    return {
      ...baseSchema,
      "@type": "Organization",
      "name": name || "GlobalPayCalc",
      "alternateName": "GlobalPayCalc",
      "url": url || "https://globalpaycalc.com",
      "logo": "https://globalpaycalc.com/favicon.svg"
    };
  }

  return baseSchema;
};

// Generates a unified @graph schema linking Organization, WebApplication, and FAQs
export const generateUnifiedSchema = ({ url, name, description, faqs = [], breadcrumbs = [] }) => {
  const orgId = "https://globalpaycalc.com/#organization";
  const webAppId = `${url}/#webapp`;

  const graph = [
    {
      "@type": "Organization",
      "@id": orgId,
      "name": "GlobalPayCalc",
      "url": "https://globalpaycalc.com",
      "logo": "https://globalpaycalc.com/favicon.svg"
    },
    {
      "@type": "WebApplication",
      "@id": webAppId,
      "name": name,
      "url": url,
      "description": description,
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "All",
      "browserRequirements": "Requires JavaScript",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "publisher": {
        "@id": orgId
      }
    }
  ];



  if (breadcrumbs && breadcrumbs.length > 0) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${url}/#breadcrumb`,
      "itemListElement": breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
};

// Injects the generated schema into the DOM head securely
export const injectJsonLdSchema = (id, schemaObj) => {
  if (typeof document === 'undefined') return;

  // Remove existing schema tag if present to prevent duplication
  const existingElement = document.getElementById(id);
  if (existingElement) {
    existingElement.remove();
  }

  const script = document.createElement('script');
  script.id = id;
  script.type = 'application/ld+json';
  script.text = JSON.stringify(schemaObj);
  document.head.appendChild(script);
};
