export const DATA = {
    name: "Mahir Jambhule",
    role: "DSA | MERN | Full-Stack Developer ",
    tagline: "I build fast, scalable, and AI-powered web apps.",
    location: "Chandrapur, India",
    about: "Hi, I'm Mahir Jambhule, a final-year Computer Engineering student and a full-stack developer who genuinely loves building things for the web. I mostly spend my time working with the MERN stack, focusing on building clean, practical applications that just work smoothly. For me, tech is all about curiosity—I absolutely love learning new tools, tackling fresh challenges, and finding ways to keep growing as a developer every single day. I'm always excited to push my boundaries, learn from others, and collaborate on cool projects!",
    socials: {
        email: "mailto:mahirjambhule92@gmail.com",
        github: "https://github.com/Mahirjambhule",
        linkedin: "https://www.linkedin.com/in/mahir-jambhule-9b2887258/",
        resume: "https://drive.google.com/file/d/1UBTxXU9mEBHrtp8s8yYnNC8wnjj87VS-/view?usp=sharing",
        twitter: "https://x.com/mahir_j03",
        instagram: "https://www.instagram.com/mahir_jambhule?igsh=Nmx2d3FrNnNwZjF1"
    },
    skills: {
        languages: ["C++", "C", "Python", "JavaScript"],
        web: ["React.js", "Node.js", "Express.js", "HTML", "CSS", "Tailwind CSS"],
        tools: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"],
        core: ["DSA", "OOPs", "OS", "DBMS", "CN"],
        databases: ["MongoDB", "Mongoose", "MongoDB Atlas", "SQL"]
    },
    projects: [
        {
            title: "Distributed Task Scheduler — Fault-Tolerant Queue Infrastructure",
            desc: "Architected a highly scalable, distributed backend task queue using a decoupled Producer-Consumer model. Implemented reliable messaging primitives via Redis BLMOVE and an autonomous self-healing watchdog service using transactional multi-command pipelines to recover stale/crashed tasks without data loss. Containerized across an isolated virtual network via Docker Compose with a PostgreSQL persistent logging layer.",
            stack: ["Node.js", "Redis", "PostgreSQL", "Docker"],
            github: "https://github.com/Mahirjambhule/task-scheduler",
            live: ""
        },
        {
            title: "SecureVault — Zero-Knowledge Cloud Storage",
            desc: "Architected a high-security storage platform featuring client-side AES-256-GCM encryption. Implemented PBKDF2 key derivation and a Brevo-powered SMTP-MFA relay to ensure total data sovereignty. Developed with a MERN-Flask hybrid stack, decoupling encrypted BLOBs in Cloudinary from metadata pointers in MongoDB Atlas.",
            stack: ["React", "Flask", "AES-256", "MongoDB", "Cloudinary"],
            github: "https://github.com/Mahirjambhule/secure-vault",
            live: "https://secure-vault-psi-eight.vercel.app/"
        },
        {
            title: "InnerLift AI — Gamified Execution & Mindset Ecosystem",
            desc: "Engineered a high-performance productivity system featuring an interactive voice mentor stabilized via a mutex-locked Web Speech API engine. Integrated Google Gemini 2.5 Flash for processing natural language journals, generating real-time psychological reflections, and calculating deterministic daily routine architectures. Architected an uncompromised accountability loop ('Codex Disciplina') driven by a strict 48-hour streak decay state machine to enforce user consistency.",
            stack: ["MERN Stack", "Gemini 2.5 Flash", "Web Speech API", "JWT"],
            github: "https://github.com/Mahirjambhule/innerlift-productivity-app",
            live: "https://innerlift-productivity-app.vercel.app/"
        },
        {
            title: "ShopVerse — Full Stack E-Commerce Platform",
            desc: "Built a production-ready e-commerce platform with secure JWT auth, Stripe payments, and global state management via Redux Toolkit. Developed an admin CMS, integrated Multer + Cloudinary for media, and deployed a responsive Tailwind UI using Vercel + Render.",
            stack: ["MERN", "Redux Toolkit", "Stripe", "Cloudinary"],
            github: "https://github.com/Mahirjambhule/shopverse",
            live: "https://shopverse-blush.vercel.app"
        },
        {
            title: "Orbit AI — Full Stack AI SaaS Platform",
            desc: "Developed a production-ready AI chat application powered by Google Gemini 2.0 Flash. Features secure JWT auth, persistent MongoDB storage for chat history, and Cloudinary integration for custom wallpapers. Built with a responsive React/Tailwind UI and deployed on Vercel & Render.",
            stack: ["MERN", "Gemini AI", "Tailwind CSS", "Cloudinary"],
            github: "https://github.com/Mahirjambhule/orbit-ai",
            live: "https://orbit-ai-woad.vercel.app"
        },
        {
            title: "TaskMind AI — AI Productivity Platform",
            desc: "Built an intelligent productivity app that converts scattered tasks into structured daily plans. Implemented fast AI planning using Groq Llama-3, note summarization using BART, JWT authentication, and deployed via Vercel + Render.",
            stack: ["MERN Stack", "Groq (Llama-3)", "HuggingFace"],
            github: "https://github.com/Mahirjambhule/taskmind-ai",
            live: "https://taskmind-ai-app.vercel.app/login"
        },
        {
            title: "Snappy — Real-Time Messaging Platform",
            desc: "Built a real-time chat app supporting individual and group messaging using Socket.io. Secured APIs with JWT authentication and hashed passwords. Designed clean Mongoose models for users, messages, and groups, and added auto-generated avatars with real-time message deletion sync.",
            stack: ["MERN", "Socket.io", "Cloudinary"],
            github: "https://github.com/Mahirjambhule/snappy",
            live: "https://snappy-woad.vercel.app"
        },

    ],
    certifications: [
        {
            title: "Walmart Advanced Software Engineering Virtual Experience – Forage",
            date: "May 2025",
            desc: "Built and optimized a custom heap data structure in Java for memory-efficient task scheduling.",
            link: "https://drive.google.com/file/d/1Hm7GhY9sr-F_jsQYy999UbrsX0_xgFWT/view?usp=sharing"
        },
        {
            title: "Accenture Nordics Software Engineering Virtual Experience – Forage",
            date: "May 2025",
            desc: "Completed modules on Agile, Waterfall, SSDLC, and code debugging.",
            link: "https://drive.google.com/file/d/1FaR0N9K1Lr3kp3y1S9y0uxokvgmyssJf/view?usp=sharing"
        }
    ],
    achievements: [
        "Solved over 300 coding problems across multiple platforms including LeetCode, GeeksforGeeks, and Coding Ninjas, strengthening algorithmic thinking and problem-solving skills.",
        "Successfully completed an advanced Certification Course in Data Structures and Algorithms, enhancing programming expertise."
    ],
    blogs: [
        {
            title: "Building InnerLift AI — A Productivity App",
            date: "June 1, 2026",
            content: "InnerLift AI is a gamified productivity ecosystem built to keep you focused and disciplined through an interactive AI voice mentor. Powered by Google Gemini 2.5 Flash, the app provides direct, actionable coaching in 3 to 6 sentences max, completely free of conversational fluff, markdown, or emojis. To handle real-time speech recognition smoothly, I implemented a custom mutex-locking mechanism using React refs that blocks duplicate API requests and prevents 429 rate-limit errors. Backed by a 48-hour database streak decay system to gamify consistency, it provides a clean, ultra-responsive execution loop.",
            image: "/blog-image-2.jpg"
        },
        {
            title: "Architecting a Fault-Tolerant Distributed Task Scheduler",
            date: "May 16, 2026",
            content: "The Distributed Task Scheduler is a production-grade, fault-tolerant infrastructure component built to asynchronously process heavy background workloads with a strict zero data loss guarantee. Instead of forcing a web server to handle demanding tasks synchronously—which slows down the application and risks timeout errors—this system decouples the request from the execution using a highly scalable Producer-Consumer architecture.",
            image: "/blog-image-1.jpg"
        },

    ],
    emailText: "mahirjambhule92@gmail.com"
};