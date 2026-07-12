import alaMoanaTourImage from "../images/tour-ala-moana.png";
import diamondHeadTourImage from "../images/tour-diamond-head.png";
import historicDowntownTourImage from "../images/tour-historic-downtown.png";

export const tours = [
  {
    id: "diamond-head",
    fareHarborItemId: "163732",
    name: "Scenic Diamond Head",
    area: "Crater views and coastal air",
    duration: "2 hours",
    price: "$155.70",
    pace: "Moderate",
    image: diamondHeadTourImage,
    summary:
      "A breezy route toward Diamond Head with open-sky views, photo stops, and a little city rhythm along the way.",
    details:
      "Best for riders who want the postcard side of Honolulu: ocean light, crater silhouettes, and enough movement to feel like a proper outing.",
    meetingPoint: "Honolulu Zoo",
    meetingPointQuery: "Honolulu Zoo, 151 Kapahulu Ave, Honolulu, HI",
    bring: ["Closed-toe shoes", "Sunglasses", "Water", "Light sunscreen"],
    hazards: ["Curb cuts", "Gentle hills", "Busy crossings", "Wet pavement after rain"],
    highlights: ["Diamond Head lookout", "Coastal photo stops", "Neighborhood streets"],
  },
  {
    id: "historic-downtown",
    fareHarborItemId: "downtown-placeholder",
    name: "Historic Downtown",
    area: "Royal history, civic landmarks, and city streets",
    duration: "90 minutes",
    price: "$105.70",
    pace: "Easy",
    image: historicDowntownTourImage,
    summary:
      "A slower city route through Honolulu's historic core, with landmark stops and stories tucked between downtown streets.",
    details:
      "Best for guests who want culture and context: royal history, civic buildings, shaded streets, and a calmer look at the city beyond the beach.",
    meetingPoint: "Near Iolani Palace",
    meetingPointQuery: "Iolani Palace, 364 S King St, Honolulu, HI",
    bring: ["Closed-toe shoes", "Water", "Hat", "Phone/camera"],
    hazards: ["Curbs", "Street crossings", "Uneven pavement", "Downtown traffic"],
    highlights: ["Historic landmarks", "Civic buildings", "Shaded city streets"],
  },
  {
    id: "magic-island",
    fareHarborItemId: "131265",
    name: "Magic Island & Ala Moana",
    area: "Park paths, ocean air, and skyline views",
    duration: "2 hours",
    price: "$155.70",
    pace: "Easy",
    image: alaMoanaTourImage,
    summary:
      "A relaxed glide around Ala Moana and Magic Island with open park space, ocean views, and skyline photo stops.",
    details:
      "A good fit for first-timers and mixed groups: calmer paths, wide views, and an easygoing route that still feels unmistakably Honolulu.",
    meetingPoint: "Kewalo Basin Harbor",
    meetingPointQuery: "Kewalo Basin Harbor, Honolulu, HI",
    bring: ["Closed-toe shoes", "Hat", "Water", "Comfortable clothes"],
    hazards: ["Shared park paths", "Pedestrians", "Uneven pavement", "Wet surfaces near the water"],
    highlights: ["Magic Island paths", "Ala Moana views", "Oceanfront photo stops"],
  },
];
