import { PORTFOLIO } from "@/data/portfolio";

const lastUpdated = new Intl.DateTimeFormat("en-GB", {
  day: "numeric", month: "short", year: "numeric", timeZone: "Asia/Kolkata",
}).format(new Date());

export function PortfolioFooter() {
  return (
    <footer id="contact" className="contact-section">
      <span className="text-xs text-neutral-500">Contact</span>
      <h2 className="mt-3 text-4xl font-semibold tracking-[-.055em] sm:text-5xl">Let’s work together.</h2>
      <p className="mt-4 text-neutral-400">Open to internships and collaborations. Based in Delhi, India (IST).</p>
      <div className="mt-8 flex flex-wrap gap-7 text-sm">
        <a className="quiet-link" href={`mailto:${PORTFOLIO.site.email}`}>Email me ↗</a>
        <a className="quiet-link" href={PORTFOLIO.socialLinks.cal.href} target="_blank" rel="noreferrer">Book a call ↗</a>
      </div>
      <div className="mt-20 flex flex-wrap items-center gap-5 border-t border-neutral-800 py-7 text-sm text-neutral-500">
        <a href={PORTFOLIO.socialLinks.github.href} target="_blank" rel="noreferrer">GitHub</a>
        <a href={PORTFOLIO.socialLinks.linkedin.href} target="_blank" rel="noreferrer">LinkedIn</a>
        <a href={PORTFOLIO.socialLinks.x.href} target="_blank" rel="noreferrer">X</a>
        <a href={PORTFOLIO.site.resumeUrl} target="_blank" rel="noreferrer">Resume</a>
        <a href="#main" className="ml-auto">Back to top ↑</a>
      </div>
      <div className="footer-meta flex flex-wrap items-center gap-x-5 gap-y-2 pb-8 text-xs text-neutral-500">
        <span>Designed and built by Vaibhav.</span>
        <span className="sm:ml-auto">Last updated · {lastUpdated}</span>
      </div>
    </footer>
  );
}
