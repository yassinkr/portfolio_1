"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Luxe Commerce",
    description:
      "An opulent digital marketplace where transactions become ceremonies and products are presented as treasures.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Atelier Portfolio",
    description:
      "A visual sanctuary for a photographer's work, where each image transitions with the subtlety of changing light.",
    tags: ["React", "GSAP", "Styled Components"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Executive Dashboard",
    description:
      "A refined command center where data transforms into visual poetry, enabling intuitive decision-making.",
    tags: ["Vue.js", "D3.js", "Tailwind CSS"],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    title: "Bespoke Mobile Experience",
    description: "A pocket-sized masterpiece of interaction design, where every gesture feels like a conversation.",
    tags: ["React Native", "TypeScript", "Firebase"],
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-600 italic">Masterpieces</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A gallery of digital artistry showcasing the harmonious blend of form and function — each project a
            testament to the pursuit of digital excellence.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="overflow-hidden border-purple-200 h-full hover:shadow-md transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-1">
                      <Github className="h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

