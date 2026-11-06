import { ArrowDown, ArrowRight, ArrowUpRight, BarChart3, Boxes, BriefcaseBusiness, Check, ChevronRight, Database, Download, Factory, GraduationCap, Mail, MapPin, Menu, PackageCheck, Phone, Settings2, Sparkles, Truck, X } from 'lucide-react';
import { useState } from 'react';

const skills = [
  { title: 'Planning & Optimization', items: ['Demand forecasting', 'Inventory planning', 'Replenishment', 'Supply planning', 'S&OP', 'Scenario analysis', 'Procurement planning', 'Exception management'] },
  { title: 'Systems & Analytics', items: ['SAP MM / SD / EWM', 'Manhattan WMS', 'SQL', 'Power BI', 'Tableau', 'Advanced Excel', 'Python', 'Predictive analytics'] },
  { title: 'Operations Excellence', items: ['Warehouse operations', 'Order fulfillment', 'Vendor management', 'Root cause analysis', 'Lean & Kaizen', 'Process mapping', 'SOP development', 'Stakeholder management'] },
];

const experience = [
  {
    company: 'Advantage Solutions', role: 'Supply Chain Analyst', location: 'USA', dates: 'Jan 2025 — Present', current: true,
    intro: 'Making inventory availability and fulfillment performance easier to see, understand, and improve.',
    points: [
      <>Manage VMI and replenishment across <strong>1,500+ SKUs</strong>, using SAP MM and Excel to review inventory positions, demand signals, and order requirements.</>,
      <>Track inventory movements and purchase orders across SAP MM/SD and Manhattan WMS; investigate discrepancies and resolve warehouse and replenishment exceptions.</>,
      <>Coordinate with <strong>20+ client, vendor, and internal stakeholders</strong> to resolve availability issues, order discrepancies, and fulfillment delays.</>,
      <>Use SQL, Python, Power BI, and Excel to monitor <strong>15+ KPIs</strong>, surface operational gaps, and recommend corrective actions.</>,
      <>Build Power BI dashboards and Python automations for recurring reporting; run what-if analysis on demand shifts, supplier delays, and inventory constraints.</>,
    ],
    tags: ['SAP', 'SQL', 'Python', 'Power BI', 'VMI'],
  },
  {
    company: 'Flipkart', role: 'Supply Chain Analyst', location: 'India', dates: 'Jul 2021 — Jul 2023', current: false,
    intro: 'Supported high-volume e-commerce planning, inventory health, and order fulfillment across a complex network.',
    points: [
      <>Analyzed demand, inventory, replenishment, and fulfillment across <strong>8,000+ SKUs</strong>, identifying stockout, overstock, and aging-inventory exceptions.</>,
      <>Monitored <strong>25,000+ order lines per week</strong>, investigating order, dispatch, and inventory exceptions with warehouse and logistics teams.</>,
      <>Built SQL and Excel analyses and Power BI dashboards for 10+ KPIs, including fill rate, inventory turnover, aging, and service levels.</>,
      <>Partnered with <strong>30+ sellers and vendors</strong> to prioritize availability, dispatch, and replenishment escalations.</>,
      <>Standardized recurring reports, exception reviews, and operating procedures, reducing manual reporting effort by <strong>20%</strong>.</>,
    ],
    tags: ['SQL', 'Excel', 'Power BI', 'Forecasting', 'Fulfillment'],
  },
];

const projects = [
  {
    number: '01', title: 'Supplier Performance & Procurement Analytics', subtitle: 'Turning supplier data into clearer sourcing decisions.', tools: 'SQL · Excel · Power BI', icon: Truck,
    metric: '$6M+', metricLabel: 'purchasing spend analyzed',
    details: ['Evaluated 20,000+ purchase orders across 35 suppliers for lead-time variance, on-time delivery, defects, and price trends.', 'Created a weighted supplier scorecard, pinpointing the bottom 20% of suppliers behind 31% of late deliveries.', 'Built a procurement dashboard that highlighted 8% potential savings through price variance and category-spend analysis.'],
  },
  {
    number: '02', title: 'Inventory Optimization & Demand Forecasting', subtitle: 'Forecast-led recommendations for healthier inventory.', tools: 'Python · SQL · Power BI', icon: Boxes,
    metric: '87%', metricLabel: 'forecast accuracy achieved',
    details: ['Analyzed two years of sales and inventory data for 500+ SKUs, identifying seasonal patterns, recurring stockouts, and $400K in slow-moving inventory.', 'Developed Python time-series forecasts and generated SKU-level safety-stock and reorder-point recommendations.', 'Designed a dashboard for turnover, days of supply, and availability, supporting recommendations projected to reduce stockout risk by 16%.'],
  },
];

