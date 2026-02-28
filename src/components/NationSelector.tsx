"use client"

import { NATIONS } from "@/lib/nations-data"
import { cn } from "@/lib/utils"

interface NationSelectorProps {
  selectedId: string
  onSelect: (nationId: string) => void
}

export function NationSelector({ selectedId, onSelect }: NationSelectorProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 w-full">
      {NATIONS.map((nation) => (
        <button
          key={nation.id}
          onClick={() => onSelect(nation.id)}
          className={cn(
            "relative group flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-300 text-center overflow-hidden",
            selectedId === nation.id 
              ? "bg-primary border-accent shadow-[0_0_20px_rgba(195,221,60,0.15)]" 
              : "bg-secondary/40 border-border hover:border-primary/50 hover:bg-secondary/60"
          )}
        >
          <div className={cn(
            "text-4xl transition-all duration-300 transform group-hover:scale-110",
            selectedId === nation.id ? "grayscale-0" : "grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100"
          )}>
            {nation.flag}
          </div>
          <div className="z-10">
            <h3 className={cn(
              "font-headline font-bold text-sm leading-tight",
              selectedId === nation.id ? "text-primary-foreground" : "text-foreground"
            )}>
              {nation.name}
            </h3>
          </div>
          {selectedId === nation.id && (
            <div className="absolute right-[-15px] bottom-[-15px] opacity-10 rotate-12 pointer-events-none">
               <span className="text-6xl">{nation.flag}</span>
            </div>
          )}
        </button>
      ))}
    </div>
  )
}
