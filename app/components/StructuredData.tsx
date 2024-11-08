// components/StructuredData.tsx
export default function StructuredData() {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://coltonspyker.com/#person",
      name: "Colton Spyker",
      url: "https://coltonspyker.com",
      image: "https://coltonspyker.com/profile-image.jpg",
      description: "AI & Crypto Developer based in Los Angeles",
      jobTitle: "AI Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Self-Employed"
      },
      sameAs: [
        "https://github.com/coltspy",
        "https://linkedin.com/in/coltonspyker",
        "https://twitter.com/coltonspyker"
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Machine Learning",
        "Computer Vision",
        "Natural Language Processing",
        "Cryptocurrency",
        "Blockchain Technology"
      ],
      mainEntityOfPage: {
        "@type": "WebSite",
        "@id": "https://coltonspyker.com/#website",
        name: "Colton Spyker - AI Engineer Portfolio",
        url: "https://coltonspyker.com"
      }
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }