import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SeoMeta = {
  title: string;
  description: string;
  keywords: string;
};

const seoByPath: Record<string, SeoMeta> = {
  "/": {
    title: "One Global Logistics | Global Freight & NVOCC Solutions",
    description:
      "One Global Logistics delivers reliable global freight forwarding, NVOCC, and supply chain solutions for businesses worldwide.",
    keywords:
      "One Global Logistics, global logistics, freight forwarding, NVOCC, supply chain, shipping services",
  },
  "/about": {
    title: "About Us | One Global Logistics",
    description:
      "Learn about One Global Logistics, our mission, values, and commitment to delivering efficient worldwide logistics services.",
    keywords:
      "about One Global Logistics, logistics company profile, global freight experts, logistics mission",
  },
  "/services": {
    title: "Logistics Services | One Global Logistics",
    description:
      "Explore end-to-end logistics services including freight forwarding, warehousing, customs support, and multimodal transportation.",
    keywords:
      "logistics services, freight services, warehousing, customs clearance, transportation solutions",
  },
  "/services/fcl": {
    title: "FCL Shipping Services | One Global Logistics",
    description:
      "Secure Full Container Load shipping with dependable schedules, competitive rates, and global coverage from One Global Logistics.",
    keywords:
      "FCL shipping, full container load, container shipping, ocean freight FCL",
  },
  "/services/lcl": {
    title: "LCL Consolidation Services | One Global Logistics",
    description:
      "Cost-effective Less than Container Load services with professional consolidation and timely global deliveries.",
    keywords:
      "LCL shipping, cargo consolidation, shared container shipping, LCL logistics",
  },
  "/services/3pl": {
    title: "3PL Solutions | One Global Logistics",
    description:
      "Streamline your supply chain with comprehensive 3PL services including storage, fulfillment, and distribution management.",
    keywords:
      "3PL logistics, third party logistics, supply chain outsourcing, fulfillment services",
  },
  "/services/cfs": {
    title: "CFS Services | One Global Logistics",
    description:
      "Efficient Container Freight Station services for cargo handling, stuffing, destuffing, and documentation support.",
    keywords:
      "CFS services, container freight station, cargo stuffing, cargo destuffing",
  },
  "/services/project-logistics": {
    title: "Project Logistics | One Global Logistics",
    description:
      "Specialized project logistics for oversized, heavy-lift, and complex cargo movements with end-to-end coordination.",
    keywords:
      "project logistics, heavy lift cargo, oversized cargo transport, breakbulk logistics",
  },
  "/services/warehousing": {
    title: "Warehousing Services | One Global Logistics",
    description:
      "Flexible and secure warehousing services with inventory control, order processing, and distribution support.",
    keywords:
      "warehousing services, storage solutions, inventory management, distribution logistics",
  },
  "/services/customs-clearance": {
    title: "Customs Clearance Services | One Global Logistics",
    description:
      "Fast and compliant customs clearance services to keep your international shipments moving without delays.",
    keywords:
      "customs clearance, customs brokerage, import export compliance, shipment documentation",
  },
  "/services/road-freight": {
    title: "Road Freight Services | One Global Logistics",
    description:
      "Reliable domestic and cross-border road freight transportation with optimized routes and on-time delivery.",
    keywords:
      "road freight, trucking services, inland transport, ground logistics",
  },
  "/services/sea-freight": {
    title: "Sea Freight Services | One Global Logistics",
    description:
      "Comprehensive sea freight solutions for import and export cargo with strong carrier partnerships and global reach.",
    keywords:
      "sea freight, ocean freight, maritime shipping, import export shipping",
  },
  "/services/air-freight": {
    title: "Air Freight Services | One Global Logistics",
    description:
      "Time-critical air freight services with flexible options, global airline network access, and shipment visibility.",
    keywords:
      "air freight, air cargo shipping, express logistics, international air transport",
  },
  "/contact": {
    title: "Contact Us | One Global Logistics",
    description:
      "Get in touch with One Global Logistics for shipment inquiries, logistics support, and tailored freight solutions.",
    keywords:
      "contact One Global Logistics, logistics inquiry, freight support, shipping contact",
  },
  "/careers": {
    title: "Careers | One Global Logistics",
    description:
      "Explore career opportunities at One Global Logistics and join a dynamic team shaping global trade and logistics.",
    keywords:
      "logistics careers, freight jobs, supply chain careers, work at One Global Logistics",
  },
  "/privacy-policy": {
    title: "Privacy Policy | One Global Logistics",
    description:
      "Read the One Global Logistics privacy policy to understand how we collect, use, and protect your information.",
    keywords:
      "privacy policy, data protection, user privacy, One Global Logistics privacy",
  },
  "/terms-and-conditions": {
    title: "Terms & Conditions | One Global Logistics",
    description:
      "Review the terms and conditions governing the use of One Global Logistics services and website.",
    keywords:
      "terms and conditions, logistics terms, service terms, website terms",
  },
  "/global-presence": {
    title: "Global Presence | One Global Logistics",
    description:
      "Discover One Global Logistics' international network and strategic presence across key global trade markets.",
    keywords:
      "global logistics network, international presence, worldwide shipping network, global freight coverage",
  },
  "/404": {
    title: "Page Not Found | One Global Logistics",
    description:
      "The page you are looking for could not be found. Return to One Global Logistics to continue browsing our services.",
    keywords: "404 page, page not found, One Global Logistics",
  },
};

const ensureMetaTag = (name: string) => {
  let tag = document.querySelector(`meta[name=\"${name}\"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  return tag;
};

export const RouteSEO = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const currentSeo = seoByPath[pathname] ?? seoByPath["/404"];

    document.title = currentSeo.title;

    const descriptionTag = ensureMetaTag("description");
    descriptionTag.setAttribute("content", currentSeo.description);

    const keywordsTag = ensureMetaTag("keywords");
    keywordsTag.setAttribute("content", currentSeo.keywords);
  }, [pathname]);

  return null;
};
