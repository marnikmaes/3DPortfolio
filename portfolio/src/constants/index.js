import { meta, shopify, starbucks, tesla, kogeka, jozef, college, di,} from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    git,
    github,
    html,
    javascript,
    linkedin,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
];

export const experiences = [
    {
        title: "Industrial Science STEM",
        company_name: "'t Peperstraatje High School",
        icon: kogeka,
        iconBg: "#A8CBFF",
        date: "September 2015 - June 2017",
        points: [
            "Studied IW STEM (Science, Technology, Engineering, Mathematics) in my first two years of high school",
            "Worked with small electronics such as Arduino, Lego Mindstorm, etc.",
            "Gained basic knowledge in engineering fundamentals using programs like Inventor for 3D modeling",
            "Developed technological skills through hands-on projects involving milling machines, laser cutters, etc."

        ],
    },
    {
        title: "Mechatronics Sciences",
        company_name: "Sint Jozef Geel High School",
        icon: kogeka,
        iconBg: "#A8CBFF",
        date: "September 2017 - June 2019",
        points: [
            "Studied Mechatronics Sciences in my third and fourth year of high school",
            "Mechatronics curriculum balanced mechanics and electronics components",
            "At the end of these two years, I had to choose between a more mechanics-oriented curriculum or a more IT/ICT-oriented one."
        ],
    },
    {
        title: "Electronics ICT",
        company_name: "Sint Jozef Geel High School",
        icon: kogeka,
        iconBg: "#A8CBFF",
        date: "September 2019 - June 2021",
        points: [
            "Studied Electronics ICT in my final two years of high school",
            "Learned the basics of many programming languages: C++, Arduino IDE, LabVIEW, Codesys, etc., but with a deeper understanding of Python.",
            "Created numerous projects utilizing various microcontrollers and microcomputers such as Raspberry Pi, Arduino, ESP32, etc.",
            "Learned basic web development using HTML, CSS, Flask, and PHP."
        ],
    },
    {
        title: "Applied Computer Science",
        company_name: "Thomas More Geel College",
        icon: college,
        iconBg: "#A8CBFF",
        date: "September 2021 - June 2022",
        points: [
            "Studied Applied Computer Science in my first year of college",
            "Base year for all sectors of the IT factory at Thomas More Geel: Application Development, Artificial Intelligence, Cloud, and Cyber Security, Internet of Things and Digital Innovation",
            "This year is used to teach us the basics of many of these sectors, some important things include programming knowledge using Python and Java, web development, network infrastructure, etc."
        ],
    },
    {
        title: "Digital Innovation",
        company_name: "Thomas More Geel College",
        icon: college,
        iconBg: "#A8CBFF",
        date: "September 2022 - present day",
        points: [
            "Studied Digital Innovation as specialization in my final two years of college",
            "Not the usual methods of education. Instead, DI focuses on projects both internally and externally. The best way I can describe DI is as being a student-consultant.",
            "My DI track has been focused on Application and video game development",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Digital Innovation Website',
        tag: 'Web development',
        description: "This project marks our class's first foray into Digital Innovation, created during our course's kickoff hackathon. Using Next.js and Tailwind CSS, we crafted this website as our inaugural endeavor.",
        link: 'https://digitalinnovation.be/',
        githubRepo: 'https://github.com/Thomas-More-Digital-Innovation/2223-Startproject-DinoWebsite',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Sense to eXion',
        tag: 'Web development',
        description: "MobiLab's site features an Exoskeleton filter system, run by a Flask server and Python. Basic HTML and Tailwind were used for the frontend.",
        link: 'https://sense-to-exion.azurewebsites.net/',
        githubRepo: 'https://github.com/Thomas-More-Digital-Innovation/2324-MOBI-001-exoskeleton-tool',
    },
];