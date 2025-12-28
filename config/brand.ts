// Brand Configuration - Easily swap colors and brand identity
export const brandConfig = {
  name: "Mercado La Riqueza by Monica Haque, Inc.",
  fullName: "Mercado la Riqueza by Monica Haque, Inc.",
  tagline: "Fresh Produce • Great Prices",
  description: "Your neighborhood grocery store offering fresh produce and quality products at affordable prices.",
  
  // Logo path - Points to /public/images/logo.png (using lowercase for web compatibility)
  logo: "/images/logo.png",
  // Site URL - Your actual Netlify domain
  siteUrl: "https://mercadolariqueza.netlify.app",
  
  // Brand Colors - Matching the logo design (dark red, greens, gold/yellow)
  colors: {
    primary: "#8B1A1A",      // Dark red - Matching logo border
    primaryDark: "#6B1414",  // Darker red
    primaryLight: "#fecaca", // Light red
    secondary: "#166534",    // Dark green - Matching logo green banner
    secondaryDark: "#14532d",
    secondaryLight: "#22c55e", // Bright green for produce
    accent: "#D97706",       // Gold/Amber - Matching logo gold elements
    gold: "#F59E0B",         // Gold - For stars and highlights
    text: "#1f2937",         // Dark gray for text
    textLight: "#6b7280",    // Light gray for secondary text
    cream: "#FEF3C7",        // Cream color - Matching logo text
    background: "#FFFEF9",   // Warm cream/off-white background
    backgroundAlt: "#FFF7ED", // Warm beige background
    warmBeige: "#F5E6D3",    // Warm beige for accents
    warmBrown: "#78350F",    // Warm brown for text accents
  },
  
  // Contact Information
  contact: {
    address: "147 Gramatan Avenue",
    city: "Mount Vernon",
    state: "New York",
    zipCode: "10550",
    phone: "929-288-2493", // Main phone number
    phoneSecondary: "914-699-7331", // Second phone number
    email: "info@mercadolariqueza.com", // Update with actual email if available
    // Google Maps URL
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=147+Gramatan+Avenue+Mount+Vernon+NY+10550",
  },
  
  // Location Benefits
  locationBenefits: [
    "Conveniently located next to the laundromat",
    "Easy parking and access",
    "Fresh produce daily",
    "Competitive prices"
  ],
  
  // Social Media (add when available)
  social: {
    facebook: "",
    instagram: "",
    twitter: "",
  }
}
