import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollHandler } from "@/components/scroll-handler"
import fs from "fs"
import path from "path"
import { remark } from "remark"
import html from "remark-html"
import matter from "gray-matter"

async function getCareersContent() {
  try {
    const filePath = path.join(process.cwd(), "app/careers/requirements.md")
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { content } = matter(fileContents)
    const processedContent = await remark().use(html).process(content)
    const contentHtml = processedContent.toString()
    return contentHtml
  } catch (error) {
    console.error("Error reading careers content:", error)
    return "<p>채용정보를 불러오는 중 오류가 발생했습니다.</p>"
  }
}

export default async function CareersPage() {
  const contentHtml = await getCareersContent()

  return (
    <div className="min-h-screen">
      <ScrollHandler />
      <Header />
      <main className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div
            className="markdown-content"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
            style={{
              lineHeight: '1.75',
            }}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}

