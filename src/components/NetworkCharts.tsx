"use client"

import { act, useState, useEffect } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, TooltipProps } from "recharts"
import { formatDistanceToNow } from "date-fns"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'

function generatePingStats(range: "30m" | "2h" | "6h") {
  const now = new Date()
  let totalPoints = 0
  let intervalMs = 0

  switch (range) {
    case "30m":
      totalPoints = 30
      intervalMs = 60 * 1000 // every minute
      break
    case "2h":
      totalPoints = 30
      intervalMs = 5 * 60 * 1000 // every 5 minutes
      break
    case "6h":
      totalPoints = 30
      intervalMs = 15 * 60 * 1000 // every 15 minutes
      break
  }

  const data = []
  for (let i = totalPoints - 1; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * intervalMs)
    const confirmed = Math.floor(Math.random() * 20) + 80 // 80 - 99
    const averagePing = Math.floor(Math.random() * 180) + 20 // 20 - 200 ms

    data.push({
        time: timestamp.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: false,
        }),
      timestamp: timestamp.toISOString(),
      averagePing,
      confirmedNodes: confirmed,
      slotAgency: 1,
    })
  }

  return data
}

function CustomPingTooltip({ active, payload }: any) {
  if (!active || !payload || !payload.length) return null

  const data = payload[0].payload
  const timestamp = new Date(data.timestamp)

  const formattedDate = timestamp.toUTCString().replace("GMT", "+UTC")
  const timeAgo = formatDistanceToNow(timestamp, { addSuffix: true })

  return (
    <div className="bg-white shadow-md rounded-md p-3 text-sm space-y-1">
      <div className="text-md text-gray-500">{formattedDate}</div>
      <div className="text-xs text-gray-500">{timeAgo}</div>
      <div><strong> {data.averagePing} ms</strong></div>
      <div><strong>{data.confirmedNodes} confirmed</strong></div>
      <div><strong>{data.slotAgency} Average Slot Agency</strong></div>
    </div>      
  )
}

const chartConfig = {
    transaction: {
        label: "Average Ping",
        color: "#5eead4",
    }
}

interface NetworkChartsProps {
    range: "30m" | "2h" | "6h";
    onRangeChange: (range: "30m" | "2h" | "6h") => void;
}

export function NetworkCharts({ range, onRangeChange }: NetworkChartsProps) {
  const [pingData, setPingData] = useState<any[]>([])

  useEffect(() => {
    const data = generatePingStats(range)
    setPingData(data)
  }, [range])

 

  return (
    <Card>
      <CardHeader className="flex gap-1 flex-row">
        <CardTitle className="text-sm">Average Ping Time (Network response time)</CardTitle>
        <div className="inline-flex rounded-md ml-auto" role="group">
                    <button
                        onClick={() => onRangeChange("30m")}
                        className={`px-3 py-1 text-sm rounded-s-3xl transition-colors ${range === "30m"
                                ? 'bg-teal-500 text-xs text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-semibold'
                            }`}
                    >
                        30m
                    </button>
                    <button
                        onClick={() => onRangeChange("2h")}
                        className={`px-3 py-1 text-sm transition-colors ${range === "2h"
                                ? 'bg-teal-500 text-xs text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-semibold'
                            }`}
                    >
                        2H
                    </button>
                    <button
                        onClick={() => onRangeChange("6h")}
                        className={`px-3 py-1 text-sm rounded-e-lg transition-colors ${range === "6h"
                                ? 'bg-teal-500 text-xs text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-semibold'
                            }`}
                    >
                        6H
                    </button>
                </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-64 w-full">
          <BarChart data={pingData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="timestamp" 
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(tick) =>
            new Date(tick).toLocaleTimeString("en-US", {
                hour: "numeric",       // no leading zero
                minute: "2-digit",     // always 2 digits for minutes
                hour12: false,         // 24-hour format
            })
            }
            />
            <YAxis 
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            />
            <ChartTooltip content={<CustomPingTooltip />} />
            <Bar dataKey="averagePing" fill="#5eead4" />
          </BarChart>
        </ChartContainer>
        </CardContent>
    </Card>
    )
}