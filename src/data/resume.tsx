import { Icons } from "@/components/icons";

export const DATA = {
  name: "Salman",
  initials: "DV",
  url: "https://dillion.io",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Application Developer",
  summary:
    "I'm Mohamad Salman,a software engineer with three years of experience in web and mobile app development.I've worked on many projects that helped me improve my skills. I enjoy creating easy-to-use web interfaces and strong mobile apps.My goal is to build software that provides great value and user experiences",
  avatarUrl: "/myself.jpg",
  contact: {
    email: "mosalman1098@gmail.com",
    tel: "+971 551768953",
    social: {
      GitHub: {
        url: "https://github.com/mosalman97",
        icon: Icons.github,
      },
      LinkedIn: {
        url: "https://www.linkedin.com/in/mosalman97/",
        icon: Icons.linkedin,
      },
      // X: {
      //   url: "",
      //   icon: Icons.github,
      // },
      // Youtube: {
      //   url: "https://youtube.com/c/dillionverma",
      //   icon: Icons.youtube,
      // },
    },
  },

  work: [
    {
      company: "Louna Art and Virtual Reality Development LLC",
      href: "https://www.louna.tv",
      badges: [],
      location: "Full Time",
      title: "Application Developer",
      logoUrl: "/lounastudio.jpeg",
      start: "Sep 2023",
      end: "Present",
      description: ["📱 At Louna Art and Virtual Reality Development LLC, I spearhead the development of innovative mobile and web applications. My key projects include the Tanara App, Tellygo App, Guessthesix App, TGRadio, TGEngage, Omra Live Quiz App, and TG-IPTV.", <br></br>,
        "🎨 In my role, I excel in transforming Figma designs into fully functional apps, managing their deployment across iOS and Android platforms, and leveraging technologies such as React Native, React.js, Node.js, and various cloud services for live streaming. I also handle live streaming operations using Huawei Cloud and OBS", <br></br>,
        "🤝 Collaboration is crucial in my position, as I work closely with a web admin developer to ensure seamless integration and project success. My experience has enriched my skills in backend development, live streaming, cloud services, and effective time management, allowing me to adeptly juggle multiple projects simultaneously."]
    },
    {
      company: "Edrona Learning",
      badges: [],
      href: "https://edronalearning.com/",
      location: "Remote",
      title: "React Native Developer",
      logoUrl: "/edrona.jpg",
      start: "June 2023",
      end: "September 2023",
      description:
        ["Rebuilt a React Native app for a learning platform to improve its functionality and user experience. The project involved updating the app’s design, enhancing features, and optimizing performance."],
    },
    {
      company: "Steyp",
      href: "https://steyp.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Software Engineer",
      logoUrl: "/steyp.png",
      start: "September 2021",
      end: "June 2023",
      description: [
        "💻 As a Mobile and Web Application Developer, I built and maintained cross-platform apps using React Native for iOS and Android, and enhanced web apps with React.js, working closely with designers and product managers.", <br></br>,
        "🔧 I established coding standards, used Git for version control, and optimized performance with Redux and Context API.", <br></br>,
        "🛠️ I identified and fixed front-end issues, developed full-stack web applications with React, and created dynamic web pages using JavaScript.", <br></br>,
        "🌐 I ensured applications were responsive across different devices and screen sizes and contributed to front-end framework improvements.", <br></br>,
      ],
    },
  ],
  skills: [
    "React.js",
    "Next.js",
    "Typescript",
    "Node.js",
    "React Native Cli",
    "Express.js",
    "Redux",
    "Git",
    "Tailwind Css",
    "Cross Platform development",
    "Xcode",
    "Android Studio",
    "Cloud Services",
    "Live Video Streaming",
    "Firebase",
    "React Native Expo",
    "Context API",
    "Redux",
    "Zustand",
    "CI/CD",
    "Figma",
    "Jira",
  ],
  education: [
    {
      school: "Koshys Institute of Management Studies",
      href: "https://www.kgi.edu.in/",
      degree: "Bachelor of Computer Application",
      logoUrl: "/kgi.jpeg",
      start: "2016",
      end: "2019",
    },
  ],
  projects: [
    {
      title: "Tanara App",
      href: "",
      dates: "",
      active: true,
      description:
        "Discover Tanara, Algeria’s ultimate interactive media platform. Experience the best of television and streaming with unique features",
      technologies: [
        "React Native",
        "Typescript",
        "Firebase",
        "Zustand",
        "HuaweiCloud",
        "Core UI",
        "CloudFlare",
        "Firebase Auth"
      ],
      links: [
        {
          type: "IOS",
          href: "https://apps.apple.com/ae/app/tanara/id6504285576",
          icon: <Icons.ios className="size-1" />,
        },{
          type: "Android",
          href: "https://play.google.com/store/apps/details?id=com.tanara&pcampaignid=web_share",
          icon: <Icons.android className="size-1" />,
        },{
          type: "Website",
          href: "https://tanara-qai-web.firebaseapp.com/#/",
          icon: <Icons.globe className="size-6" />,
        }
      ],
      image: "https://lh3.googleusercontent.com/ikirLBPquZc54lBD_Oz12yN14VlVS09LBoGvO_ZJ7RQv0ksn2ZtIUEwefVwvRvQ4Xw0",
      video:
        "",
    },
    {
      title: "Tellygo",
      href: "",
      dates: "",
      active: true,
      description:
        "TellyGo is interactive OTT Platform haveing Live channels and VOD",
      technologies: [
        "React Native",
        "Typescript",
        "Firebase",
        "Zustand",
        "HuaweiCloud",
        "Core UI",
        "CloudFlare",
        "Firebase Auth"
      ],
      links: [
        {
          type: "IOS",
          href: "https://apps.apple.com/ae/app/tellygo/id6469494396",
          icon: <Icons.ios className="size-1" />,
        },{
          type: "Android",
          href: "https://play.google.com/store/apps/details?id=com.tellygo&pcampaignid=web_share",
          icon: <Icons.android className="size-1" />,
        },{
          type: "Website",
          href: "https://tanara-qai-web.firebaseapp.com/#/",
          icon: <Icons.globe className="size-6" />,
        }
      ],
      image: "https://lh3.googleusercontent.com/Oiz0jDTzkeGm_-9V5Z74dZP_pvWEFYU3k2Y0vY2JZ5gzDSrGU2bgazBzJ64g2-3BNA",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "/steyp.png",
      mlh: "/steyp.png",
      links: [],
    },
  ],
} as const;
