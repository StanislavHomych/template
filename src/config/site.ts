import { blogs } from '@/data/blogs';

export const siteConfig = {
  // Site Information
  domain: 'https://ttwrapper.com', // Site domain (used for robots.txt, sitemap, etc.)
  name: 'Projekto',
  tagline: 'Software project estimation and planning',
  description: 'An independent online service focused on software project estimation and planning based on user-provided information.',
  
  // Logo and Branding
  logo: {
    image: '/images/Logo.png', // Path to logo image (used site-wide)
    linkText: 'Projekto', // Site name as link text to home page
  },
  
  // Blogs
  blogs,

  // Contact Information
  contact: {
    email: 'hello@affsquad.com',
    // phone: '+1 (555) 123-4567',
    // address: '123 Business St, Suite 100, San Francisco, CA 94105',
  },

  // Navigation
  nav: {
    links: [
      // { label: 'Team', href: '/team' },
      // { label: 'Portfolio', href: '/portfolio' },
      { label: 'Get Started', href: '/get-started' },
      { label: 'About Us', href: '/about-us' },
      // { label: 'Manifesto', href: '/manifesto' },
      { label: 'Blog', href: '/blog' },
    ],
  },

  // FOOTER
  footer: {
    calculatorLinkLabel: 'Calculator',
    product: {
      title: 'PRODUCT',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Calculator', href: '/calculator' }, // Uses calculatorLinkLabel from footer
      ],
    },
    legal: {
      title: 'LEGAL',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
      ],
    },
    resources: {
      title: 'RESOURCES',
      links: [
        { label: 'Blog', href: '/blog' },
      ],
    },
    disclaimer: 'Projekto provides high-level estimates for web and mobile application development based on typical industry practices, average market rates, and the inputs you provide. All calculations are indicative only and should not be interpreted as fixed quotes, contractual offers, or professional advice. Actual project cost and delivery time may vary depending on: scope changes; technical complexity; team structure and experience; third-party services and integrations; project management and execution approach. Projekto is designed to support early planning, budgeting, and decision-making, not to replace detailed technical scoping or formal proposals. Use of this calculator is at your own discretion.',
  },

  // Contact Page Content
  contactPage: {
    title: 'Contact Us',
    subtitle: 'If you have questions about Projekto, the website, or how the service works, you can reach us using the contact information below.',
    inquiryTypes: {
      title: 'We welcome inquiries related to:',
      items: [
        'general questions about the platform',
        'project estimation and planning features',
        'privacy and data handling',
        'technical issues or feedback',
        'legal or policy-related matters',
      ],
    },
    howToContact: {
      title: 'How to Contact Us',
      email: {
        label: 'Email:',
        value: 'hello@affsquad.com',
        note: 'We aim to respond to all legitimate inquiries within a reasonable timeframe.',
      },
    },
    aboutCommunication: {
      title: 'About Communication',
      description: 'Projekto is an independent online service focused on software project estimation and planning based on user-provided information.',
      notes: [
        'We do not offer customer support via social media and do not provide phone support at this time.',
        'Please do not send sensitive personal information by email unless it is necessary to address your request.',
      ],
    },
  },

  // Home Page Content
  home: {
    hero: {
      title: 'Build Better SaaS Products',
      subtitle: 'A modern, scalable platform designed to help you launch and grow your SaaS business with confidence.',
      ctaPrimary: 'Get Started',
      ctaSecondary: 'Learn More',
    },
    features: {
      title: 'Why Choose Us?',
      subtitle: 'Everything you need to build, launch, and scale your SaaS product',
      items: [
        {
          title: 'Lightning Fast',
          description: 'Optimized for performance with cutting-edge technology and best practices',
          icon: 'M13 10V3L4 14h7v7l9-11h-7z',
        },
        {
          title: 'Secure by Default',
          description: 'Enterprise-grade security to protect your data and your customers',
          icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
        },
        {
          title: 'Scalable',
          description: 'Built to grow with your business, from startup to enterprise',
          icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
        },
      ],
    },
    cta: {
      title: 'Ready to Get Started?',
      subtitle: 'Join thousands of companies already using our platform to build amazing products',
      button: 'Contact Us Today',
    },
    metric: {
    //   label: 'Primary Metric',
      value: '15,480',
      change: 88.2, // percentage change
      subtitle: 'Compared to previous period',
      chartData: [45, 52, 48, 61, 55, 58, 65, 62, 68, 72, 75, 80, 78, 82, 85, 88, 90, 92, 95, 100], // optional: custom chart data
    },
  },

  // About Us Page Content
  aboutUs: {
    lastUpdated: '29/12/2025',
    title: 'About Us',
    content: `Projekto is an independent online service designed to help teams and businesses estimate software projects more clearly and efficiently.

Modern digital products require accurate planning, clear scope definition, and transparency around technology choices and team composition. While many estimates are created manually or scattered across documents, Projekto provides a structured way to define project scope, technology stack, team roles, timelines, and cost estimates in one place.

The platform allows users to create and manage project estimates based on their own inputs. Projekto focuses on clarity, structure, and consistency — helping users turn ideas into well-defined project plans that are easy to review, share, and refine.

Projekto does not provide project management, hiring, or development services. The website exists solely as an estimation and planning tool that helps users organize project-related information at their request.

We aim to deliver a simple, transparent, and practical experience for early-stage planning and decision-making. Projekto is an independent product and is not affiliated with any software vendors, development agencies, or third-party platforms.`,
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What is Projekto?',
          answer: 'Projekto is an online tool that helps users create structured software project estimates, including scope, technology stack, team roles, timelines, and cost breakdowns.',
        },
        {
          question: 'Who is Projekto for?',
          answer: 'Projekto is designed for startups, product managers, founders, agencies, and development teams who need clear and well-organized project estimates.',
        },
        {
          question: 'Do I need to create an account to use Projekto?',
          answer: 'No. Projekto can be used without mandatory registration. Some features may be optional and available without creating an account.',
        },
        {
          question: 'Does Projekto build or manage projects?',
          answer: 'No. Projekto does not provide development, hiring, or project management services. It is an estimation and planning tool only.',
        },
        {
          question: 'Is Projekto affiliated with any development agencies or software vendors?',
          answer: 'No. Projekto is an independent platform and is not affiliated with or endorsed by any agencies, vendors, or third-party services.',
        },
        {
          question: 'Is Projekto free to use?',
          answer: 'Core functionality is available for free. Some advanced features may be introduced in the future to support ongoing development and maintenance.',
        },
      ],
    },
  },
};

