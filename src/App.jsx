
import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  ChevronRight,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  Phone,
  Sparkles,
  TrendingUp,
  Truck,
  X,
} from "lucide-react";

const profile = {
  name: "Anuranjani Thota",
  email: "anuranjani2209@gmail.com",
  phone: "+1 (330) 554-2728",
  github: "https://github.com/Anuranjani09",
  location: "United States",
};

const metrics = [
  { value: "3+", label: "Years of experience" },
  { value: "8,000+", label: "SKUs analyzed" },
  { value: "25K+", label: "Weekly order lines" },
  { value: "20%", label: "Reporting effort reduced" },
];

const experience = [
  {
    role: "Supply Chain Analyst",
    company: "Advantage Solutions",
    location: "United States",
    period: "Jan 2025 — Present",
    current: true,
    description:
      "Improving inventory visibility, replenishment decisions, and fulfillment performance through operational analytics.",
    achievements: [
      "Manage vendor-managed inventory and replenishment across 1,500+ SKUs using SAP MM and advanced Excel.",
      "Track inventory movements, purchase orders, and fulfillment exceptions through SAP MM/SD and Manhattan WMS.",
      "Coordinate with 20+ stakeholders to resolve supplier availability issues, inventory discrepancies, and fulfillment delays.",
      "Analyze 15+ operational KPIs using SQL, Python, Power BI, and Excel to identify risks and improvement opportunities.",
      "Develop automated reporting and conduct scenario analysis to support better replenishment decisions.",
    ],
    tools: ["SAP MM/SD", "SQL", "Python", "Power BI", "Excel"],
  },
  {
    role: "Supply Chain Analyst",
    company: "Flipkart",
    location: "India",
    period: "Jul 2021 — Jul 2023",
    current: false,
    description:
      "Supported high-volume e-commerce inventory planning, demand analysis, and order fulfillment operations.",
    achievements: [
      "Analyzed inventory and replenishment trends across 8,000+ SKUs to identify stockout, overstock, and aging-inventory risks.",
      "Monitored more than 25,000 order lines weekly and investigated fulfillment and dispatch exceptions.",
      "Developed SQL, Excel, and Power BI reporting across 10+ supply chain performance indicators.",
      "Collaborated with 30+ sellers and vendors to resolve availability and fulfillment issues.",
      "Standardized reporting and operating procedures, reducing manual reporting effort by 20%.",
    ],
    tools: ["SQL", "Excel", "Power BI", "Forecasting", "Operations"],
  },
];

const projects = [
  {
    number: "01",
    category: "PROCUREMENT INTELLIGENCE",
    title: "Supplier Performance & Procurement Analytics",
    description:
      "A supplier intelligence solution designed to evaluate procurement performance, uncover delivery risks, and identify purchasing opportunities.",
    tools: ["SQL", "Excel", "Power BI"],
    highlights: [
      "Analyzed 20,000+ purchase orders across 35 suppliers.",
      "Identified the lowest-performing 20% of suppliers responsible for 31% of late deliveries.",
      "Built procurement dashboards monitoring $6M+ in purchasing spend.",
    ],
    metric: "8%",
    metricLabel: "Potential savings identified",
    type: "supplier",
  },
  {
    number: "02",
    category: "PREDICTIVE ANALYTICS",
    title: "Inventory Optimization & Demand Forecasting",
    description:
      "A forecasting and inventory optimization solution using historical demand patterns to improve stock planning and replenishment decisions.",
    tools: ["Python", "SQL", "Power BI"],
    highlights: [
      "Analyzed two years of inventory and sales data across 500+ SKUs.",
      "Identified $400K in slow-moving inventory.",
      "Developed time-series forecasting models and SKU-level reorder recommendations.",
    ],
    metric: "87%",
    metricLabel: "Forecast accuracy achieved",
    type: "forecast",
  },
];

