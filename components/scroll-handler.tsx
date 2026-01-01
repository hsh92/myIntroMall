"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollHandler() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname === "/") {
      // URL에 해시가 있으면 스크롤 후 제거
      const hash = window.location.hash
      if (hash) {
        const sectionId = hash.replace("#", "")
        setTimeout(() => {
          const element = document.getElementById(sectionId)
          if (element) {
            const headerHeight = 64
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            })
            // URL에서 해시 제거
            window.history.replaceState(null, "", "/")
          }
        }, 100)
        return // 해시가 있으면 sessionStorage는 무시
      }

      // sessionStorage에서 스크롤 정보 읽기
      const scrollTo = sessionStorage.getItem("scrollTo")
      if (scrollTo) {
        sessionStorage.removeItem("scrollTo")
        setTimeout(() => {
          const element = document.getElementById(scrollTo)
          if (element) {
            const headerHeight = 64
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
            const offsetPosition = elementPosition - headerHeight

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            })
          }
        }, 100)
      }
    } else {
      // 다른 페이지에서는 URL 해시 제거
      if (window.location.hash) {
        window.history.replaceState(null, "", pathname)
      }
    }
  }, [pathname])

  return null
}

