import alaMoanaTourImage from "../images/IMG_2742.jpeg";
import diamondHeadTourImage from "../images/IMG_3585.jpeg";
import historicDowntownTourImage from "../images/IMG_3586.jpeg";
import downtownMeetingImage from "../images/IMG_3598.jpeg";
import diamondHeadMeetingImage from "../images/IMG_3254.jpeg";

export const tours = [
  {
    id: "diamond-head",
    fareHarborItemId: "163732",
    name: "Diamond Head Area Tour",
    area: "",
    duration: "2 hours",
    price: "$149/person",
    image: diamondHeadTourImage,
    summary:
      "Explore the area around Diamond Head Crater, including beautiful parks and scenic ocean views.",
    details:
      "",
    meetingPointQuery: "Honolulu Zoo, 151 Kapahulu Ave, Honolulu, HI",
    meetingImage: diamondHeadMeetingImage,
    meetingImageAlt: "Honolulu Zoo entrance with an Aloha Segway Tours Segway in front",
    meetingImageCaption: "Meet us at the Honolulu Zoo entrance near the Segway.",
    bring: ["Comfortable shoes", "Water", "Helmets Provided"],
    highlights: ["Diamond Head Crater", "Ocean Views", "Neighborhood streets", "Kapiolani Park", "Leahi Beach Park", "Makalei Beach Park"],
  },
  {
    id: "historic-downtown",
    fareHarborItemId: "downtown-placeholder",
    name: "Historic Downtown & Wall Art Tour",
    area: "",
    duration: "2 Hours",
    price: "$149/person",
    image: historicDowntownTourImage,
    summary:
      "See all the historic landmarks in two hours, including Historic Downtown Honolulu, Wall Art Streets, Chinatown, and Aloha Tower.",
    details:
      "",
    meetingPointQuery: "1011 Ala Moana Blvd, Honolulu, HI 96814",
    meetingImage: downtownMeetingImage,
    meetingImageAlt: "Aloha Segway Tours Segways lined up beneath the Honolulu Food Trucks sign",
    meetingImageCaption: "Look for the Honolulu Food Trucks sign and our lined-up Segways.",
    bring: ["Comfortable shoes", "Water", "Helmets Provided"],
    highlights: ["Ali'iolani Hale", "Iolani Palace", "Mission Houses", "Kawaiaha'o Church", "Hawaii Theater", "Aloha Tower"],
  },
  {
    id: "magic-island",
    fareHarborItemId: "131265",
    name: "Magic Island & Ala Moana Tour",
    area: "",
    duration: "2 hours",
    price: "$149/person",
    image: alaMoanaTourImage,
    summary:
      "Glide around Ala Moana Beach Park and Kaka'ako Waterfront Park and take in the beautiful ocean views.",
    details:
      "No hills. A great tour for first-time riders!",
    meetingPointQuery: "1011 Ala Moana Blvd, Honolulu, HI 96814",
    meetingImage: downtownMeetingImage,
    meetingImageAlt: "Aloha Segway Tours Segways lined up beneath the Honolulu Food Trucks sign",
    meetingImageCaption: "Look for the Honolulu Food Trucks sign and our lined-up Segways.",
    bring: ["Comfortable shoes", "Water", "Helmets Provided"],
    highlights: ["Kaka'ako Park lookout", "Point Panic", "Magic Island", "Ala Moana Beach"],
  },
];
