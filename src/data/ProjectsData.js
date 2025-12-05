// src/data/projectsData.js

export const caseStudies = [
    {
      slug: "behavai",
      title: "BehavAI: Smarter Support for ABA Therapy",
      tags: ["Artificial Intelligence", "Data Visualization"],
      description:
        "Co-founded an AI-powered platform to optimize behavioral data in Applied Behavior Analysis (ABA) therapy.",
      link: "/case-studies/behavai",
      // Use one of these two keys (video takes precedence if both exist)
      video: "/assets/dribbleshot.mp4",
      // image: "/assets/behavai-thumb.png",
      brandMark: "/assets/behavai-mark.png",   // ← add this
      brandMarkH: "24px",               // ← per-project size
      meta: {
        role: "Founding Designer & Front-End Dev (CEO)",
        team: "2 co-founders + clinical advisors",
        timeline: "Jan 2025 – Present (pre-launch)",
        tools: "Figma, GitHub, React",
      },
    },
    {
      slug: "aquatonomy",
      title: "Underwater Intelligence with Aquatonomy",
      tags: ["Human-Robot Interaction", "Autonomous Systems"],
      description:
        "Designed key interactions and overall service for an autonomous underwater inspection system.",
      link: "/case-studies/aquatonomy",
      video: "/assets/aquamock2.mp4", // <— this is the SAME file used on the grid
      // image: "/assets/aquatonomy-thumb.png",
      brandMark: "/assets/aquatonomy-mark.png",
      brandMarkH: "18px",                // ← per-project size
      meta: {
        role: "Product Design & Research",
        team: "6 collaborators — Design, Research, Strategy",
        timeline: "Aug – Dec 2024 (14 weeks)",
        tools: "Figma, Notion, Miro",
      },
    },
    {
      slug: "hira",
      title: "Thought Bubble: Guiding Cancer Care",
      tags: ["Healthcare", "Wearables", "Patient Experience"],
      description:
        "Conceptualized a wearable experience to support patients through cancer care at UPMC Magee-Womens Hospital.",
      link: "/case-studies/hira",
      image: "/assets/watchmock.svg",
      brandMark: "/assets/hira-mark.svg",
      brandMarkH: "45px",                // ← per-project size
      meta: {
        role: "Product Design",
        team: "4 collaborators — Research, Design",
        timeline: "Spring 2024",
        tools: "Figma",
      },
    },
    {
      slug: "stackbuilder",
      title: "Dynamic Learning with Stackbuilder",
      tags: ["Educational Tech", "Personalized Learning"],
      description:
        "Explored new learning models that empower students to shape their own educational journeys.",
      link: "/case-studies/stackbuilder",
      video: "/assets/mamamia.mp4",
      brandMark: "/assets/stack-mark.svg",
      brandMarkH: "20px",                // ← per-project size
      meta: {
        role: "Product Designer",
        team: "MHCI Capstone Team",
        timeline: "2024–2025",
        tools: "Figma, Notion",
      },
    },
  ];
  
  export const miniProjects = [
    {
      slug: "moonranger",
      title: "Moonranger x NASA",
      description:
        "Refined mission interface for lunar rover in collaboration with NASA and CMU.",
      link: "/case-studies/moonranger",
      image: "/assets/moonthumb.png",
      brandMark: "/assets/moonranger-mark.svg",
      brandMarkH: "23px",                // ← per-project size
      meta: {
        role: "Product Design & Research",
        team: "6 collaborators — Design, Research, Strategy",
        timeline: "Aug – Dec 2024 (14 weeks)",
        tools: "Figma, Notion, Miro",
      },   
    },
    {
      slug: "taptap",
      title: "Tap-Tap Revolution",
      description:
        "Developed interactive game prototype using Arduino and digital fabrication tools.",
      link: "/case-studies/taptap",
      image: "/assets/taptap1.png",
      brandMark: "/assets/taptap-mark.svg",
      brandMarkH: "24px",                // ← per-project size
      meta: {
        role: "Product Design & Research",
        team: "6 collaborators — Design, Research, Strategy",
        timeline: "Aug – Dec 2024 (14 weeks)",
        tools: "Figma, Notion, Miro",
      },
    },
    {
      slug: "lightthemuse",
      title: "Light the Muse",
      description:
        "Conceptualized mobile app to counter addictive technology through creative expression.",
      link: "/case-studies/lightthemuse",
      video: "/assets/whatsapp3.mp4",
      brandMark: "/assets/lightthemuse-mark.svg",
      brandMarkH: "24px",                // ← per-project size
      meta: {
        role: "Product Design & Research",
        team: "6 collaborators — Design, Research, Strategy",
        timeline: "Aug – Dec 2024 (14 weeks)",
        tools: "Figma, Notion, Miro",
      },
    },
  ];
  