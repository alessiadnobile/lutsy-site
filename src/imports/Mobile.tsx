import svgPaths from "./svg-8gejyvcm7i";
import imgInnerScreen from "figma:asset/59d8f7e934db11a36b1ce1b6acedbc508350e6b5.png";
import imgInnerScreen1 from "figma:asset/14018c2a05da0fe7fa60fb0a533763ceb2a6a93d.png";

function Group8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 text-black text-center">
      <h1 className="[grid-area:1_/_1] block font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] ml-[171.5px] mt-0 not-italic relative text-[160px] tracking-[-6.8px] translate-x-[-50%] w-[343px]">No roasts. Just fixes.</h1>
      <h1 className="[grid-area:1_/_1] block font-['DM_Sans:Regular',_sans-serif] font-normal leading-[33px] ml-[171.5px] mt-[172px] relative text-[24px] translate-x-[-50%] w-[299px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        founder-friendly audits to optimize what you have before any redesign
      </h1>
    </div>
  );
}

function UiElements() {
  return (
    <div className="absolute h-[22.195px] left-[20.2px] top-[8.06px] w-[207.243px]" data-name="UI elements">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 23">
        <g id="UI elements">
          <path d={svgPaths.p2d90ce80} fill="var(--fill-0, black)" id="Mockup elements 08" />
          <g id="Mockup elements 07">
            <path d={svgPaths.p18cd2400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p18437400} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1a8dd800} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3c7f6e00} fill="var(--fill-0, white)" />
          </g>
          <g id="Union">
            <path d={svgPaths.p37ab3000} fill="var(--fill-0, white)" />
            <path clipRule="evenodd" d={svgPaths.p2f276740} fill="var(--fill-0, white)" fillRule="evenodd" />
            <path d={svgPaths.p3fb1d770} fill="var(--fill-0, white)" />
          </g>
          <g id="Vector">
            <path d={svgPaths.p125ae4f0} fill="var(--fill-0, white)" />
            <path d={svgPaths.p1ca2d700} fill="var(--fill-0, white)" />
            <path d={svgPaths.p3f22b200} fill="var(--fill-0, white)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function InnerScreen() {
  return (
    <div className="absolute h-[521.757px] left-[10.95px] overflow-clip right-[10.95px] rounded-[27.365px] top-[10.03px]" data-name="Inner screen">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[27.365px]">
        <img alt="Data points on top of landscape" className="absolute max-w-none object-50%-50% object-cover rounded-[27.365px] size-full" src={imgInnerScreen} />
        <div className="absolute bg-[rgba(0,0,0,0.25)] inset-0 rounded-[27.365px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[27.365px]">
          <img alt="Data points on top of landscape" className="absolute h-full left-[-227.01%] max-w-none top-[-11.37%] w-[377.35%]" src={imgInnerScreen1} />
        </div>
      </div>
      <UiElements />
    </div>
  );
}

function IPhone() {
  return (
    <div className="absolute bg-black h-[541.824px] rounded-[34.662px] translate-x-[-50%] translate-y-[-50%] w-[270px]" data-name="iPhone" style={{ top: "calc(50% + 41px)", left: "calc(50% + 0.5px)" }}>
      <div className="h-[541.824px] overflow-clip relative w-[270px]">
        <InnerScreen />
      </div>
      <div aria-hidden="true" className="absolute border border-[#929292] border-solid inset-0 pointer-events-none rounded-[34.662px] shadow-[0px_-2.342px_11.709px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function HeroImage() {
  return (
    <div className="bg-[#8e9c78] h-[362px] relative rounded-[30px] shrink-0 w-full" data-name="Hero image">
      <IPhone />
    </div>
  );
}

function Header() {
  return (
    <header className="max-w-[1600px] relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-col items-center max-w-inherit overflow-clip size-full">
        <div className="box-border content-stretch flex flex-col gap-[120px] items-center max-w-inherit pb-0 pt-[120px] px-[16px] relative w-full">
          <Group8 />
          <HeroImage />
        </div>
      </div>
    </header>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[30px] items-start pl-0 pr-[20px] py-0 relative w-full">
          <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black tracking-[-1.8px] w-full">Does this sound like your product?</p>
        </div>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text 1">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Pre-ship gut check</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Your product is nearly there, but you need an honest outside read before you lock the launch.
      </p>
    </div>
  );
}

function IconLockup1() {
  return (
    <section aria-label="Area product benefit 1 of 4" className="min-w-[265px] relative shrink-0 w-full" data-name="Icon lockup 1">
      <div aria-hidden="true" className="absolute border-[#8e9c78] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start min-w-inherit pl-0 pr-[20px] py-[40px] relative w-full">
          <Text1 />
        </div>
      </div>
    </section>
  );
}

function Text2() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text 2">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Just shipped, not sure</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        You launched, and can’t tell if a first-time user actually “gets it” without you explaining.
      </p>
    </div>
  );
}

