"use client"

import { useState } from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingBag } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, section: string) => {
    e.preventDefault()
    const sectionId = section.replace("#", "")

    if (pathname === "/") {
      // 홈페이지에 있으면 해당 섹션으로 스크롤
      const element = document.getElementById(sectionId)
      if (element) {
        const headerHeight = 64 // 헤더 높이
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - headerHeight

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        })
        // URL에서 해시 제거
        window.history.replaceState(null, "", "/")
      }
    } else {
      // 다른 페이지에 있으면 홈페이지로 이동 후 스크롤 (해시 없이)
      sessionStorage.setItem("scrollTo", sectionId)
      router.push("/")
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-serif font-light tracking-wider">ATELIER MODE</h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#about"
              onClick={(e) => handleSectionClick(e, "#about")}
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors cursor-pointer"
            >
              브랜드 소개
            </a>
            <a
              href="/#collections"
              onClick={(e) => handleSectionClick(e, "#collections")}
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors cursor-pointer"
            >
              컬렉션
            </a>
            <a
              href="/#values"
              onClick={(e) => handleSectionClick(e, "#values")}
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors cursor-pointer"
            >
              브랜드 가치
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleSectionClick(e, "#contact")}
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors cursor-pointer"
            >
              문의하기
            </a>
            <Link href="/careers" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              채용정보
            </Link>
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingBag className="w-5 h-5" />
            </Button>
            <Button size="sm" className="tracking-wide">
              쇼핑하기
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-border">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <a
              href="/#about"
              onClick={(e) => handleSectionClick(e, "#about")}
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors cursor-pointer"
            >
              브랜드 소개
            </a>
            <a
              href="/#collections"
              onClick={(e) => handleSectionClick(e, "#collections")}
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors cursor-pointer"
            >
              컬렉션
            </a>
            <a
              href="/#values"
              onClick={(e) => handleSectionClick(e, "#values")}
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors cursor-pointer"
            >
              브랜드 가치
            </a>
            <a
              href="/#contact"
              onClick={(e) => handleSectionClick(e, "#contact")}
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors cursor-pointer"
            >
              문의하기
            </a>
            <Link href="/careers" className="text-sm tracking-wide hover:text-muted-foreground transition-colors">
              채용정보
            </Link>
            <Button size="sm" className="tracking-wide mt-2">
              쇼핑하기
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
