
import { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Database,
  Cpu,
  Code2,
  Server,
  BriefcaseBusiness,
  Mail,
  Menu,
  X,
  CheckCircle2,
  FileText,
  Activity,
  Layers3,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    category: 'IoT · Systèmes embarqués',
    title: 'VELA — Supervision de détection d’incendie',
    status: 'Projet de soutenance · en développement',
    description:
      'Conception d’un système embarqué visant à détecter des situations anormales et à présenter les événements sur une plateforme de supervision.',
    details: [
      'Prototype ESP32 et capteurs de détection',
      'Interface de supervision React',
      'Réflexion sur les niveaux d’alerte et l’historique des événements',
    ],
    stack: ['ESP32', 'C/C++', 'React', 'Vite', 'Supabase'],
    icon: Cpu,
  },
  {
    number: '02',
    category: 'Données · SQL',
    title: 'Base de données de gestion commerciale',
    status: 'Projet académique',
    description:
      'Conception d’une base de données pour une société de vente de véhicules, avec structuration des informations et requêtes SQL.',
    details: [
      'Modélisation des données et relations',
      'Requêtes SQL de consultation et de suivi',
      'Piste d’amélioration : vues, rôles et optimisation',
    ],
    stack: ['SQL', 'SQL Server', 'Modélisation'],
    icon: Database,
  },
  {
    number: '03',
    category: 'Applications métiers',
    title: 'Application de gestion de pharmacie',
    status: 'Projet académique',
    description:
      'Application développée avec WinDev/WLangage dans le cadre des travaux pratiques, autour d’un besoin de gestion métier.',
    details: [
      'Structuration d’un flux applicatif',
      'Manipulation des données',
      'Détails techniques à compléter après vérification',
    ],
    stack: ['WinDev', 'WLangage', 'Données'],
    icon: Layers3,
  },
]

