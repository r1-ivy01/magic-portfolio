import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "A Rahul",
  lastName: "",
  name: "A Rahul",
  role: "Graphics Designer",
  avatar: "/images/avatar.jpg",
  email: "loco.affiliate@gmail.com",
  location: "Tamil Nadu, India",
  languages: ["English", "Tamil"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Design drops, breakdowns, and creative notes.</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/r1-ivy01",
    essential: false,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/amudala-rahul-kumar-841796381",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/loco.pd/",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@loco.pd",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Premium visuals. Smooth motion. Dark aesthetic.</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">{person.name}</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work",
  },
  subline: (
    <>
      I’m <Text as="span" size="xl" weight="strong">{person.name}</Text> — a graphics designer focused
      on premium posters, typography, and brand visuals with a dark, gradient-rich style.
      <br /> I design to make things look expensive, clean, and scroll-stopping.
    </>
  ),
};

const about: About = {
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
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Rahul — a Tamil Nadu–based graphics designer. My style is clean but bold: dark themes,
        premium gradients, sharp type, and smooth composition. I mostly create posters, social
        creatives, and brand visuals that feel cinematic and high-end.
        <br /><br />
        If you want design that instantly looks “premium”, I’m the guy.
      </>
    ),
  },

  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Freelance / Personal Brand",
        timeframe: "2023 — Present",
        role: "Graphics Designer",
        achievements: [
          <>Designed premium posters, social creatives, and typography-heavy layouts for multiple niches.</>,
          <>Built consistent dark-theme visual identities with gradients, textures, and clean hierarchy.</>,
          <>Improved content quality by creating reusable templates for faster, consistent posting.</>,
        ],
        images: [],
      },
      {
        company: "Creative Collaborations",
        timeframe: "2022 — 2023",
        role: "Visual Designer",
        achievements: [
          <>Worked with creators/pages to upgrade their visuals into a more cinematic, professional look.</>,
          <>Created poster concepts and brand-style frames for reels, story posts, and campaign creatives.</>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Self-Taught Design Practice",
        description: <>Typography, composition, color theory, and modern poster aesthetics.</>,
      },
      {
        name: "Creative Tools & Workflow",
        description: <>Learning through real projects: iteration, feedback, and visual consistency.</>,
      },
    ],
  },

  technical: {
    display: true,
    title: "Tools & Skills",
    skills: [
      {
        title: "Design & Poster Workflow",
        description: (
          <>
            Premium poster composition, cinematic lighting feel, texture layering, and clean layout hierarchy.
          </>
        ),
        tags: [
          { name: "Posters", icon: "sparkles" as any },
          { name: "Typography", icon: "type" as any },
          { name: "Brand Visuals", icon: "palette" as any },
        ],
        images: [],
      },
      {
        title: "Tools I Use",
        description: (
          <>
            Fast iterations with modern design tools. Clean exports for Instagram-ready posts and reels.
          </>
        ),
        tags: [
          { name: "Figma", icon: "figma" },
          { name: "Photoshop", icon: "image" as any },
          { name: "Illustrator", icon: "pen-tool" as any },
        ],
        images: [],
      },
      {
        title: "Style Strength",
        description: (
          <>
            Dark premium aesthetics: gradients, glow, subtle grain, strong contrast, and sharp type.
          </>
        ),
        tags: [
          { name: "Dark Aesthetic", icon: "moon" as any },
          { name: "Gradients", icon: "droplet" as any },
          { name: "Clean Layout", icon: "layout" as any },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Notes on design, posters & process",
  description: `Short updates and breakdowns by ${person.name}`,
  // If you don’t want blog posts now, keep the page but don’t add posts.
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Selected work and case studies by ${person.name}`,
  // You can later add actual project pages (.mdx) when ready.
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `A visual collection by ${person.name}`,
  // No placeholder image links. Add your images later.
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
