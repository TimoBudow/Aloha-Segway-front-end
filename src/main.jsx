import React, { useState } from "react";
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
  Waves,
} from "lucide-react";
import { site } from "./content/site";
import { tours } from "./content/tours";
import { gallery } from "./content/gallery";
import { reviews } from "./content/reviews";
import "./styles.css";

export function App() {
  const [activeTour, setActiveTour] = useState(tours[0].id);
  const selectedTour = tours.find((tour) => tour.id === activeTour) ?? tours[0];

  return (
    <main>
      <Hero />
      <TourPicker
        activeTour={activeTour}
        onSelectTour={setActiveTour}
        selectedTour={selectedTour}
      />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero__image" src={site.heroImage} alt="Waikiki shoreline and ocean water" />
      <div className="hero__shade" />
      <nav className="nav" aria-label="Primary navigation">
        <a className="nav__brand" href="#top">
          <Waves aria-hidden="true" />
          <span>{site.businessName}</span>
        </a>
        <div className="nav__links">
          <a href="#tours">Tours</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#reviews">Reviews</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero__content">
        <div>
          <p className="eyebrow">{site.eyebrow}</p>
          <h1>{site.businessName}</h1>
          <p>{site.tagline}</p>
          <div className="hero__actions">
            <a className="button button--primary" href={site.fareHarborUrl}>
              <CalendarDays aria-hidden="true" />
              <span>Book on FareHarbor</span>
            </a>
            <a className="button button--glass" href={`sms:${site.smsNumber}`}>
              <MessageCircle aria-hidden="true" />
              <span>Text the guide</span>
            </a>
          </div>
        </div>
        <HeroPostcard />
      </div>

      <div className="hero__dock" aria-label="Tour promises">
        <div>
          <Clock3 aria-hidden="true" />
          <span>90 minute and 2 hour rides</span>
        </div>
        <div>
          <Mountain aria-hidden="true" />
          <span>Three Honolulu routes</span>
        </div>
        <div>
          <ShieldAlert aria-hidden="true" />
          <span>Safety notes before you book</span>
        </div>
      </div>
    </section>
  );
}

