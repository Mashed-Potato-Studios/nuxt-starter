// configTypes.d.ts

// Site Configuration Type
type SiteConfig = {
  name: string;
  logo: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
};

// Features Configuration Type
type FeaturesConfig = {
  registration: boolean;
  authentication: boolean;
  rbac: boolean;
  dashboard: boolean;
};

// Database Configuration Type
type DatabaseConfig = {
  type: string;
  host: string;
  port: number;
  username: string;
  password: string;
  databaseName: string;
};

// API Keys Configuration Type
type ApiKeysConfig = {
  googleMaps: string;
  stripe: string;
};

// Email Configuration Type
type EmailConfig = {
  smtpHost: string;
  smtpPort: number;
  smtpUsername: string;
  smtpPassword: string;
};

// Social Media Configuration Type
type SocialMediaConfig = {
  facebook: string;
  twitter: string;
  instagram: string;
};

// Analytics Configuration Type
type AnalyticsConfig = {
  googleAnalytics: string;
  facebookPixel: string;
};

// Language Configuration Type
type LanguageConfig = {
  defaultLanguage: string;
  supportedLanguages: string[];
};

// Configuration Type
type Config = {
  site: SiteConfig;
  features: FeaturesConfig;
  database: DatabaseConfig;
  apiKeys: ApiKeysConfig;
  email: EmailConfig;
  socialMedia: SocialMediaConfig;
  analytics: AnalyticsConfig;
  paymentMethods: string[];
  language: LanguageConfig;
  timezone: string;
};

// Export the Configuration Type
export default Config;