function IconLockup2() {
  return (
    <section aria-label="Area product benefit 2 of 4" className="min-w-[265px] relative shrink-0 w-full" data-name="Icon lockup 2">
      <div aria-hidden="true" className="absolute border-[#8e9c78] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[20px] items-start min-w-inherit pl-0 pr-[20px] py-[40px] relative w-full">
          <Text2 />
        </div>
      </div>
    </section>
  );
}

function Text3() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text 3">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Activation drag</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        People sign up, then stall before first value. Onboarding feels like work, not momentum.
      </p>
    </div>
  );
}

function IconLockup3() {
  return (
    <section aria-label="Area product benefit 3 of 4" className="min-w-[265px] relative shrink-0 w-full" data-name="Icon lockup 3">
      <div aria-hidden="true" className="absolute border-[#8e9c78] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start min-w-inherit pl-0 pr-[40px] py-[40px] relative w-full">
          <Text3 />
        </div>
      </div>
    </section>
  );
}

function Text4() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full" data-name="Text 4">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Backlog blur</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        The list is long; what to do first isn’t obvious.
      </p>
    </div>
  );
}

function IconLockup4() {
  return (
    <section aria-label="Area product benefit 4 of 4" className="h-[99px] min-w-[265px] relative shrink-0 w-full" data-name="Icon lockup 4">
      <div aria-hidden="true" className="absolute border-[#8e9c78] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] h-[99px] items-start min-w-inherit pl-0 pr-[40px] py-[40px] relative w-full">
          <Text4 />
        </div>
      </div>
    </section>
  );
}

function IconsModule() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[20px] h-[700px] items-start pb-0 pt-[40px] px-0 relative shrink-0 w-full" data-name="Icons module">
      <IconLockup1 />
      <IconLockup2 />
      <IconLockup3 />
      <IconLockup4 />
    </div>
  );
}

function HeadlineAndIcons() {
  return (
    <section className="box-border content-stretch flex flex-col h-[921px] items-start overflow-visible pb-0 pt-[80px] px-0 relative shrink-0 w-full" data-name="Headline and icons">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Text />
      <IconsModule />
    </section>
  );
}

function BenefitsSection() {
  return (
    <div className="max-w-[1600px] relative shrink-0 w-full" data-name="Benefits section">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start max-w-inherit pb-[80px] pt-0 px-[16px] relative w-full">
          <HeadlineAndIcons />
        </div>
      </div>
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[30px] items-center relative shrink-0 text-center w-full" data-name="Text content">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black tracking-[-1.8px] w-full">Give me a week. You’ll know what to change.</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        I trace the real journeys, highlight the confusing bits, and rank the fixes.
      </p>
    </div>
  );
}

