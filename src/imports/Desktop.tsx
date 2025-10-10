import svgPaths from "./svg-hfuslxf459";
import imgInnerScreen from "figma:asset/2b19803f6c5e3c26b39f607fe129d1919300df81.png";
import imgLogo from "figma:asset/7e2cb6a493f6974234a10a9155f5a9e61358668d.png";
import imgLogo1 from "figma:asset/4ec63af28a6d626d15af88690afce1177f7da2aa.png";
import imgLogo2 from "figma:asset/22502dfc1e4e8a242285d42db1a38e6e853633fc.png";
import imgLogo3 from "figma:asset/ab60fb89b643e72e94769301b2a7ea53c2788495.png";
import imgLogo4 from "figma:asset/5353f37898f8daa86c3f3f525e94362e62de8b6a.png";
import imgLogo5 from "figma:asset/262ae2257b7f47685a1fd90f0f27d6372a2bca23.png";
import imgHeroImage from "figma:asset/27594e92b9b432843319210cddc6514b6ee87450.png";
import imgImage from "figma:asset/8c5a21adadebacbd69375684275fb89819b4d967.png";
import imgImage1 from "figma:asset/7d21c327f1e7740ce9c46cd595065dccfdcec99a.png";
import imgImage2 from "figma:asset/de5a74711b655d5394631256a2e65f4f4b7e3f42.png";

function Arrow() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0 w-[7px]" data-name="Arrow">
      <div className="h-[6.011px] relative shrink-0 w-[6px]" data-name="↗">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 7">
          <path d={svgPaths.p2c9abe00} fill="var(--fill-0, white)" id="â" />
        </svg>
      </div>
    </div>
  );
}

function ButtonLinkout() {
  return (
    <a className="bg-[#485c11] box-border content-stretch cursor-pointer flex gap-[2px] items-center justify-center overflow-visible px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button linkout" href="https://www.figma.com/sites">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Learn More
      </p>
      <div className="flex flex-row items-center self-stretch">
        <Arrow />
      </div>
    </a>
  );
}

function Navigation() {
  return (
    <div className="box-border content-stretch flex h-[148px] items-center justify-between max-w-[1500px] pb-[80px] pt-[20px] px-0 relative shrink-0 w-full" data-name="Navigation">
      <a className="[white-space-collapse:collapse] flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[30px] text-black text-nowrap tracking-[-1.5px]" href="https://www.figma.com/design/LeZcsXHphSxVqDWNIcIN5K?node-id=1-42" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="cursor-pointer leading-[1.2] whitespace-pre">Area</p>
      </a>
      <ButtonLinkout />
    </div>
  );
}

function Navigation1() {
  return (
    <nav className="box-border content-stretch flex flex-col items-center overflow-visible p-0 relative shrink-0 w-full" data-name="Navigation">
      <Navigation />
    </nav>
  );
}

function InnerScreen() {
  return (
    <div className="absolute h-[607.439px] left-1/2 rounded-[16px] top-[18.5px] translate-x-[-50%] w-[869.742px]" data-name="Inner screen">
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
        <img alt="Data points on top of landscape" className="absolute left-0 max-w-none size-full top-0" src={imgInnerScreen} />
      </div>
    </div>
  );
}

function Ipad() {
  return (
    <div aria-label="Visual chart illustrating a 78% increase in efficiency across 33 regions between 2021 and 2024, with clear upward trends year over year" className="absolute bg-black h-[644px] rounded-[24px] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[907px]" data-name="Ipad" style={{ left: "calc(50% + 0.5px)" }}>
      <div className="h-[644px] overflow-clip relative w-[907px]">
        <InnerScreen />
      </div>
      <div aria-hidden="true" className="absolute border-[2px_2px_0px] border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_-4px_20px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="bg-[#8e9c78] h-[362px] relative rounded-[30px] shrink-0 w-full" data-name="Hero image">
      <Ipad />
    </div>
  );
}

function Header() {
  return (
    <header className="box-border content-stretch flex flex-col gap-[240px] items-start max-w-[1500px] overflow-clip p-0 relative shrink-0 w-full" data-name="Header">
      <h1 className="block font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[160px] text-black text-center tracking-[-6.8px] w-full">Browse everything.</h1>
      <HeroImage />
    </header>
  );
}

function Logo() {
  return (
    <div className="basis-0 grow min-h-px min-w-px mix-blend-exclusion opacity-60 relative shrink-0 w-full" data-name="Logo">
      <img alt="Logoipsum" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLogo} />
    </div>
  );
}