function HeroPostcard() {
  return (
    <div className="hero-postcard" aria-hidden="true">
      <svg viewBox="0 0 420 320">
        <defs>
          <linearGradient id="sunset" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffb86b" />
            <stop offset="55%" stopColor="#ff6f61" />
            <stop offset="100%" stopColor="#2dd4bf" />
          </linearGradient>
          <linearGradient id="ocean" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5a4" />
            <stop offset="100%" stopColor="#60a5fa" />
          </linearGradient>
        </defs>
        <rect width="420" height="320" rx="24" fill="#fff8ed" />
        <circle cx="318" cy="86" r="54" fill="url(#sunset)" />
        <path d="M0 150 C76 126 126 172 205 146 C270 124 330 130 420 104 V320 H0 Z" fill="#ffe6b8" />
        <path d="M0 190 C58 174 124 212 190 194 C262 174 336 198 420 178 V320 H0 Z" fill="url(#ocean)" opacity="0.9" />
        <path d="M0 222 C64 210 122 236 190 222 C260 208 334 228 420 214" fill="none" stroke="#fff8ed" strokeWidth="7" strokeLinecap="round" opacity="0.75" />
        <path d="M78 224 C128 204 178 204 230 224" fill="none" stroke="#f7c873" strokeWidth="10" strokeLinecap="round" />
        <path d="M88 82 C48 86 38 128 34 174" fill="none" stroke="#5b3b27" strokeWidth="10" strokeLinecap="round" />
        <path d="M90 82 C122 54 154 52 180 78 C140 76 118 86 96 106 Z" fill="#0f766e" />
        <path d="M88 82 C82 42 104 22 142 18 C118 44 105 66 98 96 Z" fill="#14b8a6" />
        <path d="M88 84 C54 50 36 48 16 60 C48 72 68 86 84 112 Z" fill="#0d9488" />
        <path d="M286 214 H350" stroke="#34221a" strokeWidth="8" strokeLinecap="round" />
        <circle cx="296" cy="224" r="10" fill="#34221a" />
        <circle cx="344" cy="224" r="10" fill="#34221a" />
        <path d="M320 210 V164" stroke="#34221a" strokeWidth="8" strokeLinecap="round" />
        <circle cx="318" cy="148" r="13" fill="#8b4a2f" />
        <path d="M304 168 C320 186 338 182 354 164" fill="none" stroke="#ff6f61" strokeWidth="9" strokeLinecap="round" />
        <path d="M316 160 C300 178 294 198 288 216" fill="none" stroke="#0f766e" strokeWidth="8" strokeLinecap="round" />
        <path d="M324 160 C340 178 350 194 360 210" fill="none" stroke="#0f766e" strokeWidth="8" strokeLinecap="round" />
        <path d="M298 144 C308 126 330 126 340 142" fill="none" stroke="#facc15" strokeWidth="6" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function TourPicker({ activeTour, onSelectTour, selectedTour }) {
  return (
    <section className="section section--tours" id="tours">
      <div className="section__heading">
        <p className="eyebrow">Pick your route</p>
        <h2>Choose your Honolulu mood.</h2>
        <p>
          Go scenic, lively, or mellow. Each route includes safety coaching, local color, and a few
          photo-worthy pauses.
        </p>
      </div>

      <div className="tour-tabs" role="tablist" aria-label="Available tours">
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

      <TourDetails tour={selectedTour} />
    </section>
  );
}

function TourDetails({ tour }) {
  return (
    <article className="tour-detail">
      <div className="tour-detail__media">
        <img src={tour.image} alt={`${tour.name} route preview`} />
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
          <span>
            <Check aria-hidden="true" />
            {tour.pace}
          </span>
          <span>
            <MapPin aria-hidden="true" />
            {tour.meetingPoint}
          </span>
        </div>

        <div className="info-grid">
          <InfoList title="Highlights" items={tour.highlights} />
          <InfoList title="Bring" items={tour.bring} />
          <InfoList title="Route Hazards" items={tour.hazards} tone="warning" />
        </div>

        <MeetingPointMap tour={tour} />

        <div className="tour-detail__actions">
          <a className="button button--primary" href={site.fareHarborUrl}>
            <CalendarDays aria-hidden="true" />
            <span>Book this route</span>
          </a>
          <a className="button button--secondary" href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
            <Phone aria-hidden="true" />
            <span>Call first</span>
          </a>
        </div>
      </div>
    </article>
  );
}

function MeetingPointMap({ tour }) {
  const query = encodeURIComponent(tour.meetingPointQuery);
  const mapSrc = `https://maps.google.com/maps?q=${query}&z=15&output=embed`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;

  return (
    <div className="meeting-map">
      <div className="meeting-map__heading">
        <div>
          <h4>Meeting Point</h4>
          <p>{tour.meetingPoint}</p>
        </div>
        <a href={mapUrl} target="_blank" rel="noreferrer">
          <MapPin aria-hidden="true" />
          <span>Open map</span>
        </a>
      </div>
      <iframe
        title={`${tour.name} meeting point map`}
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

function About() {
  return (
    <section className="section about" id="about">
      <div className="about__copy">
        <p className="eyebrow">About the ride</p>
        <h2>Local, relaxed, and serious about keeping people upright.</h2>
        <p>
          This is the opposite of a packed tour bus. Small groups, practical coaching, and a guide
          who knows when to point out a landmark and when to slow the pace for a tricky curb cut.
        </p>
        <p>
          The vibe is aloha shirt and slippers, but the safety talk is real: Honolulu has traffic,
          hills, tourists, rain-slick pavement, and the occasional surprise edge in the sidewalk.
        </p>
      </div>
      <div className="about__image">
        <img src={site.aboutImage} alt="Honolulu coastline and city atmosphere" />
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section className="section gallery" id="gallery">
      <div className="section__heading">
        <p className="eyebrow">Gallery</p>
        <h2>Sun, streets, and salt air.</h2>
      </div>
      <div className="gallery__grid">
        {gallery.map((image) => (
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

function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="section__heading">
        <p className="eyebrow">Guest notes</p>
        <h2>Easy rides, big grins.</h2>
      </div>
      <div className="reviews__grid">
        {reviews.map((review) => (
          <blockquote key={review.name}>
            <div className="stars" aria-label="Five star review">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star key={index} aria-hidden="true" />
              ))}
            </div>
            <p>{review.quote}</p>
            <footer>
              <strong>{review.name}</strong>
              <span>{review.meta}</span>
            </footer>
          </blockquote>
        ))}
      </div>
      <a className="button button--secondary" href={site.reviewSourceUrl}>
        <ArrowRight aria-hidden="true" />
        <span>See booking reviews</span>
      </a>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact" id="contact">
      <div>
        <p className="eyebrow">Contact us</p>
        <h2>Ready when your vacation is.</h2>
        <p>
          Book through FareHarbor for the official schedule, or reach out with route questions,
          group-size questions, and weather-day details.
        </p>
      </div>
      <div className="contact__actions">
        <a className="button button--primary" href={site.fareHarborUrl}>
          <CalendarDays aria-hidden="true" />
          <span>Book on FareHarbor</span>
        </a>
        <a className="button button--secondary" href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
          <Phone aria-hidden="true" />
          <span>{site.phone}</span>
        </a>
        <a className="button button--secondary" href={`mailto:${site.email}`}>
          <Mail aria-hidden="true" />
          <span>Email the guide</span>
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <strong>{site.businessName}</strong>
        <p>Small-group electric glide tours in Honolulu, Hawaii.</p>
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
        <a href={site.instagramUrl} aria-label="Instagram">
          <Instagram aria-hidden="true" />
        </a>
        <a href={site.facebookUrl} aria-label="Facebook">
          <Facebook aria-hidden="true" />
        </a>
      </div>
    </footer>
  );
}

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<App />);
}
