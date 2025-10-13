import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { PrivacyPage } from "./components/PrivacyPage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import svgPaths from "./imports/svg-7d1casmzak";
import svgPathsNav from "./imports/svg-0562xtxic8";
import svgPathsMobile from "./imports/svg-8gejyvcm7i";
import svgPathsMobileHero from "./imports/svg-q13mnj0cqj";
import imgLogo from "figma:asset/6a468de2a7fa53dd38de1df737d603f07b1f6b48.png";
import imgInnerScreen from "figma:asset/b59ebd606b8bcebb6d0c8a0d34789dca7674a368.png";
import imgInnerScreenMobile from "figma:asset/59d8f7e934db11a36b1ce1b6acedbc508350e6b5.png";
import imgInnerScreenMobile1 from "figma:asset/14018c2a05da0fe7fa60fb0a533763ceb2a6a93d.png";
import imgUXAnalysis from "figma:asset/a3245250af528a1773f69f97980721a4fbe9c5c3.png";
import imgUXAnalysisDesktop from "figma:asset/249ce69a9c50e14a0e7839dbac2fd5816c58868c.png";
import imgDeliverablesCards from "figma:asset/c2f470662f7b9d281d028f71035ca519d82d8f3b.png";
import Group145 from "./imports/Group145";
import Group146 from "./imports/Group146";

// Custom hook for mobile detection
function useMobile() {
  const [isMobile, setIsMobile] = useState(() => {
    // Initialize with actual window size if available
    if (typeof window !== 'undefined') {
      return window.innerWidth < 640;
    }
    return false; // Default for SSR
  });
  
  useEffect(() => {
    // Only set if different to prevent unnecessary re-renders
    const checkMobile = () => {
      const newIsMobile = window.innerWidth < 640;
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
      }
    };
    
    // Throttled resize listener
    let timeoutId: NodeJS.Timeout;
    const throttledCheck = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };
    
    window.addEventListener('resize', throttledCheck);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', throttledCheck);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);
  
  return isMobile;
}

function Arrow() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0 w-[7px]" data-name="Arrow">
      <div className="h-[6.011px] relative shrink-0 w-[6px]" data-name="↗">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 7">
          <path d={svgPathsNav.p2c9abe00} fill="var(--fill-0, white)" id="â" />
        </svg>
      </div>
    </div>
  );
}

