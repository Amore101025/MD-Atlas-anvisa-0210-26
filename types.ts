import React from 'react';
import { LucideIcon } from 'lucide-react';

export enum RiskClass {
  I = 'Class I',
  II = 'Class II',
  III = 'Class III',
  IV = 'Class IV'
}

export interface SectionContent {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  content: React.ReactNode;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimelineStep {
  title: string;
  description: string;
  details?: string[];
}