"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Smartphone, Globe, Layers, Rocket, LineChart } from "lucide-react"

const services = [
  {
    title: "Bespoke Web Development",
    description:
      "Meticulously crafted digital experiences that transcend the ordinary, with attention to every nuanced detail.",
    icon: <Code2 className="h-6 w-6 text-purple-600" />,
  },
  {
    title: "Responsive Artistry",
    description:
      "Designs that transform gracefully across devices, maintaining their elegance from the grandest display to the most intimate mobile screen.",
    icon: <Smartphone className="h-6 w-6 text-purple-600" />,
  },
  {
    title: "Interface Choreography",
    description:
      "Intuitive journeys through digital spaces, where each interaction feels like a natural extension of human thought.",
    icon: <Layers className="h-6 w-6 text-purple-600" />,
  },
  {
    title: "Digital Prominence",
    description:
      "Strategic elevation of your digital presence, ensuring your masterpiece is discovered by those who seek its unique qualities.",
    icon: <Globe className="h-6 w-6 text-purple-600" />,
  },
  {
    title: "Performance Refinement",
    description:
      "Optimization of every element to create experiences that respond with the immediacy of thought itself.",
    icon: <Rocket className="h-6 w-6 text-purple-600" />,
  },
  {
    title: "Insight Cultivation",
    description:
      "Sophisticated analysis that reveals the subtle patterns of user engagement, informing the evolution of your digital presence.",
    icon: <LineChart className="h-6 w-6 text-purple-600" />,
  },
]

export default function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="py-20 px-4 bg-slate-50 dark:bg-slate-900 h-screen ">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-purple-600 italic">Offerings</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A curated collection of bespoke services designed to elevate your digital presence to an art form — where
            every pixel serves a purpose.
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border-purple-200 hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-2">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

