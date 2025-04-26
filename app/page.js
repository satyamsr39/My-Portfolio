import Contents from "@/components/Contents";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Skill from "@/components/Skill";
import Education from "@/components/Education";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="text-xl">
      <Navbar />

        <Intro />
      <div id="profile">
        <Contents />
      </div>

      <div id="skills">
        <Skill />
      </div>

      <div id="education">
        <Education />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer/>
    </div>
  );
}

