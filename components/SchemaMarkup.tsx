

import React from 'react';
import Script from 'next/script';

const SchemaMarkup = () => {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Harshal Tupe",
    "url": "https://harshal-tupe.vercel.app",
    "image": "https://harshal-tupe.vercel.app/main.jpg",
    "jobTitle": "Web Developer & Software Engineer",
    "description": "Harshal Tupe is a web developer and software engineer specializing in React, Next.js, and modern web technologies & Software development along with problem solving.",
    "sameAs": [
      "https://github.com/harshaltupe12", 
      "https://www.linkedin.com/in/harshal-tupe/", 
      "https://www.instagram.com/harshal.tupe_/" 
    ],
    "knowsAbout": [
      "React", 
      "Next.js", 
      "TypeScript", 
      "JavaScript", 
      "Web Development",
      "Problem Solving",
      "Software Development",
      "Full stack developer"
    ],
    "alumniOf": {
      "@type": "Mumbai University",
      "name": " MGM College of Engineering & Technology" // Replace with your actual education information
    }
  };

  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
    />
  );
};

export default SchemaMarkup;

// Then import and use this component in your RootLayout or homepage component:
// import SchemaMarkup from '@/components/SchemaMarkup';
// 
// And add it to your JSX:
// <body>
//   <SchemaMarkup />
//   {/* rest of your content */}
// </body>