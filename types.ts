export interface ProgramSection {
  id: string;
  title: string;
  courses: string[];
}

export interface MembershipTier {
  title: string;
  description: string;
  fee: string;
  criteria: string[];
}

export interface ServiceItem {
  title: string;
  items: string[];
  description?: string;
}

export interface NavItem {
  label: string;
  path: string;
}