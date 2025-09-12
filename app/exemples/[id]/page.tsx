import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ExampleDetail } from "@/components/example-detail"
import examplesData from "@/data/examples.json"

interface ExamplePageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return examplesData.examples.map((example) => ({
    id: example.id,
  }))
}

export default function ExamplePage({ params }: ExamplePageProps) {
  const example = examplesData.examples.find((e) => e.id === params.id)

  if (!example) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <ExampleDetail example={example} />
      </main>
      <Footer />
    </div>
  )
}
