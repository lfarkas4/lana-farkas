import BehavAI from "../../legacy-pages/BehavAI";

export default function BehavAICaseStudy() {
  return <BehavAI />;
}

// ✅ opt out of the SiteLayout (no cosmic bg, no navbar, no app footer)
BehavAICaseStudy.getLayout = (page) => page;