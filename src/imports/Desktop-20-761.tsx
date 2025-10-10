import svgPaths from "./svg-7d1casmzak";
import imgInnerScreen from "figma:asset/b59ebd606b8bcebb6d0c8a0d34789dca7674a368.png";
import imgImage from "figma:asset/c2f470662f7b9d281d028f71035ca519d82d8f3b.png";

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
        Book a call
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

function HeroText() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] items-start relative shrink-0 text-black text-center" data-name="Hero text">
      <h1 className="block font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[160px] tracking-[-6.8px] w-[1200px]">No roasts. Just fixes.</h1>
      <h1 className="block font-['Roboto:Regular',_sans-serif] font-normal leading-[44px] relative shrink-0 text-[36px] w-[1200px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        founder-friendly audits to optimize what you have before any redesign
      </h1>
    </div>
  );
}

function InnerScreen() {
  return (
    <div className="absolute h-[607.439px] left-1/2 rounded-[16px] top-[18.5px] translate-x-[-50%] w-[869.742px]" data-name="Inner screen">
      <img alt="Data points on top of landscape" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[16px] size-full" src={imgInnerScreen} />
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
      <HeroText />
      <HeroImage />
    </header>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[50px] items-start pl-0 pr-[400px] py-0 relative w-full">
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
    <section aria-label="Area product benefit 1 of 4" className="basis-0 grow min-h-px min-w-[265px] relative shrink-0" data-name="Icon lockup 1">
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
    <section aria-label="Area product benefit 2 of 4" className="basis-0 grow min-h-px min-w-[265px] relative shrink-0" data-name="Icon lockup 2">
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
    <section aria-label="Area product benefit 3 of 4" className="basis-0 grow min-h-px min-w-[265px] relative shrink-0" data-name="Icon lockup 3">
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
    <section aria-label="Area product benefit 4 of 4" className="basis-0 grow min-h-px min-w-[265px] relative shrink-0" data-name="Icon lockup 4">
      <div aria-hidden="true" className="absolute border-[#8e9c78] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="min-w-inherit size-full">
        <div className="box-border content-stretch flex flex-col gap-[24px] items-start min-w-inherit pl-0 pr-[40px] py-[40px] relative w-full">
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
    <section className="box-border content-stretch flex flex-col items-start overflow-visible pb-[60px] pt-[80px] px-0 relative shrink-0 w-full" data-name="Headline and icons">
      <div aria-hidden="true" className="absolute border-[0.5px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <Text />
      <IconsModule />
    </section>
  );
}

function BenefitsSection() {
  return (
    <div className="content-stretch flex flex-col items-start max-w-[1500px] relative shrink-0 w-full" data-name="Benefits section">
      <HeadlineAndIcons />
    </div>
  );
}

