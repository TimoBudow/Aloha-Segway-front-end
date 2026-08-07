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
} from "lucide-react";
import { site } from "./content/site";
import { tours } from "./content/tours";
import { gallery } from "./content/gallery";
import heroPostcardImage from "./images/IMG_3591.jpeg";
import heroPostcardImageTwo from "./images/IMG_3597.jpeg";
import logoImage from "./images/IMG_3455.jpeg";
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
          <img src={logoImage} alt={site.businessName} />
        </a>
        <div className="nav__links">
          <a href="#tours">Tours</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <div className="hero__content">
        <div>
          <p className="eyebrow">{site.eyebrow}</p>
          <h1 aria-label={site.businessName}>
            {site.businessName.split(" ").map((word) => (
              <span key={word}>{word}</span>
            ))}
          </h1>
          <p>{site.tagline}</p>
          <div className="hero__actions">
            <a className="button button--primary" href={site.fareHarborUrl}>
              <CalendarDays aria-hidden="true" />
              <span>Book on FareHarbor</span>
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
              <span>Wish you were here!</span>
              <small>Aloha Tower</small>
            </figcaption>
          </figure>
          <figure className="hero-postcard hero-postcard--diamond-head">
            <img
              src={heroPostcardImageTwo}
              alt="Segway tour guests with Diamond Head in the background"
            />
            <figcaption>
              <span>Greetings from Honolulu</span>
              <small>Diamond Head</small>
            </figcaption>
          </figure>
        </div>
      </div>

    </section>
  );
}

function TourPicker({ activeTour, onSelectTour, selectedTour }) {
  return (
    <section className="section section--tours" id="tours">
      <div className="section__heading">
        <p className="eyebrow">Pick your route</p>
        <h2>Choose one of these tours...</h2>
        <p>
          * Each tour includes a lesson in riding a Segway safely.
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
        </div>

        <div className="info-grid">
          <InfoList title="Highlights" items={tour.highlights} />
          <InfoList title="What to Bring" items={tour.bring} />
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
  const mapSrc = `https://maps.google.com/maps?q=${query}&z=17&output=embed`;
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  const meetingPoint = tour.meetingPoint ?? tour.meetingPointQuery;

  return (
    <div className="meeting-map">
      <div className="meeting-map__heading">
        <div>
          <h4>Meeting Point</h4>
          <p>{meetingPoint}</p>
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
      {tour.meetingImage && (
        <figure className="meeting-map__landmark">
          <img src={tour.meetingImage} alt={tour.meetingImageAlt} />
          <figcaption>
            <MapPin aria-hidden="true" />
            <span>{tour.meetingImageCaption}</span>
          </figcaption>
        </figure>
      )}
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
        <p className="eyebrow">Why a Segway tour?</p>
        <h2>Skip the traffic and the hassle of parking. See everything up close on a Segway!</h2>
        <p>
          Different from a crowded tour bus, see the sights in the cool breeze and learn about 
          Hawaiian history and culture.
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
