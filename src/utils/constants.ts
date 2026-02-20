
import icon from "/src/assets/casestudy.png";
import product from "/src/assets/product-design.png";
import design from "/src/assets/ux-research.png";
import visual from "/src/assets/visual-design.png";
import rapid from "/src/assets/rapid-prototyping.png";
import industry from "/src/assets/industry.png";
import service from "/src/assets/service.png";
import team from "/src/assets/team.png";
import timeline from "/src/assets/timeline.png";
import clientlab from "/src/assets/clientlab.png";
import frame from "/src/assets/frame.png";
import digital from "/src/assets/digital.png";

type Product = {
  id: number;
  slug: string;
  image: string;
  header: string;
  content: string;
  href: string; // <-- add this
};


export const PRODUCT_SCHEMA: Product[]=[
    { id:1, slug: 'UIUX DESIGN', image:frame, href:"/sigyncase",   header:"HEALTH CARE", content:"SIGYN: Designing a decentralized survival messaging system for offline-first, crisis-ready communication"},
    { id:2, slug: 'UIUX DESIGN', image:icon,  href:"/digitalcase", header:"E-COMMERCE", content:"Revamping the shopping experience: Responsive design for mobile-first e-commerce"},
    { id:3, slug: 'UIUX DESIGN', image:frame, href:"/digitalcase", header:"EDUCATION",  content:"Developing an interactive learning platform: User experience for gamified education"},
    { id:4, slug: 'UIUX DESIGN', image:frame, href:"/digitalcase", header:"TRAVEL",     content:"Innovating itinerary planning: Seamless UX for travel booking applications"},
]

export const CASESTUDY_SCHEMA: Product[]=[
    { id:1, slug: 'UIUX DESIGN', image:frame, href:"/sigyncase",   header:"HEALTH CARE", content:"SIGYN: Designing a decentralized survival messaging system for offline-first, crisis-ready communication"},
    { id:2, slug: 'UIUX DESIGN', image:icon,  href:"/digitalcase", header:"E-COMMERCE", content:"Revamping the shopping experience: Responsive design for mobile-first e-commerce"},
    { id:3, slug: 'UIUX DESIGN', image:frame, href:"/digitalcase", header:"EDUCATION",  content:"Developing an interactive learning platform: User experience for gamified education"},
    { id:4, slug: 'UIUX DESIGN', image:frame, href:"/digitalcase", header:"TRAVEL",     content:"Innovating itinerary planning: Seamless UX for travel booking applications"},
]
// Project Price Schema
export const PROJECT_BUDGET_SCHEMA=[
"Under $5k",
'$6k - $10k',
'$11k - $20k',
'$21k - $50k',
'$50k+',
]

export const PROJECT_SCHEMA=[
    { id:1, slug: 'E-COMMERCE DESIGN', href:"/digitalcase", image:icon,  header:"HEALTH CARE", content:"Revolutionizing Healthcare Access: A UX/UI Case Study"},
    { id:2, slug: 'MOBILE APP DESIGN', href:"/digitalcase",   image:icon,  header:"EDTECH", content:"Elevating Education: UX/UI Design for an Engaging Learning App"},
    { id:3, slug: 'WEBSITE DESIGN', href:"/digitalcase",   image:icon,  header:"TRAVEL",  content:"Seamless Travel Planning: A UX/UI Case Study"},
    { id:4, slug: 'BRANDING', href:"/digitalcase",   image:icon,  header:"FOOD & BEVERAGE",     content:"Crafting a Brand Identity: A UX/UI Case Study"},
    { id:5, slug: 'UX RESEARCH', href:"/digitalcase",   image:icon,  header:"AUTOMOTIVE",     content:"Driving Innovation: UX Research for a Car-Sharing Platform"},
    { id:6, slug: 'WEB DESIGN', href:"/digitalcase",   image:icon,  header:"REAL ESTATE",     content:"Redesigning the Home Buying Experience: A UX/UI Case Study"},
    { id:7, slug: 'MOBILE APP DESIGN',  href:"/digitalcase", image:icon,  header:"ENTERTAINMENT",     content:"Enhancing User Engagement: A UX/UI Case Study"},
    { id:8, slug: 'UIUX DESIGN', href:"/digitalcase",  image:icon,  header:"FINTECH",     content:"Designing an AI agent : Chatbot UX & UI for a personal finance assistant app"},
   { id:9, slug: 'BRANDING', href:"/digitalcase",   image:icon,  header:"FINTECH",     content:"Designing an AI agent : Chatbot UX & UI for a personal finance assistant app"},
]

export const EXPERIENCE_SCHEMA = [
  {
    title: "ShopSmart E-Commerce Platform",
    role: "UI Designer · Hybrid",
    date: "June 2022 – February 2023",
  },
  {
    title: "HealthTrack Fitness App",
    role: "UX Researcher · Remote",
    date: "March 2023 – December 2023",
  },
  {
    title: "Foodie Delivery Service",
    role: "Product Designer · On-site",
    date: "January 2024 – April 2025",
  },
  {
    title: "TravelMate Booking System",
    role: "Interaction Designer · Contract",
    date: "August 2021 - May 2022",
  },
];
 
