import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-[#0d1117] text-white">
      <Navbar/>
      <HeroBanner/>
      
    </main>
  );
}