function Content() {
  return (
    <div className="relative shrink-0 w-full" data-name="Content">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-center px-[16px] py-[80px] relative w-full">
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function SpecificationsTable() {
  return (
    <section className="box-border content-stretch flex flex-col gap-[20px] items-start max-w-[1600px] overflow-clip p-0 relative shrink-0 w-full" data-name="Specifications table">
      <Content />
    </section>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full" data-name="Title">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black tracking-[-1.8px] w-full">What you get</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        Decisions get easier from here. Less second-guessing, more certainty about what matters.
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <section aria-label="Area value prop 1 of 4" className="box-border content-stretch flex gap-[30px] items-start justify-center overflow-visible px-0 py-[20px] relative shrink-0 w-full" data-name="List Item 1">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] text-nowrap tracking-[-0.075px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        01
      </p>
      <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[0px] text-[15px] text-black tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>
          Deck of annotated screenshots
        </span>
        <span>{` — one issue per slide with explained fix`}</span>
      </p>
    </section>
  );
}

function ListItem2() {
  return (
    <section aria-label="Area value prop 2 of 4" className="box-border content-stretch flex gap-[30px] items-start justify-center overflow-visible px-0 py-[20px] relative shrink-0 w-full" data-name="List Item 2">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] text-nowrap tracking-[-0.075px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        02
      </p>
      <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[0px] text-[15px] text-black tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Severity & order of action`}</span>
        <span>{` — Critical / Major / Minor`}</span>
      </p>
    </section>
  );
}

function ListItem3() {
  return (
    <section aria-label="Area value prop 3 of 4" className="box-border content-stretch flex gap-[30px] items-start justify-center overflow-visible px-0 py-[20px] relative shrink-0 w-full" data-name="List Item 3">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] text-nowrap tracking-[-0.075px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        03
      </p>
      <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[0px] text-[15px] text-black tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>
          Copy suggestions
        </span>
        <span>{` — headlines, CTAs, empty & error states`}</span>
      </p>
    </section>
  );
}

function ListItem4() {
  return (
    <section aria-label="Area value prop 4 of 4" className="box-border content-stretch flex gap-[30px] items-start justify-center overflow-visible px-0 py-[20px] relative shrink-0 w-full" data-name="List Item 4">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] text-nowrap tracking-[-0.075px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        04
      </p>
      <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[0px] text-[15px] text-black tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span className="font-['DM_Sans:Bold',_sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>{`Video walkthrough `}</span>— for team-wide alignment
      </p>
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

function Text5() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[40px] items-start pb-0 pt-[80px] px-0 relative shrink-0 w-full" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Title />
      <List />
    </div>
  );
}

function FeaturesCarousel() {
  return (
    <section className="max-w-[1500px] relative shrink-0 w-full" data-name="Features carousel">
      <div className="max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col items-start max-w-inherit pb-[80px] pt-0 px-[32px] relative w-full">
          <Text5 />
        </div>
      </div>
    </section>
  );
}

function Frame2147236346() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black text-center text-nowrap tracking-[-1.8px] whitespace-pre">How it Works</p>
    </div>
  );
}

function Frame2147236330() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">Hand it Over</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Share a guest login or demo link. Tell me “focus on {flow}” or “entire product.” That’s all.`}</p>
    </div>
  );
}

function Lockup1() {
  return (
    <section aria-label="Step 1 of 3" className="basis-0 grow min-h-px min-w-[240px] relative shrink-0" data-name="Lockup 1">
      <div aria-hidden="true" className="absolute border-[#8e9c78] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-start min-w-inherit pb-[20px] pl-0 pr-[30px] pt-[60px] relative w-full">
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1] relative shrink-0 text-[#485c11] text-[80px] tracking-[-3.2px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">I Audit</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        I simulate your users’ real journeys, capture friction, and write specific fixes.
      </p>
    </div>
  );
}

function Lockup2() {
  return (
    <section aria-label="Step 2 of 3" className="basis-0 grow min-h-px min-w-[240px] relative shrink-0" data-name="Lockup 2">
      <div aria-hidden="true" className="absolute border-[#8e9c78] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[60px] items-start min-w-inherit pb-[20px] pl-0 pr-[30px] pt-[60px] relative w-full">
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1] relative shrink-0 text-[#485c11] text-[80px] tracking-[-3.2px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
      <div aria-hidden="true" className="absolute border-[#8e9c78] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
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
    <div className="content-stretch flex gap-[20px] items-start overflow-x-auto overflow-y-clip relative shrink-0 w-full" data-name="3-up">
      <Lockup1 />
      <Lockup2 />
      <Lockup3 />
    </div>
  );
}

function HowItWorksSection() {
  return (
    <section className="max-w-[1600px] relative shrink-0 w-full" data-name="How it works section">
      <div className="max-w-inherit overflow-x-auto overflow-y-clip size-full">
        <div className="box-border content-stretch flex flex-col gap-[80px] items-start max-w-inherit px-[16px] py-[80px] relative w-full">
          <Frame2147236346 />
          <Component3Up />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </section>
  );
}

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
    <a className="bg-[#485c11] cursor-pointer relative rounded-[1000px] shrink-0 w-full" data-name="Button linkout" href="https://www.figma.com/sites">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[2px] items-center justify-center px-[22px] py-[14px] relative w-full">
          <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[14px] text-center text-nowrap text-white tracking-[-0.35px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Send Details
          </p>
          <div className="flex flex-row items-center self-stretch">
            <Arrow />
          </div>
        </div>
      </div>
    </a>
  );
}

function CenteredCta() {
  return (
    <section className="max-w-[1600px] relative shrink-0 w-full" data-name="Centered CTA">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[0.5px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col items-center max-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-center max-w-inherit px-[16px] py-[120px] relative w-full">
          <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black text-center tracking-[-1.8px] w-full">Let’s Connect</p>
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] text-center tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>{`Email your product URL + your goal; I'll propose a slot within 24 hours.`}</p>
          <ButtonLinkout />
        </div>
      </div>
    </section>
  );
}

function Main() {
  return (
    <main className="box-border content-stretch flex flex-col items-start overflow-visible p-0 relative shrink-0 w-full" data-name="Main" tabIndex="-1">
      <BenefitsSection />
      <SpecificationsTable />
      <FeaturesCarousel />
      <HowItWorksSection />
      <CenteredCta />
    </main>
  );
}

