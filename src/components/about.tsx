"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Palette, Sparkles } from "lucide-react"

export default function About() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 h-screen flex justify-center items-center">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-purple-600 italic">L'Artiste</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I am a curator of digital experiences, devoted to the meticulous craft of creating websites that transcend
              the ordinary — where every animation flows with the grace of a ballet dancer.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div variants={itemVariants}>
              <Card className="border-purple-200 h-full">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Code className="text-purple-600 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-handwritten">Immaculate Code</h3>
                  <p className="text-muted-foreground">
                    I compose code with the precision of a master calligrapher, ensuring each line contributes to a
                    flawless digital masterpiece.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-purple-200 h-full">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Palette className="text-purple-600 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-handwritten">Sublime Design</h3>
                  <p className="text-muted-foreground">
                    I craft visual symphonies that captivate the senses, where every element exists in perfect harmony
                    with its surroundings.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="border-purple-200 h-full">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-purple-100 w-12 h-12 flex items-center justify-center mb-4">
                    <Sparkles className="text-purple-600 h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-handwritten">Ethereal Animations</h3>
                  <p className="text-muted-foreground">
                    I choreograph digital movements with the delicacy of silk, creating transitions that feel as natural
                    as a gentle breeze.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

