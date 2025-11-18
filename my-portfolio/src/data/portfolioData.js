

export const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "certifications", label: "Certifications" },
    { id: "resume", label: "Resume", isResume: true },
];

export const information = {
  name: "Karan Chavan",
  domain: "Full Stack Developer",
  summary: `Full-stack developer skilled in Java, Spring Boot, React, and React Native, building scalable backend systems and mobile apps. Delivered real-world projects including a GenAI-powered health assistant, production-ready app features, and secure REST API solutions.`,
  contact: {
    location: "Pune, India",
    phone: "+91 84850 58284",
    links: [
      { name: "Mail", url: "mailto:chavan.karan1005@gmail.com", icon: "Mail" },
      { name: "Linkedin", url: "https://linkedin.com/in/karan-chavan", icon: "Linkedin" },
      { name: "Github", url: "https://github.com/karan-hub", icon: "Github" },
      { name: "LeetCode", url: "https://leetcode.com/u/karanc4143/", icon: "Code" }
    ]
  },
}

export const about = {
  paragraph: `I’m Karan Chavan, a full-stack and mobile developer with hands-on experience building 4 real-world projects, including a Spring Boot BookMyShow backend clone, an AI-powered HomeDoctor assistant, and 2 deployed e-commerce websites. Through 2 internships, I’ve delivered production-ready features, optimized performance, and built scalable solutions using Java, Spring Boot, React, and React Native. I’ve also earned 8 technical certifications and achieved 3+ hackathon wins, including a district-level 2nd place finish. I focus on writing clean, reliable code and creating products that deliver real impact for real users.`
};

export const skills = {
  languages: [
    "Java",
    "JavaScript",
    "TypeScript",
    "SQL",
    "HTML",
    "CSS"
  ],

  databases: [
    "MySQL",
    "MongoDB"
  ],
  frontend: [
    "React",
    "React Native",
    "Expo",
    "Tailwind CSS",
    "shadcn/ui"
  ],

  backend: [
    "Spring Boot",
    "Spring Security",
    "Spring Data JPA",
    "REST APIs",
    "Multithreading (Java)"
  ],



  tools: [
    "Git",
    "Postman",
    "OAuth 2.0",
    "Razorpay Payment Integration"
  ]
}

export const education = [
  {
    degree: "Bachelor of Computer Engineering",
    institution: "Indira College of Engineering and Management, Pune",
    field: "Computer Engineering",
    year: "2023 – 2026",
    score: "CGPA: 8.67/10",
    skills: [
      "Web Development",
      "Data Structures",
      "Database Management",
      "Java"
    ],
    description:
      "Relevant coursework includes Data Structures and Algorithms, Object Oriented Programming, Web Development, and Database Management Systems."
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Mahavir Education Society, Nashik",
    field: "Computer Engineering",
    year: "2020 – 2023",
    score: "81.40%",
    skills: [
      "Computer Networks",
      "Database Systems",
      "Programming Fundamentals",
      "Software Engineering"
    ],
    description:
      "Coursework covered programming logic, operating systems, database systems, and networking essentials."
  },
  {
    degree: "10th Grade",
    institution: "Ramashej Madhyamic Vidyalay, Nashik ",
    field: "General Education",
    year: "2019 – 2020",
    score: "85.70%",
    skills: ["Mathematics", "Science", "English", "Social Studies"],
    description:
      "Completed secondary education with strong academic performance and foundational concepts."
  }
];

export const experience = [
  {
    role: "React Native Developer Intern",
    company: "MidFinder Healthcare",
    location: "Remote",
    period: "Jan 2025 – Mar 2025",
    skills: [
      "React Native",
      "JavaScript",
      "REST API Integration",
      "Performance Optimization",
      "Debugging",
      "State Management",
      "Mobile UI Development"
    ],
    responsibilities: [
      "Developed mobile app features using React Native",
      "Integrated REST APIs for real-time health data",
      "Improved app performance through debugging and optimization",
      "Collaborated with team to deliver production-ready mobile modules"
    ]
  },

  {
    role: "Frontend Developer Intern",
    company: "NPIT Solutions",
    location: "Nashik, India",
    period: "May 2025 – July 2022",
    skills: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Responsive UI",
      "Component Reusability",
      "Web Performance Optimization"
    ],
    responsibilities: [
      "Built responsive web pages using React.js and Tailwind CSS",
      "Created reusable UI components to improve development speed",
      "Optimized user interface performance and accessibility",
      "Worked closely with backend team for seamless API integration"
    ]
  }
];

