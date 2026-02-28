"use client"

import { NATIONS, Nation } from "@/lib/nations-data"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface NationSelectorProps {
  selectedId: string
  onSelect: (nationId: string) => void
}

export function NationSelector({ selectedId, onSelect }: NationSelectorProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
      {NATIONS.map((nation) => (
        <button
          key={nation.id}
          onClick={() => onSelect(nation.id)}
          className={cn(
            "relative group flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-300 text-left overflow-hidden",
            selectedId === nation.id 
              ? "bg-primary border-accent shadow-[0_0_20px_rgba(195,221,60,0.1)]" 
              : "bg-secondary/40 border-border hover:border-primary/50 hover:bg-secondary/60"
          )}
        >
          <div className="text-4xl filter grayscale group-hover:grayscale-0 transition-all">
            {nation.flag}
          </div>
          <div>
            <h3 className={cn(
              "font-headline font-bold text-lg leading-tight",
              selectedId === nation.id ? "text-primary-foreground" : "text-foreground"
            )}>
              {nation.name}
            </h3>
            <p className={cn(
              "text-xs line-clamp-1",
              selectedId === nation.id ? "text-primary-foreground/80" : "text-muted-foreground"
            )}>
              {nation.summary}
            </p>
          </div>
          {selectedId === nation.id && (
            <div className="absolute right-[-10px] bottom-[-10px] opacity-10 rotate-12">
               <span className="text-6xl">{nation.flag}</span>
            </div>
          )}
        </button>
      ))}
    </div>
  )
}
