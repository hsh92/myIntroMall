import Image from "next/image"
import { Card } from "@/components/ui/card"

const collections = [
  {
    title: "Spring/Summer 2025",
    description: "가볍고 경쾌한 봄여름 컬렉션",
    image: "/spring-summer-fashion-collection-minimal.jpg",
  },
  {
    title: "Fall/Winter 2024",
    description: "따뜻함과 우아함이 공존하는 컬렉션",
    image: "/fall-winter-fashion-collection-elegant.jpg",
  },
  {
    title: "Essential Collection",
    description: "시대를 초월하는 베이직 라인",
    image: "/essential-fashion-basics-timeless.jpg",
  },
]

export function CollectionsSection() {
  return (
    <section id="collections" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl sm:text-5xl font-serif font-light mb-4 text-balance">우리의 컬렉션</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            각 시즌마다 새로운 영감과 이야기를 담은 특별한 컬렉션을 선보입니다
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Card key={collection.title} className="group overflow-hidden cursor-pointer">
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <Image
                  src={collection.image || "/placeholder.svg"}
                  alt={collection.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
              <div className="p-6">
                <h4 className="text-xl font-serif font-light mb-2">{collection.title}</h4>
                <p className="text-sm text-muted-foreground">{collection.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
