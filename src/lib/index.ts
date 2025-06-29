export interface NavigationItem {
  name: string;
  href: string;
  description?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  company: string;
  role: string;
  image?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  publishedAt: string;
  author: string;
  tags: string[];
  slug: string;
}