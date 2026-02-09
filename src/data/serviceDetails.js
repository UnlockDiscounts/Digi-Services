import PortfolioWeb1 from "../components/svg/PortfolioWeb1";
import PortfolioWeb2 from "../components/svg/PortfolioWeb2";
import PortfolioWeb3 from "../components/svg/PortfolioWeb3";
import PortfolioWeb4 from "../components/svg/PortfolioWeb4";
// import Testimonial1 from "../components/svg/Testimonial1";
import Testimonial2 from "../components/svg/Testimonial2";
import Testimonial3 from "../components/svg/Testimonial3";

export const serviceDetails = {
  "website-development": {
    hero: {
      title: "Website Development Services",
      subtitle:
        "We design and build industry-leading web-based products that delight your customers",
    },
    features: {
      title: "Transform your business with",
      highlight: "Innovative Technologies",
      cards: [
        {
          id: "01",
          title: "Frontend Technologies",
          tools:
            "HTML5, CSS3, JavaScript, React.js, Next.js, Bootstrap, Tailwind CSS",
        },
        {
          id: "02",
          title: "Backend Technologies",
          tools: "Node.js, Express.js, PHP, Laravel, Python (Django/ Flask)",
        },
        {
          id: "03",
          title: "CMS Platforms",
          tools: "WordPress, Shopify, Webflow, Wix, Squarespace",
        },
        { id: "04", title: "Database", tools: "MySQL, MongoDB, Firebase" },
        {
          id: "05",
          title: "Hosting Providers",
          tools: "AWS, Hostinger, Bluehost, Vercel, Netlify",
        },
      ],
    },
    solutions: {
      title: "Achieve your business goals with",
      highlight: "Website Development Solutions",
      cards: [
        {
          title: "E-Commerce Development",
          description:
            "Robust online stores using platforms like Shopify, WooCommerce, or custom frameworks with payment gateway integration.",
        },
        {
          title: "Custom Website Design",
          description: "Tailor made .",
        },
        {
          title: "Hosting & Domain Setup",
          description:
            "Secure and reliable hosting solutions with seamless domain registration and management.",
        },
        {
          title: "Basic SEO Setup",
          description:
            "On-page SEO including meta tags, alt text, and sitemaps to enhance search engine visibility.",
        },
        {
          title: "Responsive & Mobile Optimization",
          description:
            "Ensuring your website looks and performs perfectly across all devices and screen sizes.",
        },
        {
          title: "Maintenance & Support",
          description:
            "Ongoing technical support and updates to keep your website running smoothly and securely.",
        },
      ],
    },
    testimonial: {
      title: "Showcase success with genuine",
      highlight: "Customer experiences",
      reviews: [
        {
          id: 1,
          text: "Custom website retained the spirit of our older website while incorporating modern design trends and functionalities.",
          authorName: "Rahul Mehta",
          authorRole: "Owner, Tech Idea",
          image: Testimonial2,
        },
        {
          id: 2,
          text: "The team delivered an exceptional e-commerce platform that significantly boosted our online sales and customer engagement.",
          authorName: "Sanya Verma",
          authorRole: "Marketing Head, StyleHub",
          image: Testimonial3,
        },
        {
          id: 3,
          text: "Highly professional and responsive. They understood our requirements perfectly and delivered on time.",
          authorName: "Amit Kumar",
          authorRole: "Director, EduTech Solutions",
          image: Testimonial2,
        },
      ],
    },
    pricing: {
      title: "Elevate your growth with strategic",
      highlight: "Pricing Models",
      plans: [
        {
          name: "Starter",
          paymentButtonId: "pl_SDyTBQ1ciJkKY3",
          price: "₹26,000",
          features: [
            "1 Page",
            "Mobile Responsive",
            "Contact Form",
            "Basic SEO",
          ],
        },
        {
          name: "Standard",
          paymentButtonId: "pl_SDycDVhVxXfGIM",
          price: "₹35,500",
          features: [
            "5 Page",
            "SEO Setup",
            "WhatsApp Chat",
            "Google Maps Integration",
          ],
        },
        {
          name: "Premium",
          paymentButtonId: "pl_SDydSPyCiMm4vP",
          price: "₹46,000",
          features: [
            "10+ Page",
            "E-commerce Functionality",
            "Payment Gateway",
            "Maintenance 1 yr free",
          ],
        },
      ],
    },
    portfolio: {
      title: "Highlight real impact with our curated",
      highlight: "Portfolio Showcase",
      items: [
        { id: 1, image: PortfolioWeb1 },
        { id: 2, image: PortfolioWeb2 },
        { id: 3, image: PortfolioWeb3 },
        { id: 4, image: PortfolioWeb4 },
      ],
    },
    faq: {
      title: "Get clarity through our most asked",
      highlight: "Client Questions",
      questions: [
        {
          question: "What is WordPress?",
          answer:
            "WordPress is a content management system used to build and manage websites easily without heavy coding.",
        },
        {
          question: "How much to renew my license?",
          answer:
            "License renewal cost depends on the plan, features, and duration selected.",
        },
        {
          question: "How long do I get support?",
          answer:
            "Support is provided for a fixed period based on the package or service agreement.",
        },
        {
          question: "Why choose custom design?",
          answer:
            "Custom design provides a unique, brand-focused website tailored to your specific business needs.",
        },
      ],
    },
  },
  "social-media-management": {
    hero: {
      title: "Grow Your Brand With Expert Social Media Management",
      subtitle:
        "From content creation to conversion-we take care of your entire social media funnel",
    },
    features: {
      title: "Supercharge your brand with",
      highlight: "Strategic Social Media",
      cards: [
        {
          id: "01",
          title: "Content Creation",
          tools: "Canva, Adobe Creative Cloud, Figma, CapCut, Premiere Pro",
        },
        {
          id: "02",
          title: "Scheduling & Publishing",
          tools: "Buffer, Hootsuite, Later, Sprout Social, Meta Business Suite",
        },
        {
          id: "03",
          title: "Community Management",
          tools:
            "Discount & Offer Replies, DM Management, Comment Moderation, Engagement",
        },
        {
          id: "04",
          title: "Analytics & Reporting",
          tools:
            "Google Analytics, Meta Insights, LinkedIn Analytics, Twitter Analytics",
        },
        {
          id: "05",
          title: "Paid Advertising",
          tools:
            "Facebook Ads, Instagram Ads, LinkedIn Ads, Twitter Ads, Pinterest Ads",
        },
      ],
    },
    solutions: {
      title: "Grow your audience with",
      highlight: "Social Media Solutions",
      cards: [
        {
          title: "Social Media Strategy",
          description:
            "Comprehensive strategies tailored to your brand goals, target audience, and industry trends.",
        },
        {
          title: "Profile Optimization",
          description:
            "Optimizing your social media profiles with the right keywords, bios, and visuals for maximum visibility.",
        },
        {
          title: "Content Calendar",
          description:
            "Planning and organizing content in advance to ensure consistent and timely posting across platforms.",
        },
        {
          title: "Influencer Marketing",
          description:
            "Collaborating with relevant influencers to expand your reach and build credibility.",
        },
        {
          title: "Community Growth",
          description:
            "Engaging strategies to organically grow your follower base and foster a loyal community.",
        },
        {
          title: "Performance Tracking",
          description:
            "Regular monitoring and reporting of key performance metrics to refine and improve strategies.",
        },
      ],
    },
    testimonial: {
      title: "See how we've helped brands",
      highlight: "Grow Online",
      reviews: [
        {
          id: 1,
          text: "Their social media strategy completely transformed our online presence. Engagement has skyrocketed!",
          authorName: "Priya Sharma",
          authorRole: "Founder, Glow Up",
          image: Testimonial3,
        },
        {
          id: 2,
          text: "Consistent posting and creative content have helped us reach a much wider audience than before.",
          authorName: "Rohan Gupta",
          authorRole: "Marketing Manager, FitLife",
          image: Testimonial2,
        },
        {
          id: 3,
          text: "Professional, creative, and data-driven. Highly recommend their management services.",
          authorName: "Anjali Singh",
          authorRole: "CEO, TechNova",
          image: Testimonial3,
        },
      ],
    },
    pricing: {
      title: "Flexible plans for your",
      highlight: "Social Growth",
      plans: [
        {
          name: "Starter",
          paymentButtonId: "pl_SDyeao4yh51ICW",
          price: "₹18,000",
          features: [
            "Content (12 posts/months)",
            "Platforms (1-2)",
            "No leads",
            "Basic SEO",
            "Basic Analytics",
          ],
        },
        {
          name: "Growth",
          paymentButtonId: "pl_SDyg049a2n7tus",
          price: "₹21,000",
          features: [
            "Content (20 posts/months)",
            "Platforms (2-3)",
            "Leads (100/months)",
            "Intermediate SEO",
            "Standard Analytics",
          ],
        },
        {
          name: "Pro",
          paymentButtonId: "pl_SDyggw5BLtWzwl",
          price: "₹25,000",
          features: [
            "Content (30 posts/months)",
            "Platforms (3-4)",
            "Leads (300/months)",
            "Advanced SEO",
            "Power BI Analytics",
          ],
        },
      ],
    },
    portfolio: {
      title: "Check out our successful",
      highlight: "Social Campaigns",
      items: [
        { id: 1, image: null },
        { id: 2, image: null },
        { id: 3, image: null },
        { id: 4, image: null },
      ],
    },
    faq: {
      title: "Common questions about",
      highlight: "Social Media",
      questions: [
        {
          question: "Which platforms do you manage?",
          answer:
            "We manage all major platforms including Instagram, Facebook, LinkedIn, Twitter, and Pinterest.",
        },
        {
          question: "Do you create the content?",
          answer:
            "Yes, our team of designers and copywriters creates high-quality content tailored to your brand.",
        },
        {
          question: "How often do you post?",
          answer:
            "Posting frequency depends on your chosen plan, ranging from 3 times a week to daily.",
        },
        {
          question: "Can I approve posts before they go live?",
          answer:
            "Absolutely! We share a content calendar for your approval before scheduling anything.",
        },
      ],
    },
  },
  "resume-building": {
    hero: {
      title: "Land Your Dream Job with a Professionally Crafted Resume",
      subtitle:
        "Stand out from the clutter with a resume that highlights your true potential.",
    },
    features: {
      title: "Craft your career with",
      highlight: "Expert Resume Services",
      cards: [
        {
          id: "01",
          title: "ATS Optimization",
          tools: "Jobscan, ResyMatch, Skillsyncer, Vmock, Teal",
        },
        {
          id: "02",
          title: "Visual Design",
          tools:
            "Canva Pro, Adobe InDesign, Figma, Illustrator, Microsoft Word",
        },
        {
          id: "03",
          title: "Content Writing",
          tools:
            "Grammarly Premium, Hemingway Editor, ChatGPT, Jasper, Copy.ai",
        },
        {
          id: "04",
          title: "LinkedIn Optimization",
          tools:
            "LinkedIn Sales Navigator, Crystal Knows, Shield Analytics, Taplio",
        },
        {
          id: "05",
          title: "Cover Letters",
          tools:
            "Custom Templates, Persuasive Copywriting, Targeted Keywords, Personal Branding",
        },
      ],
    },
    solutions: {
      title: "Secure your dream job with",
      highlight: "Career Solutions",
      cards: [
        {
          title: "Executive Resumes",
          description:
            "High-impact resumes designed for C-level executives and senior management roles.",
        },
        {
          title: "Fresher Resumes",
          description:
            "Structured formats that highlight potential and skills for entry-level candidates.",
        },
        {
          title: "Creative Portfolios",
          description:
            "Visually stunning portfolios for designers, writers, and creative professionals.",
        },
        {
          title: "LinkedIn Makeover",
          description:
            "Complete profile optimization to attract recruiters and network effectively.",
        },
        {
          title: "Cover Letter Writing",
          description:
            "Compelling cover letters that tell your story and complement your resume.",
        },
        {
          title: "Career Consultation",
          description:
            "One-on-one sessions to identify strength and map out a successful career path.",
        },
      ],
    },
    testimonial: {
      title: "Hear from our placed",
      highlight: "Job Seekers",
      reviews: [
        {
          id: 1,
          text: "I got calls from top MNCs within a week of using the new resume. The ATS optimization really works!",
          authorName: "Arjun Das",
          authorRole: "Software Engineer",
          image: Testimonial2,
        },
        {
          id: 2,
          text: "The LinkedIn makeover was a game changer. Recruiters started reaching out to me directly.",
          authorName: "Meera Reddy",
          authorRole: "Digital Marketer",
          image: Testimonial3,
        },
        {
          id: 3,
          text: "Professional, polished, and on point. They knew exactly how to highlight my achievements.",
          authorName: "Kabir Khan",
          authorRole: "Project Manager",
          image: Testimonial2,
        },
      ],
    },
    pricing: {
      title: "Invest in your future with",
      highlight: "Career Packages",
      plans: [
        {
          name: "Entry",
          paymentButtonId: "pl_SDysOzpvTv2OYC",
          price: "₹2,000",
          features: [
            "Text Resume",
            "ATS Optimized",
            "Editable Word File",
            "1 Revision",
          ],
        },
        {
          name: "Professional",
          paymentButtonId: "pl_SDytEp34Ru0TBw",
          price: "₹4,000",
          features: [
            "Visual Resume",
            "Cover Letter",
            "LinkedIn Review",
            "3 Revisions",
          ],
        },
        {
          name: "Executive",
          paymentButtonId: "pl_SDytpmbc1812f4",
          price: "₹6,000",
          features: [
            "Senior Resume",
            "LinkedIn Optimization",
            "Priority Delivery",
            "Unlimited Revisions",
          ],
        },
      ],
    },
    portfolio: {
      title: "View our sample",
      highlight: "Resume Designs",
      items: [
        { id: 1, image: null },
        { id: 2, image: null },
        { id: 3, image: null },
        { id: 4, image: null },
      ],
    },
    faq: {
      title: "Answers to your",
      highlight: "Resume Queries",
      questions: [
        {
          question: "Is the resume ATS friendly?",
          answer:
            "Yes, we ensure all our text-based resumes are fully parsed by Applicant Tracking Systems.",
        },
        {
          question: "How long does it take?",
          answer:
            "Typically 3-5 business days after we receive all your details.",
        },
        {
          question: "Can I edit it later?",
          answer:
            "Yes, we provide the final file in an editable Microsoft Word or Google Doc format.",
        },
        {
          question: "Do you write cover letters?",
          answer:
            "Yes, we craft personalized cover letters that align with your resume and target job.",
        },
      ],
    },
  },
};