export const projects = [
  {
    title: "BookMyShow Backend Clone",
    techStack: ["Spring Boot", "MySQL", "OAuth 2.0", "Spring Security", "JPA"],
    description:
      "Backend system with 15+ REST APIs for movie booking, authentication, seat selection, and role-based access control.",
    features: [
      "User & Admin authentication with OAuth 2.0",
      "Movie, show, and seat management",
      "Optimized database design with 8+ tables",
      "High-performance booking flow"
    ],
    year: "2025",
    github: "https://github.com/karan-hub/Book-my-show-Backend.git"
  },

  {
    title: "HomeDoctor – AI Health Assistant",
    techStack: ["Java", "Spring AI", "GenAI", "REST APIs", "Microservices Architecture"],
    description:
      "An AI-powered health assistant capable of analyzing symptoms, predicting diseases, and generating personalized Ayurvedic remedies.",
    features: [
      "NLP-powered symptom analysis",
      "Multilingual voice input",
      "Microservices Architecture",
      "Daily health tips & emergency support",
      "85% accuracy in disease prediction"
    ],
    year: "2025",
    github: "https://github.com/karan-hub/User-Service-Microservice-.git"
  },

  {
    title: "E-Commerce Website for Clothing Store",
    techStack: ["React", "Tailwind CSS", "REST APIs", "Razorpay"],
    description:
      "A fast, modern e-commerce website deployed for a local clothing shop with real customers.",
    features: [
      "Product listing, cart, and checkout",
      "Razorpay online payment integration",
      "Mobile-responsive UI",
      "Admin panel for inventory management"
    ],
    year: "2025",
    github: "https://fabric-fold-cloth-store-kkf9.vercel.app/"
  },

  {
    title: "React Native Fitness Tracker App",
    techStack: ["React Native", "Expo", "JavaScript", "Firebase"],
    description:
      "A cross-platform fitness tracking app that allows users to monitor workouts, steps, and calorie burn.",
    features: [
      "Real-time activity tracking",
      "User authentication",
      "Cloud data sync with Firebase",
      "Clean & modern mobile UI"
    ],
    year: "2025",
    github: "https://github.com/karan-hub/fitness-tracker"
  },

  {
    title: "Portfolio Website",
    techStack: ["React", "Tailwind CSS", "shadcn/ui"],
    description:
      "A personal portfolio built to showcase skills, experience, and projects with a clean, modern interface.",
    features: [
      "Fully responsive layout",
      "Dynamic data components",
      "Smooth animations & modern UI",
      "SEO-friendly structure"
    ],
    year: "2025",
    github: "https://github.com/karan-hub/portfolio"
  },

  {
    title: "React Native Movie App",
    techStack: ["React Native", "Expo", "TMDB API", "TypeScript"],
    description:
      "A modern movie browsing application with real-time data fetched from the TMDB API, designed for a smooth mobile experience.",
    features: [
      "Movie search & trending movie list",
      "Detailed movie pages with cast & ratings",
      "API-powered dynamic content",
      "Clean UI with fast performance"
    ],
    year: "2025",
    github: "https://github.com/karan-hub/Movie-App-React-Ntive.git"
  }
];


export const achievements = [
  {
    title: "District Level Hackathon – 2nd Place",
    organization: "MSBTE",
    date: "March 2022",
    description:
      "Secured 2nd place among 50+ teams by developing an innovative technical solution under time constraints.",
    tags: ["Hackathon", "Team Leadership", "Problem Solving"]
  },
  {
    title: "2 College-Level Hackathon Winner",
    organization: "GGSP & VIT",
    date: "September 2023",
    description:
      "Won 2 college-level hackathons by building scalable web applications and leading a team of 4 members.",
    tags: ["Hackathon", "Web Development", "Teamwork"]
  },
  {
    title: "React Native Developer Intern",
    organization: "MidFinder Healthcare",
    date: "January 2025 – March 2025",
    description:
      "Built mobile app features using React Native, integrated REST APIs for real-time health data, and improved app performance through debugging and optimized JavaScript code.",
    tags: ["React Native", "REST APIs", "Performance Optimization", "JavaScript"]
  },
  {
    title: "Frontend Developer Intern",
    organization: "NPIT Solutions",
    date: "May 2022 – July 2022",
    description:
      "Developed responsive web pages using React.js and Tailwind CSS, and built reusable UI components that increased development speed by 30%.",
    tags: ["React.js", "Tailwind CSS", "UI Components", "Frontend Development"]
  },
  {
    title: "Deployed E-Commerce Websites",
    organization: "Local Businesses",
    date: "August 2023",
    description:
      "Developed and deployed 2 live e-commerce websites for local clothing stores, improving their online visibility and sales reach.",
    tags: ["React", "Tailwind CSS", "E-Commerce", "Deployment"]
  },
  {
    title: "Production-Level Healthcare App Features",
    organization: "MidFinder Healthcare",
    date: "February 2025",
    description:
      "Delivered scalable, production-ready mobile features for a healthcare app serving over 100+ beta users.",
    tags: ["React Native", "Healthcare Tech", "Mobile Development"]
  },
  {
    title: "160+ LeetCode Problems Solved",
    organization: "LeetCode",
    date: "Ongoing since 2024",
    description:
      "Strengthened problem-solving ability by solving 160+ data structure and algorithm problems on LeetCode.",
    tags: ["DSA", "Algorithms", "Problem Solving"]
  }
];


