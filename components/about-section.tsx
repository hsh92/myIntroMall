import Image from "next/image"
import { Card } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-4xl sm:text-5xl font-serif font-light mb-6 text-balance">브랜드의 철학</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ATELIER MODE는 2018년 서울에서 시작된 프리미엄 패션 브랜드입니다. 우리는 단순한 의류를 넘어 당신의
              이야기를 담는 캔버스를 제공합니다.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              지속 가능한 소재 선택부터 장인의 손길이 닿은 섬세한 디테일까지, 모든 제품에는 우리의 철학과 열정이 담겨
              있습니다.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="text-3xl font-serif font-light mb-2">10K+</div>
                <div className="text-sm text-muted-foreground">만족한 고객</div>
              </Card>
              <Card className="p-6">
                <div className="text-3xl font-serif font-light mb-2">500+</div>
                <div className="text-sm text-muted-foreground">출시 제품</div>
              </Card>
            </div>
          </div>
          <div className="relative aspect-[3/4] bg-muted rounded-sm overflow-hidden flex items-center justify-center">
            <Image
              src="/elegant-fashion-studio-with-minimalist-interior.jpg"
              alt="Fashion Studio"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
              <span className="text-muted-foreground text-sm">Fashion Studio</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
