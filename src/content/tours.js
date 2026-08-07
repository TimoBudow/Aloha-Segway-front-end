import alaMoanaTourImage from "../images/IMG_2742.jpeg";
import diamondHeadTourImage from "../images/IMG_3597.jpeg";
import historicDowntownTourImage from "../images/IMG_3586.jpeg";
import downtownMeetingImage from "../images/IMG_3598.jpeg";

export const tours = [
  {
    id: "diamond-head",
    fareHarborItemId: "163732",
    name: "Diamond Head Area Tour",
    area: "",
    duration: "2 hours",
    price: "$149",
    image: diamondHeadTourImage,
    summary:
      "Explore the area around Diamond Head Crater, including beautiful parks and scenic ocean views.",
    details:
      "Best for riders who want the postcard side of Honolulu: ocean light, crater silhouettes, and enough movement to feel like a proper outing.",
    meetingPointQuery: "Honolulu Zoo, 151 Kapahulu Ave, Honolulu, HI",
    bring: ["Comfortable shoes", "Water", "Helmets Provided"],
    highlights: ["Diamond Head Crater", "Ocean Views", "Neighborhood streets", "Kapiolani Park", "Leahi Beach Park", "Makalei Beach Park"],
  },
  {
    id: "historic-downtown",
    fareHarborItemId: "downtown-placeholder",
    name: "Historic Downtown & Wall Art Tour",
    area: "",
    duration: "2 Hours",
    price: "$149",
    image: historicDowntownTourImage,
    summary:
      "See all the historic landmarks in two hours.",
    details:
      "",
    meetingPointQuery: "1011 Ala Moana Blvd, Honolulu, HI 96814",
    meetingImage: downtownMeetingImage,
    meetingImageAlt: "Aloha Segway Tours Segways lined up beneath the Honolulu Food Trucks sign",
    meetingImageCaption: "Look for the Honolulu Food Trucks sign and our lined-up Segways.",
    bring: ["Closed-toe shoes", "Water", "Hat", "Phone/camera"],
    hazards: ["Curbs", "Street crossings", "Uneven pavement", "Downtown traffic"],
    highlights: ["Historic landmarks", "Civic buildings", "Shaded city streets"],
  },
  {
    id: "magic-island",
    fareHarborItemId: "131265",
    name: "Magic Island & Ala Moana Tour",
    area: "",
    duration: "2 hours",
    price: "$149",
    image: alaMoanaTourImage,
    summary:
      "A relaxed glide around Ala Moana and Magic Island with open park space, ocean views, and skyline photo stops.",
    details:
      "A good fit for first-timers and mixed groups: calmer paths, wide views, and an easygoing route that still feels unmistakably Honolulu.",
    meetingPointQuery: "Kewalo Basin Harbor, Honolulu, HI",
    bring: ["Closed-toe shoes", "Hat", "Water", "Comfortable clothes"],
    hazards: ["Shared park paths", "Pedestrians", "Uneven pavement", "Wet surfaces near the water"],
    highlights: ["Magic Island paths", "Ala Moana views", "Oceanfront photo stops"],
  },
];
