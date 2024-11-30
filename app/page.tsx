import Link from "next/link";
import ProfileCard from "@/components/profile/ProfileCard";
import TherapyServices from "@/components/profile/TherapyServices";
import AboutMe from "@/components/profile/AboutMe";
import Testimonials from "@/components/profile/Testimonials";
import { FaGraduationCap } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { GoPeople } from "react-icons/go";
import { PiSuitcaseSimple } from "react-icons/pi";
import { CgAddR } from "react-icons/cg";
import { IoCallOutline } from "react-icons/io5";





export default function Home() {
  return (
    <main className="flex">
      <div className="w-[400px] bg-[#29B6F6] min-h-screen">
        <ProfileCard />
      </div>

      <div className="flex-1 max-w-[800px] mx-auto px-8 py-8">
        <div className="space-y-8">
          <AboutMe />

          <section>
            <h2 className="text-xl font-medium mb-4">Credentials</h2>
            <ul className="space-y-3">

              <li className="flex items-center gap-3 text-[15px]">
                <span className="text-[#29B6F6]">
                  <FaGraduationCap />
                </span>
                <span>Ph.D. in Clinical Psychology - Harvard University</span>
              </li>
              <li className="flex items-center gap-3 text-[15px]">
                <FaGraduationCap className="text-[#29B6F6]"/>
                <span>M.A. in Counseling - University of California, Berkeley</span>
              </li>
              <li className="flex items-center gap-3 text-[15px]">
              <GrCertificate className="text-[#29B6F6]"/>
                <span>Licensed Professional Counselor (LPC) - State of DEF</span>
              </li>
              <li className="flex items-center gap-3 text-[15px]">
              <GrCertificate className="text-[#29B6F6]"/>
                <span>Certified Cognitive Behavioral Therapist (CBT)</span>
              </li>
              <li className="flex items-center gap-3 text-[15px]">
              <GoPeople className="text-[#29B6F6]"/>
                <span>Member, American Psychological Association (APA)</span>
              </li>
              <li className="flex items-center gap-3 text-[15px]">
              <PiSuitcaseSimple className="text-[#29B6F6]"/>
                <span>10+ years of experience in individual and group therapy</span>
              </li>
            </ul>
          </section>

          <TherapyServices />

          <div className="grid grid-cols-2 gap-8">
            <section>
              <h2 className="text-xl font-medium mb-2">Available on</h2>
              <div className="flex gap-4">
                <div className="p-4 bg-blue-50 rounded-lg flex flex-col items-center gap-2 w-40">
                  <div className="w-8 h-8 flex items-center justify-center">
                  <CgAddR className="text-[#29B6F6] w-20 h-20"/>
                  </div>
                  <span className="text-sm text-gray-600">In-person</span>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg flex flex-col items-center gap-2 w-40">
                  <div className="w-8 h-8 flex items-center justify-center">
                  <IoCallOutline className="text-[#29B6F6] w-20 h-20"/>
                  </div>
                  <span className="text-sm text-gray-600">Video/Voice call</span>
                </div>
              </div>
            </section>
          </div>

          <Testimonials />
        </div>
      </div>
    </main>
  );
}