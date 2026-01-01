import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16">
      <div className="absolute inset-0 bg-muted/30" />
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-light tracking-tight mb-6 text-balance">
          시대를 초월한
          <br />
          우아함과 스타일
        </h2>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          ATELIER MODE는 현대적 감각과 클래식한 우아함을 결합하여
          <br className="hidden sm:block" />
          당신만의 특별한 스타일을 완성합니다
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="tracking-wide group">
            2025 컬렉션 보기
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="tracking-wide bg-transparent">
            브랜드 스토리
          </Button>
        </div>
      </div>
    </section>
  )
}
