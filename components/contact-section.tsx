import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl sm:text-5xl font-serif font-light mb-6 text-balance">
              함께 만들어갈
              <br />
              특별한 이야기
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              궁금하신 점이 있으시거나 협업을 원하신다면 언제든 연락 주세요. ATELIER MODE 팀이 정성껏 답변해
              드리겠습니다.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-muted-foreground mt-1" />
                <div>
                  <div className="font-medium mb-1">이메일</div>
                  <div className="text-sm text-muted-foreground">contact@ateliermode.com</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-muted-foreground mt-1" />
                <div>
                  <div className="font-medium mb-1">전화</div>
                  <div className="text-sm text-muted-foreground">02-1234-5678</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                <div>
                  <div className="font-medium mb-1">주소</div>
                  <div className="text-sm text-muted-foreground">서울특별시 강남구 청담동 123-45</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm mb-2">
                    이름
                  </label>
                  <Input id="firstName" placeholder="홍길동" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm mb-2">
                    성
                  </label>
                  <Input id="lastName" placeholder="홍" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  이메일
                </label>
                <Input id="email" type="email" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  메시지
                </label>
                <Textarea id="message" placeholder="문의 내용을 입력해주세요..." rows={5} />
              </div>
              <Button type="submit" className="w-full tracking-wide">
                문의하기
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