//core services schema
export const CORE_SERVICES_SCHEMA = [
  {
    id: 1,
    image:product,
    header: 'End-to-End Design',
    slug: 'Product Design',
    content:
      'Transform your product vision into intuitive, user-centered interfaces. We craft seamless, engaging experiences that solve real problems and drive measurable results.',
    percentage: '45%',
    process: 'Improved Customer Conversion',
    rate: '15+',
    outcome: 'Products Successfully Launched',
    bgColor: 'bg-blue-50', 
  },
  {
    id: 2,
    image:design,
    header: 'User Experience Research',
    slug: 'UX Research',
    content:
      'Gain deep insights into user behavior and preferences through comprehensive research methodologies. We ensure that user feedback shapes the design process.',
    percentage: '30%',
    process: 'Enhanced User Satisfaction',
    rate: '200+',
    outcome: 'User Interviews Conducted',
    bgColor: 'bg-red-50', 
  },
  {
    id: 3,
    image:visual,
    header: 'Branding & Identity',
    slug: 'Visual Design',
    content:
      'Create a strong visual identity that resonates with your target audience. Our design philosophy aligns your brand message with visual aesthetics.',
    percentage: '60%',
    process: 'Stronger Brand Recognition',
    rate: '75+',
    outcome: 'Brand Identities Developed',
    bgColor: 'bg-green-100', 
  },
  {
    id: 4,
    image:rapid,
    header: 'Prototyping & Testing',
    slug: 'Rapid Prototyping',
    content:
      'Iterate faster with our prototyping services, allowing for real-time testing and feedback. We refine ideas to perfection before full-scale development.',
    percentage: '50%',
    process: 'Reduced Development Time',
    rate: '100+',
    outcome: 'Prototypes Tested',
    bgColor: 'bg-amber-50', 
  },
];


// sidebar schema
export const SIDEBAR_SCHEMA=[
  { id:1, slug:'HOME', href:"/"}, 
  { id:2, slug:"ABOUT ME", href:"/about"}, 
  { id:3, slug:"SERVICES", href:"/services"}, 
  { id:4, slug:"CASE STUDIES", href:"/casestudy"}, 
  { id:5, slug:"CONTACT", href:"/contact"},   
];
  
         

// footer schema
export const FOOTER_SCHEMA=[
  { id:1, slug:'HOME', href:"/"}, 
  { id:2, slug:"ABOUT ME", href:"/about"}, 
  { id:3, slug:"SERVICES", href:"/services"},
  { id:4, slug:"CASE STUDIES", href:"/casestudy"}, 
  { id:5, slug:"CONTACT", href:"/contact"},   
];
  
// expertise schema
 export const EXPERTISE = [
  "A/B Testing",
  "Wireframing",
  "Prototyping",
  "User Journey Mapping",
  "Cognitive Walkthrough",
  "Interaction Design",
  "Mood Boarding",
  "Visual Design",
  "Style Guide Creation",
  "User Research",
  "Design Systems",
  "Competitive Analysis",
  "Feedback Collection",
  "Analytics Review",
  "Feature Prioritization",
   "Cognitive Walkthrough",
  "Interaction Design",
  "Usability Testing",
  "Cognitive Walkthrough",
  "Usability Testing",
  "Cognitive Walkthrough",

];

// process schema 
 export const PROCESS_SCHEMA = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Every successful product starts with context. In this phase, I focus on deeply understanding what we’re building, who we’re building it for, and why it matters. I work closely with stakeholders to uncover business goals, success metrics, and technical constraints. At the same time, I explore user needs, pain points, and behaviors through research and analysis. This ensures we’re not designing based on assumptions but on real insight.",
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "With the right insights in place, we move from understanding to decision-making. This phase is about defining how the product should work and why.I translate research into actionable strategy, shaping the product vision, defining user personas, mapping journeys, and setting design principles that guide every design decision. This keeps the product focused, intentional, and aligned with both user needs and business goals.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "With the right insights in place, we move from understanding to decision-making. This phase is about defining how the product should work and why.I translate research into actionable strategy, shaping the product vision, defining user personas, mapping journeys, and setting design principles that guide every design decision. This keeps the product focused, intentional, and aligned with both user needs and business goals.",
  },
  {
    number: "04",
    title: "Delivery",
    description:
      "A great design is only successful when it’s built correctly. In this final phase, I focus on smooth collaboration with developers and maintaining quality through implementation.I deliver well-documented designs, clear specifications, and reusable components to ensure nothing is lost in translation. I stay involved during development to answer questions, review builds, and make sure the final product matches the intended experience.",
  },
];

// Advantage schema
export const ADVANTAGE_SCHEMA=[

  {id:1, slug:'Empathy', content:"I approach every project with empathy and intention. I start with the 'Why' before the 'What'." },
  {id:2, slug:'The Goal', content:"Design should reduce friction, not add to it. Every screen and interaction has a reason to exist." },
  {id:3, slug:'The Intersection', content:"Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks." },
]

// product-details schema
export const PRODUCT_DETAILS_SCHEMA=[
  {id:1, slug:'CLIENT',  image: clientlab,    content:"IncQuery Labs" },
  {id:2, slug:'INDUSTRY',  image:industry,     content:"Healthcare" },
  {id:3, slug:'SERVICE',   image:service,     content:"UIUX Design"},
  {id:4, slug:'TEAM SETUP',  image:team,   content:"1 Researcher + 3 Designers + 2 Developers"},
  {id:5, slug:'TIMELINE',   image:timeline,    content:"1 month"},
]