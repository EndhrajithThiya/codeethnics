import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ce from '../assets/ce.png'
gsap.registerPlugin(ScrollTrigger);

 const comparisonData = [
  { feature: 'Practice & Learning (Guided + Structured)', CodeEthics: '✅', SkillRack: '✅ (basic)', neoPAT: '❌', CodeTantra: '✅ (teaching)' },
  { feature: 'Learning Mode (Practice + Feedback)', CodeEthics: '✅', SkillRack: '✅', neoPAT: '✅', CodeTantra: '✅' },
  { feature: 'Proctored Test Mode (Exam Security)', CodeEthics: '✅', SkillRack: '❌', neoPAT: '✅', CodeTantra: '✅' },
  { feature: 'Granular Admin Controls (time limit, recursion depth, blacklist)', CodeEthics: '✅', SkillRack: '❌', neoPAT: '✅ (basic)', CodeTantra: '✅' },
  { feature: 'Multi-Level Institution Support (Universities → Departments → Councils)', CodeEthics: '✅', SkillRack: '✅', neoPAT: '✅', CodeTantra: '✅' },
  { feature: 'Email Verification + Batch Code Tracking', CodeEthics: '✅', SkillRack: '❌', neoPAT: '✅', CodeTantra: '❌' },
  { feature: 'Reports on Time & Space Complexity', CodeEthics: '✅', SkillRack: '❌', neoPAT: '❌', CodeTantra: '❌' },
  { feature: 'Instant Email Reporting (Student + Counsellor after test)', CodeEthics: '✅', SkillRack: '❌', neoPAT: '❌', CodeTantra: '❌' },
  { feature: 'Placement / Campus Integration', CodeEthics: '✅', SkillRack: '✅', neoPAT: '✅', CodeTantra: '✅' },
  { feature: 'Skill-Gap Analysis', CodeEthics: '✅', SkillRack: '❌', neoPAT: '✅', CodeTantra: '❌' },
  { feature: 'Interactive Teaching / Virtual Classroom', CodeEthics: '✅', SkillRack: '❌', neoPAT: '❌', CodeTantra: '✅' },
  { feature: 'Daily Coding Challenges', CodeEthics: '✅', SkillRack: '✅', neoPAT: '✅', CodeTantra: '✅' },
  { feature: 'Arduino & Raspberry Pi Coding', CodeEthics: '✅', SkillRack: '❌', neoPAT: '❌', CodeTantra: '❌' },
  { feature: 'Live Typing (real-time monitoring)', CodeEthics: '✅', SkillRack: '❌', neoPAT: '❌', CodeTantra: '✅' },
  { feature: 'Code Mate AI (AI-powered coding assistant)', CodeEthics: '✅', SkillRack: '❌', neoPAT: '❌', CodeTantra: '❌' },
  { feature: 'Pair Coding (Collaborative Coding Mode)', CodeEthics: '✅', SkillRack: '❌', neoPAT: '❌', CodeTantra: '❌' },
  { feature: 'No Malpractice Chances (Strict Security & Proctoring)', CodeEthics: '✅', SkillRack: '✅', neoPAT: '✅', CodeTantra: '✅' },
  { feature: 'Aptitude (Quantitative, Logical, Verbal tests)', CodeEthics: '✅', SkillRack: '✅', neoPAT: '✅', CodeTantra: '❌' },
  { feature: 'Typing Pattern Analysis', CodeEthics: '✅', SkillRack: '✅', neoPAT: '✅', CodeTantra: '✅' },
  { feature: 'Keyboard & Mouse Tracking', CodeEthics: '✅', SkillRack: '❌', neoPAT: '✅', CodeTantra: '✅' },
  { feature: 'Code Fingerprinting & Similarity Graphs', CodeEthics: '✅', SkillRack: '❌', neoPAT: '✅', CodeTantra: '❌' },
  { feature: 'Secret / Behavioral Questions', CodeEthics: '✅', SkillRack: '❌', neoPAT: '❌', CodeTantra: '❌' },
  { feature: 'Code-Tattle Style Auto Evaluation', CodeEthics: '✅', SkillRack: '❌', neoPAT: '❌', CodeTantra: '❌' },
  { feature: 'Parent–Child Code Linkage', CodeEthics: '✅', SkillRack: '✅', neoPAT: '✅', CodeTantra: '✅' },
  { feature: 'Shuffled Questions', CodeEthics: '✅', SkillRack: '✅', neoPAT: '✅', CodeTantra: '✅' },
  { feature: 'Time Tracking Per Question', CodeEthics: '✅', SkillRack: '❌', neoPAT: '✅', CodeTantra: '✅' },
  { feature: 'Network Stability Logs', CodeEthics: '✅', SkillRack: '❌', neoPAT: '✅', CodeTantra: '❌' },
  { feature: 'MCQ Challenges', CodeEthics: '✅', SkillRack: '✅', neoPAT: '✅', CodeTantra: '✅' },
  { feature: 'Screen Sharing (Real-time during Tests)', CodeEthics: '✅', SkillRack: '❌', neoPAT: '❌', CodeTantra: '❌' },
  { feature: 'Debugging (Fixing Broken Code Snippets)', CodeEthics: '✅', SkillRack: '✅', neoPAT: '❌', CodeTantra: '❌' }
];


const logos = [
  { src: ce, alt: "Code Ethnics" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskTCMhPooGIh-ZmWFj9uuzaK4fged1rb4VdSsJZkhD_Fi2Mkfywy7VxS77v4yljZEzaY&usqp=CAU", alt: "SkillRack" },
  { src: "https://a.fsdn.com/allura/s/neopat/icon?974da5a2edbdd6df79443bed4b879d3dd95b04ab85071737f07617760848a898?&w=148", alt: "neoPAT" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1E0PRd70M2gGdA3dUVfmLoXOMpnH8DDObFg&s", alt: "CodeTantra" },
];

const ComparisonTable  = () => {
  const tableRef = useRef(null);

  useEffect(() => {
    const rows = tableRef.current.querySelectorAll("tbody tr");
    rows.forEach((tr, index) => {
      gsap.fromTo(
        tr,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: index * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: tr,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        
        <div
          ref={tableRef}
          className=""
        >
          <table className="min-w-full text-center border-separate border-spacing-2 md:border-spacing-4">
            <thead>
              <tr>
                <th className="p-4 text-left font-bold text-lg text-white/90">
                  Feature / Focus Area
                </th>
                {logos.map((logo, idx) => (
                  <th key={idx} className="p-4">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="h-16 mx-auto object-contain rounded-full shadow-lg"
                    />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx}>
                  <td className="p-4 text-left bg-[#13172c] font-2xl font-mono text-white rounded-lg shadow-md hover:bg-cyan-500/20 transition-colors">
                    {row.feature}
                  </td>
                  <td className="p-4 bg-[#13172c] rounded-lg shadow-md text-green-400 font-bold">
                    {row.CodeEthics}
                  </td>
                  <td className="p-4 bg-[#13172c] rounded-lg shadow-md text-green-400 font-bold">
                    {row.SkillRack}
                  </td>
                  <td className="p-4 bg-[#13172c] rounded-lg shadow-md text-green-400 font-bold">
                    {row.neoPAT}
                  </td>
                  <td className="p-4 bg-[#13172c] rounded-lg shadow-md text-green-400 font-bold">
                    {row.CodeTantra}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
