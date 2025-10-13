import { motion } from "motion/react";
import { useEffect } from "react";

interface PrivacyPageProps {
  onBackToHome: () => void;
}

export function PrivacyPage({ onBackToHome }: PrivacyPageProps) {
  // Ensure page loads at the top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
    <div className="bg-white relative size-full" data-name="Privacy">
      <div className="flex flex-col items-center size-full">
        <div className="box-border content-stretch flex flex-col items-center pb-[40px] pt-[40px] px-[20px] md:px-[40px] relative size-full max-w-[800px]">
          
          {/* Header with back link */}
          <div className="box-border content-stretch flex items-center justify-between max-w-[1500px] pb-[60px] pt-[20px] px-0 relative shrink-0 w-full">
            <button 
              onClick={onBackToHome}
              className="font-['DM_Sans:Medium',_sans-serif] font-medium leading-[1.2] relative shrink-0 text-[30px] text-black text-nowrap tracking-[-1.5px] cursor-pointer hover:text-[#485c11] transition-colors duration-200" 
              style={{ fontVariationSettings: "'opsz' 14" }}
            >
              ← Lutsy
            </button>
          </div>

          {/* Privacy content */}
          <motion.main 
            className="box-border content-stretch flex flex-col gap-[48px] items-start overflow-visible p-0 relative shrink-0 w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            
            {/* Title */}
            <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
              <h1 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[48px] text-black tracking-[-1.44px] w-full">
                Privacy
              </h1>
            </div>

            {/* Privacy policy content */}
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
              
              {/* Main privacy statement */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                  I collect only the personal data you email me (your address and message) so I can reply and provide the review you requested. I don't sell or share your data for advertising.
                </p>
                <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                  To have your messages deleted, email{' '}
                  <a href="mailto:contact@lutsy.studio" className="text-[#485c11] hover:underline">
                    contact@lutsy.studio
                  </a>.
                </p>
              </div>

              {/* Confidentiality section */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <h2 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.96px] w-full">
                  Confidentiality & product links
                </h2>
                <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                  If you send a product URL, demo, or access credentials, I'll use them only to perform your review. I don't share access with third parties, and I don't scrape, export, or reuse your data for any other purpose. I may capture screenshots to produce the findings; these files are shared only with you. Access is removed at the end of the engagement, and working copies (screenshots/notes) are deleted within 60 days of delivery—or sooner on request. NDA and test/guest accounts are welcome.
                </p>
              </div>

              {/* What I collect */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <h2 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.96px] w-full">
                  What I collect
                </h2>
                <ul className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full pl-[20px]">
                  <li className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full list-disc" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Your email address and message content
                  </li>
                  <li className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full list-disc" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Any URLs or access you choose to share for the review
                  </li>
                </ul>
              </div>

              {/* How I use it */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <h2 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.96px] w-full">
                  How I use it
                </h2>
                <ul className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full pl-[20px]">
                  <li className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full list-disc" style={{ fontVariationSettings: "'opsz' 14" }}>
                    To reply, schedule, and complete your review
                  </li>
                  <li className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full list-disc" style={{ fontVariationSettings: "'opsz' 14" }}>
                    To create and deliver the findings (e.g., annotated screenshots, notes)
                  </li>
                  <li className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full list-disc" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Never for advertising or resale
                  </li>
                </ul>
              </div>

              {/* Retention */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <h2 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.96px] w-full">
                  Retention
                </h2>
                <ul className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full pl-[20px]">
                  <li className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full list-disc" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Working files (screenshots/notes that may contain client data): kept up to 60 days after delivery for follow-ups, then deleted—earlier on request.
                  </li>
                  <li className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full list-disc" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Final deliverables (e.g., your deck/PDF): may be retained for record-keeping and support unless you ask me to remove them.
                  </li>
                </ul>
              </div>

              {/* Where it's stored */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <h2 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.96px] w-full">
                  Where it's stored
                </h2>
                <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                  My email provider and cloud storage services.
                </p>
              </div>

              {/* Your choices */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <h2 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.96px] w-full">
                  Your choices
                </h2>
                <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Request access, correction, or deletion at any time:{' '}
                  <a href="mailto:contact@lutsy.studio" className="text-[#485c11] hover:underline">
                    contact@lutsy.studio
                  </a>.
                </p>
              </div>

              {/* Cookies & tracking */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <h2 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.96px] w-full">
                  Cookies & tracking
                </h2>
                <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                  This site uses no cookies or analytics (mailto-only). If this changes, this page will be updated.
                </p>
              </div>

              {/* Who I am */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                <h2 className="font-['Crimson_Text:Regular',_sans-serif] leading-[0.9] not-italic relative shrink-0 text-[32px] text-black tracking-[-0.96px] w-full">
                  Who I am
                </h2>
                <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[16px] text-black tracking-[-0.08px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Alessia D. Nobile — San Francisco, CA.
                </p>
              </div>

              {/* Last updated */}
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full pb-[60px]">
                <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.6] relative shrink-0 text-[14px] text-[#6f6f6f] tracking-[-0.07px] w-full" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Last updated: 06 Oct 2025
                </p>
              </div>

            </div>

          </motion.main>

          {/* Footer */}
          <motion.footer 
            className="box-border content-stretch flex flex-col gap-[40px] items-start justify-end overflow-visible pt-[80px] pb-[40px] px-0 relative shrink-0 w-full" 
            data-name="Footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <div aria-hidden="true" className="absolute border-[#e9e9e9] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
            
            {/* Main footer content */}
            <div className="content-stretch flex flex-col gap-[40px] items-start relative shrink-0 w-full">
              {/* Brand and tagline */}
              <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
                <h3 className="font-['DM_Sans:Bold',_sans-serif] font-bold leading-[1.2] relative shrink-0 text-[24px] text-[#485c11] tracking-[-0.6px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Lutsy
                </h3>
                <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[16px] text-[#6f6f6f] tracking-[-0.08px] max-w-[600px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  Fresh-eyes UX review
                </p>
              </div>

              {/* Contact and service info */}
              <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
                  <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-black tracking-[-0.07px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    <a href="mailto:contact@lutsy.studio" className="hover:text-[#485c11] transition-colors duration-200">contact@lutsy.studio</a> • San Francisco, CA
                  </p>
                  <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-[#6f6f6f] tracking-[-0.07px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    NDA-friendly • 5-7 day turnaround
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="content-stretch flex flex-row items-center justify-end relative shrink-0 w-full">
              <p className="font-['DM_Sans:Regular',_sans-serif] font-normal leading-[1.4] relative shrink-0 text-[14px] text-[#6f6f6f] tracking-[-0.07px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                © 2025 Lutsy.
              </p>
            </div>
          </motion.footer>

        </div>
      </div>
    </div>
  );
}