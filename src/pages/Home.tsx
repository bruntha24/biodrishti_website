import { lazy, Suspense, useEffect } from "react";

import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/hero/Hero";

const ProblemSection = lazy(() =>
  import("@/components/sections/ProblemSection").then((module) => ({
    default: module.ProblemSection,
  }))
);

const ServicesSection = lazy(() =>
  import("@/components/sections/ServicesSection").then((module) => ({
    default: module.ServicesSection,
  }))
);

const WhoWeHelp = lazy(() =>
  import("@/components/sections/WhoWeHelp").then((module) => ({
    default: module.WhoWeHelp,
  }))
);

const TeamSection = lazy(() =>
  import("@/components/sections/TeamSection").then((module) => ({
    default: module.TeamSection,
  }))
);

const InstitutionsSection = lazy(() =>
  import("@/components/sections/InstitutionsSection").then((module) => ({
    default: module.InstitutionsSection,
  }))
);

const ContactSection = lazy(() =>
  import("@/components/sections/ContactSection").then((module) => ({
    default: module.ContactSection,
  }))
);

const SectionFallback = () => (
  <div className="min-h-[200px]" />
);

const Home = () => {
  useEffect(() => {
    document.title = "BioDrishti — Life Sciences Research Mentorship";

    const meta =
      document.querySelector('meta[name="description"]') ||
      document.head.appendChild(
        Object.assign(document.createElement("meta"), {
          name: "description",
        })
      );

    (meta as HTMLMetaElement).content =
      "Structured research mentorship in genomics, molecular biology and life sciences for undergraduate, master's, and early PhD students.";
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <ScrollProgress />

      <Navbar />

      <main>
        {/* Critical LCP content */}
        <Hero />

        {/* Lazy loaded sections */}
        <Suspense fallback={<SectionFallback />}>
          <ProblemSection />
          <ServicesSection />
          <WhoWeHelp />
          <TeamSection />
          <InstitutionsSection />
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
};

export default Home;