// app/data/projects.ts

export const projects = [
    {
        id: 'tick-gg',
        title: 'tick.gg',
        description: 'Online crypto casino with original and unique games built from scratch. The platform supports multiple cryptocurrencies with secure payment processing, real-time multiplayer functionality, and comprehensive analytics for both players and administrators.',
        shortDescription: 'Online crypto casino with one-of-a-kind original games.',
        image: '/placeholder.svg?height=150&width=250',
        liveLink: 'https://tick.gg',
        githubLink: 'https://github.com/coltspy',
        tags: [
          'Next.js', 
          'Node.js', 
          'Firebase', 
          'Redis', 
          'React', 
          'TypeScript',
          'TailwindCSS',
          'Socket.io',
          'WebRTC',
          'Pay.com API', 
          'BitPay API', 
          'Stripe API',
          'Google Analytics',
          'AWS',
          'Docker',
          'Vercel',
          'Web3.js',
          'Ethers.js',
          'MongoDB',
          'Prisma',
          'JWT Authentication',
          'OAuth'
        ],
        features: [
          'Original casino games designed and developed in-house',
          'Multi-cryptocurrency support (Bitcoin, Ethereum, USDT, etc.)',
          'Secure wallet integration with multiple payment processors',
          'Real-time multiplayer gaming with low-latency connections',
          'Comprehensive admin dashboard with analytics and user management',
          'Automated KYC/AML verification system',
          'Provably fair gaming algorithms',
          'Mobile-responsive design for seamless cross-platform experience'
        ],
        challenges: [
          {
            title: 'Real-time Data Consistency',
            description: 'Maintaining data consistency across thousands of concurrent users required implementing a distributed Redis cache system with custom synchronization protocols.'
          },
          {
            title: 'Payment Processing Security',
            description: 'Ensuring secure cryptocurrency transactions while maintaining user privacy involved developing a multi-layered verification system with cryptographic signatures.'
          },
          {
            title: 'Regulatory Compliance',
            description: 'Navigating the complex regulatory landscape for online gambling required implementing region-specific features and creating a robust KYC/AML system.'
          }
        ],
        techDetails: 'The platform is built on a modern tech stack with Next.js for the frontend and Node.js microservices for the backend. Firebase provides user authentication and real-time database capabilities, while Redis handles caching and pub/sub functionality for game events. WebRTC and Socket.io enable real-time multiplayer experiences with minimal latency. Payment processing is handled through integrations with Pay.com, BitPay, and Stripe APIs with cryptocurrency wallet integrations via Web3.js and Ethers.js. The infrastructure is containerized with Docker and deployed on AWS with Vercel for frontend hosting. Data persistence is managed through a combination of MongoDB and Firebase, with Prisma as the ORM.'
      },
    {
      id: 'autonomous-vehicle-system',
      title: 'Autonomous Vehicle Management System',
      description: 'Django backend with a React TypeScript frontend to manage autonomous vehicles efficiently. It features a comprehensive API for vehicle tracking, and operations like ride requests and maintenance scheduling.',
      shortDescription: 'Full-stack system for managing autonomous vehicle fleets.',
      image: '/placeholder.svg?height=150&width=250',
      liveLink: 'https://avms.dev',
      githubLink: 'https://github.com/coltspy/ACMS',
      tags: ['Django', 'Python', 'React', 'TypeScript', 'API', 'Redux', 'PostgreSQL', 'Docker'],
      features: [
        'Real-time vehicle tracking and status monitoring',
        'Automated ride assignment and route optimization',
        'Predictive maintenance scheduling based on vehicle telemetry',
        'Comprehensive reporting and analytics dashboard',
        'Customer mobile app integration'
      ],
      challenges: [
        {
          title: 'Real-time Data Processing',
          description: 'Handling thousands of location updates per minute required implementing efficient data processing pipelines.'
        },
        {
          title: 'Fleet Optimization',
          description: 'Creating algorithms to optimally distribute vehicles based on demand forecasting to maximize efficiency.'
        }
      ],
      techDetails: 'The system uses Django with Django REST Framework for the backend API, PostgreSQL for data storage with PostGIS extensions for geospatial queries. The frontend is built with React and TypeScript, using Redux for state management. The entire system is containerized with Docker and deployed on AWS.'
    },
];