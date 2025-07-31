export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  category: "Frontend" | "Backend" | "Mobile" | "DevOps" | "Database";
  description: string;
  projectUrl?: string;
  featured?: boolean;
}

export interface Project {
  title: string;
  tech: string[];
  summary: string;
  github?: string;
  live?: string;
  verified: boolean;
  walkthroughUrl?: string;
  commitHistoryUrl?: string;
  verificationDetails?: {
    proof: string;
    commits: number;
    lastUpdated: string;
  };
}

export interface DeveloperData {
  name: string;
  title: string;
  location: string;
  tagline: string;
  about: string;
  avatar?: string;
  links: {
    github: string;
    linkedin: string;
    website?: string;
  };
  skills: Skill[];
  projects: Project[];
}

export const devData: DeveloperData = {
  name: "John Doe",
  title: "Full-Stack Developer",
  location: "San Francisco, CA",
  tagline: "React + Node + Cloud Developer passionate about building elegant and scalable software.",
  about: "I'm a passionate developer with 5+ years of experience building modern web applications. I specialize in React, Node.js, and cloud technologies, always focusing on clean code and user experience. When I'm not coding, you'll find me exploring new technologies or contributing to open source projects.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  links: {
    github: "https://github.com/nicholas",
    linkedin: "https://linkedin.com/in/nicholas",
    website: "https://nickingargiola.vercel.app"
  },
  skills: [
    {
      name: "React",
      level: "Advanced",
      category: "Frontend",
      description: "Built 3 full-stack web apps using React and hooks.",
      projectUrl: "https://github.com/nicholas/react-portfolio",
      featured: true
    },
    {
      name: "TypeScript",
      level: "Advanced",
      category: "Frontend",
      description: "Developed type-safe applications with strict configurations.",
      projectUrl: "https://github.com/nicholas/typescript-api",
      featured: true
    },
    {
      name: "Next.js",
      level: "Intermediate",
      category: "Frontend",
      description: "Created SSR applications with optimized performance.",
      projectUrl: "https://github.com/nicholas/nextjs-ecommerce",
      featured: true
    },
    {
      name: "Tailwind CSS",
      level: "Advanced",
      category: "Frontend",
      description: "Designed responsive UIs with utility-first approach.",
      projectUrl: "https://github.com/nicholas/tailwind-components"
    },
    {
      name: "Node.js",
      level: "Advanced",
      category: "Backend",
      description: "Developed REST APIs and real-time features using Express.",
      projectUrl: "https://github.com/nicholas/node-api"
    },
    {
      name: "Python",
      level: "Intermediate",
      category: "Backend",
      description: "Developed data processing scripts and automation tools.",
      projectUrl: "https://github.com/nicholas/python-automation"
    },
    {
      name: "Firebase",
      level: "Intermediate",
      category: "Backend",
      description: "Implemented real-time databases and authentication.",
      projectUrl: "https://github.com/nicholas/firebase-chat"
    },
    {
      name: "GraphQL",
      level: "Intermediate",
      category: "Backend",
      description: "Created efficient APIs with Apollo Server and Client.",
      projectUrl: "https://github.com/nicholas/graphql-api"
    },
    {
      name: "Swift",
      level: "Beginner",
      category: "Mobile",
      description: "Learning iOS development with UIKit and SwiftUI.",
      projectUrl: "https://github.com/nicholas/swift-learning"
    },
    {
      name: "Docker",
      level: "Intermediate",
      category: "DevOps",
      description: "Containerized applications for consistent deployments.",
      projectUrl: "https://github.com/nicholas/docker-setup"
    },
    {
      name: "AWS",
      level: "Intermediate",
      category: "DevOps",
      description: "Deployed and managed cloud infrastructure.",
      projectUrl: "https://github.com/nicholas/aws-terraform"
    },
    {
      name: "PostgreSQL",
      level: "Advanced",
      category: "Database",
      description: "Designed and optimized relational database schemas.",
      projectUrl: "https://github.com/nicholas/postgres-api"
    }
  ],
  projects: [
    {
      title: "Surf Forecasting AI",
      tech: ["Python", "Firebase", "React"],
      summary: "Used AI and NOAA data to predict surf ratings with confidence scores.",
      github: "https://github.com/nicholas/surf-forecast",
      live: "https://surfapp.com",
      verified: true,
      walkthroughUrl: "https://loom.com/share/surf-forecast-walkthrough",
      commitHistoryUrl: "https://github.com/nicholas/surf-forecast/commits/main",
      verificationDetails: {
        proof: "Repo analyzed",
        commits: 47,
        lastUpdated: "2 weeks ago"
      }
    },
    {
      title: "E-commerce Platform",
      tech: ["Next.js", "Stripe", "PostgreSQL"],
      summary: "Built a full-stack e-commerce platform with payment processing and inventory management.",
      github: "https://github.com/nicholas/ecommerce-platform",
      live: "https://shop.example.com",
      verified: true,
      walkthroughUrl: "https://loom.com/share/ecommerce-walkthrough",
      commitHistoryUrl: "https://github.com/nicholas/ecommerce-platform/commits/main",
      verificationDetails: {
        proof: "Repo analyzed",
        commits: 89,
        lastUpdated: "1 week ago"
      }
    },
    {
      title: "Real-time Chat App",
      tech: ["React", "Firebase", "Tailwind CSS"],
      summary: "Developed a real-time messaging application with user authentication and file sharing.",
      github: "https://github.com/nicholas/chat-app",
      live: "https://chat.example.com",
      verified: false,
      walkthroughUrl: "https://loom.com/share/chat-app-walkthrough"
    },
    {
      title: "Task Management API",
      tech: ["Node.js", "Express", "MongoDB"],
      summary: "Created a RESTful API for task management with JWT authentication and rate limiting.",
      github: "https://github.com/nicholas/task-api",
      live: "",
      verified: false,
      commitHistoryUrl: "https://github.com/nicholas/task-api/commits/main"
    },
    {
      title: "Portfolio Website",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      summary: "Designed and built a modern portfolio website with smooth animations and responsive design.",
      github: "https://github.com/nicholas/portfolio",
      live: "https://nickingargiola.vercel.app",
      verified: true,
      walkthroughUrl: "https://loom.com/share/portfolio-walkthrough",
      verificationDetails: {
        proof: "Repo analyzed",
        commits: 23,
        lastUpdated: "3 days ago"
      }
    },
    {
      title: "Weather Dashboard",
      tech: ["Vue.js", "OpenWeather API", "Chart.js"],
      summary: "Created an interactive weather dashboard with real-time data visualization and forecasts.",
      github: "https://github.com/nicholas/weather-dashboard",
      live: "https://weather.example.com",
      verified: false
    }
  ]
}; 