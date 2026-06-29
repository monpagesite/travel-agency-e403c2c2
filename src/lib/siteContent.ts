// Site content and data for Traveller Travel Agency

export interface Package {
  id: string;
  title: string;
  location: string;
  description: string;
  price: number;
  duration: string;
  image: string;
  category: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

export interface Destination {
  id: string;
  name: string;
  country: string;
  image: string;
  description: string;
}

export const siteContent = {
  // Brand
  brandName: "Traveller",
  tagline: "Book your perfect trip in minutes, not hours",
  
  // Hero Section
  hero: {
    badge: "500+ trips planned in 2024",
    headline: "Book your perfect trip in minutes, not hours",
    highlightWord: "perfect",
    subtext: "Expert guidance just a message away. Whether you're planning a weekend city break or a two-week expedition, we'll handle every detail while you dream of your next adventure.",
    ctaPrimary: "Start Planning Your Trip",
    ctaSecondary: "or message us on WhatsApp",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1600&q=80"
  },

  // Navigation
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Destinations", href: "#packages" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Testimonials", href: "#testimonials" }
    ]
  },

  // About Section
  about: {
    overline: "About Traveller",
    heading: "Travel planning shouldn't feel like work",
    subtext: "We're a team of passionate travelers who've spent years exploring the world. From navigating chaotic markets to finding the perfect sunset spot, we've learned what makes a trip truly unforgettable. Now we use that knowledge to plan yours.",
    stats: [
      {
        number: "500+",
        label: "Trips Planned"
      },
      {
        number: "42",
        label: "Countries Covered"
      },
      {
        number: "98%",
        label: "Satisfaction Rate"
      },
      {
        number: "24hr",
        label: "Response Time"
      }
    ],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80"
  },

  // Featured Packages Section
  packages: {
    overline: "Curated Journeys",
    heading: "Explore our handpicked destinations",
    subtext: "From hidden temples in Kyoto to the rugged coasts of Patagonia — every trip is designed for the curious traveler.",
    filterCategories: ["All", "Asia", "Europe", "Americas", "Africa"],
    items: [
      {
        id: "1",
        title: "Discover Kyoto's Hidden Temples",
        location: "Kyoto, Japan",
        description: "Wander through ancient bamboo forests, meditate in zen gardens, and experience traditional tea ceremonies.",
        price: 1200,
        duration: "7 days",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80",
        category: "Asia",
        highlights: ["Private temple tours", "Tea ceremony", "Local guide"]
      },
      {
        id: "2",
        title: "Patagonian Adventure",
        location: "Patagonia, Chile",
        description: "Trek through dramatic glaciers, witness turquoise lakes, and camp under pristine southern skies.",
        price: 2400,
        duration: "10 days",
        image: "https://images.unsplash.com/photo-1531065208531-4036c0dba3f5?auto=format&fit=crop&w=1600&q=80",
        category: "Americas",
        highlights: ["Glacier hiking", "Wildlife spotting", "Expert guides"]
      },
      {
        id: "3",
        title: "Santorini Sunset Escape",
        location: "Santorini, Greece",
        description: "Sail the Aegean, taste volcanic wines, and lose yourself in whitewashed villages perched on clifftops.",
        price: 1800,
        duration: "5 days",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=1600&q=80",
        category: "Europe",
        highlights: ["Private yacht tour", "Wine tasting", "Luxury accommodation"]
      },
      {
        id: "4",
        title: "Moroccan Medina Experience",
        location: "Marrakech, Morocco",
        description: "Navigate vibrant souks, sleep in a Sahara desert camp, and savor traditional tagines in ancient riads.",
        price: 1500,
        duration: "8 days",
        image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1600&q=80",
        category: "Africa",
        highlights: ["Desert camping", "Souk tours", "Cooking class"]
      },
      {
        id: "5",
        title: "Bali Cultural Immersion",
        location: "Ubud, Bali",
        description: "Practice yoga at sunrise, explore sacred temples, and learn traditional Balinese crafts from local artisans.",
        price: 1100,
        duration: "6 days",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1600&q=80",
        category: "Asia",
        highlights: ["Yoga sessions", "Temple tours", "Craft workshops"]
      },
      {
        id: "6",
        title: "Iceland Northern Lights",
        location: "Reykjavik, Iceland",
        description: "Soak in geothermal springs, chase the aurora borealis, and explore otherworldly volcanic landscapes.",
        price: 2200,
        duration: "7 days",
        image: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1600&q=80",
        category: "Europe",
        highlights: ["Northern lights tours", "Hot springs", "Glacier walks"]
      }
    ] as Package[]
  },

  // How It Works Section
  howItWorks: {
    overline: "Simple Process",
    heading: "Your journey starts in three steps",
    subtext: "No complicated forms or endless research. Just tell us what you love, and we'll craft the perfect itinerary.",
    steps: [
      {
        number: "01",
        title: "Share Your Vision",
        description: "Send us a message with your travel dreams, budget, and dates. We'll respond within hours with initial ideas.",
        icon: "MessageCircle"
      },
      {
        number: "02",
        title: "Refine Together",
        description: "Collaborate with your dedicated travel expert to perfect every detail — from activities to accommodations.",
        icon: "Compass"
      },
      {
        number: "03",
        title: "Confirm & Go",
        description: "Review your custom itinerary, complete secure booking, and receive a detailed travel guide for your adventure.",
        icon: "Plane"
      }
    ]
  },

  // Destination Highlights
  destinations: {
    overline: "Popular Destinations",
    heading: "Where will you wander next?",
    items: [
      {
        id: "1",
        name: "Japan",
        country: "Asia",
        image: "https://images.unsplash.com/photo-1480796927426-f609979314bd?auto=format&fit=crop&w=1600&q=80",
        description: "Ancient traditions meet cutting-edge modernity"
      },
      {
        id: "2",
        name: "Iceland",
        country: "Europe",
        image: "https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&w=1600&q=80",
        description: "Land of fire, ice, and endless horizons"
      },
      {
        id: "3",
        name: "Peru",
        country: "Americas",
        image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?auto=format&fit=crop&w=1600&q=80",
        description: "Mysteries of the Andes await discovery"
      },
      {
        id: "4",
        name: "Morocco",
        country: "Africa",
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1600&q=80",
        description: "A sensory journey through vibrant culture"
      }
    ] as Destination[]
  },

  // Testimonials
  testimonials: {
    overline: "Traveler Stories",
    heading: "Experiences that speak for themselves",
    items: [
      {
        id: "1",
        name: "Sarah Mitchell",
        role: "Adventure Enthusiast",
        content: "The team planned our entire two-week Japan trip, from hidden temples to local food tours. Every detail was perfect, and we discovered places we would have never found on our own.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
        rating: 5
      },
      {
        id: "2",
        name: "Marcus Chen",
        role: "Family Traveler",
        content: "Booking through them saved us hours of research. They understood our budget and travel style perfectly, creating an itinerary that kept our kids engaged while giving us time to relax.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
        rating: 5
      },
      {
        id: "3",
        name: "Emma Rodriguez",
        role: "Solo Traveler",
        content: "As a solo female traveler, I appreciated their safety-first approach and local connections. They connected me with trusted guides and accommodations that made me feel secure throughout my journey.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
        rating: 5
      }
    ] as Testimonial[]
  },

  // Contact Section
  contact: {
    overline: "Get Started",
    heading: "Ready to plan your adventure?",
    subtext: "Tell us about your dream trip, and we'll respond within 24 hours with personalized recommendations.",
    email: "hello@travellerguide.com",
    phone: "+1 (555) 123-4567",
    whatsapp: "+1 (555) 123-4567",
    address: "123 Explorer Street, Adventure City, AC 12345",
    form: {
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      destinationPlaceholder: "Where do you want to go?",
      datePlaceholder: "When are you planning to travel?",
      budgetPlaceholder: "Budget range (optional)",
      messagePlaceholder: "Tell us about your dream trip...",
      submitText: "Send Inquiry"
    }
  },

  // Footer
  footer: {
    tagline: "Your journey begins with a single message. Let's make it unforgettable.",
    copyright: "© 2024 Traveller. All rights reserved.",
    social: [
      {
        platform: "Instagram",
        url: "https://instagram.com",
        icon: "Instagram"
      },
      {
        platform: "Facebook",
        url: "https://facebook.com",
        icon: "Facebook"
      },
      {
        platform: "Twitter",
        url: "https://twitter.com",
        icon: "Twitter"
      }
    ],
    sections: [
      {
        title: "Destinations",
        links: [
          { label: "Asia", href: "#packages" },
          { label: "Europe", href: "#packages" },
          { label: "Americas", href: "#packages" },
          { label: "Africa", href: "#packages" }
        ]
      },
      {
        title: "Company",
        links: [
          { label: "About Us", href: "#about" },
          { label: "How It Works", href: "#how-it-works" },
          { label: "Testimonials", href: "#testimonials" },
          { label: "Contact", href: "#contact" }
        ]
      },
      {
        title: "Support",
        links: [
          { label: "FAQ", href: "#" },
          { label: "Travel Insurance", href: "#" },
          { label: "Payment Options", href: "#" },
          { label: "Cancellation Policy", href: "#" }
        ]
      }
    ]
  }
};
