"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Sparkles, Loader2 } from "lucide-react"
import { getBeginnerVehicleTips } from "@/ai/flows/beginner-vehicle-tips-flow"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface AITooltipProps {
  vehicleName: string
  nation: string
}

export function AITooltip({ vehicleName, nation }: AITooltipProps) {
  const [tips, setTips] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleFetchTips = async () => {
    setLoading(true)
    try {
      const result = await getBeginnerVehicleTips({ nation, vehicleName })
      setTips(result.tips)
    } catch (error) {
      console.error("Failed to fetch tips", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-4">
      {!tips ? (
        <Button 
          variant="outline" 
          size="sm" 
          className="gap-2 border-accent/20 hover:border-accent hover:bg-accent/10"
          onClick={handleFetchTips}
          disabled={loading}
        >
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4 text-accent" />}
          Get AI Starter Tips
        </Button>
      ) : (
        <Card className="bg-secondary/30 border-accent/20 animate-in fade-in slide-in-from-top-2 duration-300">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-headline flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-accent" />
              AI Strategic Insights
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap leading-relaxed">
              {tips}
            </p>
            <Button 
              variant="link" 
              className="px-0 h-auto text-xs text-accent mt-2" 
              onClick={() => setTips(null)}
            >
              Refresh Tips
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
