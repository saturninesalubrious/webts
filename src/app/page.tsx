import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import { Testimonials } from "@/components/Testimonailas";
import Footer from "@/components/ui/Footer";
import Instructors from "@/components/ui/instructors";
import UpcomingWebinars from "@/components/UpcomingWebinars";
import { WhyChooseUs } from "@/components/Whychooseus";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antiliased bg-grid-white/[0.02]">
    
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs />
      <Testimonials/>
      <UpcomingWebinars/>
      <Instructors/>
      <Footer/>
     
      

    </main>
  );
}
