import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CollectionsSection } from "@/components/collections-section"
import { ValuesSection } from "@/components/values-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollHandler } from "@/components/scroll-handler"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <ScrollHandler />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CollectionsSection />
        <ValuesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
