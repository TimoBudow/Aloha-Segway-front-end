import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Mountain,
  Phone,
  ShieldAlert,
  Star,
} from "lucide-react";
import { site } from "./content/site";
import { tours } from "./content/tours";
import { gallery } from "./content/gallery";
import { galleryJa, tourJa, uiEn, uiJa } from "./content/translations";
import heroPostcardImage from "./images/IMG_3591.jpeg";
import heroPostcardImageTwo from "./images/IMG_3597.jpeg";
import logoImage from "./images/IMG_3455.jpeg";
import "./styles.css";

export function App() {
  const [language, setLanguage] = useState("en");
  const [activeTour, setActiveTour] = useState(tours[0].id);
  const copy = language === "ja" ? uiJa : uiEn;
  const localizedTours = language === "ja" ? tours.map((tour) => ({ ...tour, ...tourJa[tour.id] })) : tours;
  const localizedGallery = language === "ja" ? gallery.map((image, index) => ({ ...image, alt: galleryJa[index][0], caption: galleryJa[index][1] })) : gallery;
  const selectedTour = localizedTours.find((tour) => tour.id === activeTour) ?? localizedTours[0];

  useEffect(() => { document.documentElement.lang = language; }, [language]);

  return (
    <main>
      <Hero copy={copy} language={language} onLanguageChange={setLanguage} />
      <TourPicker
        activeTour={activeTour}
        onSelectTour={setActiveTour}
        selectedTour={selectedTour}
        tours={localizedTours}
        copy={copy}
      />
      <About copy={copy} />
      <Gallery copy={copy} images={localizedGallery} />
      <Contact copy={copy} />
      <Footer copy={copy} />
    </main>
  );
}