function Footer() {
  return (
    <div className="absolute h-[362px] left-0 top-0 w-[359px]" data-name="Footer">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute h-[28.797px] left-0 top-0 w-[49.68px]" data-name="Heading 3">
      <p className="absolute font-['DM_Sans:Bold',_sans-serif] font-bold leading-[28.8px] left-0 text-[#485c11] text-[24px] text-nowrap top-[-0.5px] tracking-[-0.6px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Lutsy
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[22.398px] left-0 top-[48.8px] w-[157.859px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[22.4px] left-0 text-[#6f6f6f] text-[16px] text-nowrap top-[-0.5px] tracking-[-0.08px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Fresh-eyes UX review
      </p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[71px] left-0 top-0 w-[343px]" data-name="Container">
      <Heading3 />
      <Paragraph />
    </div>
  );
}

function Link() {
  return (
    <div className="absolute content-stretch flex h-[18.5px] items-start left-0 top-[0.5px] w-[98.594px]" data-name="Link">
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[19.6px] relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.07px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        contact@lutsy.studiocom
      </p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[19.594px] left-0 top-0 w-[224.188px]" data-name="Paragraph">
      <Link />
      <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[19.6px] left-[183.59px] text-[14px] text-black text-nowrap top-[-0.5px] tracking-[-0.07px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        • SF Bay Area (PST)
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[19.594px] left-0 top-[31.59px] w-[229.789px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[19.6px] left-0 text-[#6f6f6f] text-[14px] text-nowrap top-[-0.5px] tracking-[-0.07px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        NDA-friendly • 5–10 day turnaround
      </p>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[51px] left-0 top-[111px] w-[343px]" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Footer1() {
  return (
    <div className="absolute h-[162px] left-[16px] top-[80px] w-[343px]" data-name="Footer">
      <Container />
      <Container1 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[19.594px] left-0 top-0 w-[46.602px]" data-name="Button">
      <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[19.6px] left-0 text-[#6f6f6f] text-[14px] text-nowrap top-[-0.5px] tracking-[-0.07px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Privacy
      </p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[19.594px] left-[1118px] top-0 w-[82.109px]" data-name="Paragraph">
      <p className="absolute font-['DM_Sans:Regular',_sans-serif] font-normal leading-[19.6px] left-0 text-[#6f6f6f] text-[14px] text-nowrap top-[-0.5px] tracking-[-0.07px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        © 2025 Luar.
      </p>
    </div>
  );
}

function Footer2() {
  return (
    <div className="absolute h-[20px] left-[16px] top-[302px] w-[343px]" data-name="Footer">
      <Button />
      <Paragraph3 />
    </div>
  );
}

function Footer3() {
  return (
    <div className="h-[362px] relative shrink-0 w-full" data-name="Footer">
      <Footer />
      <Footer1 />
      <Footer2 />
    </div>
  );
}

function Logo() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative shrink-0 w-full" data-name="Logo">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[369px] items-start pb-[50px] pt-[20px] px-[20px] relative size-full">
          <div className="basis-0 flex flex-col font-['DM_Sans:Black',_sans-serif] font-black grow h-[36px] justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#485c11] text-[30px] text-center tracking-[-2.4px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            <p className="leading-[1.2]">Lutsy</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavigationMobile() {
  return (
    <nav className="absolute bg-white box-border content-stretch flex flex-col h-[78px] items-start left-0 overflow-clip p-0 right-0 rounded-bl-[20px] rounded-br-[20px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.05)] top-0" data-name="Navigation mobile">
      <Logo />
    </nav>
  );
}

function NavItems() {
  return (
    <div className="absolute backdrop-blur-[15px] backdrop-filter bg-[rgba(255,255,255,0.4)] box-border content-stretch flex font-['DM_Sans:Bold',_sans-serif] font-bold gap-[27px] items-center leading-[1.4] overflow-clip px-[24px] py-[20px] rounded-[100px] text-[14px] text-black text-center text-nowrap top-[16px] tracking-[-0.35px] translate-x-[-50%] whitespace-pre" data-name="Nav Items" style={{ left: "calc(100% + 265px)" }}>
      <p aria-label="Jump to product benefits section" className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Benefits
      </p>
      <p aria-label="Jump to product specifications section" className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Specifications
      </p>
      <p aria-label="Jump to product how-to section" className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        How-to
      </p>
      <p aria-label="Jump to contact us section" className="relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        Contact Us
      </p>
    </div>
  );
}

export default function Mobile() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col items-center pb-[20px] pt-0 px-0 relative size-full" data-name="Mobile">
      <NavItems />
      <Header />
      <Main />
      <Footer3 />
      <NavigationMobile />
    </div>
  );
}