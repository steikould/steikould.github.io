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
  shortBio:     "Architecting Enterprise-Grade AI & Data Infrastructure for Industrial Systems"Passionate Data Engineer and ML Engineer with 15+ years of experience building scalable data infrastructure and intelligent systems that drive business transformation.",

  longBio: [
      "I architect enterprise-grade AI solutions and data infrastructure that transform industrial operations. With 15+ years of experience, I've built systems processing millions of events daily for critical infrastructure at companies like Colonial Pipeline.",
  
      "My expertise spans the full stack—from real-time streaming architectures and robust ETL pipelines to production ML models and LLM-powered automation. I specialize in industrial IoT, time-series analytics, and mission-critical systems where reliability and scale are non-negotiable.",
  
      "I'm passionate about bridging the gap between cutting-edge AI research and practical industrial applications, using cloud-native architectures, MLOps, and modern data platforms to deliver measurable business impact."
  ]
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
  resumeUrl: "/MCoursyResume.pdf", // Put your resume in public folder

  // Company/Freelance Info (if applicable)
  company: {
    name: "Colonial Pipeline",
    role: "AI/ML Portfolio Archictect, Senior Data Engineer",
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

    certifications: [
      // Add any relevant certs you have:
      // "AWS Solutions Architect",
      // "Azure Data Engineer",
      // etc.
    ],  
    cta: {
      primary: "View Projects",
      secondary: "Download Resume",
      tertiary: "Schedule Consultation"
    }
}s

// Export individual pieces for easy access
export const { name, title, email, social, stats } = personalInfo