export const certifications = [
  {
    title: "GFG 160 Days of Problem Solving",
    provider: "GeeksforGeeks",
    date: "January 2025",
    skills: ["DSA", "Problem Solving", "Algorithms"],
    link: "https://media.geeksforgeeks.org/courses/certificates/7a5c0c56564437443a3a29772254a35d.pdf"
  },
  {
    title: "Mobile App Development with React Native",
    provider: "Javascript Mastery",
    date: "March 2024",
    skills: ["React Native", "Expo", "Mobile UI", "API Integration"],
    link: "https://certificates.example.com/react-native-2024"
  },
  {
    title: "Backend Development in Java",
    provider: "Code For Success - SPARK",
    date: "June 2024",
    skills: ["Java", "OOP", "APIs", "Backend Development"],
    link: "https://drive.google.com/file/d/1KY4qj7AvcqeGVR457KxvJBjfTW7cU-gf/view?usp=sharing"
  },
  {
    title: "React Front-End Development",
    provider: "Knowledge Gate",
    date: "August 2023",
    skills: ["React", "JavaScript", "Frontend", "UI Development"],
    link: "https://certificates.example.com/react-frontend-2023"
  },
  {
    title: "Data Structures and Algorithms in Java",
    provider: "Kunal Kushwaha",
    date: "November 2023",
    skills: ["DSA", "Java", "Algorithms"],
    link: "https://certificates.example.com/dsa-java-2023"
  },
  {
    title: "Database Systems (MySQL & MongoDB)",
    provider: "Knowledge Gate",
    date: "July 2023",
    skills: ["MySQL", "MongoDB", "Database Design"],
    link: "https://certificates.example.com/database-systems-2023"
  },
  {
    title: "Generative AI with Google ADK",
    provider: "FreeCodeCamp",
    date: "September 2024",
    skills: ["GenAI", "AI Prompts", "AI Tools", "ML Concepts"],
    link: "https://certificates.example.com/genai-google-2024"
  },
  {
    title: "Android Fundamentals with Capstone Project",
    provider: "Perfect Plan B Elearning",
    date: "October 2022",
    skills: ["Android", "Mobile Development", "Java"],
    link: "https://drive.google.com/file/d/1LYSZS-cdOPSv9f1rNZ0VacvIEZQEa-AO/view?usp=sharing"
  },
  {
    title: "Tailwind CSS: Beginner to Advanced",
    provider: "Let's Upgrade",
    date: "February 2024",
    skills: ["Tailwind CSS", "CSS", "UI Design", "Frontend"],
    link: "https://drive.google.com/file/d/16nTIZ8j7Z75d1YZJQel5H4h4Jh_mt-AI/view?usp=sharing"
  },
  {
    title: "Python: Zero to Hero",
    provider: "Let's Upgrade",
    date: "December 2023",
    skills: ["Python", "Programming", "Scripting"],
    link: "https://drive.google.com/file/d/18uuaEocsVQJ1bu2DskGC1iW_vCrMkqdD/view?usp=sharing"
  },
  {
    title: "Effective Leadership",
    provider: "HP LIFE",
    date: "April 2025",
    skills: ["Leadership", "Communication", "Teamwork"],
    link: "https://drive.google.com/file/d/1qqZMGka9jITdVZtOCuqsjzSkQkrtpdsC/view?usp=sharing"
  },
  {
    title: "Project Management and Agile Tools",
    provider: "Great Learning",
    date: "May 2023",
    skills: ["Agile", "Scrum", "Project Planning"],
    link: "https://certificates.example.com/agile-pm-2023"
  },
  {
    title: "Basics of Data Science",
    provider: "UniAthena / Cambridge International Qualifications",
    date: "October 2024",
    skills: ["Data Science", "Statistics", "Data Analysis"],
    link: "https://drive.google.com/file/d/1PjSiQtESMOMV1WDoFsfq2PGpmOIe6Ox5/view?usp=sharing"
  },
  {
    title: "Software Testing Tutorial",
    provider: "Great Learning",
    date: "September 2022",
    skills: ["Software Testing", "QA", "Testing Fundamentals"],
    link: "https://drive.google.com/file/d/1W7p1Cgkw_U5m_mDUAFPa62oBWrLI39eq/view?usp=sharing"
  },
  {
    title: "Computer Networks Essentials",
    provider: "Great Learning",
    date: "October 2022",
    skills: ["Networking Basics", "OSI Model", "Routing & Switching"],
    link: "https://certificates.example.com/networking-2022"
  }
];


export const socialLinks = [
  { name: "Mail", url: "mailto:chavan.karan1005@gmail.com", icon: "Mail" },
  { name: "Linkedin", url: "https://linkedin.com/in/karan-chavan", icon: "Linkedin" },
  { name: "Github", url: "https://github.com/karan-hub", icon: "Github" },
  { name: "LeetCode", url: "https://leetcode.com/u/karanc4143/", icon: "Code" }
]