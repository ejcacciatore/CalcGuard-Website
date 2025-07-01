// Section Configuration Types
export interface SectionConfig {
  id: string;
  component: string;
  title: string;
  order: number;
  fullHeight?: boolean;
  background?: string;
  bufferTop?: 'fade' | 'slide' | 'parallax';
  bufferBottom?: 'fade' | 'slide' | 'parallax';
}

// Navigation Types
export interface NavigationItem {
  id: string;
  title: string;
  href: string;
  order: number;
}

// Section Props
export interface SectionProps {
  id: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  background?: string;
  className?: string;
  bufferTop?: 'fade' | 'slide' | 'parallax';
  bufferBottom?: 'fade' | 'slide' | 'parallax';
}