function Logo1() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[84px] items-start justify-center overflow-clip p-[20px] relative shrink-0 w-[154px]" data-name="Logo 1">
      <Logo />
    </div>
  );
}

function Logo7() {
  return (
    <div className="basis-0 grow min-h-px min-w-px mix-blend-exclusion opacity-60 relative shrink-0 w-full" data-name="Logo">
      <img alt="Logoipsum" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLogo1} />
    </div>
  );
}

function Logo2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[84px] items-start justify-center overflow-clip p-[20px] relative shrink-0 w-[154px]" data-name="Logo 2">
      <Logo7 />
    </div>
  );
}

function Logo8() {
  return (
    <div className="basis-0 grow min-h-px min-w-px mix-blend-exclusion opacity-60 relative shrink-0 w-full" data-name="Logo">
      <img alt="Logoipsum" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLogo2} />
    </div>
  );
}

function Logo3() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[84px] items-start justify-center p-[20px] relative shrink-0 w-[154px]" data-name="Logo 3">
      <Logo8 />
    </div>
  );
}

function Logo9() {
  return (
    <div className="basis-0 grow min-h-px min-w-px mix-blend-exclusion opacity-60 relative shrink-0 w-full" data-name="Logo">
      <img alt="Logoipsum" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLogo3} />
    </div>
  );
}

function Logo4() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[84px] items-start justify-center overflow-clip p-[20px] relative shrink-0 w-[154px]" data-name="Logo 4">
      <Logo9 />
    </div>
  );
}

function Logo10() {
  return (
    <div className="basis-0 grow min-h-px min-w-px mix-blend-exclusion opacity-60 relative shrink-0 w-full" data-name="Logo">
      <img alt="Logoipsum" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLogo4} />
    </div>
  );
}

function Logo5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[84px] items-start justify-center p-[20px] relative shrink-0 w-[154px]" data-name="Logo 5">
      <Logo10 />
    </div>
  );
}

function Logo11() {
  return (
    <div className="basis-0 grow min-h-px min-w-px mix-blend-exclusion opacity-60 relative shrink-0 w-full" data-name="Logo">
      <img alt="Logoipsum" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgLogo5} />
    </div>
  );
}

function Logo6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] h-[81.818px] items-start justify-center overflow-clip p-[20px] relative shrink-0 w-[150px]" data-name="Logo 6">
      <Logo11 />
    </div>
  );
}

function LogoRow() {
  return (
    <div className="content-center flex flex-wrap gap-[40px] items-center justify-center relative shrink-0 w-full" data-name="Logo Row">
      <Logo1 />
      <Logo2 />
      <Logo3 />
      <Logo4 />
      <Logo5 />
      <Logo6 />
    </div>
  );
}

function LogoCloud() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[30px] items-center max-w-[1500px] px-0 py-[50px] relative shrink-0 w-full" data-name="Logo cloud">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Trusted by:
      </p>
      <LogoRow />
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start pl-0 pr-[400px] py-0 relative w-full">
          <h2 className="block font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#485c11] text-[12px] tracking-[-0.12px] w-[575.566px]">Benefits</h2>
          <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] min-w-full not-italic relative shrink-0 text-[60px] text-black tracking-[-1.8px]" style={{ width: "min-content" }}>
            We’ve cracked the code.
          </p>
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14", width: "min-content" }}>
            Area provides real insights, without the data overload.
          </p>
        </div>
      </div>
    </div>
  );
}

function CableIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Cable icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Cable icon">
          <path d={svgPaths.p37c59480} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text 1">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Amplify Insights</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.
      </p>
    </div>
  );
}

