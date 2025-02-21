"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PencilRuler, Share2, Users, Sparkles } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const features = [
    {
      icon: <PencilRuler className="h-6 w-6" />,
      title: "Intuitive Drawing",
      description: "Create beautiful diagrams with our easy-to-use drawing tools"
    },
    {
      icon: <Share2 className="h-6 w-6" />,
      title: "Real-time Collaboration",
      description: "Work together with your team in real-time, anywhere"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Team Workspace",
      description: "Organize and manage your projects with dedicated workspaces"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-20 pb-32">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <div className="relative w-16 h-16 mx-auto animate-float">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
                <Sparkles className="h-16 w-16 relative z-10 text-primary" />
              </div>
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 gradient-text"
            >
              Excalidraw
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              The virtual whiteboard for sketching hand-drawn like diagrams
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-x-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 transition-transform hover:scale-105"
              >
                Start Drawing
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/20 hover:bg-primary/5 transition-transform hover:scale-105"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-24 gradient-bg">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="p-8 rounded-2xl bg-background/50 backdrop-blur-sm border border-primary/10 hover:border-primary/20 transition-all duration-300 shadow-lg hover:shadow-primary/5 hover:scale-105"
                >
                  <div className="bg-primary/10 p-3 rounded-xl w-fit mb-4 animate-float">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Demo Section */}
        <section id="demo" className="container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden shadow-2xl border border-primary/10 hover:scale-[1.02] transition-transform duration-500"
          >
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=2000&q=80"
              alt="Excalidraw Demo"
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex items-end p-12">
              <div className="max-w-2xl">
                <motion.h2 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-4 text-foreground gradient-text"
                >
                  See it in Action
                </motion.h2>
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg text-muted-foreground mb-6"
                >
                  Experience the power of collaborative drawing and diagramming with our intuitive tools.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-background hover:bg-background/90 text-foreground border border-primary/20 transition-transform hover:scale-105"
                  >
                    Watch Demo
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}