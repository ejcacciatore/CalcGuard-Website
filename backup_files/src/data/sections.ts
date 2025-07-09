import { SectionConfig } from '@/types'

export const SECTIONS: SectionConfig[] = [
  {
    id: 'hero',
    component: 'HeroSection',
    title: 'Home',
    order: 1,
    fullHeight: true,
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
  },
  {
    id: 'what-we-do',
    component: 'WhatWeDoSection',
    title: 'What We Do',
    order: 2,
    fullHeight: true,
    background: '#ffffff'
  },
  {
    id: 'challenge',
    component: 'ChallengeSection',
    title: 'The Challenge',
    order: 3,
    fullHeight: true,
    background: 'linear-gradient(135deg, #2d2d2d 0%, #1a1a1a 100%)'
  },
  {
    id: 'platform',
    component: 'PlatformSection',
    title: 'Platform',
    order: 4,
    fullHeight: true,
    background: '#ffffff'
  },
  {
    id: 'leadership',
    component: 'LeadershipSection',
    title: 'Leadership',
    order: 5,
    fullHeight: true,
    background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
  }
]