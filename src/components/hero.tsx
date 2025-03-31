"use client"

import { useRef } from "react"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToNext = () => {
    const nextSection = document.querySelector("#about")
    if (nextSection) {
      window.scrollTo({
        top: (nextSection as HTMLElement).offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex flex-col items-center justify-center relative px-4 py-20"
    >
      <div className="container max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-handwritten">
            The <span className="text-purple-600 italic">artistry</span> of the journey, the{" "}
            <span className="text-purple-600 italic">elegance</span> of the company
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Crafting exquisite digital experiences where refined aesthetics meet seamless interaction — a symphony of
            elegance for the discerning client.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" onClick={scrollToNext}>
            Explore My Work
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8"
      >
        <Button variant="ghost" size="icon" onClick={scrollToNext} className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-purple-600" />
        </Button>
      </motion.div>
    </section>
  )
}

