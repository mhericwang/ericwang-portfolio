import Strings from "./Strings";

export default {
  HEADER_MENU: [
    {
      id: 1,
      name: 'HOME',
    },
    {
      id: 2,
      name: 'SKILLS',
    },
    {
      id: 3,
      name: 'EXPERIENCE',
    },
    {
      id: 4,
      name: 'PROJECTS',
    },
    {
      id: 5,
      name: 'CONTACT',
    },
  ],
  SKILLS: [
    {
      id: 1,
      title: Strings.FRONTEND,
      desc: Strings.FRONTEND_DESC,
      img: '/src/assets/frontend-icon.png',
    },
    {
      id: 2,
      title: Strings.BACKEND,
      desc: Strings.BACKEND_DESC,
      img: '/src/assets/backend-icon.png',
    },
    {
      id: 3,
      title: Strings.INFRA,
      desc: Strings.INFRA_DESC,
      img: '/src/assets/infra-icon.png',
    },
  ],
  SKILLS_TECH: [
    '/src/assets/tech/javascript.png',
    '/src/assets/tech/typescript.png',
    '/src/assets/tech/reactjs.png',
    '/src/assets/tech/redux.png',
    '/src/assets/tech/java.png',
    '/src/assets/tech/spring.png',
    '/src/assets/tech/git.png',
    '/src/assets/tech/python.svg',
    '/src/assets/tech/html.png',
    '/src/assets/tech/css.png',
    '/src/assets/tech/tailwind.png',
    '/src/assets/tech/nodejs.png',
    '/src/assets/tech/mongodb.png',
    '/src/assets/tech/sql.png',
    '/src/assets/tech/cpp.png',
    '/src/assets/tech/aws.png',
    '/src/assets/tech/docker.png',
    '/src/assets/tech/terraform.png',
  ],
  EXPERIENCE: [
    {
      title: 'Backend Engineer',
      company: 'Ritual',
      link: 'https://ritual.co/',
      icon: '/src/assets/ritual.jpeg',
      date: 'Sep 2022 - Dec 2022',
      points: [
        'Saved over $125k in inactive accounts with credits by revamping promotional voucher system with Gradle and Spring.',
        'Improved the runtime by 1.5x for referral sender credit award & notification through GKE task queue optimization.',
        'Attained 43% new users over 2 weeks in holiday gift campaign by integrating key endpoints with Swaggerhub OpenAPI.',
      ],
    },
    {
      title: 'Full-stack Web Developer',
      company: 'Boosted.ai',
      link: 'https://boosted.ai/',
      icon: '/src/assets/boosted.jpeg',
      date: 'May 2022 - Aug 2022',
      points: [
        'Spearheaded and designed large-scale React/Spring project from scratch for RBC\'s ETF portfolio managers and clients.',
        'Refined UI library by adding and modifying 30+ outdated MaterialUI components into updated MUI5 with storybook.',
        'Attained 43% new users over 2 weeks in holiday gift campaign by integrating key endpoints with Swaggerhub OpenAPI.',
      ],
    },
    {
      title: 'Full-stack Software Engineer',
      company: 'Enlighted',
      link: 'https://www.enlightedinc.com/',
      icon: '/src/assets/enlighted.jpeg',
      date: 'Sep 2021 - Dec 2021',
      points: [
        'Configured AWS infrastructure to add DynamoDB and CloudWatch logs as an AWS Certified Cloud Practitioner.',
        'Architected FastAPI endpoints for large production data in DynamoDB with PynamoDB CRUD operations.',
        'Resolved 3000+ Terraform security issues and configured Pre-commit to run Tfsec to prevent future vulnerabilities.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'PointClickCare',
      link: 'https://pointclickcare.com/',
      icon: '/src/assets/pcc.jpeg',
      date: 'Jan 2021 - Apr 2021',
      points: [
        'Developed test automation framework using Cucumber and Java that executes automatically upon pipeline code changes.',
        'Reduced runtime of legacy data integrity verification by 7x with MD5 hashing and runner design pattern.',
        'Engineered data pipeline dashboard web app with Spring Boot backend that queries operational DBs with React frontend.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Alida',
      link: 'https://www.alida.com/',
      icon: '/src/assets/alida.png',
      date: 'Jun 2020 - Aug 2020',
      points: [
        'Revamped API team\'s App Center written in React to incorporate salesforce data mappings using React-Boilerplate.',
        'Utilized GraphQL and ES6 to incorporate Tray.io workflow automation into App Center for customer facing projects.',
        'Increased test coverage to 97% for each UI container using Jasmine while conducting integration/regression tests.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Modest Tree',
      link: 'https://www.modesttree.com/',
      icon: '/src/assets/modest-tree.png',
      date: 'May 2019 - Aug 2019',
      points: [
        'Led large-scale project for GE Healthcare to create 13 VR simulations with proprietary C# based language.',
        'Refined existing simulations by removing multithreading bottlenecks to onboard new clients such as Lockheed Martin.',
        'Increased average simulation performance by 40% by analyzing inefficient method overloading and unnecessary branches.',
      ],
    },
  ],
  PROJECTS: [
    {
      id: 1,
      title: 'Image-AI',
      desc: 'Modern MERN stack web application made with Vite that utilizes DALL-E API from OpenAI to fetch ai-generated pictures from user provided prompts',
      link: 'https://github.com/mhericwang/image-ai',
      img: '/src/assets/projects/imageai.png',
    },
    {
      id: 2,
      title: 'UW Course Planner',
      desc: 'Fully functional database-driven React(JS)-Spring(Java) app that uses UWaterloo\’s OpenData API to help students search & plan courses',
      link: 'https://github.com/blzzhang/cs348-proj',
      img: '/src/assets/projects/uwcp.png',
    },
    {
      id: 3,
      title: 'Students of Watan',
      desc: 'Waterloo-themed text-based game of Settler\'s of Catan, made with proper OOP practices and multiple industry-standard design patterns',
      link: 'https://github.com/ericmhwang/watan',
      img: '/src/assets/projects/watan.jpeg',
    },
  ]
}