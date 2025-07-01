import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Haris",
  lastName: "Ejaz",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Senior Frontend Developer",
  avatar: "/images/kevin1234.png",
  email: "harisbinejaz75@gmail.com",
  location: "Lahore, Pakistan", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Urdu"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Interested in working with me? Let's talk.</>,
  description: (
    <>
      Feel free to reach out for business inquiries—I’ll get back to you within
      a day or two.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.
  {
    name: "Upwork",
    icon: "upwork",
    link: "https://www.upwork.com/freelancers/~012b9ca54fb09523c7?mp_source=share",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/haris-75/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/haris-ejaz-2a75b9181/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting interfaces that drive real business impact</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">NYT Explorer</strong>
      </>
    ),
    href: "/work/nyt-explorer",
  },
  subline: (
    <>
      {/* I'm Selene, a design engineer at <Logo icon={false} style={{ display: "inline-flex", top: "0.25em", marginLeft: "-0.25em" }}/>, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects. */}
      I'm a Senior Frontend Developer at{" "}
      <strong style={{ color: "#fff" }}>Dubai Municipality</strong> ,
      <br /> with over 5 years of experience in React and Next.js, specializing
      in building intuitive applications, writing clean code, and enabling teams
      to deliver efficiently with seamless user experiences.
    </>
  ),
};

const meetingBookingLink =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1kuimULw7FtiA0Qzd4_IPKTQCBcy-Ad6NbSjh9eFOL3oR5mY2SCkYpxYBdiTUhibB5HqFCwG9A";

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: meetingBookingLink,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Haris is a Lahore-based frontend engineer driven by a passion for
        crafting intuitive, accessible, and scalable user interfaces. With a
        focus on React, React Native, Next.js, and TypeScript, his work bridges
        performance, polish, and the art of thoughtful interaction across web
        and mobile platforms.
      </>
    ),
  },
  // work: {
  //   display: true, // set to false to hide this section
  //   title: "Work Experience",
  //   experiences: [
  //     {
  //       company: "FLY",
  //       timeframe: "2022 - Present",
  //       role: "Senior Design Engineer",
  //       achievements: [
  //         <>
  //           Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
  //           engagement and 30% faster load times.
  //         </>,
  //         <>
  //           Spearheaded the integration of AI tools into design workflows, enabling designers to
  //           iterate 50% faster.
  //         </>,
  //       ],
  //       images: [
  //         // optional: leave the array empty if you don't want to display images
  //         {
  //           src: "/images/projects/project-01/cover-01.jpg",
  //           alt: "Once UI Project",
  //           width: 16,
  //           height: 9,
  //         },
  //       ],
  //     },
  //     {
  //       company: "Creativ3",
  //       timeframe: "2018 - 2022",
  //       role: "Lead Designer",
  //       achievements: [
  //         <>
  //           Developed a design system that unified the brand across multiple platforms, improving
  //           design consistency by 40%.
  //         </>,
  //         <>
  //           Led a cross-functional team to launch a new product line, contributing to a 15% increase
  //           in overall company revenue.
  //         </>,
  //       ],
  //       images: [],
  //     },
  //   ],
  // },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Dubai Municipality",
        timeframe: "May 2025 - Present",
        role: "Senior Frontend Developer — Full-time (Remote)",
        achievements: [
          <>
            Contributing as a senior developer to a large-scale government
            portal using React and Next.js, with a focus on performance,
            accessibility, and scalability.
          </>,
          <>
            Collaborated with UI/UX teams to implement pixel-perfect interfaces,
            improving user satisfaction scores across platforms by 30%.
          </>,
          <>
            Integrated GIS and other data-rich APIs to enhance digital services
            for public access and internal dashboards, boosting functionality
            and usability.
          </>,
        ],
        images: [],
      },
      {
        company: "Cogent Labs",
        timeframe: "Sep 2023 - May 2025",
        role: "Software Engineer — Full-time",
        achievements: [
          <>
            Led a cross-functional team in building a flagship mobile app,
            increasing market penetration by 30% within the first quarter
            post-launch.
          </>,
          <>
            Managed the full development cycle for 3 key projects, improving
            efficiency by 25% through modern architecture and coding practices.
          </>,
          <>
            Enhanced team performance by mentoring 8 junior developers and
            fostering Agile best practices, reducing delivery time by 20%.
          </>,
          <>
            Integrated complex third-party APIs, boosting mobile app performance
            by 35% and contributing to a 40% surge in user satisfaction.
          </>,
        ],
        images: [],
      },
      {
        company: "Datum Brain",
        timeframe: "Oct 2020 - Sep 2023",
        role: "Software Engineer — Full-time",
        achievements: [
          <>
            Developed and deployed a custom ERP system that cut HR and Finance
            overhead by 45% and improved data accuracy by 30%.
          </>,
          <>
            Championed code quality through regular pull request reviews,
            reducing bugs by 15% and improving maintainability.
          </>,
          <>
            Strengthened client relationships via bi-weekly check-ins, resulting
            in a 23% improvement in client retention and satisfaction.
          </>,
          <>
            Led knowledge-sharing and mentorship initiatives, boosting team
            technical capabilities and project delivery efficiency by over 20%.
          </>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Faculty of Information & Technology, University of the Punjab",
        description: <>Studied Bachelor's of Science in Computer Science.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",

    skills: [
      {
        title: "React",
        image: {
          src: "/images/skills/react.svg",
          alt: "React image",
          width: 6,
          height: 5.5,
        },
      },
      {
        title: "Next.js",
        image: {
          src: "/images/skills/nextjs.svg",
          alt: "Nextjs image",
          width: 5,
          height: 5,
        },
      },
      {
        title: "Tailwind CSS",
        image: {
          src: "/images/skills/tailwindcss.png",
          alt: "Tailwind CSS image",
          width: 5,
          height: 5,
        },
      },
      {
        title: "TypeScript",
        image: {
          src: "/images/skills/ts.png",
          alt: "TypeScript image",
          width: 5,
          height: 5,
        },
      },
      {
        title: "JavaScript",
        image: {
          src: "/images/skills/js.png",
          alt: "JavaScript image",
          width: 5,
          height: 5,
        },
      },
      {
        title: "Redux",
        image: {
          src: "/images/skills/redux.svg",
          alt: "Redux image",
          width: 6,
          height: 5.75,
        },
      },
      {
        title: "Vite",
        image: {
          src: "/images/skills/vite.png",
          alt: "Vite image",
          width: 5,
          height: 5,
        },
      },
      {
        title: "Tanstack Query",
        image: {
          src: "/images/skills/tanstack.png",
          alt: "Tanstack image",
          width: 5,
          height: 5,
        },
      },
      {
        title: "SCSS",
        image: {
          src: "/images/skills/scss.png",
          alt: "SCSS image",
          width: 7.1,
          height: 5.4,
        },
      },
      {
        title: "shadcn/ui",
        image: {
          src: "/images/skills/shadcn.png",
          alt: "shadcn UI image",
          width: 5,
          height: 5,
        },
      },
      {
        title: "Node.js",
        image: {
          src: "/images/skills/nodejs.png",
          alt: "Node.js image",
          width: 8,
          height: 5,
        },
      },
      {
        title: "Python",
        image: {
          src: "/images/skills/python.png",
          alt: "Python image",
          width: 5,
          height: 6,
        },
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
