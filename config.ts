import type Config from "~/configTypes";
export const SITE: Config["site"]  = {
  name: "My Base Template",
  logo: "path/to/logo.png",
  description: "This is my base template.",
  primaryColor: "#3366FF",
  secondaryColor: "#FF9900"
};

export const features: Config["features"] = {
  registration: true,
  authentication: true,
  rbac: true,
  dashboard: true
};

export const database: Config["database"] = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "your_username",
  password: "your_password",
  databaseName: "your_database"
};

export const apiKeys = {
  googleMaps: "your_google_maps_api_key",
  stripe: "your_stripe_api_key"
};

export const email = {
  smtpHost: "smtp.example.com",
  smtpPort: 587,
  smtpUsername: "your_email@example.com",
  smtpPassword: "your_email_password"
};

export const socialMedia = {
  facebook: "https://www.facebook.com/yourpage",
  twitter: "https://www.twitter.com/yourhandle",
  instagram: "https://www.instagram.com/youraccount"
};

export const analytics = {
  googleAnalytics: "your_google_analytics_tracking_id",
  facebookPixel: "your_facebook_pixel_id"
};

export const paymentMethods = ["credit_card", "paypal", "stripe"];

export const language = {
  defaultLanguage: "en",
  supportedLanguages: ["en", "fr", "es"]
};

export const timezone = "America/New_York";
