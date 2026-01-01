export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-serif font-light mb-4">ATELIER MODE</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              현대적 감각과 클래식한 우아함을 결합한 프리미엄 패션 브랜드
            </p>
          </div>
          <div>
            <h5 className="font-medium mb-4">쇼핑</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  신상품
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  베스트셀러
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  세일
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-4">고객지원</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  배송 안내
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  반품/교환
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-4">회사 정보</h5>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  회사 소개
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  채용
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  매장 안내
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 ATELIER MODE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