const skills = [
  {
    title: 'Données & bases de données',
    icon: Database,
    level: 'Bases acquises · approfondissement en cours',
    items: [
      'SQL',
      'SQL Server',
      'Supabase / PostgreSQL',
      'Modélisation relationnelle',
    ],
  },
  {
    title: 'Développement',
    icon: Code2,
    level: 'Projets académiques et personnels',
    items: [
      'Python',
      'Java',
      'C / C++',
      'React',
      'JavaScript',
      'WinDev / WLangage',
    ],
  },
  {
    title: 'Systèmes & IoT',
    icon: Server,
    level: 'Pratique et montée en compétences',
    items: [
      'ESP32',
      'Arduino IDE',
      'Packet Tracer',
      'Notions Active Directory / GPO',
      'Sécurité électronique',
    ],
  },
]

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && (
        <p className="section-description">{description}</p>
      )}
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const email = 'tanhmouele12@gmail.com'

  const closeMenu = () => setMenuOpen(false)

  // Déclenche les animations lorsque les éléments arrivent à l'écran.
  useEffect(() => {
    const selectors = [
      '.quick-strip > div',
      '.content-section .section-heading',
      '.profile-note',
      '.profile-body',
      '.skill-card',
      '.learning-banner',
      '.project-card',
      '.project-disclaimer',
      '.timeline-item',
      '.education-card',
      '.contact-inner > *',
    ]

    const elements = document.querySelectorAll(selectors.join(','))

    elements.forEach((element, index) => {
      element.classList.add('reveal-on-scroll')
      element.style.setProperty(
        '--reveal-delay',
        `${(index % 4) * 110}ms`
      )
    })

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            currentObserver.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -35px 0px',
      }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <header className="topbar">
        <a
          className="brand"
          href="#accueil"
          onClick={closeMenu}
          aria-label="Retour à l'accueil"
        >
          <span className="brand-mark">TM</span>
          <span>
            Tanh Mouele<span className="brand-dot">.</span>
          </span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

        <nav className={menuOpen ? 'nav nav-open' : 'nav'}>
          <a href="#profil" onClick={closeMenu}>Profil</a>
          <a href="#competences" onClick={closeMenu}>Compétences</a>
          <a href="#projets" onClick={closeMenu}>Projets</a>
          <a href="#experience" onClick={closeMenu}>Expérience</a>
          <a
            className="nav-contact"
            href="#contact"
            onClick={closeMenu}
          >
            Me contacter <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="accueil">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              Ouverte aux opportunités de stage en informatique
            </div>

            <p className="eyebrow">
              Portfolio · IT & Digital Technology
            </p>

            <h1>
              Relier les données,
              <br />
              <span>le logiciel</span> et le monde réel.
            </h1>

            <p className="hero-lead">
              Je suis Tanh Mouele, étudiante en Licence 3 Génie
              Informatique, option Génie Logiciel. Je m’intéresse
              aux bases de données, au développement d’applications
              et aux systèmes connectés.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#projets">
                Découvrir mes projets <ArrowDownRight size={17} />
              </a>
              <a className="button button-ghost" href="#contact">
                Prendre contact <ArrowUpRight size={17} />
              </a>
            </div>

            <div className="hero-meta">
              <span>
                <span className="meta-number">03</span>
                domaines prioritaires
              </span>
              <span className="meta-separator" />
              <span>
                <span className="meta-number">01</span>
                projet IoT de soutenance
              </span>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Illustration des domaines de travail"
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />

            <div className="visual-core">
              <Cpu size={44} strokeWidth={1.4} />
              <span>IT + DATA + IoT</span>
            </div>

            <div className="float-card float-card-top">
              <Database size={18} />
              <span>Data & SQL</span>
              <CheckCircle2 size={15} className="tiny-check" />
            </div>

            <div className="float-card float-card-right">
              <Activity size={18} />
              <span>Supervision</span>
            </div>

            <div className="float-card float-card-bottom">
              <Code2 size={18} />
              <span>Développement</span>
            </div>

            <div className="visual-caption">
              Apprendre · construire · documenter
            </div>
          </div>
        </section>

        <section className="quick-strip">
          <div>
            <span className="strip-label">Formation</span>
            <strong>Licence 3 Génie Informatique</strong>
          </div>
          <div>
            <span className="strip-label">Orientation</span>
            <strong>IT · Données · IoT</strong>
          </div>
          <div>
            <span className="strip-label">Localisation</span>
            <strong>Pointe-Noire, Congo</strong>
          </div>
        </section>

        <section
          className="section-wrap content-section"
          id="profil"
        >
          <SectionHeading
            eyebrow="01 / Profil"
            title="Une approche informatique ancrée dans le concret."
            description="Mon parcours associe développement logiciel, structuration des données et découverte de systèmes techniques utilisés sur le terrain."
          />

          <div className="profile-grid">
            <div className="profile-note">
              <span className="quote-mark">“</span>
              <p>
                Ce qui m’intéresse, c’est de comprendre un besoin,
                concevoir une solution utile, puis la rendre testable
                et compréhensible.
              </p>
              <span className="note-signature">— Tanh Mouele</span>
            </div>

            <div className="profile-body">
              <p>
                Au cours de ma formation en Génie Logiciel, j’ai
                travaillé sur des applications, des bases de données
                et des environnements de programmation. Mon stage
                chez OFIS me permet également de découvrir la sécurité
                électronique, notamment la détection incendie, la
                vidéosurveillance, le contrôle d’accès et la gestion
                des temps et présences.
              </p>

              <p>
                Je souhaite approfondir les systèmes d’information,
                les bases de données et l’IoT, et contribuer à des
                projets numériques qui répondent à des besoins
                opérationnels.
              </p>

              <div className="focus-tags">
                <span>Curiosité technique</span>
                <span>Documentation</span>
                <span>Résolution de problèmes</span>
              </div>
            </div>
          </div>
        </section>

        <section
          className="section-wrap content-section"
          id="competences"
        >
          <SectionHeading
            eyebrow="02 / Compétences"
            title="Des bases que je continue à renforcer."
            description="Les niveaux indiqués reflètent mon parcours actuel. Je privilégie les compétences que je peux illustrer par un projet ou un exercice concret."
          />

          <div className="skills-grid">
            {skills.map((skill) => {
              const Icon = skill.icon

              return (
                <article className="skill-card" key={skill.title}>
                  <div className="skill-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{skill.title}</h3>
                  <p className="skill-level">{skill.level}</p>

                  <div className="skill-list">
                    {skill.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>

          <div className="learning-banner">
            <div className="learning-icon">
              <Activity size={22} />
            </div>
            <div>
              <strong>En cours d’approfondissement</strong>
              <p>
                SQL avancé · Administration Windows/Linux · Python
                pour l’analyse de données · Documentation technique ·
                Anglais professionnel
              </p>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projets">
          <div className="section-wrap content-section">
            <SectionHeading
              eyebrow="03 / Projets"
              title="Du besoin à la solution."
              description="Une sélection de travaux académiques et personnels. Les descriptions seront enrichies avec les captures, les résultats et les dépôts de code vérifiés."
            />

            <div className="projects-grid">
              {projects.map((project) => {
                const Icon = project.icon

                return (
                  <article
                    className="project-card"
                    key={project.number}
                  >
                    <div className="project-topline">
                      <span className="project-number">
                        {project.number}
                      </span>
                      <span className="project-category">
                        {project.category}
                      </span>
                    </div>

                    <div className="project-icon">
                      <Icon size={25} />
                    </div>

                    <h3>{project.title}</h3>
                    <p className="project-status">{project.status}</p>
                    <p className="project-description">
                      {project.description}
                    </p>

                    <ul className="project-details">
                      {project.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>

                    <div className="tech-stack">
                      {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>

                    <div className="project-footer">
                      <span>Étude de cas</span>
                      <span className="project-arrow">
                        <ArrowUpRight size={17} />
                      </span>
                    </div>
                  </article>
                )
              })}
            </div>

            <p className="project-disclaimer">
              <FileText size={15} />
              Les détails et statuts doivent être vérifiés et complétés
              avant une candidature. Aucun lien de dépôt n’est affiché
              tant qu’il n’a pas été confirmé.
            </p>
          </div>
        </section>

        <section
          className="section-wrap content-section"
          id="experience"
        >
          <SectionHeading
            eyebrow="04 / Expérience"
            title="Comprendre les outils, les utilisateurs et les opérations."
            description="Je construis mon expérience entre pratique informatique, découverte de systèmes techniques et activités administratives."
          />

          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-marker">
                <BriefcaseBusiness size={18} />
              </div>

              <div className="timeline-content">
                <div className="timeline-head">
                  <div>
                    <h3>Stagiaire — OFIS</h3>
                    <p className="timeline-type">
                      Sécurité électronique & systèmes de gestion
                    </p>
                  </div>
                  <span className="timeline-date">
                    En cours · 2026–2027
                  </span>
                </div>

                <p>
                  Découverte de la détection incendie, de la
                  vidéosurveillance, du contrôle d’accès et de la
                  gestion des temps et présences avec Kelio.
                </p>

                <div className="timeline-tags">
                  <span>Détection incendie</span>
                  <span>Contrôle d’accès</span>
                  <span>Kelio</span>
                </div>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-marker">
                <FileText size={18} />
              </div>

              <div className="timeline-content">
                <div className="timeline-head">
                  <div>
                    <h3>Secrétariat administratif</h3>
                    <p className="timeline-type">
                      Organisation & suivi documentaire
                    </p>
                  </div>
                  <span className="timeline-date">
                    Expérience pratique
                  </span>
                </div>

                <p>
                  Activités administratives comprenant la préparation
                  et le suivi de documents, devis, factures et
                  communications professionnelles. À détailler selon
                  les missions réellement effectuées.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <div className="timeline-marker">
                <Activity size={18} />
              </div>

              <div className="timeline-content">
                <div className="timeline-head">
                  <div>
                    <h3>Communication digitale — Église</h3>
                    <p className="timeline-type">
                      Contenus & community management
                    </p>
                  </div>
                  <span className="timeline-date">Engagement</span>
                </div>

                <p>
                  Création et montage de contenus pour les réseaux
                  sociaux, avec adaptation des messages au public et
                  aux activités de la communauté.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-wrap content-section education-section">
          <div className="education-card">
            <div className="education-icon">
              <Layers3 size={25} />
            </div>

            <div>
              <p className="eyebrow">05 / Formation</p>
              <h2>Licence 3 — Génie Informatique</h2>
              <p>
                Option Génie Logiciel · Formation en cours de finalisation
              </p>
              <p className="education-note">
                Établissement, année d’obtention prévue et date de
                soutenance à compléter précisément avant publication.
              </p>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <p className="eyebrow">06 / Contact</p>
            <h2>
              Parlons d’un projet
              <br />
              ou d’une opportunité.
            </h2>
            <p>
              Je souhaite continuer à apprendre au contact d’équipes
              techniques et contribuer à des projets informatiques
              concrets.
            </p>

            <div className="contact-actions">
              <a
                className="button button-light"
                href={`mailto:${email}`}
              >
                <Mail size={17} />
                Envoyer un e-mail
              </a>

              <a
                className="button button-outline-light"
                href="#accueil"
              >
                Retour en haut <ArrowUpRight size={16} />
              </a>
            </div>

            <div className="contact-footnote">
              Avant publication, remplace l’adresse e-mail d’exemple
              et ajoute tes vrais liens professionnels.
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#accueil">
          <span className="brand-mark">TM</span>
          <span>
            Tanh Mouele<span className="brand-dot">.</span>
          </span>
        </a>

        <p>Portfolio personnel · React + Vite</p>
        <span>© {new Date().getFullYear()} Tanh Mouele</span>
      </footer>
    </div>
  )
}

export default App
