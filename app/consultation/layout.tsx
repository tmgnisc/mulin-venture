import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: 'Contact Mulin Venture | Consultation in Nepal' },
  description:
    'Book a botanical design consultation in Nepal — homes, offices & events. Tell us about your space. Contact us today for a free consultation!',
  alternates: { canonical: '/consultation' },
}

export default function ConsultationLayout({ children }: { children: React.ReactNode }) {
  return children
}
