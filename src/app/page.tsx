import { Button } from "@/components/ui/button"
import { Hero } from "./_components/hero"
import { About } from "./_components/about"
import { Services } from "./_components/service"

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
    </main>
  )
}