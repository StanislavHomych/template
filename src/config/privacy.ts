export interface PrivacySection {
  title: string;
  paragraphs: string[];
  listItems?: string[];
  paragraphsAfterList?: string[];
}

export interface PrivacyPolicyConfig {
  lastUpdated: string;
  title: string;
  sections: PrivacySection[];
  contactEmail: string;
}

const contactEmail = 'hello@affsquad.com';

export const privacyPolicyConfig: PrivacyPolicyConfig = {
  lastUpdated: '01/01/2026',
  title: 'Privacy Policy',
  contactEmail,
  sections: [
    {
      title: '1. Information We Collect',
      paragraphs: [
        'We collect information in the following ways:',
      ],
      listItems: [
        'Information You Provide',
        'Data entered into the Projekto calculator (such as project type, features, estimated scope, timelines, or budgets)',
        'Contact information if you voluntarily reach out to us (for example, via email)',
        'Information Collected Automatically',
        'IP address (processed in anonymized or aggregated form where possible)',
        'Browser and device information',
        'Pages visited, session duration, and interaction data',
      ],
      paragraphsAfterList: [
        'This information helps us understand how users interact with Projekto and improve the quality of our services.',
      ],
    },
    {
      title: '2. Purpose of Data Processing',
      paragraphs: [
        'Projekto processes only the information that users voluntarily provide while using the service. This may include project-related details such as scope descriptions, technology stack selections, team roles, timelines, and cost estimates entered by the user.',
        'Projekto does not require mandatory account creation, personal identification, or contact details in order to use the core functionality of the website.',
        'We process information in order to:',
      ],
      listItems: [
        'Provide, maintain, and improve Projekto',
        'Analyze usage trends and optimize user experience',
        'Respond to inquiries and provide support',
        'Ensure platform security and prevent misuse',
      ],
      paragraphsAfterList: [
        'Projekto does not sell, rent, or trade personal data.',
      ],
    },
    {
      title: '3. Cookies and Tracking Technologies',
      paragraphs: [
        'Projekto uses cookies and similar technologies to:',
      ],
      listItems: [
        'Enable essential website functionality',
        'Measure traffic and performance',
        'Improve usability and content relevance',
      ],
      paragraphsAfterList: [
        'You may control or disable cookies through your browser settings.',
      ],
    },
    {
      title: '4. Third-Party Services',
      paragraphs: [
        'We may rely on reputable third-party service providers for:',
      ],
      listItems: [
        'Analytics',
        'Hosting and infrastructure',
        'Performance monitoring',
      ],
      paragraphsAfterList: [
        'These providers process data solely on our behalf and in compliance with applicable data-protection regulations.',
      ],
    },
    {
      title: '5. Data Retention',
      paragraphs: [
        'Personal data is retained only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.',
      ],
    },
    {
      title: '6. Your Rights Under GDPR',
      paragraphs: [
        'If you are located in the European Union, you have the right to:',
      ],
      listItems: [
        'Access your personal data',
        'Request correction or deletion',
        'Restrict or object to processing',
        'Withdraw consent at any time',
      ],
      paragraphsAfterList: [
        'Requests may be submitted by contacting us using the details below.',
      ],
    },
    {
      title: '7. Data Security',
      paragraphs: [
        'We implement appropriate technical and organizational safeguards to protect personal data against unauthorized access, alteration, disclosure, or destruction.',
      ],
    },
    {
      title: '8. Updates to This Policy',
      paragraphs: [
        'This Privacy Policy may be updated periodically. Any changes will be reflected on this page with a revised "Last updated" date.',
      ],
    },
    {
      title: '9. Contact Information',
      paragraphs: [
        'For questions regarding this Privacy Policy, please contact:',
        `Email: ${contactEmail}`,
      ],
    },
  ],
};

