import type { LucideIcon } from 'lucide-react';
import {
  CalendarCheck,
  CalendarDays,
  Compass,
  DoorOpen,
  HeartHandshake,
  HeartPulse,
  MessagesSquare,
  PersonStanding,
  RefreshCw,
  Scale,
  ShieldCheck,
  Sparkles,
  Sprout,
  User,
  Users,
} from 'lucide-react';
import type { BrandIconName } from '../lib/content';

const icons: Record<BrandIconName, LucideIcon> = {
  person: User,
  calendar: CalendarDays,
  people: Users,
  structure: CalendarCheck,
  change: RefreshCw,
  selfReliance: PersonStanding,
  confidence: Sparkles,
  emotion: HeartPulse,
  growth: Sprout,
  social: MessagesSquare,
  independence: DoorOpen,
  respect: HeartHandshake,
  clarity: Scale,
  shield: ShieldCheck,
  compass: Compass,
};

export function BrandIcon({ name, className }: { name: BrandIconName; className?: string }) {
  const Icon = icons[name];
  return <Icon className={className} strokeWidth={1.75} aria-hidden="true" />;
}
