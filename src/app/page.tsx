import Courses from "@/components/Courses";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import Hero from "@/components/home/Hero";
import Welcome from "@/components/home/Welcome";
import Image from "next/image";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <main style={{minHeight: '80vh'}}>
       {/* <Courses /> */}
       <Hero/>
       <Welcome/>  
       <Testimonials/>
      </main>
    </div>
  );
}