function Hero({ copy, language, onLanguageChange }) {
  return (
    <section className="hero" id="top">
      <img className="hero__image" src={site.heroImage} alt="Waikiki shoreline and ocean water" />
      <div className="hero__shade" />
      <nav className="nav" aria-label={language === "ja" ? "メインナビゲーション" : "Primary navigation"}>
        <a className="nav__brand" href="#top">
          <img src={logoImage} alt={site.businessName} />
        </a>
        <div className="nav__links">
          <a href="#tours">{copy.nav[0]}</a>
          <a href="#about">{copy.nav[1]}</a>
          <a href="#gallery">{copy.nav[2]}</a>
          <a href="#contact">{copy.nav[3]}</a>
        </div>
        <LanguageToggle language={language} onChange={onLanguageChange} />
      </nav>

      <div className="hero__content">
        <div>
          <p className="eyebrow">{copy.hero[0]}</p>
          <h1 aria-label={site.businessName}>
            {site.businessName.split(" ").map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h1>
          <p>{copy.hero[1]}</p>
          <div className="hero__actions">
            <a className="button button--primary" href={site.fareHarborUrl}>
              <CalendarDays aria-hidden="true" />
              <span>{copy.hero[2]}</span>
            </a>
          </div>
        </div>
        <div className="hero-postcards" aria-label="Highlights from recent Aloha Segway tours">
          <figure className="hero-postcard hero-postcard--downtown">
            <img
              src={heroPostcardImage}
              alt="Segway tour guests posing in front of Aloha Tower"
            />
            <figcaption>
              <span>{copy.hero[3]}</span>
              <small>{copy.hero[4]}</small>
            </figcaption>
          </figure>
          <figure className="hero-postcard hero-postcard--diamond-head">
            <img
              src={heroPostcardImageTwo}
              alt="Segway tour guests with Diamond Head in the background"
            />
            <figcaption>
              <span>{copy.hero[5]}</span>
              <small>{copy.hero[6]}</small>
            </figcaption>
          </figure>
        </div>
      </div>

    </section>
  );
}

function LanguageToggle({ language, onChange }) {
  return (
    <div className="language-toggle" role="group" aria-label="Language / 言語">
      <button type="button" className={language === "en" ? "is-active" : ""} onClick={() => onChange("en")} aria-pressed={language === "en"} aria-label="View in English">
        <FlagUnitedKingdom /><span className="language-toggle__label">EN</span>
      </button>
      <button type="button" className={language === "ja" ? "is-active" : ""} onClick={() => onChange("ja")} aria-pressed={language === "ja"} aria-label="日本語で表示">
        <FlagJapan /><span className="language-toggle__label">日本語</span>
      </button>
    </div>
  );
}

function FlagUnitedKingdom() {
  return (
    <svg className="language-toggle__flag" viewBox="0 0 60 36" aria-hidden="true">
      <rect width="60" height="36" fill="#012169" />
      <path d="M0 0 60 36M60 0 0 36" stroke="#fff" strokeWidth="8" />
      <path d="M0 0 60 36M60 0 0 36" stroke="#c8102e" strokeWidth="4" />
      <path d="M30 0v36M0 18h60" stroke="#fff" strokeWidth="12" />
      <path d="M30 0v36M0 18h60" stroke="#c8102e" strokeWidth="7" />
    </svg>
  );
}

function FlagJapan() {
  return (
    <svg className="language-toggle__flag" viewBox="0 0 60 36" aria-hidden="true">
      <rect width="60" height="36" fill="#fff" />
      <circle cx="30" cy="18" r="10.8" fill="#bc002d" />
    </svg>
  );
}

function TourPicker({ activeTour, onSelectTour, selectedTour, tours, copy }) {
  return (
    <section className="section section--tours" id="tours">
      <div className="section__heading">
        <p className="eyebrow">{copy.tours[0]}</p>
        <h2>{copy.tours[1]}</h2>
        <p>{copy.tours[2]}</p>
      </div>

      <div className="tour-tabs" role="tablist" aria-label={copy.tours[3]}>
        {tours.map((tour) => (
          <button
            key={tour.id}
            type="button"
            role="tab"
            aria-selected={activeTour === tour.id}
            className={activeTour === tour.id ? "tour-tab tour-tab--active" : "tour-tab"}
            onClick={() => onSelectTour(tour.id)}
          >
            <span>{tour.name}</span>
            <ChevronDown aria-hidden="true" />
          </button>
        ))}
      </div>

      <TourDetails tour={selectedTour} copy={copy} />
    </section>
  );
}

function TourDetails({ tour, copy }) {
  return (
    <article className="tour-detail">
      <div className="tour-detail__media">
        <img src={tour.image} alt={`${tour.name} ${copy.tours[4]}`} />
        <div className="tour-detail__badge">
          <span>{tour.duration}</span>
          <strong>{tour.price}</strong>
        </div>
      </div>

      <div className="tour-detail__body">
        <p className="eyebrow">{tour.area}</p>
        <h3>{tour.name}</h3>
        <p>{tour.summary}</p>
        <p>{tour.details}</p>

        <div className="stats">
          <span>
            <Clock3 aria-hidden="true" />
            {tour.duration}
          </span>
        </div>

        <div className="tour-detail__actions">
          <a className="button button--primary" href={site.fareHarborUrl}>
            <CalendarDays aria-hidden="true" />
            <span>{copy.tours[5]}</span>
          </a>
        </div>
      </div>
      <div className="tour-detail__extras">
        <div className="info-grid">
          <InfoList title={copy.tours[6]} items={tour.highlights} />
          <InfoList title={copy.tours[7]} items={tour.bring} />
        </div>
        <MeetingPointMap tour={tour} copy={copy} />
      </div>
    </article>
  );
}

function MeetingPointMap({ tour, copy }) {
  const query = encodeURIComponent(tour.meetingPointQuery);
  const mapSrc = `https://maps.google.com/maps?q=${query}&z=17&output=embed`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const meetingPoint = tour.meetingPoint ?? tour.meetingPointQuery;

  return (
    <div className="meeting-map">
      <div className="meeting-map__heading">
        <div>
          <h4>{copy.tours[8]}</h4>
          <p>{meetingPoint}</p>
        </div>
        <a href={mapUrl} target="_blank" rel="noreferrer">
          <MapPin aria-hidden="true" />
          <span>{copy.tours[9]}</span>
        </a>
      </div>
      {tour.meetingImage && (
        <figure className="meeting-map__landmark">
          <img src={tour.meetingImage} alt={tour.meetingImageAlt} />
          <figcaption>
            <MapPin aria-hidden="true" />
            <span>{tour.meetingImageCaption}</span>
          </figcaption>
        </figure>
      )}
      <iframe
        title={`${tour.name} ${copy.tours[10]}`}
        src={mapSrc}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

function InfoList({ title, items, tone }) {
  return (
    <div className={tone === "warning" ? "info-list info-list--warning" : "info-list"}>
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <Check aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function About({ copy }) {
  return (
    <section className="section about" id="about">
      <div className="about__copy">
        <p className="eyebrow">{copy.about[0]}</p>
        <h2>{copy.about[1]}</h2>
        <p>{copy.about[2]}</p>

      </div>
      <div className="about__image">
        <img src={site.aboutImage} alt="Honolulu coastline and city atmosphere" />
      </div>
    </section>
  );
}

function Gallery({ copy, images }) {
  return (
    <section className="section gallery" id="gallery">
      <div className="section__heading">
        <p className="eyebrow">{copy.gallery[0]}</p>
        <h2>{copy.gallery[1]}</h2>
      </div>
      <div className="gallery__grid">
        {images.map((image) => (
          <figure key={image.src}>
            <img src={image.src} alt={image.alt} />
            <figcaption>
              <Camera aria-hidden="true" />
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}


function Contact({ copy }) {
  return (
    <section className="section contact" id="contact">
      <div>
        <p className="eyebrow">{copy.contact[0]}</p>
        <h2>{copy.contact[1]}</h2>
        <p>{copy.contact[2]}</p>
      </div>
      <div className="contact__actions">
        <a className="button button--primary" href={site.fareHarborUrl}>
          <CalendarDays aria-hidden="true" />
          <span>{copy.contact[3]}</span>
        </a>
      </div>
    </section>
  );
}

function Footer({ copy }) {
  return (
    <footer className="footer">
      <div>
        <strong>{site.businessName}</strong>
        <p>{copy.footer}</p>
      </div>
      <div className="footer__links">
        <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
          <Phone aria-hidden="true" />
          <span>{site.phone}</span>
        </a>
        <a href={`mailto:${site.email}`}>
          <Mail aria-hidden="true" />
          <span>{site.email}</span>
        </a>
        <a href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label={`Instagram ${site.instagramHandle}`}>
          <Instagram aria-hidden="true" />
          <span>{site.instagramHandle}</span>
        </a>
      </div>
    </footer>
  );
}

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<App />);
}
