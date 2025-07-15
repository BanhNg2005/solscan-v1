"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Protocol colors and data
const protocolConfig = [
  { name: 'Pumpfun', color: '#FF6B6B', baseVolume: 2.8 },
  { name: 'Jupiter', color: '#4ECDC4', baseVolume: 3.2 },
  { name: 'Raydium', color: '#45B7D1', baseVolume: 2.1 },
  { name: 'Orca', color: '#96CEB4', baseVolume: 1.8 },
  { name: 'Meteora', color: '#FFEAA7', baseVolume: 1.2 },
  { name: 'OpenBook', color: '#DDA0DD', baseVolume: 1.5 },
  { name: 'Lifinity', color: '#98D8C8', baseVolume: 0.9 },
  { name: 'Stabble', color: '#F7DC6F', baseVolume: 0.7 }
].sort((a, b) => b.baseVolume - a.baseVolume);

const generateProtocolTimeData = (days: number) => {
  const data = [];
  const now = new Date();


  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);

    const dataPoint: any = {
      name: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      timestamp: date.getTime()
    };

    // Add volume for each protocol
    protocolConfig.forEach(protocol => {
      const variation = (Math.random() - 0.5) * 0.5;
      dataPoint[protocol.name] = Math.max(0, protocol.baseVolume + variation);
    });

    data.push(dataPoint);
  }

  return data;
};

