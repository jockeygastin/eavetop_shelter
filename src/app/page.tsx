import Courses from "@/components/Courses";
import Footer from "@/components/global/Footer";
import Navbar from "@/components/global/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main style={{minHeight: '80vh'}}>
<Courses />
      </main>
    </div>
  );
}