function TextContent() {
  return (
    <div className="content-stretch flex flex-col gap-[40px] items-center relative shrink-0 text-center w-full" data-name="Text content">
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
        <div className="box-border content-stretch flex flex-col gap-[40px] items-center pb-[80px] pt-0 px-[240px] relative w-full">
          <TextContent />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="Title">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] items-start pl-0 pr-[80px] py-0 relative w-full">
          <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black tracking-[-1.8px] w-full">What you get</p>
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
        <div className="box-border content-stretch flex gap-[30px] items-start justify-center pl-0 pr-[80px] py-[20px] relative tracking-[-0.075px] w-full">
          <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            01
          </p>
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[0px] text-[15px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
            <span className="font-['DM_Sans:Bold',_sans-serif] font-bold tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Deck of annotated screenshots
            </span>
            <span>{` — one issue per slide with explained fix`}</span>
          </p>
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
        <div className="box-border content-stretch flex gap-[30px] items-start justify-center pl-0 pr-[80px] py-[20px] relative tracking-[-0.075px] w-full">
          <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            02
          </p>
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[0px] text-[15px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
            <span className="font-['DM_Sans:Bold',_sans-serif] font-bold tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Severity & order of action`}</span>
            <span>{` — Critical / Major / Minor`}</span>
          </p>
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
        <div className="box-border content-stretch flex gap-[30px] items-start justify-center pl-0 pr-[80px] py-[20px] relative tracking-[-0.075px] w-full">
          <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            03
          </p>
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[0px] text-[15px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
            <span className="font-['DM_Sans:Bold',_sans-serif] font-bold tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Copy suggestions
            </span>
            <span>{` — headlines, CTAs, empty & error states`}</span>
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
        <div className="box-border content-stretch flex gap-[30px] items-start justify-center pl-0 pr-[80px] py-[20px] relative tracking-[-0.075px] w-full">
          <p className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            04
          </p>
          <p className="basis-0 font-['DM_Sans:Regular',_sans-serif] font-normal grow leading-[1.4] min-h-px min-w-px relative shrink-0 text-[0px] text-[15px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
            <span className="font-['DM_Sans:Bold',_sans-serif] font-bold tracking-[-0.075px]" style={{ fontVariationSettings: "'opsz' 14" }}>{`Video walkthrough `}</span>— for team-wide alignment
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

function Text5() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col gap-[40px] grow items-start min-h-px min-w-px pb-[80px] pt-[60px] px-0 relative shrink-0" data-name="Text">
      <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <Title />
      <List />
    </div>
  );
}

function Image() {
  return (
    <div className="h-[711px] relative rounded-[30px] shrink-0 w-[823px]" data-name="Image">
      <img alt="A render of three white cylindrical columns, against a warm creme background" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[30px] size-full" src={imgImage} />
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
    <section className="box-border content-stretch flex gap-[20px] items-start max-w-[1500px] overflow-visible p-0 relative shrink-0 w-full" data-name="Features carousel">
      <Text5 />
      <FeaturesCarouselV1 />
    </section>
  );
}

function Frame2147236346() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
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
      <p className="font-['Crimson_Text:Regular',_sans-serif] leading-none not-italic relative shrink-0 text-[18px] text-black tracking-[-0.54px] w-full">The Deck</p>
      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[#6f6f6f] text-[15px] tracking-[-0.075px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
        A concise deck your team can act on immediately, plus a video walkthrough.
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
          <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1] relative shrink-0 text-[#485c11] text-[80px] tracking-[-3.2px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
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
          <p className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[60px] text-black text-center tracking-[-1.8px] w-full">Let’s Connect</p>
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
    <main className="box-border content-stretch flex flex-col gap-[64px] items-start overflow-visible p-0 relative shrink-0 w-full" data-name="Main" tabIndex="-1">
      <Header />
      <BenefitsSection />
      <Content />
      <FeaturesCarousel />
      <HowItWorksSection />
      <CenteredCta />
    </main>
  );
}

function NavItems() {
  return (
    <div className="content-stretch flex font-['DM_Sans:Bold',_sans-serif] font-bold gap-[27px] items-center relative shrink-0 text-[14px] text-black text-center text-nowrap tracking-[-0.35px]" data-name="Nav Items">
      <button className="[white-space-collapse:collapse] block cursor-pointer leading-[0] relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4] text-nowrap whitespace-pre">Benefits</p>
      </button>
      <p className="leading-[1.4] relative shrink-0 whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Specifications
      </p>
      <button className="[white-space-collapse:collapse] block cursor-pointer leading-[0] relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
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

function Logo() {
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
      <Logo />
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
    <div className="absolute backdrop-blur-[15px] backdrop-filter bg-[rgba(255,255,255,0.4)] box-border content-stretch flex font-['DM_Sans:Bold',_sans-serif] font-bold gap-[27px] items-center left-1/2 overflow-clip px-[24px] py-[20px] rounded-[100px] text-[14px] text-black text-center text-nowrap top-[16px] tracking-[-0.35px] translate-x-[-50%]" data-name="Nav Items">
      <button aria-label="Jump to product benefits section" className="[white-space-collapse:collapse] block cursor-pointer leading-[0] relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4] text-nowrap whitespace-pre">Benefits</p>
      </button>
      <p aria-label="Jump to product specifications section" className="leading-[1.4] relative shrink-0 whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Specifications
      </p>
      <button aria-label="Jump to product how-to section" className="[white-space-collapse:collapse] block cursor-pointer leading-[0] relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
        <p className="leading-[1.4] text-nowrap whitespace-pre">How-to</p>
      </button>
      <button aria-label="Jump to contact us section" className="[white-space-collapse:collapse] block cursor-pointer leading-[0] relative shrink-0" style={{ fontVariationSettings: "'opsz' 14" }}>
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
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
}