export default function DeFiCharts() {
  const [selectedChart, setSelectedChart] = useState<'area' | 'bar'>('area');
  const [timePeriod, setTimePeriod] = useState<7 | 30>(7);
  const [protocolData, setProtocolData] = useState(generateProtocolTimeData(7));
  const [visibleProtocols, setVisibleProtocols] = useState<Record<string, boolean>>(
    protocolConfig.reduce((acc, protocol) => ({ ...acc, [protocol.name]: true }), {})
  );
  const [showTotal, setShowTotal] = useState(false);

  // Update data when time period changes
  useEffect(() => {
    setProtocolData(generateProtocolTimeData(timePeriod));
  }, [timePeriod]);

  // Simulate real-time updates every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setProtocolData(generateProtocolTimeData(timePeriod));
    }, 10000);

    return () => clearInterval(interval);
  }, [timePeriod]);

  const formatVolume = (value: number) => {
    return `${value.toFixed(1)}B`;
  };

  const getSortedProtocols = () => {
    const latestData = protocolData[protocolData.length - 1] || {};
    return protocolConfig.sort((a, b) => {
      const volumeA = latestData[a.name] || 0;
      const volumeB = latestData[b.name] || 0;
      return volumeB - volumeA; // Sort descending by volume
    });
  };

  return (
    <div className="rounded-xl border-border shadow-md overflow-hidden border bg-white h-full w-full">
      <div className="flex flex-col gap-4 items-start justify-start">
        {/* Header */}
        <div className="flex flex-row gap-1 items-center justify-between w-full flex-wrap px-4 pt-4">
          <div className="flex items-center gap-2">
            <h3 className="text-gray-900 text-lg font-semibold">Defi Dashboard</h3>
            {/* <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-xs text-green-600 font-medium">Live</span> */}
          </div>
          <div className="flex items-center gap-4">
            {/* Chart Type Selection */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedChart('area')}
                className={`flex items-center gap-2 px-3 py-1 text-sm rounded-md transition-colors ${selectedChart === 'area'
                    ? 'bg-green-500 text-white'
                    : 'bg-transparent text-gray-700'
                  }`}
              >
                <Image
                  src="/chart-line.svg"
                  alt="Area Chart"
                  width={16}
                  height={16}
                  className={selectedChart === 'area' ? 'filter brightness-0 invert' : ''}
                />
              </button>
              <button
                onClick={() => setSelectedChart('bar')}
                className={`flex items-center gap-2 px-3 py-1 text-sm rounded-md transition-colors ${selectedChart === 'bar'
                    ? 'bg-green-500 text-white'
                    : 'bg-transparent text-gray-700'
                  }`}
              >
                <Image
                  src="/chart-column.svg"
                  alt="Column Chart"
                  width={16}
                  height={16}
                  className={selectedChart === 'bar' ? 'filter brightness-0 invert' : ''}
                />
              </button>
            </div>

            {/* Vertical Separator */}
            <div data-orientation="vertical" className="shrink-0 inline-flex h-6 w-[1px] bg-gray-300"></div>

            {/* Time Period Selection */}
            <div className="infline-flex rounded-md" role="group">
              <button
                onClick={() => setTimePeriod(7)}
                className={`px-3 py-1 text-sm rounded-s-lg transition-colors ${timePeriod === 7
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                7D
              </button>
              <button
                onClick={() => setTimePeriod(30)}
                className={`px-3 py-1 text-sm rounded-e-lg transition-colors ${timePeriod === 30
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
              >
                30D
              </button>
            </div>
          </div>
        </div>



        {/* Chart Container */}
        <div className="w-full px-4 pb-4">
          <div className="h-140 w-full">
            {selectedChart === 'area' ? (
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={protocolData}>
                  <defs>
                    {protocolConfig.map((protocol) => (
                      <linearGradient key={protocol.name} id={`color${protocol.name}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={protocol.color} stopOpacity={0.8} />
                        <stop offset="95%" stopColor={protocol.color} stopOpacity={0.3} />
                      </linearGradient>
                    ))}
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="name" stroke="#666" fontSize={12} />
                  <YAxis
                    stroke="#666"
                    fontSize={12}
                    tickFormatter={formatVolume}
                    domain={[0, 15]}
                    label={{ angle: -90, position: 'insideLeft' }}
                  />
                  <Tooltip
                    formatter={(value: number, name: string) => [`$${formatVolume(value)}`, name]}
                    labelStyle={{ color: '#374151' }}
                    contentStyle={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                  />
                  {protocolConfig.map((protocol) =>
                    visibleProtocols[protocol.name] ? (
                      <Area
                        key={protocol.name}
                        type="monotone"
                        dataKey={protocol.name}
                        stackId="1"
                        stroke={protocol.color}
                        fill={`url(#color${protocol.name})`}
                        strokeWidth={1}
                      />
                    ) : null
                  )}
                </AreaChart>
              </ResponsiveContainer>
            ) : (
              <div className="space-y-4">
                {/* Protocol Legend */}
                {/* <div className="flex flex-wrap gap-2">
                  {protocolConfig.map((protocol) => (
                    <button
                      key={protocol.name}
                      onClick={() => toggleProtocol(protocol.name)}
                      className={`flex items-center gap-2 px-3 py-1 rounded-md text-sm transition-all ${
                        visibleProtocols[protocol.name]
                          ? 'bg-gray-100 opacity-100'
                          : 'bg-gray-50 opacity-50'
                      }`}
                    >
                      <div
                        className="w-3 h-3 rounded"
                        style={{ backgroundColor: protocol.color }}
                      />
                      {protocol.name}
                    </button>
                  ))}
                </div> */}

                {/* Chart */}
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={protocolData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="name" stroke="#666" fontSize={12} />
                    <YAxis
                      stroke="#666"
                      fontSize={12}
                      tickFormatter={formatVolume}
                      domain={[0, 15]}
                      label={{ angle: -90, position: 'insideLeft' }}
                    />
                    <Tooltip
                      formatter={(value: number, name: string) => [`$${formatVolume(value)}`, name]}
                      labelStyle={{ color: '#374151' }}
                      contentStyle={{
                        backgroundColor: '#ffffff',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                      }}
                    />
                    {protocolConfig.map((protocol) =>
                      visibleProtocols[protocol.name] ? (
                        <Bar
                          key={protocol.name}
                          dataKey={protocol.name}
                          stackId="stack"
                          fill={protocol.color}
                        />
                      ) : null
                    )}
                  </BarChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>
        </div>

        {/* Stats Summary */}
        {/* <div className="w-full px-4 pb-4 border-t border-gray-100 pt-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">${formatVolume(currentTotalVolume)}</div>
              <div className="text-sm text-gray-500">24h Volume</div>
              <div className="text-xs text-green-500 mt-1">+5.2%</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">${formatVolume(currentTVL)}</div>
              <div className="text-sm text-gray-500">Total TVL</div>
              <div className="text-xs text-green-500 mt-1">+2.1%</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">{(currentTotalVolume * 12.5).toFixed(1)}K</div>
              <div className="text-sm text-gray-500">24h Transactions</div>
              <div className="text-xs text-green-500 mt-1">+8.7%</div>
            </div>
          </div>
        </div> */}
        <div className="flex flex-col gap-4 items-stretch justify-start w-full">
          <div className="flex gap-1 flex-row items-center justify-between flex-wrap w-full px-4">
            <div className="not-italic text-sm leading-6 font-medium text-neutral-900">Top Defi Protocols by Volume</div>
          </div>
        </div>
        <div className="flex flex-col gap-0 items-stretch justify-start w-full h-full data-table">
          <div className="overflow-x-hidden h-full w-auto sm:w-full">
            <table className="w-full border-separate caption-bottom border-spacing-0">
              <thead className="sticky top-0 z-10">
                <tr className="transition-colors bg-neutral-50">
                  <th className="h-12 px-2 py-3 text-left align-middle font-bold text-sm leading-6 text-neutral-700 bg-white">
                    <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                      <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">AMM</div>
                    </div>
                  </th>
                  <th className="h-12 px-2 py-3 text-left align-middle font-bold text-sm leading-6 text-neutral-700 bg-white">
                    <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                      <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                        <div className="flex gap-1 flex-row items-center justify-start flex-nowrap white-space-nowrap">
                          <div className="not-italic text-neutral-700 text-sm leading-6 font-bold">Volume 24H</div>
                        </div>
                      </div>
                    </div>
                  </th>
                  <th className="h-12 px-2 py-3 text-left align-middle font-bold text-sm leading-6 text-neutral-700 bg-white">
                    <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                      <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">Total Txs 24H</div>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Total Row (if toggled) */}
                {showTotal && (
                  <tr className="transition-colors bg-blue-50 border-b border-blue-200">
                    <td className="h-12 px-2 py-3 align-middle text-sm font-bold text-blue-900">
                      Total
                    </td>
                    <td className="h-12 px-2 py-3 align-middle text-sm font-bold text-blue-900">
                      ${formatVolume(
                        getSortedProtocols().slice(0, 5).reduce((sum, protocol) => {
                          const latestData = protocolData[protocolData.length - 1] || {};
                          return sum + (latestData[protocol.name] || 0);
                        }, 0)
                      )}
                    </td>
                    <td className="h-12 px-2 py-3 align-middle text-sm font-bold text-blue-900">
                      {(getSortedProtocols().slice(0, 5).reduce((sum, protocol) => {
                        const latestData = protocolData[protocolData.length - 1] || {};
                        return sum + ((latestData[protocol.name] || 0) * 1250);
                      }, 0)).toLocaleString()}
                    </td>
                  </tr>
                )}

                {/* Top 5 Protocol Rows */}
                {getSortedProtocols().slice(0, 5).map((protocol) => {
                  const latestData = protocolData[protocolData.length - 1] || {};
                  const volume = latestData[protocol.name] || 0;
                  const txs = Math.round(volume * 1250); // Mock transaction count

                  return (
                    <tr key={protocol.name} className="transition-colors hover:bg-gray-50 border-b">
                      <td className="h-12 px-2 py-3 align-middle text-sm">
                        <div className="flex items-center gap-2">
                          <div
                            className="w-3 h-3 rounded"
                            style={{ backgroundColor: protocol.color }}
                          />
                          <span className="font-medium">{protocol.name}</span>
                        </div>
                      </td>
                      <td className="h-12 px-2 py-3 align-middle text-sm font-medium">
                        ${formatVolume(volume)}
                      </td>
                      <td className="h-12 px-2 py-3 align-middle text-sm">
                        {txs.toLocaleString()}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              {/*Vist Defi Dashboard Button*/}
              <tfoot>
                <tr>
                  <td colSpan={3} className="px-4 pb-4 pt-4 border-t border-border bg-neutral-50 w-full">
                    <div className="flex gap-1 flex-row items-center justify-center flex-nowrap hover:text-blue-500 transition-colors duration-200">
                      <button
                        className="not-italic text-xs leading-4 font-medium transition-colors uppercase text-gray-400 hover:text-blue-500 w-full text-center"
                        onClick={() => (window.location.href = '/amm/jupiter')}
                      >
                        Visit Defi Dashboard
                      </button>
                    </div>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

