export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'PitchSpark - Ignite Your Ideas',
      desc: 'PitchSpark is a dynamic platform designed to help entrepreneurs, innovators, and creatives showcase their ideas and projects effectively. The website provides an intuitive interface for creating and sharing compelling pitches, enabling users to present their visions clearly and attractively to potential investors, collaborators, or audiences.',
      subdesc:
        'Built with a modern tech stack, PitchSpark leverages the power of React 19 and Next.js 15 for a responsive and seamless user experience. It is hosted on Vercel for fast, reliable deployment and uses best practices in web development to ensure scalability, performance, and user satisfaction.',
      href: 'https://pitch-spark-tau.vercel.app',
      texture: '/textures/project/pitchspark.mp4',
      logo: '/assets/pitchspark.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Next.js',
          path: '/assets/next-js.png',
        },
        {
          id: 5,
          name: 'Framer Motion',
          path: '/assets/vercelLogo.png',
        },
      ],
    },
    {
      title: 'AnimePeK - Your Anime Discovery Hub',
      desc: 'AnimePeK is a vibrant platform designed for anime enthusiasts to explore, discover, and learn more about their favorite shows. With a clean, user-friendly interface, the website offers a curated experience for browsing anime, viewing details, and staying up-to-date with the latest trends in the anime world.',
      subdesc:
        'The project is built using Next.js 14 with server actions, incorporating Framer Motion for smooth and visually appealing animations and Infinite Scroll for an uninterrupted browsing experience. Hosted on Vercel, AnimePeK combines cutting-edge technologies to deliver performance, reliability, and a seamless user experience.',
      href: 'https://anime-pe-k-next-14-server-actions.vercel.app',
      texture: '/textures/project/anime.mp4',
      logo: '/assets/animeLogo.svg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Next.js',
          path: 'assets/next-js.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/typescript.png',
        },
        {
          id: 4,
          name: 'Framer Motion',
          path: '/assets/framer.png',
        },
      ],
    },
    {
      title: 'BookWorm - Your Online Bookstore',
      desc: 'BookWorm was my first MERN full-stack project. It is a comprehensive online bookstore designed for book lovers to explore, search, create, and edit books.',
      subdesc:
        'The project is developed using a robust MERN (MongoDB, Express.js, React, Node.js) stack to deliver a highly interactive and dynamic user experience. It is hosted on Render for dependable performance.',
      href: 'https://bookstore-website-1-es0v.onrender.com',
      texture: '/textures/project/book.mp4',
      logo: '/assets/bookLogo.png',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Node.js',
          path: 'assets/nodejs.png',
        },
        {
          id: 3,
          name: 'TypeScript',
          path: '/assets/express.png',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: '/assets/mongodb.svg',
        },
        {
          id: 4,
          name: 'Render',
          path: '/assets/render.png',
        },
      ],
    },
    {
      title: 'Baserah - A Smart Stick For The Visually Impaired',
      desc: 'Baserah is a mobile application designed to complement the Baserah Smart Stick, an assistive device aimed at improving navigation and safety for visually impaired individuals. The app provides real-time GPS tracking for caregivers to monitor the user’s movements, Bluetooth connectivity to facilitate communication with the smart stick, and a history log feature to review past alerts and location data.',
      subdesc:
        'The application was developed using Flutter for cross-platform compatibility on both iOS and Android devices, leveraging the Dart programming language. It integrates advanced features like real-time location tracking, seamless Bluetooth connectivity, and intuitive UI/UX design, ensuring accessibility and user-friendliness for all caretakers.',
      href: 'https://www.figma.com/design/2FFafApSXvaBu9DAKr01sr/Baserah-App?node-id=0-1&t=iGGHBvgdJgOJyDqZ-1',
      texture: '/textures/project/baserah.mp4',
      logo: '/assets/baserah.svg',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'Flutter',
          path: '/assets/flutter.svg',
        },
        {
          id: 2,
          name: 'Dart',
          path: 'assets/Dart.png',
        },
      ],
    },
    {
      title: 'Research Paper - High Performance Computing for Image Processing on Medical Field Parallelization Techniques',
      desc: 'This research investigates the use of high-performance computing (HPC) to accelerate medical image processing tasks such as segmentation, registration, and feature extraction. By employing parallelization techniques with multi-core CPUs, GPUs, and distributed computing clusters, it achieves significant improvements in speed and efficiency, enabling real-time analysis and enhancing medical diagnosis and treatment.',
      subdesc: 'This paper was published in the International Journal of Computer Science and Information Security (IJCSIS), Volume 22, No. 3, June 2024.',
      href: 'https://www.academia.edu/121693599/High_Performance_Computing_for_Image_Processing_on_Medical_Field_Parallelization_Techniques',
      texture: '/textures/project/paper.mp4',
      logo: '/assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Word',
          path: '/assets/word.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [8, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [7, 2, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-14, 4, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-12, -8, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Creative Urban Design',
      pos: 'IT Support Specialist',
      duration: 'july 2024 --> Present',
      title: "Currently, I'm an IT Support Specialist responsible for managing and maintaining hardware, software, and network systems to ensure seamless operations. My role includes setting up and troubleshooting PCs, peripherals, and surveillance cameras, managing user accounts and server performance, installing and configuring software, and ensuring reliable network connectivity. ",
      icon: '/assets/bassem.svg',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Baserah Smart Stick (Graduation Project)',
      pos: 'Computer Science Student at IAU',
      duration: 'October 2023 - June 2024',
      title: "Baserah is an innovative project designed to enhance the mobility and safety of visually impaired individuals. The smart stick incorporates advanced technologies, including infrared sensors for obstacle detection, a water sensor for wet surface identification, and a GPS/GSM module for real-time location tracking. These features empower users to navigate safely while providing emergency alert capabilities. Currently, research on Baserah is being published in the MDPI journal, highlighting its scientific and practical value. Complementing the smart stick, a Flutter-based mobile app ensures cross-platform compatibility, offering real-time GPS tracking, monitoring of the stick’s location and condition via Bluetooth, and a history log for alerts and navigation insights.",
      icon: '/assets/baserah.svg',
      animation: 'salute',
    },
    {
      id: 3,
      name: 'Bloom Duck',
      pos: 'Data Analyst (Data Team Lead)',
      duration: 'june 2023 --> November 2023',
      title: "As a Data Team Lead, I demonstrated expertise in web scraping and data extraction using tools like Selenium, BeautifulSoup4, and Google Chrome extensions, successfully extracting and organizing data from demo websites. I utilized advanced data cleaning techniques with regex and Pandas to structure data in Excel adhering to company standards, and created insightful data visualizations using Seaborn and Matplotlib to derive actionable insights. I developed Python automation scripts for AI image generation, ensuring accuracy and automating image uploads to Firebase. Leading a data team, I managed daily operations, assigned tasks aligned with team capabilities, provided constructive feedback, and conducted daily meetings to track progress and address challenges. Additionally, I maintained thorough documentation of work and code, created detailed video tutorials for knowledge transfer, and leveraged version control systems to ensure seamless collaboration and future accessibility.",
      icon: '/assets/bloomDuck.svg',
      animation: 'clapping',
    },
  ];