function IconLockup1() {
  return (
    <section aria-label="Area product benefit 1 of 4" className="basis-0 grow min-h-px min-w-[265px] relative shrink-0" data-name="Icon lockup 1">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start min-w-inherit pl-0 pr-[20px] py-[40px] relative w-full">
          <CableIcon />
          <Text1 />
        </div>
      </div>
    </section>
  );
}

function EarthIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Earth icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Earth icon">
          <path d={svgPaths.p26be9f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text 2">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Control Your Global Presence</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.
      </p>
    </div>
  );
}

function IconLockup2() {
  return (
    <section aria-label="Area product benefit 2 of 4" className="basis-0 grow min-h-px min-w-[265px] relative shrink-0" data-name="Icon lockup 2">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start min-w-inherit pl-0 pr-[20px] py-[40px] relative w-full">
          <EarthIcon />
          <Text2 />
        </div>
      </div>
    </section>
  );
}

function AccountIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Account icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Account icon">
          <path d={svgPaths.p1261ab00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text 3">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Remove Language Barriers</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.
      </p>
    </div>
  );
}

function IconLockup3() {
  return (
    <section aria-label="Area product benefit 3 of 4" className="basis-0 grow min-h-px min-w-[265px] relative shrink-0" data-name="Icon lockup 3">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start min-w-inherit pl-0 pr-[40px] py-[40px] relative w-full">
          <AccountIcon />
          <Text3 />
        </div>
      </div>
    </section>
  );
}

function ChartIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Chart icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Chart icon">
          <path d={svgPaths.p1abde500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text 4">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Visualize Growth</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.
      </p>
    </div>
  );
}

function IconLockup4() {
  return (
    <section aria-label="Area product benefit 4 of 4" className="basis-0 grow min-h-px min-w-[265px] relative shrink-0" data-name="Icon lockup 4">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start min-w-inherit pl-0 pr-[40px] py-[40px] relative w-full">
          <ChartIcon />
          <Text4 />
        </div>
      </div>
    </section>
  );
}

function IconsModule() {
  return (
    <div className="box-border content-start flex flex-wrap gap-[20px] items-start pb-0 pt-[40px] px-0 relative shrink-0 w-full" data-name="Icons module">
      <IconLockup1 />
      <IconLockup2 />
      <IconLockup3 />
      <IconLockup4 />
    </div>
  );
}

function HeadlineAndIcons() {
  return (
    <section className="box-border content-stretch flex flex-col gap-[50px] items-start overflow-visible pb-[60px] pt-[80px] px-0 relative shrink-0 w-full" data-name="Headline and icons">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Text />
      <IconsModule />
    </section>
  );
}

function HeroImage1() {
  return (
    <div className="h-[620px] relative rounded-[30px] shrink-0 w-full" data-name="Hero Image">
      <img alt="A image that shows a mountain range" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgHeroImage} />
    </div>
  );
}

