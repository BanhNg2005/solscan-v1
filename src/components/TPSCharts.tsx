"use client"

import { TrendingUp } from "lucide-react"
import { useState } from "react"
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

function generateChartTPSData(range: "30m" | "2h" | "6h") {
    const now = new Date()
    const data = []

    let totalPoints = 0
    let intervalMs = 0

    switch (range) {
        case "30m":
            totalPoints = 30
            intervalMs = 60 * 1000 // 1 minute
            break
        case "2h":
            totalPoints = 24
            intervalMs = 5 * 60 * 1000 // 5 minutes
            break
        case "6h":
            totalPoints = 24
            intervalMs = 15 * 60 * 1000 // 15 minutes
            break
    }

    for (let i = totalPoints - 1; i >= 0; i--) {
        const timestamp = new Date(now.getTime() - i * intervalMs)

        data.push({
            time: timestamp.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
            }),
            timestamp: timestamp.toISOString(),
            truetps: Math.floor(Math.random() * 300) + 100, // 100 - 399
            votetps: Math.floor(Math.random() * 200) + 50,   // 50 - 249
        })
    }

    return data
}

function CustomTooltip({ active, payload }: any) {
    if (!active || !payload || !payload.length) return null

    const dataPoint = payload[0].payload
    const timestamp = new Date(dataPoint.timestamp)

    const formattedDate = timestamp.toUTCString().replace("GMT", "+UTC")
    const timeAgo = formatDistanceToNow(timestamp, { addSuffix: true })
    const totalTPS = dataPoint.truetps + dataPoint.votetps

    return (
        <div className="rounded-md border bg-white p-2 shadow-md text-sm text-gray-800 space-y-1">
            <div className="text-md text-gray-500">{formattedDate}</div>
            <div className="text-xs text-gray-500">{timeAgo}</div>
            <div>
                <strong>Total TPS: {totalTPS.toLocaleString()}</strong>
            </div>
            <div>
                <div className="flex items-center gap-1 text-sm">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: chartConfig.truetps.color }}></span>
                    True TPS: {dataPoint.truetps}
                </div>

                <div className="flex items-center gap-1 text-sm">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: chartConfig.votetps.color }}></span>
                    Vote TPS: {dataPoint.votetps}
                </div>
            </div>
        </div>
    )
}

const chartConfig = {
    truetps: {
        label: "True TPS",
        color: "#d946ef",
    },
    votetps: {
        label: "Vote TPS",
        color: "#5eead4",
    },
} satisfies ChartConfig

export default function TPSCharts() {
    const [range, setRange] = useState<"30m" | "2h" | "6h">("30m")
    const chartTPS = generateChartTPSData(range)

    return (
        <Card>
            <CardHeader className="flex gap-1 flex-row">
                <CardTitle className="text-sm">TPS | True TPS</CardTitle>
                <div className="inline-flex rounded-md ml-auto" role="group">
                    <button
                        onClick={() => setRange("30m")}
                        className={`px-3 py-1 text-sm rounded-s-3xl transition-colors ${range === "30m"
                                ? 'bg-teal-500 text-xs text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-semibold'
                            }`}
                    >
                        30m
                    </button>
                    <button
                        onClick={() => setRange("2h")}
                        className={`px-3 py-1 text-sm transition-colors ${range === "2h"
                                ? 'bg-teal-500 text-xs text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs font-semibold'
                            }`}
                    >
                        2H
                    </button>
                    <button
                        onClick={() => setRange("6h")}
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
                    <BarChart accessibilityLayer data={chartTPS}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="time"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => {
                                const date = new Date(`1970-01-01T${value}:00`)
                                return date.toLocaleTimeString("en-US", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                    hour12: false,
                                })
                            }}
                        />
                        <YAxis
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.toLocaleString()}
                        />
                        {/* <ChartTooltip content={<ChartTooltipContent hideLabel />} /> */}
                        <ChartTooltip content={<CustomTooltip />} />

                        <Bar
                            dataKey="truetps"
                            stackId="a"
                            fill="var(--color-truetps)"
                            radius={[0, 0, 4, 4]}
                        />
                        <Bar
                            dataKey="votetps"
                            stackId="a"
                            fill="var(--color-votetps)"
                            radius={[4, 4, 0, 0]}
                        />
                    </BarChart>
                </ChartContainer>
            </CardContent>

        </Card>
    )
}