function ButtonLinkout() {
  return (
    <motion.a 
      href="mailto:contact@lutsy.studio"
      className="bg-[#485c11] box-border content-stretch cursor-pointer flex gap-[2px] items-center justify-center overflow-visible px-[16px] sm:px-[22px] py-[12px] sm:py-[14px] relative rounded-[1000px] shrink-0 text-[12px] sm:text-[14px]" 
      data-name="Button linkout"
      whileHover={{ scale: 1.05, backgroundColor: "#5a6e1a" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-center text-nowrap text-white tracking-[-0.3px] sm:tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Get in Touch
      </p>
      <div className="flex flex-row items-center self-stretch">
        <Arrow />
      </div>
    </motion.a>
  );
}

function NavigationMobile() {
  return (
    <nav
      className="fixed bg-white box-border content-stretch flex flex-col h-[78px] items-start left-0 overflow-clip p-0 right-0 rounded-bl-[20px] rounded-br-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] top-0 z-50 sm:hidden"
      data-name="Navigation mobile"
    >
      <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex items-center justify-center pb-[20px] pt-[20px] px-[20px] relative size-full">
            <a
              href="https://lutsy.studio"
              className="inline-flex h-[32px] items-center justify-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#485c11] focus-visible:ring-offset-2 focus-visible:ring-offset-white rounded-full"
              aria-label="Lutsy homepage"
            >
              <img src={imgLogo} alt="Lutsy" className="h-[32px] w-auto" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavigationDesktop() {
  return (
    <div className="hidden sm:flex box-border content-stretch items-center justify-between w-full pb-[40px] pt-[20px] px-0 relative shrink-0" data-name="Navigation desktop">
      <a
        href="https://lutsy.studio"
        className="flex items-center gap-[12px] rounded-[8px] text-inherit no-underline transition-opacity hover:opacity-80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#485c11] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-label="Lutsy homepage"
      >
        <img src={imgLogo} alt="Lutsy" className="h-[40px] w-auto block" />
        <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.2] text-[#6f6f6f] text-[24px] tracking-[-1.2px] m-0" style={{ fontVariationSettings: "'opsz' 14" }}>
          Fresh-eyes UX Review
        </p>
      </a>
      <div className="shrink-0">
        <ButtonLinkout />
      </div>
    </div>
  );
}

function HeroText() {
  const isMobile = useMobile();
  
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-center relative shrink-0 text-black text-center w-full max-w-full" data-name="Hero text">
      <motion.h1 
        className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[76px] sm:text-[70px] md:text-[90px] lg:text-[110px] tracking-[-3.04px] sm:tracking-[-2.8px] md:tracking-[-3.8px] lg:tracking-[-4.7px] max-w-full"
        initial={{ opacity: isMobile ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.2, ease: "easeOut" }}
      >
        Find your product&apos;s<br className="hidden sm:block" /> blind spots.
      </motion.h1>
      <motion.h2 
        className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.3] sm:leading-[1.4] relative shrink-0 text-[24px] sm:text-[22px] md:text-[26px] lg:text-[30px] max-w-[343px] sm:max-w-[600px] md:max-w-[900px] lg:max-w-[1000px]" 
        style={{ fontVariationSettings: "'opsz' 14" }}
        initial={{ opacity: isMobile ? 1 : 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.4, ease: "easeOut" }}
      >
        UX reviews to get more out of what you’re building.
      </motion.h2>
    </div>
  );
}

// Mobile UI Elements for navigation
function UiElementsNav() {
  return (
    <div className="absolute h-[22.195px] left-[20.2px] top-[8.06px] w-[207.243px]" data-name="UI elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 23">
        <g id="UI elements">
          <path d={svgPathsMobile.p2d90ce80} fill="var(--fill-0, black)" id="Mockup elements 08" />
          <g id="Mockup elements 07">
            <path d={svgPathsMobile.p18cd2400} fill="var(--fill-0, white)" />
            <path d={svgPathsMobile.p18437400} fill="var(--fill-0, white)" />
            <path d={svgPathsMobile.p1a8dd800} fill="var(--fill-0, white)" />
            <path d={svgPathsMobile.p3c7f6e00} fill="var(--fill-0, white)" />
          </g>
          <g id="Union">
            <path d={svgPathsMobile.p37ab3000} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPathsMobile.p2f276740} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPathsMobile.p3fb1d770} fill="var(--fill-0, white)" />
          </g>
          <g id="Vector">
            <path d={svgPathsMobile.p125ae4f0} fill="var(--fill-0, white)" />
            <path d={svgPathsMobile.p1ca2d700} fill="var(--fill-0, white)" />
            <path d={svgPathsMobile.p3f22b200} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Mobile UI Elements for hero
function UiElementsHero() {
  return (
    <div className="absolute h-[22.195px] left-[20.2px] top-[8.06px] w-[207.243px]" data-name="UI elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 23">
        <g id="UI elements">
          <path d={svgPathsMobileHero.p2d90ce80} fill="var(--fill-0, black)" id="Mockup elements 08" />
          <g id="Mockup elements 07">
            <path d={svgPathsMobileHero.p18cd2400} fill="var(--fill-0, white)" />
            <path d={svgPathsMobileHero.p18437400} fill="var(--fill-0, white)" />
            <path d={svgPathsMobileHero.p1a8dd800} fill="var(--fill-0, white)" />
            <path d={svgPathsMobileHero.p3c7f6e00} fill="var(--fill-0, white)" />
          </g>
          <g id="Union">
            <path d={svgPathsMobileHero.p37ab3000} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPathsMobileHero.p2f276740} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPathsMobileHero.p3fb1d770} fill="var(--fill-0, white)" />
          </g>
          <g id="Vector">
            <path d={svgPathsMobileHero.p125ae4f0} fill="var(--fill-0, white)" />
            <path d={svgPathsMobileHero.p1ca2d700} fill="var(--fill-0, white)" />
            <path d={svgPathsMobileHero.p3f22b200} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function InnerScreenMobileNav() {
  return (
    <div className="absolute h-[521.757px] left-[10.95px] overflow-clip right-[10.95px] rounded-[27.365px] top-[10.03px]" data-name="Inner screen">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[27.365px]">
        <img alt="Data points on top of landscape" className="absolute max-w-none object-50%-50% object-cover rounded-[27.365px] size-full" src={imgInnerScreenMobile} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[27.365px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[27.365px]">
          <img alt="Data points on top of landscape" className="absolute h-full left-[-227.01%] max-w-none top-[-11.37%] w-[377.35%]" src={imgInnerScreenMobile1} />
        </div>
      </div>
      <UiElementsNav />
    </div>
  );
}

function InnerScreenMobileHero() {
  return (
    <div className="absolute h-[521.757px] left-[10.95px] overflow-clip right-[10.95px] rounded-[27.365px] top-[10.03px]" data-name="Inner screen">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[27.365px]">
        <img alt="Data points on top of landscape" className="absolute max-w-none object-50%-50% object-cover rounded-[27.365px] size-full" src={imgInnerScreenMobile} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[27.365px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[27.365px]">
          <img alt="Data points on top of landscape" className="absolute h-full left-[-227.01%] max-w-none top-[-11.37%] w-[377.35%]" src={imgInnerScreenMobile1} />
        </div>
      </div>
      <UiElementsHero />
    </div>
  );
}

function InnerScreen() {
  return (
    <div className="absolute h-[180px] sm:h-[270px] md:h-[360px] lg:h-[607.439px] left-1/2 rounded-[12px] md:rounded-[16px] top-[10px] sm:top-[15px] md:top-[20px] lg:top-[18.5px] translate-x-[-50%] w-[260px] sm:w-[390px] md:w-[520px] lg:w-[869.742px]" data-name="Inner screen">
      <img alt="Data points on top of landscape" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[12px] md:rounded-[16px] size-full" src={imgInnerScreen} />
    </div>
  );
}

function IPhone() {
  return (
    <div className="absolute bg-black h-[541.824px] rounded-[34.662px] translate-x-[-50%] translate-y-[-50%] w-[270px] top-1/2 left-1/2" data-name="iPhone">
      <div className="h-[541.824px] overflow-clip relative w-[270px] rounded-[34.662px]">
        <InnerScreenMobileHero />
      </div>
      <div aria-hidden="true" className="absolute border border-[#929292] border-solid inset-0 pointer-events-none rounded-[34.662px] shadow-[0px_-2.342px_11.709px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Ipad() {
  return (
    <div aria-label="Visual chart illustrating a 78% increase in efficiency across 33 regions between 2021 and 2024, with clear upward trends year over year" className="absolute bg-black h-[200px] sm:h-[300px] md:h-[400px] lg:h-[644px] rounded-[16px] md:rounded-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[280px] sm:w-[420px] md:w-[560px] lg:w-[907px]" data-name="Ipad" style={{ left: "calc(50% + 0.5px)" }}>
      <div className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[644px] overflow-clip relative w-[280px] sm:w-[420px] md:w-[560px] lg:w-[907px]">
        <InnerScreen />
      </div>
      <div aria-hidden="true" className="absolute border-[2px_2px_0px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[16px] md:rounded-[24px] shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HeroImage() {
  const isMobile = useMobile();
  
  return (
    <motion.div 
      className="relative shrink-0 w-full flex items-center justify-center" 
      data-name="Hero image"
      initial={{ y: isMobile ? 0 : 10 }}
      animate={{ y: 0 }}
      transition={{ duration: isMobile ? 0 : 1.0, delay: isMobile ? 0 : 0.6, ease: "easeOut" }}
    >
      {/* Mobile: iPhone mockup with green container - height is 358px total */}
      <div className="sm:hidden h-[358px] relative w-[343px]">
        <Group146 />
      </div>
      
      {/* Desktop: UX Analysis presentation mockup - height is 592px total */}
      <div className="hidden sm:block h-[592px] relative w-full max-w-[1200px]">
        <Group145 />
      </div>
    </motion.div>
  );
}

function Header() {
  const isMobile = useMobile();
  
  return (
    <header className="max-w-[1600px] relative shrink-0 w-full sm:max-w-none" data-name="Header">
      <div className="flex flex-col items-center max-w-inherit overflow-visible size-full">
        <div className="box-border content-stretch flex flex-col gap-[56px] items-center max-w-inherit pb-[0px] sm:pb-[80px] pt-[120px] sm:pt-[40px] px-[16px] sm:px-[20px] relative w-full">
          <HeroText />
          
          {/* Mobile hero image - centered at 343px */}
          <div className="sm:hidden w-full flex justify-center">
            <div className="w-[343px] relative">
              <img 
                alt="UX Analysis presentation mockup showing Lutsy interface with phone screen" 
                className="w-full h-auto rounded-[20px]" 
                src={imgUXAnalysis} 
              />
            </div>
          </div>
        </div>
        
        {/* Desktop hero image - full width outside of padding */}
        <motion.div 
          className="hidden sm:block w-full pb-[80px]"
          initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0 : 0.8, delay: isMobile ? 0 : 0.6, ease: "easeOut" }}
        >
          <img 
            alt="UX Analysis presentation mockup showing layered Lutsy interface screens" 
            className="w-full h-auto" 
            src={imgUXAnalysisDesktop} 
          />
        </motion.div>
      </div>
    </header>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  const isMobile = useMobile();
  
  return (
    <motion.div 
      className="relative shrink-0 w-full" 
      initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: isMobile ? 0 : 0.6, ease: "easeOut" }}
    >
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[50px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-black tracking-[-1.5px] sm:tracking-[-1.2px] md:tracking-[-1.5px] lg:tracking-[-1.8px] w-full">
        {children}
      </p>
    </motion.div>
  );
}

function ProblemCard({ title, description, delay = 0 }: { title: string; description: string; delay?: number }) {
  const isMobile = useMobile();
  
  return (
    <motion.section 
      className="basis-0 grow min-h-px min-w-[265px] relative shrink-0" 
      data-name="Problem card"
      initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : delay, ease: "easeOut" }}
    >
      <div aria-hidden="true" className="absolute border-[#8e9c78] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start min-w-inherit pl-0 pr-[20px] sm:pr-[40px] py-[40px] relative w-full">
          <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
            <h3 className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic text-[16px] sm:text-[18px] text-black tracking-[-0.32px] sm:tracking-[-0.54px] w-full">
              {title}
            </h3>
            <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function ProblemsSection() {
  return (
    <section className="box-border content-stretch flex flex-col items-start overflow-visible pb-[60px] pt-[80px] px-0 relative shrink-0 w-full" data-name="Problems section">
      <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      
      <div className="relative shrink-0 w-full">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col gap-[50px] items-start pl-0 pr-0 py-0 relative w-full">
            <SectionHeading>Does this sound like your product?</SectionHeading>
          </div>
        </div>
      </div>
      
      <div className="box-border content-start flex flex-wrap gap-[20px] items-start pb-0 pt-[40px] px-0 relative shrink-0 w-full">
        <ProblemCard 
          title="Pre-ship gut check"
          description="Your product is nearly there, but you need an honest outside read before you lock the launch."
          delay={0.1}
        />
        <ProblemCard 
          title="Just shipped, not sure"
          description="You launched, and can't tell if a first-time user actually 'gets it' without you explaining."
          delay={0.2}
        />
        <ProblemCard 
          title="Activation drag"
          description="People sign up, then stall before first value. Onboarding feels like work, not momentum."
          delay={0.3}
        />
        <ProblemCard 
          title="Backlog blur"
          description="The list is long; what to do first isn't obvious."
          delay={0.4}
        />
      </div>
    </section>
  );
}

function ValueProp() {
  const isMobile = useMobile();
  
  return (
    <section className="box-border content-stretch flex flex-col items-center border-t border-[#e9e9e9] py-[40px] sm:py-[80px] relative shrink-0 w-full text-center" data-name="Value prop">
      <motion.div 
        className="flex flex-col gap-[24px] sm:gap-[40px] items-center max-w-[600px] px-[20px] sm:px-[60px] w-full"
        initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: isMobile ? 0 : 0.6, ease: "easeOut" }}
      >
        <h2 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic text-[50px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-black tracking-[-1.5px] sm:tracking-[-1.2px] md:tracking-[-1.5px] lg:tracking-[-1.8px]">
          Give me a week. You'll know what to change.
        </h2>
        <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          I trace the real journeys, highlight the confusing bits, and rank the fixes.
        </p>
      </motion.div>
    </section>
  );
}

function DeliverableItem({ number, title, description, delay = 0 }: { number: string; title: string; description: string; delay?: number }) {
  const isMobile = useMobile();
  
  return (
    <motion.div 
      className="border-t border-[#e9e9e9] p-[16px] sm:p-[20px] w-full"
      initial={{ opacity: isMobile ? 1 : 0, x: isMobile ? 0 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : delay, ease: "easeOut" }}
    >
      <div className="flex gap-[16px] sm:gap-[20px] items-start">
        <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] shrink-0 text-[#485c11] text-[16px] sm:text-[15px] text-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
          {number}
        </p>
        <div className="flex-1 min-w-0">
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
            <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>
              {title}
            </span>
            <span> — {description}</span>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function DeliverablesSection() {
  const isMobile = useMobile();
  
  return (
    <section className="box-border content-stretch flex flex-col lg:flex-row gap-[40px] items-start border-t border-[#e9e9e9] py-[40px] sm:py-[80px] relative shrink-0 w-full" data-name="Deliverables section">
      
      <div className="flex-1 flex flex-col gap-[24px] sm:gap-[40px]">
        <motion.div
          initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: isMobile ? 0 : 0.6, ease: "easeOut" }}
        >
          <h2 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic text-[50px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-black tracking-[-1.5px] sm:tracking-[-1.2px] md:tracking-[-1.5px] lg:tracking-[-1.8px] mb-[16px] sm:mb-[24px]">
            What you get
          </h2>
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Clear, actionable findings that show you exactly what's confusing users and how to fix it.
          </p>
        </motion.div>
        
        <div className="flex flex-col">
          <DeliverableItem 
            number="01"
            title="Deck of annotated screenshots"
            description="one issue per slide with explained fix"
            delay={0.1}
          />
          <DeliverableItem 
            number="02"
            title="Severity & order of action"
            description="Critical / Major / Minor"
            delay={0.2}
          />
          <DeliverableItem 
            number="03"
            title="Copy suggestions"
            description="headlines, CTAs, empty & error states"
            delay={0.3}
          />
          <DeliverableItem 
            number="04"
            title="Video walkthrough"
            description="for team-wide alignment"
            delay={0.4}
          />
        </div>
      </div>

      <div className="hidden lg:flex flex-1 w-full justify-center items-center">
        <motion.div 
          className="relative w-full max-w-[600px]"
          initial={{ opacity: isMobile ? 1 : 0, scale: isMobile ? 1 : 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: isMobile ? 0 : 0.8, ease: "easeOut" }}
        >
          <img alt="Layered cards showing UX deliverables and audit components" className="w-full h-auto rounded-[30px]" src={imgDeliverablesCards} />
        </motion.div>
      </div>
    </section>
  );
}

function ProcessStep({ number, title, description, delay = 0, isFirst = false }: { number: string; title: string; description: string; delay?: number; isFirst?: boolean }) {
  const isMobile = useMobile();
  
  return (
    <motion.section 
      className="relative shrink-0 w-full sm:basis-0 sm:grow sm:min-h-px sm:min-w-[240px]" 
      data-name={`Process step ${number}`}
      initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : delay, ease: "easeOut" }}
    >
      <div aria-hidden="true" className={`absolute border-[#8e9c78] border-[1px_0px_0px] border-solid inset-0 pointer-events-none ${isFirst ? 'hidden sm:block' : ''}`} />
      <div className="w-full h-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] sm:gap-[60px] items-center sm:items-start w-full pb-[40px] sm:pb-[20px] pl-0 pr-0 sm:pr-[30px] pt-[40px] sm:pt-[60px] relative">
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1] text-[#485c11] text-[40px] sm:text-[64px] lg:text-[80px] tracking-[-1.6px] sm:tracking-[-2.6px] lg:tracking-[-3.2px] w-full text-center sm:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
            {number}
          </p>
          <div className="content-stretch flex flex-col gap-[16px] sm:gap-[20px] items-center sm:items-start relative shrink-0 w-full">
            <h3 className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic text-[16px] sm:text-[18px] text-black tracking-[-0.32px] sm:tracking-[-0.54px] w-full text-center sm:text-left">
              {title}
            </h3>
            <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.075px] w-full text-center sm:text-left" style={{ fontVariationSettings: "'opsz' 14" }}>
              {description}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

function ProcessSection() {
  const isMobile = useMobile();
  
  return (
    <section className="box-border content-stretch flex flex-col items-start border-t border-[#e9e9e9] py-[40px] sm:py-[80px] relative shrink-0 w-full" data-name="Process section">
      <div className="flex flex-col gap-[24px] sm:gap-[80px] w-full">
        <motion.div
          className="text-center"
          initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: isMobile ? 0 : 0.6, ease: "easeOut" }}
        >
          <h2 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic text-[50px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-black tracking-[-1.5px] sm:tracking-[-1.2px] md:tracking-[-1.5px] lg:tracking-[-1.8px]">
            How it Works
          </h2>
        </motion.div>
        
        <div className="content-stretch flex flex-col sm:flex-row gap-0 sm:gap-[20px] items-start justify-center relative shrink-0 w-full">
          <ProcessStep 
            number="01"
            title="Hand it Over"
            description="Share a guest login or demo link. Tell me 'focus on {flow}' or 'entire product.' That's all."
            delay={0.1}
            isFirst={true}
          />
          <ProcessStep 
            number="02"
            title="I Audit"
            description="I simulate your users' real journeys, capture friction, and write specific fixes."
            delay={0.2}
          />
          <ProcessStep 
            number="03"
            title="The Deck"
            description="A concise deck your team can act on immediately, plus a video walkthrough."
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}

function Arrow1() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0 w-[7px]" data-name="Arrow">
      <div className="h-[6.011px] relative shrink-0 w-[6px]" data-name="↗">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 7">
          <path d={svgPaths.p2c9abe00} fill="var(--fill-0, white)" id="â" />
        </svg>
      </div>
    </div>
  );
}

function ButtonLinkout1() {
  return (
    <motion.a 
      href="mailto:contact@lutsy.studio"
      className="bg-[#485c11] cursor-pointer relative rounded-[1000px] shrink-0 w-full max-w-[280px] block" 
      data-name="Button linkout"
      whileHover={{ scale: 1.05, backgroundColor: "#5a6e1a" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Send details
          </p>
          <div className="flex flex-row items-center self-stretch">
            <Arrow1 />
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function FAQSection() {
  const isMobile = useMobile();
  
  return (
    <section className="box-border content-stretch flex flex-col items-start border-t border-[#e9e9e9] py-[40px] sm:py-[80px] relative shrink-0 w-full" data-name="FAQ section">
      <div className="flex flex-col gap-[40px] sm:gap-[60px] w-full max-w-[800px] mx-auto">
        <motion.div
          className="text-center"
          initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: isMobile ? 0 : 0.6, ease: "easeOut" }}
        >
          <h2 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic text-[50px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-black tracking-[-1.5px] sm:tracking-[-1.2px] md:tracking-[-1.5px] lg:tracking-[-1.8px]">
            FAQ
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: isMobile ? 0 : 0.6, delay: isMobile ? 0 : 0.1, ease: "easeOut" }}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" className="border-[#e9e9e9]">
              <AccordionTrigger className="font-['Crimson_Text:Regular',_sans-serif] text-[18px] sm:text-[20px] text-black tracking-[-0.54px] sm:tracking-[-0.6px] sm:hover:text-[#485c11] transition-colors">
                What exactly do you audit?
              </AccordionTrigger>
              <AccordionContent className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                I walk through your product (website or app) as a first-time user would, documenting every point of friction—confusing copy, unclear flows, missing context, visual hierarchy issues. You get a deck with annotated screenshots and specific fixes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-[#e9e9e9]">
              <AccordionTrigger className="font-['Crimson_Text:Regular',_sans-serif] text-[18px] sm:text-[20px] text-black tracking-[-0.54px] sm:tracking-[-0.6px] sm:hover:text-[#485c11] transition-colors">
                How long does it take?
              </AccordionTrigger>
              <AccordionContent className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                5–7 days from when I receive access. Urgent timelines? Let me know—I can sometimes fast-track.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-[#e9e9e9]">
              <AccordionTrigger className="font-['Crimson_Text:Regular',_sans-serif] text-[18px] sm:text-[20px] text-black tracking-[-0.54px] sm:tracking-[-0.6px] sm:hover:text-[#485c11] transition-colors">
                Do you redesign the product?
              </AccordionTrigger>
              <AccordionContent className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                No, but if you need designs for those fixes we can discuss it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-[#e9e9e9]">
              <AccordionTrigger className="font-['Crimson_Text:Regular',_sans-serif] text-[18px] sm:text-[20px] text-black tracking-[-0.54px] sm:tracking-[-0.6px] sm:hover:text-[#485c11] transition-colors">
                What if I'm pre-launch?
              </AccordionTrigger>
              <AccordionContent className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Perfect timing. A fresh-eyes review before you ship helps you avoid confusing early users. Just share a staging link or demo environment.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-[#e9e9e9]">
              <AccordionTrigger className="font-['Crimson_Text:Regular',_sans-serif] text-[18px] sm:text-[20px] text-black tracking-[-0.54px] sm:tracking-[-0.6px] sm:hover:text-[#485c11] transition-colors">
                Can you sign an NDA?
              </AccordionTrigger>
              <AccordionContent className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Yes. Happy to sign yours or use a mutual template.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-[#e9e9e9]">
              <AccordionTrigger className="font-['Crimson_Text:Regular',_sans-serif] text-[18px] sm:text-[20px] text-black tracking-[-0.54px] sm:tracking-[-0.6px] sm:hover:text-[#485c11] transition-colors">
                What format is the deliverable?
              </AccordionTrigger>
              <AccordionContent className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                A slide deck with one issue per slide, severity labels, and a video walkthrough explaining the findings.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border-[#e9e9e9]">
              <AccordionTrigger className="font-['Crimson_Text:Regular',_sans-serif] text-[18px] sm:text-[20px] text-black tracking-[-0.54px] sm:tracking-[-0.6px] sm:hover:text-[#485c11] transition-colors">
                Do you do user testing?
              </AccordionTrigger>
              <AccordionContent className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                This is an expert review, not moderated user testing. I simulate real user journeys based on UX best practices and your product's context.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border-[#e9e9e9] border-b">
              <AccordionTrigger className="font-['Crimson_Text:Regular',_sans-serif] text-[18px] sm:text-[20px] text-black tracking-[-0.54px] sm:tracking-[-0.6px] sm:hover:text-[#485c11] transition-colors">
                What's the pricing?
              </AccordionTrigger>
              <AccordionContent className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Email me with details to get a quote.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}

function CTASection({ sectionRef }: { sectionRef?: React.RefObject<HTMLElement> }) {
  const isMobile = useMobile();
  
  return (
    <motion.section 
      ref={sectionRef}
      className="box-border border-t border-[#e9e9e9] py-[40px] sm:py-[80px] lg:py-[120px] relative shrink-0 w-full" 
      data-name="CTA section"
      initial={{ opacity: isMobile ? 1 : 0, y: isMobile ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: isMobile ? 0 : 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center text-center max-w-[600px] mx-auto px-[20px] sm:px-[60px]">
        <div className="flex flex-col gap-[24px] sm:gap-[40px] items-center w-full">
          <h2 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic text-[50px] sm:text-[40px] md:text-[50px] lg:text-[60px] text-black tracking-[-1.5px] sm:tracking-[-1.2px] md:tracking-[-1.5px] lg:tracking-[-1.8px]">
            Let's Connect
          </h2>
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] text-[16px] sm:text-[15px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Email your product URL + your goal; I'll propose a slot within 24 hours.
          </p>
          <ButtonLinkout1 />
        </div>
      </div>
    </motion.section>
  );
}

function Main({ ctaSectionRef }: { ctaSectionRef?: React.RefObject<HTMLElement> }) {
  return (
    <main className="box-border content-stretch flex flex-col items-start overflow-visible p-0 relative shrink-0 w-full" data-name="Main" tabIndex="-1">
      <Header />
      <ProblemsSection />
      <ValueProp />
      <ProcessSection />
      <DeliverablesSection />
      <FAQSection />
      <CTASection sectionRef={ctaSectionRef} />
    </main>
  );
}

function Footer({ onPrivacyClick }: { onPrivacyClick: () => void }) {
  const isMobile = useMobile();
  
  return (
    <motion.footer 
      className="box-border content-stretch flex flex-col gap-[40px] sm:gap-[60px] items-start justify-end border-t border-[#e9e9e9] overflow-visible pb-[40px] pt-[40px] sm:pt-[80px] px-0 relative shrink-0 w-full" 
      data-name="Footer"
      initial={{ opacity: isMobile ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: isMobile ? 0 : 0.6, ease: "easeOut" }}
    >
      {/* Main footer content */}
      <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
        {/* Brand and tagline */}
        <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
          <a
            href="https://lutsy.studio"
            className="inline-flex items-center justify-start rounded-[8px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#485c11] focus-visible:ring-offset-2 focus-visible:ring-offset-white transition-opacity hover:opacity-80"
            aria-label="Lutsy homepage"
          >
            <img src={imgLogo} alt="Lutsy" className="h-[40px] sm:h-[48px] w-auto" />
          </a>
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[16px] sm:text-[16px] text-[#6f6f6f] tracking-[-0.07px] sm:tracking-[-0.08px] max-w-[600px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            Fresh-eyes UX Review
          </p>
        </div>

        {/* Contact and service info */}
        <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
            <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[16px] sm:text-[14px] text-black tracking-[-0.07px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              <a href="mailto:contact@lutsy.studio" className="hover:text-[#485c11] transition-colors duration-200">contact@lutsy.studio</a> • San Francisco, CA
            </p>
            <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[16px] sm:text-[14px] text-[#6f6f6f] tracking-[-0.07px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              NDA-friendly • 5-7 day turnaround
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="content-stretch flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] sm:gap-[24px] relative shrink-0 w-full">
        <div className="flex flex-row gap-[24px] items-center">
          <button 
            onClick={onPrivacyClick}
            className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-[#6f6f6f] tracking-[-0.07px] hover:text-[#485c11] transition-colors duration-200 cursor-pointer" 
            style={{ fontVariationSettings: "'opsz' 14" }}
          >
            Privacy
          </button>
        </div>
        <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[16px] sm:text-[14px] text-[#6f6f6f] tracking-[-0.07px]" style={{ fontVariationSettings: "'opsz' 14" }}>
          © 2025 Lutsy.
        </p>
      </div>
    </motion.footer>
  );
}

function FloatingButton({ isVisible }: { isVisible: boolean }) {
  return (
    <div className={`fixed bottom-[20px] right-[20px] z-50 sm:hidden transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <a 
        href="mailto:contact@lutsy.studio"
        className="bg-[#485c11] cursor-pointer relative rounded-full shadow-lg block" 
        data-name="Floating button"
      >
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[6px] items-center justify-center px-[18px] py-[14px] relative">
            <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Get in Touch
            </p>
            <div className="flex flex-row items-center self-stretch">
              <Arrow />
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}

function Desktop({ onPrivacyClick }: { onPrivacyClick: () => void }) {
  const ctaSectionRef = useRef<HTMLElement>(null);
  const [showFloatingButton, setShowFloatingButton] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide floating button when CTA section is visible
        setShowFloatingButton(!entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of the CTA section is visible
        rootMargin: '0px 0px -100px 0px' // Account for some bottom margin
      }
    );

    if (ctaSectionRef.current) {
      observer.observe(ctaSectionRef.current);
    }

    return () => {
      if (ctaSectionRef.current) {
        observer.unobserve(ctaSectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white relative min-h-screen overflow-x-hidden" data-name="Desktop">
      {/* Mobile navigation overlay */}
      <NavigationMobile />
      
      <div className="flex flex-col items-center w-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[20px] pt-0 px-[20px] sm:px-[40px] relative w-full max-w-[1200px] mx-auto">
          {/* Desktop navigation */}
          <NavigationDesktop />
          
          <Main ctaSectionRef={ctaSectionRef} />
          <Footer onPrivacyClick={onPrivacyClick} />
        </div>
      </div>
      
      {/* Floating button for mobile only */}
      <FloatingButton isVisible={showFloatingButton} />
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy'>('home');

  const handlePrivacyClick = () => {
    setCurrentPage('privacy');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
  };

  if (currentPage === 'privacy') {
    return <PrivacyPage onBackToHome={handleBackToHome} />;
  }

  return <Desktop onPrivacyClick={handlePrivacyClick} />;
}