const skillGroups = [
  {
    icon: Boxes,
    title: "Supply Chain & Planning",
    skills: [
      "Demand Forecasting",
      "Inventory Optimization",
      "Replenishment",
      "Supply Planning",
      "Procurement Planning",
      "S&OP",
      "Vendor Management",
      "Order Fulfillment",
    ],
  },
  {
    icon: Database,
    title: "Data Analytics & BI",
    skills: [
      "SQL",
      "Power BI",
      "Tableau",
      "Advanced Excel",
      "Power Query",
      "KPI Dashboards",
      "Data Visualization",
      "Predictive Analytics",
    ],
  },
  {
    icon: Layers3,
    title: "Programming & Systems",
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "scikit-learn",
      "SAP MM / SD / EWM",
      "Manhattan WMS",
      "TMS",
      "Forecasting Models",
    ],
  },
  {
    icon: TrendingUp,
    title: "Operational Excellence",
    skills: [
      "Lean",
      "Kaizen",
      "Root Cause Analysis",
      "Process Improvement",
      "SOP Development",
      "Scenario Analysis",
      "Stakeholder Management",
      "Process Mapping",
    ],
  },
];

function SectionHeading({ number, label, title, description }) {
  return (
    <div className="section-heading">
      <div>
        <div className="section-kicker">
          <span>{number}</span>
          <span className="kicker-line" />
          {label}
        </div>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}

function AnalyticsVisual() {
  const bars = [42, 55, 47, 68, 61, 78, 72, 91, 83, 100, 87, 96];

  return (
    <div className="analytics-visual">
      <div className="visual-glow" />
      <div className="dashboard-card">
        <div className="dashboard-header">
          <div>
            <span className="dashboard-eyebrow">SUPPLY CHAIN INTELLIGENCE</span>
            <h3>Operations overview</h3>
          </div>
          <span className="dashboard-status">
            <span /> ANALYTICS
          </span>
        </div>

        <div className="dashboard-stats">
          <div>
            <span>SKUs Managed</span>
            <strong>1,500+</strong>
          </div>
          <div>
            <span>KPIs Tracked</span>
            <strong>15+</strong>
          </div>
        </div>

        <div className="chart-heading">
          <span>Operational performance</span>
          <span>Illustrative trend</span>
        </div>

        <div className="chart-area">
          <div className="chart-grid-lines">
            <i /><i /><i /><i />
          </div>
          <div className="chart-bars">
            {bars.map((height, index) => (
              <div
                key={index}
                className="chart-bar"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="dashboard-bottom">
          <span><span className="legend-dot" /> Performance trend</span>
          <span>DATA → DECISIONS</span>
        </div>
      </div>

      <div className="floating-insight insight-top">
        <PackageCheck size={19} />
        <div>
          <strong>Inventory intelligence</strong>
          <span>Smarter replenishment</span>
        </div>
      </div>

      <div className="floating-insight insight-bottom">
        <TrendingUp size={19} />
        <div>
          <strong>Data-driven planning</strong>
          <span>Actionable insights</span>
        </div>
      </div>
    </div>
  );
}

function ProjectVisual({ type }) {
  if (type === "supplier") {
    return (
      <div className="project-visual supplier-visual">
        <div className="visual-window">
          <div className="window-top">
            <span>SUPPLIER SCORECARD</span>
            <span className="window-dots">● ● ●</span>
          </div>
          <div className="window-metrics">
            <div><small>SUPPLIERS</small><strong>35</strong></div>
            <div><small>POs ANALYZED</small><strong>20K+</strong></div>
            <div><small>SPEND</small><strong>$6M+</strong></div>
          </div>
          <div className="supplier-bars">
            {[70, 88, 62, 95, 76, 55, 84].map((height, index) => (
              <div key={index}>
                <span style={{ height: `${height}%` }} />
              </div>
            ))}
          </div>
          <div className="window-footer">
            <span>Supplier performance analysis</span>
            <BarChart3 size={15} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual forecast-visual">
      <div className="visual-window">
        <div className="window-top">
          <span>DEMAND FORECAST MODEL</span>
          <span className="window-dots">● ● ●</span>
        </div>
        <div className="forecast-label">
          <small>MODEL ACCURACY</small>
          <strong>87%</strong>
        </div>
        <svg
          viewBox="0 0 400 150"
          className="forecast-chart"
          role="img"
          aria-label="Illustrative demand forecasting chart"
        >
          <defs>
            <linearGradient id="forecastFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b7efcf" stopOpacity=".35" />
              <stop offset="100%" stopColor="#b7efcf" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[30, 65, 100, 135].map(y => (
            <line
              key={y}
              x1="0" x2="400" y1={y} y2={y}
              stroke="#426052" strokeWidth=".7"
            />
          ))}
          <path
            d="M0 119 L40 103 L80 113 L120 77 L160 91 L200 60 L240 74 L280 42 L320 58 L360 22 L400 35 L400 150 L0 150 Z"
            fill="url(#forecastFill)"
          />
          <path
            d="M0 119 L40 103 L80 113 L120 77 L160 91 L200 60 L240 74 L280 42 L320 58 L360 22 L400 35"
            fill="none" stroke="#b7efcf" strokeWidth="3"
            strokeLinecap="round" strokeLinejoin="round"
          />
          <path
            d="M0 115 L40 110 L80 102 L120 94 L160 86 L200 76 L240 68 L280 59 L320 48 L360 39 L400 27"
            fill="none" stroke="#88b5fa" strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>
        <div className="window-footer">
          <span>Historical demand / Forecast</span>
          <TrendingUp size={15} />
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id]");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-25% 0px -60% 0px" }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="nav-container">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-symbol">AT<span>.</span></span>
            <span className="brand-name">ANURANJANI THOTA</span>
          </a>

          <nav className={`navigation ${menuOpen ? "navigation-open" : ""}`}>
            {[
              ["About", "about"],
              ["Experience", "experience"],
              ["Projects", "projects"],
              ["Expertise", "skills"],
              ["Education", "education"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={closeMenu}
                className={activeSection === id ? "nav-active" : ""}
              >
                {label}
              </a>
            ))}
            <a href="#contact" className="nav-contact" onClick={closeMenu}>
              Let's connect <ArrowUpRight size={15} />
            </a>
          </nav>

          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              SUPPLY CHAIN ANALYTICS & OPERATIONS
            </div>

            <p className="hero-overline">HELLO, I'M ANURANJANI THOTA</p>

            <h1>
              Turning data into
              <span className="gradient-text"> smarter supply chains.</span>
            </h1>

            <p className="hero-description">
              Supply Chain Analyst specializing in inventory optimization,
              demand forecasting, procurement analytics, and operational
              excellence. I transform complex data into decisions that
              make a measurable difference.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary">
                Explore my projects <ArrowUpRight size={17} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Get in touch <ArrowRight size={17} />
              </a>
            </div>

            <div className="hero-social">
              <span><MapPin size={15} /> United States</span>
              <span className="social-divider" />
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={17} /> GitHub <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <AnalyticsVisual />

          <a href="#about" className="scroll-indicator">
            <ArrowDown size={15} /> SCROLL TO EXPLORE
          </a>
        </section>

        <section className="metrics-band">
          <div className="section-wrap metrics-grid">
            {metrics.map((metric, index) => (
              <div className="metric-item" key={index}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section-wrap content-section about-section" id="about">
          <SectionHeading
            number="01"
            label="ABOUT ME"
            title={<>Where analytical thinking meets <em>operational impact.</em></>}
            description="A combination of supply chain expertise and technical analytics to solve complex business challenges."
          />

          <div className="about-grid">
            <div className="about-main">
              <p className="about-lead">
                I believe the best supply chain decisions start with
                understanding the data behind them.
              </p>
              <p>
                With 3+ years of experience across e-commerce and business
                services, I work at the intersection of supply chain planning,
                business intelligence, and operational execution.
              </p>
              <p>
                From managing vendor-managed inventory to building analytical
                dashboards and forecasting models, my focus is on translating
                operational complexity into practical, measurable improvements.
              </p>
            </div>

            <div className="about-focus">
              <span className="small-heading">CORE FOCUS AREAS</span>
              {[
                "Inventory & Demand Planning",
                "Supply Chain Analytics",
                "Supplier & Procurement Performance",
                "Business Intelligence & Reporting",
              ].map((item, index) => (
                <div className="focus-item" key={item}>
                  <span>0{index + 1}</span>
                  <strong>{item}</strong>
                  <ArrowUpRight size={16} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="experience-band" id="experience">
          <div className="section-wrap content-section">
            <SectionHeading
              number="02"
              label="PROFESSIONAL EXPERIENCE"
              title={<>Experience built on <em>real-world impact.</em></>}
              description="Combining operational knowledge, analytical tools, and cross-functional collaboration."
            />

            <div className="experience-list">
              {experience.map((job, index) => (
                <article className="experience-card" key={job.company}>
                  <div className="experience-side">
                    <span className="experience-number">0{index + 1}</span>
                    <span className="experience-period">{job.period}</span>
                    {job.current && (
                      <span className="current-pill">
                        <span /> CURRENT ROLE
                      </span>
                    )}
                  </div>

                  <div className="experience-main">
                    <div className="experience-header">
                      <div>
                        <h3>{job.role}</h3>
                        <p>{job.company} <span>·</span> {job.location}</p>
                      </div>
                      <span className="experience-company-icon">
                        <PackageCheck size={22} />
                      </span>
                    </div>

                    <p className="experience-description">{job.description}</p>

                    <ul className="achievement-list">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>
                          <CheckCircle2 size={16} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="tag-list">
                      {job.tools.map(tool => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="projects">
          <SectionHeading
            number="03"
            label="FEATURED PROJECTS"
            title={<>Selected work. <em>Measurable results.</em></>}
            description="Data-driven solutions focused on procurement performance, inventory health, and forecasting."
          />

          <div className="projects-grid">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <ProjectVisual type={project.type} />

                <div className="project-content">
                  <div className="project-topline">
                    <span>PROJECT {project.number}</span>
                    <span>{project.category}</span>
                  </div>

                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>

                  <div className="project-result">
                    <strong>{project.metric}</strong>
                    <span>{project.metricLabel}</span>
                  </div>

                  <ul className="project-highlights">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>
                        <ChevronRight size={15} />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="project-footer">
                    <div className="tag-list">
                      {project.tools.map(tool => (
                        <span key={tool}>{tool}</span>
                      ))}
                    </div>
                    <span className="project-arrow"><ArrowUpRight size={19} /></span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="skills-band" id="skills">
          <div className="section-wrap content-section">
            <SectionHeading
              number="04"
              label="TECHNICAL EXPERTISE"
              title={<>The tools behind <em>the decisions.</em></>}
              description="A combination of analytics, enterprise systems, planning methods, and operational expertise."
            />

            <div className="skills-grid">
              {skillGroups.map((group, index) => {
                const Icon = group.icon;
                return (
                  <article className="skill-card" key={group.title}>
                    <div className="skill-card-header">
                      <span>0{index + 1} / EXPERTISE</span>
                      <Icon size={23} />
                    </div>
                    <h3>{group.title}</h3>
                    <div className="skill-tags">
                      {group.skills.map(skill => (
                        <span key={skill}>{skill}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section-wrap content-section" id="education">
          <SectionHeading
            number="05"
            label="EDUCATION & CREDENTIALS"
            title={<>Knowledge backed by <em>continuous learning.</em></>}
          />

          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon"><GraduationCap size={26} /></div>
              <span className="small-heading">ACADEMIC BACKGROUND</span>
              <h3>Master of Science in Data Science</h3>
              <p>Kent State University</p>
              <span className="education-detail">Kent, Ohio · Aug 2023 – May 2025</span>
              <div className="education-gpa">GPA <strong>3.68 / 4.0</strong></div>
            </div>

            <div className="education-card">
              <div className="education-icon"><Sparkles size={26} /></div>
              <span className="small-heading">PROFESSIONAL CERTIFICATIONS</span>
              {[
                "APICS Certified Supply Chain Professional (CSCP)",
                "Lean Six Sigma Green Belt",
                "Microsoft Certified: Power BI Data Analyst Associate",
              ].map(cert => (
                <div className="certification-item" key={cert}>
                  <CheckCircle2 size={17} />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div>
              <div className="section-kicker">
                <span>06</span>
                <span className="kicker-line" />
                LET'S CONNECT
              </div>
              <h2>
                Let's turn ideas into
                <span className="gradient-text"> meaningful impact.</span>
              </h2>
              <p>
                Interested in supply chain analytics, operational improvement,
                or a new opportunity? I'd love to connect.
              </p>
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Start a conversation <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="contact-links">
              <a href={`mailto:${profile.email}`}>
                <Mail size={22} />
                <span><small>EMAIL</small>{profile.email}</span>
                <ArrowUpRight size={18} />
              </a>
              <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>
                <Phone size={22} />
                <span><small>PHONE</small>{profile.phone}</span>
                <ArrowUpRight size={18} />
              </a>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github size={22} />
                <span><small>GITHUB</small>View my GitHub profile</span>
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="section-wrap footer-inner">
          <a href="#home" className="footer-brand">AT<span>.</span></a>
          <span>© {new Date().getFullYear()} Anuranjani Thota. All rights reserved.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
