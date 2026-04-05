import JourneyCard, { type _milestones } from "./JourneyCard.tsx";

// const milestones: _milestones[] = [
//   {
//     time: "Late 2022",
//     position: "right",
//     title: "Learn about Programming",
//     content:
//       "Introduced about programming in school by a teacher and wrote my first HTML code.",
//   },
//   {
//     time: "Mid 2023 -> Early 2024",
//     position: "left",
//     title: "Foundational Years",
//     content:
//       "Started my programming journey on free time learning about basic HTML, CSS and Javascript.",
//   },
//   {
//     time: "Early 2024",
//     position: "right",
//     title: "First Project",
//     content:
//       "Built my first ever project (calculator app) with HTML, CSS and Javascript",
//   },
//   {
//     time: "Late 2024",
//     position: "left",
//     title: "Typescript",
//     content: "Lernt Typescript as a step up to Javascript.",
//   },
//   {
//     time: "Mid 2025",
//     position: "right",
//     title: "Joined Github",
//     content: "Introduced to version-control application like Github.",
//   },
//   {
//     time: "Early 2026",
//     position: "left",
//     title: "React and Tailwind",
//     content:
//       "Learnt react as a step up from normal HTML and tailwind for better and faster design process.",
//   },
// ];

const milestones: _milestones[] = [
  {
    time: "Late 2022",
    position: "right",
    title: "The Spark of Interest",
    content:
      "Discovered the world of software development in school and executed my first lines of HTML.",
  },
  {
    time: "Mid 2023 — Early 2024",
    position: "left",
    title: "Building the Foundation",
    content:
      "Dedicated my free time to mastering the core web triad: HTML5, CSS3, and modern JavaScript fundamentals.",
  },
  {
    time: "Early 2024",
    position: "right",
    title: "First Deployment",
    content:
      "Successfully built and logic-tested a functional Calculator application using vanilla web technologies.",
  },
  {
    time: "Late 2024",
    position: "left",
    title: "Embracing Type Safety",
    content:
      "Transitioned to TypeScript to write more robust, maintainable, and error-free code.",
  },
  {
    time: "Mid 2025",
    position: "right",
    title: "Version Control & Collaboration",
    content:
      "Adopted Git and GitHub, integrating professional version control and open-source workflows into my development cycle.",
  },
  {
    time: "Early 2026",
    position: "left",
    title: "Modern Frameworks & Styling",
    content:
      "Upskilled into the React ecosystem for component-based architecture and adopted Tailwind CSS for rapid, responsive UI development.",
  },
  {
    time: "In the coming future",
    position: "right",
    title: "Projects Building",
    content:
      "Going to be building many real world projects to further upskill my programming skills.",
  },
];

function MapJourney() {
  return (
    <div className="flex flex-col min-w-full px-20 gap-20 sm:gap-2">
      {milestones.map((milestone, index) => (
        <JourneyCard
          key={index}
          title={milestone.title}
          time={milestone.time}
          position={milestone.position}
          content={milestone.content}
        />
      ))}
    </div>
  );
}
export default MapJourney;
