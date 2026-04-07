import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Yashika Panda",
  initials: "YP",
  url: "https://bashful-access-071294.framer.app/",
  location: "Berhampur - 760002, Odisha",
  locationLink: "https://www.google.com/maps/place/Berhampur",
  description:
    "Passionate computer science engineering student with a strong foundation in programming, machine learning, and full-stack development.",
  summary:
    "A student with a strong foundation in programming, machine learning, and full-stack development. Experienced in building AI-driven solutions, data analysis systems, and real-time web applications using Python and modern frameworks. Actively participated in hackathons and technical events, demonstrating innovation and teamwork. With a keen interest in applying AI to solve real-world problems.",
  avatarUrl: "",
  skills: [
    { name: "C Programming", icon: null },
    { name: "Java", icon: Java },
    { name: "Python", icon: Python },
    { name: "HTML", icon: null },
    { name: "DSA", icon: null },
    { name: "Machine Learning", icon: null },
    { name: "Google Colab", icon: null },
    { name: "Jupyter Notebook", icon: null },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "Yashikapanda2005@gmail.com",
    tel: "+919827449447",
    social: {
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yashika-panda-419864379",
        icon: Icons.linkedin,
        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/_yashika_panda_?igsh=MXVyZGk1cWFoejVvbg==",
        icon: Icons.instagram,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/yashikapanda",
        icon: Icons.github,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:Yashikapanda2005@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Computer Vision and Machine Learning",
      href: "",
      badges: ["Internship"],
      location: "NIST University",
      title: "Intern",
      logoUrl: "",
      start: "",
      end: "",
      description:
        "Developed a finger recognition model to classify hand gestures from hand images. Gained hands-on experience in CVML techniques.",
    },
    {
      company: "Advanced programming in competitive coding",
      href: "",
      badges: ["Internship"],
      location: "NIST University",
      title: "Trainee",
      logoUrl: "",
      start: "",
      end: "",
      description:
        "Practiced advanced programming concepts through regular problem-solving. Improved logical thinking and coding efficiency by solving algorithmic problems.",
    },
  ],
  education: [
    {
      school: "NIST University, Berhampur",
      href: "#",
      degree: "B.Tech in Computer Science and Engineering (CGPA: 7)",
      logoUrl: "",
      start: "2023",
      end: "2027",
    },
    {
      school: "Khalikhote Higher Secondary School, Berhampur",
      href: "#",
      degree: "Intermediate (Percentage: 65%)",
      logoUrl: "",
      start: "",
      end: "2023",
    },
    {
      school: "St. Xavier's High School",
      href: "#",
      degree: "Class X (Percentage: 82%)",
      logoUrl: "",
      start: "",
      end: "2021",
    },
  ],
  projects: [
    {
      title: "AquaSentinel - The 360° Mining Accountability Engine",
      href: "#",
      dates: "",
      active: true,
      description:
        "Built a satellite-based environmental monitoring platform using NDVI & NDWI to detect mining-related vegetation loss and water depletion, with correlation-based anomaly detection. Developed a full-stack solution (FastAPI + React.js) to deliver real-time dashboards and automated, legal-ready audit reports in <60 seconds, reducing audit costs by ~99%.",
      technologies: [
        "Python",
        "React.js",
        "FastAPI",
        "Satellite Imaging"
      ],
      links: [],
      image: "",
      video: "",
    },
    {
      title: "AI Chatbot for Student Attendance Details",
      href: "#",
      dates: "",
      active: true,
      description:
        "Developed a Student Attendance System using Gradio with chatbot-based queries and role-based login (student/admin) for secure data access. Implemented attendance analytics using Pandas and Matplotlib to compute percentages, track attendance, and generate visual insights.",
      technologies: [
        "Python",
        "Gradio",
        "Pandas",
        "Matplotlib"
      ],
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "UNESCO Youth Hackathon 2025",
      dates: "2025",
      location: "Virtual",
      description:
        "Finalist. Designed a solution to counter misinformation using MIL concepts.",
      image: "",
      links: [],
    },
    {
      title: "6 hour solve for India hackjam",
      dates: "",
      location: "Anil Neerukonda Institute of Technology and Science",
      description: "Participated and solved challenges.",
      image: "",
      links: [],
    },
    {
      title: "Techspire1.0- Inter college Hackathon",
      dates: "",
      location: "Nalanda Institute of Technology",
      description: "Inter-college hackathon participation.",
      image: "",
      links: [],
    }
  ],
} as const;