function SectionLabel({ children, number }) {
  return <div className="section-label"><span>{number}</span><span className="label-line" />{children}</div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Anuranjani Thota home"><span className="wordmark-mark">AT</span><span>ANURANJANI THOTA</span></a>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        <nav className={menuOpen ? 'navigation navigation-open' : 'navigation'}>
          <a href="#about" onClick={closeMenu}>About</a><a href="#experience" onClick={closeMenu}>Experience</a><a href="#projects" onClick={closeMenu}>Projects</a><a href="#skills" onClick={closeMenu}>Expertise</a>
          <a className="nav-contact" href="mailto:anuranjani2209@gmail.com" onClick={closeMenu}>Let's talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> SUPPLY CHAIN ANALYST <span className="eyebrow-divider">/</span> DATA-LED OPERATIONS</div>
            <h1>Better decisions.<br /><span>Stronger supply chains.</span></h1>
            <p className="hero-lede">I turn complex supply chain data into practical plans—improving inventory health, fulfillment, and the way teams work.</p>
            <div className="hero-actions"><a className="button button-dark" href="#experience">Explore my work <ArrowDown size={16} /></a><a className="text-link" href="mailto:anuranjani2209@gmail.com">Get in touch <ArrowUpRight size={15} /></a></div>
            <div className="hero-meta"><span><MapPin size={14} /> United States</span><span className="meta-separator" /><a href="tel:+13305542728"><Phone size={13} /> +1 (330) 554-2728</a></div>
          </div>
          <div className="hero-art" aria-label="Supply chain analytics illustration">
            <div className="art-topline"><span>OPERATIONS SNAPSHOT</span><span>01 / 04</span></div>
            <div className="orbit orbit-one" /><div className="orbit orbit-two" />
            <div className="art-center"><div className="center-icon"><PackageCheck size={30} strokeWidth={1.5} /></div><span>SUPPLY<br />IN MOTION</span></div>
            <div className="art-node node-inventory"><span className="node-icon"><Boxes size={17} /></span><span>INVENTORY</span><b>1,500+ SKUs</b></div>
            <div className="art-node node-insight"><span className="node-icon"><BarChart3 size={17} /></span><span>ANALYTICS</span><b>15+ KPIs</b></div>
            <div className="art-node node-fulfillment"><span className="node-icon"><Truck size={17} /></span><span>FULFILLMENT</span><b>25K+ / wk</b></div>
            <div className="art-footer"><span className="pulse-line" /> PLAN <ChevronRight size={12} /> ANALYZE <ChevronRight size={12} /> IMPROVE</div>
            <span className="art-coordinate coord-one">40°36' N</span><span className="art-coordinate coord-two">DATA / 2025</span>
          </div>
          <a className="scroll-hint" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-band" id="about">
          <div className="section-wrap intro-grid">
            <SectionLabel number="01">A LITTLE ABOUT ME</SectionLabel>
            <div className="intro-content"><h2>Operational detail.<br /><span>Big-picture thinking.</span></h2><p>I'm a supply chain analyst with 3+ years of experience across e-commerce and business services. From demand signals to the final delivery, I connect the details across inventory, suppliers, and operations—and make the next best action clear.</p><div className="intro-facts"><div><strong>3+</strong><span>years in supply chain</span></div><div><strong>8K+</strong><span>SKUs analyzed</span></div><div><strong>25K+</strong><span>weekly order lines</span></div></div></div>
          </div>
        </section>

        <section className="section-wrap experience-section" id="experience">
          <SectionLabel number="02">CAREER JOURNEY</SectionLabel>
          <div className="section-heading-row"><div><h2>Experience built<br /><span>on the details.</span></h2></div><p>Planning, analysis, and cross-functional execution—grounded in the realities of day-to-day operations.</p></div>
          <div className="timeline">{experience.map((job, index) => <article className="job-card" key={job.company}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span><i /></div><div className="job-main"><div className="job-heading"><div><div className="job-title-line"><h3>{job.role}</h3>{job.current && <span className="current-badge"><span /> CURRENT</span>}</div><div className="company-line">{job.company} <span>·</span> {job.location}</div></div><time>{job.dates}</time></div><p className="job-intro">{job.intro}</p><ul className="achievement-list">{job.points.map((point, i) => <li key={i}><Check size={15} /> <span>{point}</span></li>)}</ul><div className="tag-row">{job.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div></article>)}</div>
        </section>

        <section className="projects-section" id="projects"><div className="section-wrap"><SectionLabel number="03">SELECTED PROJECTS</SectionLabel><div className="section-heading-row projects-heading"><div><h2>Analysis that moves<br /><span>work forward.</span></h2></div><p>Hands-on analytics projects connecting procurement and inventory data to actionable recommendations.</p></div><div className="project-grid">{projects.map(project => { const Icon = project.icon; return <article className="project-card" key={project.number}><div className="project-top"><span className="project-number">PROJECT / {project.number}</span><span className="project-icon"><Icon size={20} /></span></div><h3>{project.title}</h3><p className="project-subtitle">{project.subtitle}</p><div className="project-metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div><ul>{project.details.map((detail, i) => <li key={i}><span className="bullet" />{detail}</li>)}</ul><div className="project-bottom"><span>{project.tools}</span><ArrowUpRight size={16} /></div></article>; })}</div></div></section>

        <section className="section-wrap skills-section" id="skills"><SectionLabel number="04">HOW I CREATE IMPACT</SectionLabel><div className="section-heading-row skills-heading"><div><h2>A toolkit for<br /><span>the whole picture.</span></h2></div><p>From planning frameworks to analytics tools, I bring the right mix of systems thinking and practical execution.</p></div><div className="skills-grid">{skills.map((group, i) => <article className="skill-card" key={group.title}><div className="skill-card-top"><span>0{i + 1}</span>{i === 0 ? <Settings2 /> : i === 1 ? <Database /> : <Factory />}</div><h3>{group.title}</h3><div className="skill-list">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>)}</div></section>

        <section className="education-band"><div className="section-wrap education-grid"><SectionLabel number="05">EDUCATION & CREDENTIALS</SectionLabel><div className="education-content"><div className="education-main"><div className="education-icon"><GraduationCap size={23} /></div><div><span className="mono-label">AUG 2023 — MAY 2025</span><h3>Master of Science, Data Science</h3><p>Kent State University <span>·</span> Kent, Ohio</p><div className="gpa-pill">GPA <strong>3.68 / 4.0</strong></div></div></div><div className="certifications"><span className="mono-label">CERTIFICATIONS</span><div className="cert-list"><span><Sparkles size={14} /> APICS Certified Supply Chain Professional (CSCP)</span><span><Sparkles size={14} /> Lean Six Sigma Green Belt</span><span><Sparkles size={14} /> Microsoft Certified: Power BI Data Analyst Associate</span></div></div></div></div></section>

        <section className="contact-section"><div className="section-wrap contact-wrap"><div><SectionLabel number="06">LET'S CONNECT</SectionLabel><h2>Ready to make<br /><span>the next move?</span></h2><p>Have a supply chain challenge or an opportunity to collaborate? I'd love to hear from you.</p><a className="button button-light" href="mailto:anuranjani2209@gmail.com">Start a conversation <ArrowUpRight size={16} /></a></div><div className="contact-card"><span className="contact-card-label">GET IN TOUCH</span><a href="mailto:anuranjani2209@gmail.com"><Mail size={18} /><span><small>EMAIL</small>anuranjani2209@gmail.com</span><ArrowUpRight size={15} /></a><a href="tel:+13305542728"><Phone size={18} /><span><small>PHONE</small>+1 (330) 554-2728</span><ArrowUpRight size={15} /></a><div className="contact-note"><span className="status-dot" /> OPEN TO MEANINGFUL CONVERSATIONS</div></div></div></section>
      </main>
      <footer className="footer"><a className="wordmark" href="#home"><span className="wordmark-mark">AT</span><span>ANURANJANI THOTA</span></a><span>SUPPLY CHAIN ANALYST <i>·</i> DATA-DRIVEN DECISIONS</span><a className="back-top" href="#home">BACK TO TOP <ArrowUpRight size={13} /></a><span className="copyright">© {new Date().getFullYear()} ANURANJANI THOTA</span></footer>
    </div>
  );
}

export default App;
