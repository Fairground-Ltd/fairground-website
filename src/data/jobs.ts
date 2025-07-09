export interface Job {
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  essentialSkills?: string[];
  desirableSkills?: string[];
  applicationRequirements?: string[];
  aboutUs?: string;
  roleOverview?: string;
  keyResponsibilities?: string[];
  whyJoinUs?: string[];
  url?: string;
}

export const jobs: Job[] = [
  {
    title: "Senior Front-End Developer (React Native)",
    department: "Engineering",
    location: "Remote/Hybrid (Flexible)",
    type: "Full-Time (Contract options considered)",
    description: "Join our team to build the next generation of music discovery and artist engagement platform using React Native.",
    essentialSkills: [
      "5+ years of professional experience in mobile development, including 3+ years building production-grade apps with React Native and TypeScript.",
      "2+ years of experience writing and maintaining unit and integration tests using tools such as Jest and React Native Testing Library.",
      "Experience working with Next.js and Monorepos",
      "Proven ability to implement complex UI/UX designs, including responsive layouts, animations, and accessibility best practices.",
      "Strong experience integrating and managing REST and/or GraphQL APIs, with a solid understanding of performance and caching considerations.",
      "Familiarity with CI/CD pipelines and Git-based workflows (e.g., GitHub Actions), including code review and branching strategies.",
      "Deep understanding of component architecture, navigation systems, and state management using tools like React Context, Redux, or similar.",
      "A consistent track record of writing clean, modular, and maintainable code in a team setting.",
      "Excellent communication skills, including the ability to interpret and clarify requirements, proactively raise blockers, and collaborate effectively with designers and backend engineers."
    ],
    desirableSkills: [
      "Experience working with Supabase on the frontend.",
      "Experience with real-time data (e.g., WebSockets or subscriptions).",
      "Experience deploying to the App Store or Google Play.",
      "Interest in or experience with music, media, or fan-based platforms."
    ],
    applicationRequirements: [
      "Please include your Github profile in your CV which must contain a React Native project, or otherwise provide examples of your work with code for inspection."
    ],
    aboutUs: "Fairground is an exciting new platform redefining music discovery and artist engagement. Designed for music fans, artists, and curators, Fairground combines community-driven features with unique monetisation opportunities for artists. We aim to bring a fresh approach to music scenes, artist interactions, and fan engagement with tools for live updates, in-app ticketing, and exclusive gated content. We are looking for a talented and motivated Senior Front-End Developer to join our growing team and collaborate with Michael Butler, our Lead Developer, and the rest of the team in building out the MVP and beyond.",
    roleOverview: "You will be responsible for developing and maintaining Fairground's mobile app using React Native. You will work closely with the backend team to implement UI components, manage state and data flows, and bring our product vision to life with engaging, accessible, and performant mobile experiences.",
    keyResponsibilities: [
      "Collaborate with the Lead Developer to implement front-end components and features in React Native.",
      "Develop mobile UI/UX that aligns with Fairground's design system and product requirements.",
      "Connect with APIs to display real-time data, user content, and fan-gated content.",
      "Implement navigation, authentication flows, and conditional UI.",
      "Participate in sprint planning, internal testing, and code reviews.",
      "Ensure code quality and performance, writing maintainable and scalable code.",
      "Work with designers to ensure a polished, consistent mobile experience."
    ],
    whyJoinUs: [
      "Play a key role in building a new mobile platform from scratch.",
      "Flexible working hours and a remote-friendly environment.",
      "Opportunity to work on innovative music features like fan club subscriptions, live updates, and curated music content.",
      "Competitive salary and opportunities for growth.",
      "Be part of a dynamic, creative, passionate startup team."
    ]
  }
]; 