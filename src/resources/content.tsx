import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "A Rahul",
  lastName: "",
  name: "A Rahul",
  role: "Graphics Designer",
  avatar: "/images/avatar.jpg",
  email: "loco.affiliate@gmail.com",
  location: "Asia/Kolkata", // MUST be timezone format
  languages: ["English", "Tamil"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Design drops and creative breakdowns.</>,
};

const social: Social = [
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
  description: `Portfolio website showcasing work by ${person.name}`,
  headline: <>Premium visuals. Smooth motion. Dark aesthetics.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">{person.name}</strong>
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
      I’m <Text as="span" size="xl" weight="strong">{person.name}</Text> — a graphics designer
      focused on premium posters, typography, and brand visuals with a dark,
      gradient-rich aesthetic.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role}`,
  tableOfContent: {
    display: false,
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
        Rahul is a Tamil Nadu–based graphics designer crafting premium dark
        aesthetics with clean typography and strong composition.
        <br /><br />
        His work focuses on posters, brand visuals, and social creatives that
        look modern, bold, and expensive.
      </>
    ),
  },

  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Freelance Designer",
        timeframe: "2023 — Present",
        role: "Graphics Designer",
        achievements: [
          <>Designed high-impact posters and typography-driven layouts.</>,
          <>Created cohesive dark-themed visual identities.</>,
          <>Built reusable templates for fast, consistent social content.</>,
        ],
        images: [],
      },
      {
        company: "Creative Collaborations",
        timeframe: "2022 — 2023",
        role: "Visual Designer",
        achievements: [
          <>Worked with creators to upgrade their brand visuals.</>,
          <>Developed premium gradients and cinematic-style compositions.</>,
        ],
        images: [],
      },
    ],
  },

  studies: {
    display: true,
    title: "Learning & Growth",
    institutions: [
      {
        name: "Design Practice",
        description: <>Focused on typography, layout, and color theory.</>,
      },
      {
        name: "Creative Tools",
        description: <>Hands-on learning through real-world design projects.</>,
      },
    ],
  },

  technical: {
    display: true,
    title: "Skills & Tools",
    skills: [
      {
        title: "Poster & Typography",
        description: (
          <>
            Premium poster composition with bold typography and clean
            hierarchy.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Design Tools",
        description: (
          <>
            Experienced with modern design workflows for fast iteration and
            polished output.
          </>
        ),
        tags: [],
        images: [],
      },
      {
        title: "Aesthetic Direction",
        description: (
          <>
            Dark themes, gradients, glow effects, and sharp visual contrast.
          </>
        ),
        tags: [],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "",
  description: "",
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design work by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Creative collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
