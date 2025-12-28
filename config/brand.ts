// Brand Configuration - Easily swap colors and brand identity
export const brandConfig = {
  name: "Mercado La Riqueza",
  fullName: "Mercado la Riqueza by Monica Haque, Inc.",
  tagline: "Fresh Produce • Great Prices",
  description: "Your neighborhood grocery store offering fresh produce and quality products at affordable prices.",
  
  // Logo path - Points to /public/images/logo.PNG
  logo: "/images/logo.PNG",
  
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
    background: "#ffffff",   // White background
    backgroundAlt: "#f9fafb", // Light gray background
  },
  
  // Contact Information
  contact: {
    address: "147 Gramatan Avenue",
    city: "Mount Vernon",
    state: "New York",
    zipCode: "10550",
    phone: "914-699-7331",
    email: "info@mercadolariqueza.com", // Update with actual email if available
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
