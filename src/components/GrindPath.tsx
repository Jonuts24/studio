"use client"

import { Nation, GrindStage, Vehicle } from "@/lib/nations-data"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { AITooltip } from "@/components/AITooltip"
import { ChevronRight, Shield, Swords, Target } from "lucide-react"
import Image from "next/image"

interface GrindPathProps {
  nation: Nation
}

export function GrindPath({ nation }: GrindPathProps) {
  return (
    <div className="mt-8 space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <div className="h-1 flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
        <h2 className="font-headline text-3xl font-bold tracking-tight">The {nation.name} Path</h2>
        <div className="h-1 flex-1 bg-gradient-to-l from-accent/50 to-transparent" />
      </div>

      <Accordion type="single" collapsible className="w-full space-y-4" defaultValue={nation.stages[0].id}>
        {nation.stages.map((stage, index) => (
          <AccordionItem 
            key={stage.id} 
            value={stage.id}
            className="border border-border rounded-xl bg-card overflow-hidden transition-all data-[state=open]:shadow-lg"
          >
            <AccordionTrigger className="px-6 py-5 hover:no-underline">
              <div className="flex items-center gap-6 text-left">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-accent font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-headline text-xl font-bold">{stage.title}</h3>
                  <p className="text-sm text-muted-foreground">{stage.description}</p>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-8 border-t border-border pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stage.priorityVehicles.map((vehicle) => (
                  <VehicleProfile key={vehicle.id} vehicle={vehicle} nation={nation.name} />
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

function VehicleProfile({ vehicle, nation }: { vehicle: Vehicle, nation: string }) {
  const RoleIcon = () => {
    if (vehicle.role.toLowerCase().includes('scout')) return <Target className="h-4 w-4" />;
    if (vehicle.role.toLowerCase().includes('brawler') || vehicle.role.toLowerCase().includes('armor')) return <Shield className="h-4 w-4" />;
    return <Swords className="h-4 w-4" />;
  }

  return (
    <div className="group relative bg-secondary/20 rounded-xl p-5 border border-border hover:border-primary/40 transition-all">
      <div className="flex gap-4">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden shrink-0 border border-border">
          <Image 
            src={`https://picsum.photos/seed/${vehicle.id}/200/200`}
            alt={vehicle.name}
            fill
            className="object-cover transition-transform group-hover:scale-110"
            data-ai-hint="tank vehicle"
          />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-headline font-bold text-lg truncate">{vehicle.name}</h4>
              <div className="flex gap-2 mt-1">
                <Badge variant="outline" className="text-[10px] h-5 bg-background border-border">
                  Tier {vehicle.tier}
                </Badge>
                <Badge variant="secondary" className="text-[10px] h-5">
                  BR {vehicle.br}
                </Badge>
              </div>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
            <RoleIcon />
            <span className="truncate">{vehicle.role}</span>
          </div>
        </div>
      </div>
      
      <AITooltip vehicleName={vehicle.name} nation={nation} />
    </div>
  )
}
