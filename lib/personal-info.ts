// Central configuration for all personal information
export const personalInfo = {
  // Basic Info
  name: "Max Coursey",
  title: "Data & ML Engineer | Enterprise AI Solutions Architect    ",
  tagline: "Architecting Enterprise-Grade AI & Data Infrastructure for Industrial Systems",

  // Contact & Social
  email: "steikould@gmail.com",
  location: "Atlanta, GA",
  phone: "+1 (404) 308-9289",
  website: "https://steikould.github.io/",

  // Social Links
  social: {
    github: "https://github.com/steikould",
    linkedin: "https://linkedin.com/in/maxcoursey"
  },

  // Bio & About
  shortBio: "Architecting Enterprise-Grade AI & Data Infrastructure for Industrial Systems. Passionate Data Engineer and ML Engineer with 15+ years of experience building scalable data infrastructure and intelligent systems that drive business transformation.",

  longBio: [
      "I architect enterprise-grade AI solutions and data infrastructure that transform industrial operations. With 15+ years of experience, I've built systems processing millions of events daily for critical infrastructure at companies like Colonial Pipeline.",

      "My expertise spans the full stack—from real-time streaming architectures and robust ETL pipelines to production ML models and LLM-powered automation. I specialize in industrial IoT, time-series analytics, and mission-critical systems where reliability and scale are non-negotiable.",

      "I'm passionate about bridging the gap between cutting-edge AI research and practical industrial applications, using cloud-native architectures, MLOps, and modern data platforms to deliver measurable business impact."
  ],

  // Professional Stats
  stats: {
      experience: "15+",
      projects: "50+", // or get specific: "60+"
      dataProcessed: "10M+ events/day", // Add industrial scale metrics
      mlModels: "25+", // More specific than ML hours
      technologies: "50+"
  },

  // Current Status
  availability: {
      status: "Open to senior roles & consulting",
      type: "Full-time / Contract / Consulting",
      remote: true,
      relocate: false, // or "Open to Atlanta metro area" if flexible
      interests: ["Enterprise AI", "MLOps", "Industrial IoT", "Data Architecture"]
  },

  // Resume
  resumeUrl: "/MCourseyResume.pdf", // Put your resume in public folder

  // Company/Freelance Info (if applicable)
  company: {
    name: "Colonial Pipeline",
    role: "AI Solutions Architect, Senior Data Engineer",
    website: "https://colpipe.com"
  },
    expertise: [
      "Enterprise Data Architecture",
      "MLOps & Model Deployment",
      "Industrial IoT & Time-Series Analytics",
      "LLM Integration & Automation",
      "Cloud Infrastructure (AWS/Azure/GCP)",
      "Real-time Data Streaming"
    ],

    industries: [
      "Critical Infrastructure",
      "Energy & Utilities",
      "Industrial Manufacturing",
      "Enterprise Software"
    ],

    // Education
    education: [
      {
        degree: "Master of Science, Computer Science",
        school: "Vanderbilt University",
        location: "Nashville, TN",
        graduationYear: "TBD",
        field: "Computer Science",
        shieldUrl: "https://img.shields.io/badge/Vanderbilt-MS%20Computer%20Science-866D4B?style=for-the-badge&logo=university&logoColor=white"
      },
      {
        degree: "Master of Business Administration",
        school: "Georgia State University",
        location: "Atlanta, GA",
        graduationYear: "2014",
        field: "Business Administration",
        shieldUrl: "https://img.shields.io/badge/Georgia%20State-MBA-004990?style=for-the-badge&logo=university&logoColor=white"
      },
      {
        degree: "Bachelor of Science, Environmental Engineering",
        school: "Georgia Institute of Technology",
        location: "Atlanta, GA",
        graduationYear: "2009",
        field: "Environmental Engineering",
        shieldUrl: "https://img.shields.io/badge/Georgia%20Tech-BS%20Environmental%20Engineering-B3A369?style=for-the-badge&logo=university&logoColor=003057"
      }
    ],

    certifications: [
      {
        name: "AWS Solutions Architect Associate",
        issuer: "Amazon Web Services",
        date: "2019",
        expired: true,
        validYears: "2019-2021",
        shieldUrl: "https://img.shields.io/badge/AWS-Solutions%20Architect-FF9900?style=for-the-badge&logo=amazon-aws&logoColor=white"
      }
    ],
    cta: {
      primary: "View Projects",
      secondary: "Download Resume",
      tertiary: "Schedule Consultation"
    }
}

// Export individual pieces for easy access
export const { name, title, email, social, stats } = personalInfo