function BenefitsSection() {
  return (
    <div className="box-border content-stretch flex flex-col items-start max-w-[1500px] pb-[120px] pt-0 px-0 relative shrink-0 w-full" data-name="Benefits section">
      <HeadlineAndIcons />
      <HeroImage1 />
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-start pl-0 pr-[80px] py-0 relative w-full">
          <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black tracking-[-1.8px] w-full">See the Big Picture</p>
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.`}</p>
        </div>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <section aria-label="Area value prop 1 of 4" className="relative shrink-0 w-full" data-name="List Item 1">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[30px] items-start justify-center leading-[1.4] pl-0 pr-[80px] py-[20px] relative text-[15px] tracking-[-0.075px] w-full">
          <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#6f6f6f] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            01
          </p>
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-black" style={{ fontVariationSettings: "'opsz' 14" }}>{`Spot Trends in Seconds: No more digging through numbers. `}</p>
        </div>
      </div>
    </section>
  );
}

function ListItem2() {
  return (
    <section aria-label="Area value prop 2 of 4" className="relative shrink-0 w-full" data-name="List Item 2">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[30px] items-start justify-center leading-[1.4] pl-0 pr-[80px] py-[20px] relative text-[15px] tracking-[-0.075px] w-full">
          <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#6f6f6f] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            02
          </p>
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-black" style={{ fontVariationSettings: "'opsz' 14" }}>{`Get Everyone on the Same Page: Share easy-to-understand reports with your team. `}</p>
        </div>
      </div>
    </section>
  );
}

function ListItem3() {
  return (
    <section aria-label="Area value prop 3 of 4" className="relative shrink-0 w-full" data-name="List Item 3">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[30px] items-start justify-center leading-[1.4] pl-0 pr-[80px] py-[20px] relative text-[15px] tracking-[-0.075px] w-full">
          <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#6f6f6f] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            03
          </p>
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
            Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.
          </p>
        </div>
      </div>
    </section>
  );
}

function ListItem4() {
  return (
    <section aria-label="Area value prop 4 of 4" className="relative shrink-0 w-full" data-name="List Item 4">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[30px] items-start justify-center leading-[1.4] pl-0 pr-[80px] py-[20px] relative text-[15px] tracking-[-0.075px] w-full">
          <p className="font-['DM_Sans:Bold',_sans-serif] font-bold relative shrink-0 text-[#6f6f6f] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            04
          </p>
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow min-h-px min-w-px relative shrink-0 text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
            Your Global Snapshot: Get a quick, clear overview of your entire operation.
          </p>
        </div>
      </div>
    </section>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="List">
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Button() {
  return (
    <a className="bg-[#dfecc6] box-border content-stretch cursor-pointer flex flex-col gap-[10px] items-center justify-center overflow-visible px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button" href="https://www.figma.com/sites">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Discover More
      </p>
    </a>
  );
}

function Text5() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[40px] grow items-start min-h-px min-w-px pb-[80px] pt-[60px] px-0 relative shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Title />
      <List />
      <Button />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[711px] relative rounded-[30px] shrink-0 w-full" data-name="Image">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[30px]">
        <img alt="A render of three white cylindrical columns, against a warm creme background" className="absolute max-w-none object-50%-50% object-cover rounded-[30px] size-full" src={imgImage} />
        <div className="absolute bg-[rgba(0,0,0,0.06)] inset-0 rounded-[30px]" />
      </div>
      <div className="flex flex-col items-end size-full">
        <div className="h-[711px] w-full" />
      </div>
    </div>
  );
}

function FeaturesCarouselV1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[20px] grow items-start max-w-[1600px] min-h-px min-w-px relative shrink-0" data-name="Features carousel v1">
      <Image />
    </div>
  );
}

function FeaturesCarousel() {
  return (
    <section className="box-border content-stretch flex gap-[20px] items-start max-w-[1500px] overflow-visible pb-[120px] pt-0 px-0 relative shrink-0 w-full" data-name="Features carousel">
      <Text5 />
      <FeaturesCarouselV1 />
    </section>
  );
}

function Button1() {
  return (
    <a className="bg-[#dfecc6] box-border content-stretch cursor-pointer flex flex-col gap-[10px] items-center justify-center overflow-visible px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button" href="https://www.figma.com/sites">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Discover More
      </p>
    </a>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 w-full" data-name="Text content">
      <h2 className="block font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#485c11] text-[12px] text-center tracking-[-0.12px]" style={{ width: "min-content" }}>
        Specs
      </h2>
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] min-w-full not-italic relative shrink-0 text-[60px] text-black text-center tracking-[-1.8px]" style={{ width: "min-content" }}>
        Why Choose Area?
      </p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] min-w-full relative shrink-0 text-[#6f6f6f] text-[15px] text-center tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14", width: "min-content" }}>{`You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business. `}</p>
      <Button1 />
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#929292] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-center px-[240px] py-[80px] relative w-full">
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function TableItem() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="table item">
      <div aria-hidden="true" className="absolute border-[#929292] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[96px] items-start justify-center px-[30px] py-[40px] relative w-full">
          <div className="flex flex-col font-['DM_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[25.714px] text-black text-nowrap tracking-[-2.0571px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[1.2] whitespace-pre">Area</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Check icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check icon">
          <path d={svgPaths.p2ba53500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CheckIcon />
          <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">Ultra-fast browsing</p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Check icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check icon">
          <path d={svgPaths.p2ba53500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CheckIcon1 />
          <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">Advanced AI insights</p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Check icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check icon">
          <path d={svgPaths.p2ba53500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CheckIcon2 />
          <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">Seamless integration</p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon5() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Check icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check icon">
          <path d={svgPaths.p2ba53500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CheckIcon5 />
          <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">Full UTF-8 support</p>
        </div>
      </div>
    </div>
  );
}

function Column1() {
  return (
    <section aria-label="The features that are and are not included in Area\'s offering" className="basis-0 bg-white grow min-h-px min-w-[200px] relative rounded-[20px] shrink-0" data-name="Column 1">
      <div className="content-stretch flex flex-col items-start min-w-inherit overflow-clip relative w-full">
        <TableItem />
        <TableItem1 />
        <TableItem2 />
        <TableItem3 />
        <TableItem2 />
        <TableItem1 />
        <TableItem6 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9e9e9] border-solid inset-0 pointer-events-none rounded-[20px] shadow-[0px_2px_8px_0px_rgba(0,0,0,0.08)]" />
    </section>
  );
}

function TableItem7() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="table item">
      <div aria-hidden="true" className="absolute border-[#929292] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[96px] items-start justify-center px-[30px] py-[40px] relative w-full">
          <div className="flex flex-col font-['Rethink_Sans:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6f6f6f] text-[22.857px] text-nowrap tracking-[-1.8286px]">
            <p className="leading-[1.2] whitespace-pre">WebSurge</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckIcon6() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Check icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check icon">
          <path d={svgPaths.p2ba53500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CheckIcon6 />
          <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">Fast browsing</p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Check icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check icon">
          <path d={svgPaths.p2ba53500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem9() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CheckIcon7 />
          <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">Basic AI recommendations</p>
        </div>
      </div>
    </div>
  );
}

function CheckIcon8() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Check icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Check icon">
          <path d={svgPaths.p2ba53500} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CheckIcon8 />
          <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">Restricts customization</p>
        </div>
      </div>
    </div>
  );
}

function CloseIcon() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Close icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Close icon">
          <path d={svgPaths.p3a0f7300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem11() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CloseIcon />
          <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">Basic AI insights</p>
        </div>
      </div>
    </div>
  );
}

function CloseIcon1() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Close icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Close icon">
          <path d={svgPaths.p3a0f7300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CloseIcon1 />
          <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">Potential display errors</p>
        </div>
      </div>
    </div>
  );
}

function Column2() {
  return (
    <section aria-label="The features that are and are not included in WebSurge\'s offering" className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-[200px] overflow-visible p-0 relative shrink-0" data-name="Column 2">
      <TableItem7 />
      <TableItem8 />
      <TableItem9 />
      <TableItem10 />
      <TableItem11 />
      <TableItem8 />
      <TableItem13 />
    </section>
  );
}

function TableItem14() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="table item">
      <div aria-hidden="true" className="absolute border-[#929292] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row justify-center size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[96px] items-start justify-center px-[30px] py-[40px] relative w-full">
          <div className="flex flex-col font-['Reddit_Mono:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6f6f6f] text-[21.654px] text-nowrap tracking-[-1.7323px]">
            <p className="leading-[1.2] whitespace-pre">HyperView</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CloseIcon2() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Close icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Close icon">
          <path d={svgPaths.p3a0f7300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem15() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CloseIcon2 />
          <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">Moderate speeds</p>
        </div>
      </div>
    </div>
  );
}

function CloseIcon3() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Close icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Close icon">
          <path d={svgPaths.p3a0f7300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem16() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CloseIcon3 />
          <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">No AI assistance</p>
        </div>
      </div>
    </div>
  );
}

function CloseIcon4() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Close icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Close icon">
          <path d={svgPaths.p3a0f7300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem17() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_0.5px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CloseIcon4 />
          <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">Steep learning curve</p>
        </div>
      </div>
    </div>
  );
}

function CloseIcon7() {
  return (
    <div className="relative shrink-0 size-[14px]" data-name="Close icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g id="Close icon">
          <path d={svgPaths.p3a0f7300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function TableItem20() {
  return (
    <div className="relative shrink-0 w-full" data-name="Table item">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0px_0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] items-center px-[30px] py-[32px] relative w-full">
          <CloseIcon7 />
          <p className="font-['Roboto_Mono:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[12px] text-black text-center text-nowrap tracking-[-0.12px] whitespace-pre">Partial UTF-8 support</p>
        </div>
      </div>
    </div>
  );
}

function Column3() {
  return (
    <section aria-label="The features that are and are not included in HyperView\'s offering" className="basis-0 box-border content-stretch flex flex-col grow items-start min-h-px min-w-[200px] overflow-visible p-0 relative shrink-0" data-name="Column 3">
      <TableItem14 />
      <TableItem15 />
      <TableItem16 />
      <TableItem17 />
      <TableItem16 />
      <TableItem15 />
      <TableItem20 />
    </section>
  );
}

function Table() {
  return (
    <section aria-label="Table comparing and contrasting the feature offerings of Area, WebSurge, and HyperView" className="box-border content-stretch flex items-start overflow-x-auto overflow-y-clip p-0 relative rounded-[20px] shrink-0 w-full" data-name="Table">
      <Column1 />
      <Column2 />
      <Column3 />
    </section>
  );
}

function SpecificationsTable() {
  return (
    <section className="box-border content-stretch flex flex-col gap-[20px] items-start max-w-[1500px] overflow-clip pb-[120px] pt-0 px-0 relative shrink-0 w-full" data-name="Specifications table">
      <Content />
      <Table />
    </section>
  );
}

function Image1() {
  return (
    <div className="aspect-[550/624] basis-0 grow min-h-px min-w-px relative rounded-[30px] shrink-0" data-name="Image">
      <img alt="A image of a concrete sphere, balanced between two other larger spheres" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage1} />
      <div className="size-full">
        <div className="aspect-[550/624] size-full" />
      </div>
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex flex-col font-normal gap-[8px] items-start leading-[1.4] relative shrink-0 w-full" data-name="Name">
      <p className="font-['DM_Sans:Regular',_sans-serif] relative shrink-0 text-[15px] text-black tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        John Smith
      </p>
      <p className="font-['Roboto_Mono:Regular',_sans-serif] relative shrink-0 text-[#485c11] text-[12px] tracking-[-0.12px] w-full">Head of Data</p>
    </div>
  );
}

function Quote() {
  return (
    <section aria-label="Quote from a user about the product Area" className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Quote">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start justify-center pl-[50px] pr-0 py-0 relative size-full">
          <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[1] not-italic relative shrink-0 text-[40px] text-black tracking-[-1.6px] w-full">{`“I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”`}</p>
          <Name />
        </div>
      </div>
    </section>
  );
}

function TestimonialSection() {
  return (
    <div className="box-border content-stretch flex gap-[20px] h-[789.382px] items-start max-w-[1500px] pb-[120px] pt-0 px-0 relative shrink-0 w-full" data-name="Testimonial section">
      <Image1 />
      <Quote />
    </div>
  );
}

function Button2() {
  return (
    <a className="bg-[#dfecc6] box-border content-stretch cursor-pointer flex flex-col gap-[10px] items-center justify-center overflow-visible px-[22px] py-[14px] relative rounded-[1000px] shrink-0" data-name="Button" href="https://www.figma.com/sites">
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Discover More
      </p>
    </a>
  );
}

function Frame2147236346() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black text-center text-nowrap tracking-[-1.8px] whitespace-pre">Map Your Success</p>
      <Button2 />
    </div>
  );
}

function Frame2147236330() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Get Started</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        With our intuitive setup, you’re up and running in minutes.
      </p>
    </div>
  );
}

function Lockup1() {
  return (
    <section aria-label="Step 1 of 3" className="basis-0 grow min-h-px min-w-[240px] relative shrink-0" data-name="Lockup 1">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-start min-w-inherit pb-[20px] pl-0 pr-[30px] pt-[60px] relative w-full">
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1] relative shrink-0 text-[#929292] text-[80px] tracking-[-3.2px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            01
          </p>
          <Frame2147236330 />
        </div>
      </div>
    </section>
  );
}

function Frame2147236331() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Customize and Configure</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Adapt Area to your specific requirements and preferences.
      </p>
    </div>
  );
}

function Lockup2() {
  return (
    <section aria-label="Step 2 of 3" className="basis-0 grow min-h-px min-w-[240px] relative shrink-0" data-name="Lockup 2">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-start min-w-inherit pb-[20px] pl-0 pr-[30px] pt-[60px] relative w-full">
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1] relative shrink-0 text-[#929292] text-[80px] tracking-[-3.2px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            02
          </p>
          <Frame2147236331 />
        </div>
      </div>
    </section>
  );
}

function Frame2147236332() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Grow Your Business</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Make informed decisions to exceed your goals.
      </p>
    </div>
  );
}

function Lockup3() {
  return (
    <section aria-label="Step 3 of 3" className="basis-0 grow min-h-px min-w-[240px] relative shrink-0" data-name="Lockup 3">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-start min-w-inherit pb-[20px] pl-0 pr-[30px] pt-[60px] relative w-full">
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1] relative shrink-0 text-[#929292] text-[80px] tracking-[-3.2px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            03
          </p>
          <Frame2147236332 />
        </div>
      </div>
    </section>
  );
}

function Component3Up() {
  return (
    <div className="content-stretch flex gap-[20px] items-start justify-center relative shrink-0 w-full" data-name="3-up">
      <Lockup1 />
      <Lockup2 />
      <Lockup3 />
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section className="box-border content-stretch flex flex-col gap-[80px] items-start max-w-[1500px] overflow-visible pb-[120px] pt-[80px] px-0 relative shrink-0 w-full" data-name="How it works section">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Frame2147236346 />
      <Component3Up />
    </section>
  );
}

function Image2() {
  return (
    <div className="basis-0 grow h-full min-h-px min-w-px relative shrink-0" data-name="Image">
      <img alt="An eye-catching landscape of green." className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage2} />
      <div className="flex flex-row items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function ImageContainer() {
  return (
    <div aria-label="Image showing a winding path going up a mountain" className="aspect-[1120/620] content-stretch flex gap-[10px] items-start max-h-[830.357px] max-w-[1500px] overflow-clip relative rounded-[30px] shrink-0 w-full" data-name="Image container">
      <Image2 />
    </div>
  );
}

function HeroImage2() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-center pb-[40px] pt-0 px-0 relative shrink-0 w-full" data-name="Hero image">
      <ImageContainer />
    </div>
  );
}

function Arrow1() {
  return (
    <div className="content-stretch flex gap-[10px] h-full items-center relative shrink-0 w-[7px]" data-name="Arrow">
      <div className="h-[6.011px] relative shrink-0 w-[6px]" data-name="↗">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 7">
          <path d={svgPaths.p2c9abe00} fill="var(--fill-0, white)" id="â" />
        </svg>
      </div>
    </div>
  );
}

function ButtonLinkout1() {
  return (
    <a className="bg-[#485c11] cursor-pointer relative rounded-[1000px] shrink-0 w-full" data-name="Button linkout" href="https://www.figma.com/sites">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Learn More
          </p>
          <div className="flex flex-row items-center self-stretch">
            <Arrow1 />
          </div>
        </div>
      </div>
    </a>
  );
}

function CenteredCta() {
  return (
    <section className="max-w-[1500px] relative shrink-0 w-full" data-name="Centered CTA">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-center max-w-inherit px-[300px] py-[120px] relative w-full">
          <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black text-center tracking-[-1.8px] w-full">Connect with us</p>
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] text-center tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
            Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
          </p>
          <ButtonLinkout1 />
        </div>
      </div>
    </section>
  );
}

function Main() {
  return (
    <main className="box-border content-stretch flex flex-col items-start overflow-visible p-0 relative shrink-0 w-full" data-name="Main" tabIndex="-1">
      <LogoCloud />
      <BenefitsSection />
      <FeaturesCarousel />
      <SpecificationsTable />
      <TestimonialSection />
      <HowItWorksSection />
      <HeroImage2 />
      <CenteredCta />
    </main>
  );
}

function NavItems() {
  return (
    <div className="content-stretch cursor-pointer flex font-['DM_Sans:Bold',_sans-serif] font-bold gap-[27px] items-center leading-[0] relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.35px]" data-name="Nav Items">
      <button className="[white-space-collapse:collapse] block relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4] text-nowrap whitespace-pre">Benefits</p>
      </button>
      <button className="[white-space-collapse:collapse] block relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4] text-nowrap whitespace-pre">Specifications</p>
      </button>
      <button className="[white-space-collapse:collapse] block relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4] text-nowrap whitespace-pre">How-to</p>
      </button>
    </div>
  );
}

function Links() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Links">
      <NavItems />
    </div>
  );
}

function Logo12() {
  return (
    <div className="h-[70px] relative shrink-0 w-[31.751px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 70">
        <g id="Logo">
          <path d={svgPaths.p385a6880} fill="var(--fill-0, black)" id="Union" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 content-stretch flex font-['Roboto_Mono:Regular',_sans-serif] font-normal gap-[16px] grow items-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#485c11] text-[12px] text-nowrap tracking-[-0.12px]" data-name="Text">
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4] text-nowrap whitespace-pre">© Area.</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0">
        <p className="leading-[1.4] text-nowrap whitespace-pre">2025</p>
      </div>
    </div>
  );
}

function Credits() {
  return (
    <div className="content-stretch flex gap-[40px] items-end relative shrink-0 w-full" data-name="Credits">
      <Logo12 />
      <Text6 />
      <div className="flex flex-col font-['Roboto_Mono:Regular',_sans-serif] font-normal justify-center leading-[0] relative shrink-0 text-[#485c11] text-[12px] text-nowrap tracking-[-0.12px]">
        <p className="leading-[1.4] whitespace-pre">All Rights Reserved</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="box-border content-stretch flex flex-col gap-[80px] items-start justify-end max-w-[1500px] overflow-visible pb-[20px] pt-[40px] px-0 relative shrink-0 w-full" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Links />
      <Credits />
    </footer>
  );
}

function NavItems1() {
  return (
    <div className="absolute backdrop-blur-[15px] backdrop-filter bg-[rgba(255,255,255,0.4)] box-border content-stretch cursor-pointer flex font-['DM_Sans:Bold',_sans-serif] font-bold gap-[27px] items-center leading-[0] left-1/2 overflow-clip px-[24px] py-[20px] rounded-[100px] text-[14px] text-black text-center text-nowrap top-[16px] tracking-[-0.35px] translate-x-[-50%]" data-name="Nav Items">
      <button aria-label="Jump to product benefits section" className="[white-space-collapse:collapse] block relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4] text-nowrap whitespace-pre">Benefits</p>
      </button>
      <button aria-label="Jump to product specifications section" className="[white-space-collapse:collapse] block relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4] text-nowrap whitespace-pre">Specifications</p>
      </button>
      <button aria-label="Jump to product how-to section" className="[white-space-collapse:collapse] block relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4] text-nowrap whitespace-pre">How-to</p>
      </button>
      <button aria-label="Jump to contact us section" className="[white-space-collapse:collapse] block relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4] text-nowrap whitespace-pre">Contact Us</p>
      </button>
    </div>
  );
}

export default function Desktop() {
  return (
    <div className="bg-white relative size-full" data-name="Desktop">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[20px] pt-0 px-[40px] relative size-full">
          <NavItems1 />
          <Navigation1 />
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}