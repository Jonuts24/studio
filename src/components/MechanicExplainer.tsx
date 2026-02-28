"use client"

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Info, Loader2, BookOpen } from "lucide-react"
import { explainGameMechanic } from "@/ai/flows/game-mechanic-explainer-flow"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const SUGGESTIONS = ["Research Points", "Crew Skills", "Battle Rating", "Hull Break", "Angling"];

export function MechanicExplainer() {
  const [query, setQuery] = useState('')
  const [explanation, setExplanation] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleExplain = async (term?: string) => {
    const target = term || query;
    if (!target) return;
    
    setLoading(true)
    setExplanation(null)
    try {
      const result = await explainGameMechanic({ mechanicTerm: target })
      setExplanation(result.explanation)
    } catch (error) {
      console.error("Failed to explain", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2 border-primary hover:bg-primary/10">
          <BookOpen className="h-4 w-4" />
          Mechanic Explainer
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-card border-border">
        <DialogHeader>
          <DialogTitle className="font-headline text-2xl flex items-center gap-2">
            <Info className="h-6 w-6 text-accent" />
            Learn Game Mechanics
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Type any term from War Thunder (e.g. "Spalling", "SL", "BR") and let AI explain it simply.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex gap-2 mt-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Enter mechanic term..." 
              className="pl-9 bg-secondary/50 border-border focus-visible:ring-accent"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleExplain()}
            />
          </div>
          <Button onClick={() => handleExplain()} disabled={loading || !query}>
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Explain"}
          </Button>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="text-xs text-muted-foreground self-center">Try:</span>
          {SUGGESTIONS.map(s => (
            <Button 
              key={s} 
              variant="secondary" 
              size="sm" 
              className="text-xs h-7 hover:bg-accent/20"
              onClick={() => {
                setQuery(s);
                handleExplain(s);
              }}
            >
              {s}
            </Button>
          ))}
        </div>

        {explanation && (
          <div className="mt-6 p-4 rounded-lg bg-primary/10 border border-primary/20 animate-in fade-in slide-in-from-bottom-2">
            <h4 className="font-semibold text-accent mb-2 flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              AI Explanation:
            </h4>
            <p className="text-sm leading-relaxed text-foreground/90">
              {explanation}
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

import { Sparkles } from 'lucide-react'
