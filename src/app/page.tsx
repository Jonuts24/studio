"use client"

import { useState } from "react"
import { NATIONS } from "@/lib/nations-data"
import { NationSelector } from "@/components/NationSelector"
import { GrindPath } from "@/components/GrindPath"
import { MechanicExplainer } from "@/components/MechanicExplainer"
import { Compass, ShieldCheck, Map, Trophy } from "lucide-react"

export default function Home() {
  const [selectedNationId, setSelectedNationId] = useState(NATIONS[0].id)
  const currentNation = NATIONS.find(n => n.id === selectedNationId)!

  return (
    <main className="min-h-screen pb-24">
      {/* Header section */}
      <header className="relative py-20 px-6 border-b border-border bg-[url('https://picsum.photos/seed/bg-wt/1920/600')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
        <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left space-y-6 flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
              <Compass className="h-4 w-4" />
              <span>War Thunder Guide: Rank I-VIII</span>
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-black tracking-tighter text-foreground leading-[1.1]">
              Thunder<span className="text-accent">Path</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl font-body leading-relaxed">
              Master the grind from Rank I to Rank VIII. Comprehensive research paths and AI-powered insights for all 10 major nations.
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
               <MechanicExplainer />
            </div>
          </div>
          
          <div className="hidden lg:grid grid-cols-2 gap-4 flex-1">
            <FeatureCard icon={<ShieldCheck className="text-accent" />} title="Protection" desc="Rank 1-8 armor analysis" />
            <FeatureCard icon={<Map className="text-accent" />} title="Tactics" desc="Positioning & map flow tips" />
            <FeatureCard icon={<Trophy className="text-accent" />} title="Efficiency" desc="Optimal research paths" />
            <div className="bg-primary/20 p-6 rounded-2xl border border-primary/30 backdrop-blur-md flex flex-col justify-center text-center">
               <p className="font-bold text-accent text-2xl">Rank VIII</p>
               <p className="text-xs text-muted-foreground">Top Tier Ready</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <section className="max-w-6xl mx-auto px-6 pt-16">
        <div className="flex flex-col gap-12">
          {/* Nation Selector */}
          <div>
            <div className="mb-8 space-y-2">
              <h2 className="font-headline text-2xl font-bold flex items-center gap-3">
                Select Your Nation
              </h2>
              <p className="text-muted-foreground">Explore the progression paths for all 10 nations across Ranks I to VIII.</p>
            </div>
            <NationSelector 
              selectedId={selectedNationId} 
              onSelect={setSelectedNationId} 
            />
          </div>

          {/* Grind Path Visualizer */}
          <GrindPath nation={currentNation} />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 py-12 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="font-headline font-black text-xl">Thunder<span className="text-accent">Path</span></span>
          </div>
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>&copy; {new Date().getFullYear()} ThunderPath Guide. Not affiliated with Gaijin Entertainment.</p>
            <p className="mt-1">Covering all 10 major nations from Rank I to Rank VIII.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-card/50 p-6 rounded-2xl border border-border backdrop-blur-md hover:border-accent/40 transition-colors">
      <div className="mb-3">{icon}</div>
      <h3 className="font-headline font-bold text-sm text-foreground">{title}</h3>
      <p className="text-xs text-muted-foreground mt-1">{desc}</p>
    </div>
  )
}
