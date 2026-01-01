import { Sparkles, Leaf, Users } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    title: "장인 정신",
    description: "모든 제품은 숙련된 장인들의 손길로 완성되며, 디테일에 대한 집착이 품질을 만듭니다.",
  },
  {
    icon: Leaf,
    title: "지속 가능성",
    description: "환경을 생각하는 소재 선택과 윤리적 생산 과정을 통해 더 나은 미래를 만들어갑니다.",
  },
  {
    icon: Users,
    title: "고객 중심",
    description: "고객의 만족과 신뢰를 최우선으로 생각하며, 특별한 경험을 제공하기 위해 노력합니다.",
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-4xl sm:text-5xl font-serif font-light mb-4 text-balance">우리의 가치</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ATELIER MODE가 추구하는 핵심 가치와 철학
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground mb-6">
                <value.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-light mb-4">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed text-pretty">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
