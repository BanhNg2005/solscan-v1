"use client"

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "./Header";
import DeFiCharts from "./DeFiCharts";
import TPSCharts from "./TPSCharts";
import { NetworkCharts } from "./NetworkCharts";
import { solanaAPI } from "@/services/solanaApi";

export default function Body() {
    // Shared state for time range across TPS and Network charts
    const [timeRange, setTimeRange] = useState<"30m" | "2h" | "6h">("30m");
    const [blockHeight, setBlockHeight] = useState<number | null>(null);
    const [slotHeight, setSlotHeight] = useState<number | null>(null);
    const [circulatingSupply, setCirculatingSupply] = useState<number | null>(null);
    const [circulatingSupplyPercentage, setCirculatingSupplyPercentage] = useState<number | null>(null);
    const [nonCirculatingSupply, setNonCirculatingSupply] = useState<number | null>(null);
    const [nonCirculatingSupplyPercentage, setNonCirculatingSupplyPercentage] = useState<number | null>(null);
    const [totalSupply, setTotalSupply] = useState<number | null>(null);
    
    useEffect(() => {
        const fetchNetworkData = async () => {
            try {
                const data = await solanaAPI.network();
                if (data.blockHeight) {
                    setBlockHeight(data.blockHeight);
                }
                if (data.slotHeight) {
                    setSlotHeight(data.slotHeight);
                }
            } catch (error) {
                console.error("Failed to fetch network data:", error);
            }
        };

        fetchNetworkData(); // Fetch on initial load
        const interval = setInterval(fetchNetworkData, 15000); // Refresh every 15 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    useEffect(() => {
        const fetchSupplyData = async () => {
            try {
                const data = await solanaAPI.supply();
                if (data.circulatingSupply !== undefined) {
                    setCirculatingSupply(data.circulatingSupply);
                }
                if (data.circulatingSupplyPercentage !== undefined) {
                    const percentage = Number(data.circulatingSupplyPercentage);
                    setCirculatingSupplyPercentage(isNaN(percentage) ? null : percentage);
                }
                if (data.nonCirculatingSupply !== undefined) {
                    setNonCirculatingSupply(data.nonCirculatingSupply);
                }
                if (data.nonCirculatingSupplyPercentage !== undefined) {
                    const percentage = Number(data.nonCirculatingSupplyPercentage);
                    setNonCirculatingSupplyPercentage(isNaN(percentage) ? null : percentage);
                }
                if (data.totalSupply !== undefined) {
                    setTotalSupply(data.totalSupply);
                }
            } catch (error) {
                console.error("Failed to fetch supply data:", error);
            }
        }

        fetchSupplyData(); // Fetch on initial load
        const interval = setInterval(fetchSupplyData, 15000); // Refresh every 15 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div className="w-full flex-1 min-h min-h-screen bg-gray-50 flex-col">
            < Header />
            <div className="my-0 mx-auto max-w-full px-4 md:px-6 2xl:px-0 2xl:max-w-[1400px] pt-4 sm:pt-5">
                <div className="flex flex-col items-stretch justify-start gap-2 md:gap-4">
                    <div className="flex rounded-xl items-center justify-between bg-white border mt-5 align-middle border-border shadow-md overflow-hidden">
                        <div className="p-2 flex items-center gap-2 bg-neutral-100 rounded-l-xl">
                            <Image
                                src="/rocket.png"
                                alt="Logo"
                                width={16}
                                height={16}
                            />
                            <div className="overflow-hidden text-neutral-700 overflow-ellipsis font-roboto text-xs font-semibold leading-4">Top Markets</div>
                        </div>
                        <div className="relative w-full overflow-hidden">
                            <div className="absolute right-0 top-0 bottom-0 flex items-center z-10">
                                <div className="absolute inset-0 w-8 bg-gradient-to-l from-white to-transparent"></div>
                                
                            </div>
                            <div className="w-full overflow-x-auto no-scrollbar px-2">
                                <div className="flex gap-3 2xl:gap-4 select-none cursor-grabbing">
                                    <Link href="/market/1" className="flex items-center gap-2 text-neutral-700 text-xs leading-4">
                                        #1<Image
                                            src="/USDC-WSOL.png"
                                            alt="Solana Logo"
                                            width={40}
                                            height={40}
                                        />
                                        USDC-WSOL
                                    </Link>
                                    <Link href="/market/2" className="flex items-center gap-2 text-neutral-700 text-xs leading-4">
                                        #2<Image
                                            src="/USDC-WSOL.png"
                                            alt="Solana Logo"
                                            width={40}
                                            height={40}
                                        />
                                        USDC-WSOL
                                    </Link>
                                    <Link href="/market/3" className="flex items-center gap-2 text-neutral-700 text-xs leading-4">
                                        #3<Image
                                            src="/USDC-WSOL.png"
                                            alt="Solana Logo"
                                            width={40}
                                            height={40}
                                        />
                                        USDC-WSOL
                                    </Link>
                                    <Link href="/market/3" className="flex items-center gap-2 text-neutral-700 text-xs leading-4">
                                        #4<Image
                                            src="/USDC-WSOL.png"
                                            alt="Solana Logo"
                                            width={40}
                                            height={40}
                                        />
                                        USDC-WSOL
                                    </Link>
                                    <Link href="/market/3" className="flex items-center gap-2 text-neutral-700 text-xs leading-4">
                                        #5<Image
                                            src="/USDC-WSOL.png"
                                            alt="Solana Logo"
                                            width={40}
                                            height={40}
                                        />
                                        USDC-WSOL
                                    </Link>
                                    <Link href="/market/3" className="flex items-center gap-2 text-neutral-700 text-xs leading-4">
                                        #6<Image
                                            src="/USDC-WSOL.png"
                                            alt="Solana Logo"
                                            width={40}
                                            height={40}
                                        />
                                        USDC-WSOL
                                    </Link>
                                    <Link href="/market/3" className="flex items-center gap-2 text-neutral-700 text-xs leading-4">
                                        #7<Image
                                            src="/USDC-WSOL.png"
                                            alt="Solana Logo"
                                            width={40}
                                            height={40}
                                        />
                                        USDC-WSOL
                                    </Link>
                                    <Link href="/market/3" className="flex items-center gap-2 text-neutral-700 text-xs leading-4">
                                        #8<Image
                                            src="/USDC-WSOL.png"
                                            alt="Solana Logo"
                                            width={40}
                                            height={40}
                                        />
                                        USDC-WSOL
                                    </Link>
                                    <Link href="/market/3" className="flex items-center gap-2 text-neutral-700 text-xs leading-4">
                                        #9<Image
                                            src="/USDC-WSOL.png"
                                            alt="Solana Logo"
                                            width={40}
                                            height={40}
                                        />
                                        USDC-WSOL
                                    </Link>
                                    <Link href="/market/3" className="flex items-center gap-2 text-neutral-700 text-xs leading-4">
                                        #10<Image
                                            src="/USDC-WSOL.png"
                                            alt="Solana Logo"
                                            width={40}
                                            height={40}
                                        />
                                        USDC-WSOL
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
                        <div className="bg-white rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className=" text-gray-900">SOL Supply</h3>
                            </div>
                            <p className="text-neutral-800 font-roboto text-lg font-extrabold leading-6">
                                {totalSupply !== null ? totalSupply : "Loading..."}
                            </p>
                            <div className="rounded-lg border border-border bg-neutral-100 p-4 w-full border-none mt-4">
                                <div className="flex flex-col gap-4 items-start justify-start">
                                    <div>
                                        <p className="text-neutral-500 font-roboto text-sm font-normal leading-6">Circulating Supply</p>
                                        <p className="font-roberto text-sm font-normal leading-6">
                                            {circulatingSupply !== null ? circulatingSupply : "Loading..."} SOL ({circulatingSupplyPercentage !== null && typeof circulatingSupplyPercentage === 'number' ? circulatingSupplyPercentage.toFixed(2) : "Loading..."}%)
                                        </p>
                                    </div>
                                    <div data-orientation="horizontal" className="w-full h-0.25 bg-gray-200 shrink-0" role="none">
                                    </div>
                                    <div>
                                        <p className="text-neutral-500 font-roboto text-sm font-normal leading-6">Non-circulating Supply</p>
                                        <p className="font-roberto text-sm font-normal leading-6">
                                            {nonCirculatingSupply !== null ? nonCirculatingSupply : "Loading..."} SOL ({nonCirculatingSupplyPercentage !== null && typeof nonCirculatingSupplyPercentage === 'number' ? nonCirculatingSupplyPercentage.toFixed(2) : "Loading..."}%)
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-gray-900">Current Epoch</h3>
                            </div>
                            <div className="flex flex-items justify-between">
                                <p className="text-blue-500 font-roboto text-lg font-extrabold leading-6">811</p>
                                <p className="text-neutral-500 font-roboto text-sm font-normal leading-6 ml-auto">(98.31%)</p>
                            </div>
                            <div className="rounded-lg border border-border bg-neutral-100 p-4 w-full border-none mt-4">
                                <div className="flex flex-col gap-4 items-start justify-start">
                                    <div>
                                        <p className="text-neutral-500 font-roboto text-sm font-normal leading-6">Slot Range</p>
                                        <p className="font-roberto text-sm font-normal leading-6">350352000 to 350783999</p>
                                    </div>
                                    <div data-orientation="horizontal" className="w-full h-0.25 bg-gray-200 shrink-0" role="none">
                                    </div>
                                    <div>
                                        <p className="text-neutral-500 font-roboto text-sm font-normal leading-6">Time Remain</p>
                                        <p className="font-roberto text-sm font-normal leading-6">0d 0h 52m 27s</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                            <div className="flex items-center gap-3 mb-2">
                                <h3 className=" text-gray-900">Network (Transactions)</h3>
                            </div>
                            <p className="text-neutral-800 font-roboto text-lg font-extrabold leading-6">423,032,476,496</p>
                            <div className="rounded-lg border border-border bg-neutral-100 p-4 w-full border-none mt-4">
                                <div className="flex flex-col gap-4 items-start justify-start">
                                    <div className="flex flex-row flex-wrap justify-start grow-0 shrink-0 items-stretch w-full">
                                        <div className="max-w-24/24 flex-12/24 box-border block relative">
                                            <p className="text-neutral-500 font-roboto text-sm font-normal leading-6">Block Height</p>
                                            <p className="font-roberto text-sm font-normal leading-6">
                                                {blockHeight !== null ? blockHeight : "Loading..."}
                                                
                                            </p>
                                        </div>
                                        <div className="max-w-24/24 flex-12/24 box-border block relative">
                                            <p className="text-neutral-500 font-roboto text-sm font-normal leading-6">Slot Height</p>
                                            <p className="font-roberto text-sm font-normal leading-6">
                                                {slotHeight !== null ? slotHeight : "Loading..."}
                                            </p>
                                        </div>
                                    </div>
                                    <div data-orientation="horizontal" className="w-full h-0.25 bg-gray-200 shrink-0" role="none">
                                    </div>
                                    <div className="flex flex-row flex-wrap justify-start grow-0 shrink-0 items-stretch w-full">
                                        <div className="max-w-24/24 flex-12/24 box-border block relative">
                                            <p className="text-neutral-500 font-roboto text-sm font-normal leading-6">TPS</p>
                                            <p className="font-roberto text-sm font-normal leading-6">3,842.2</p>
                                        </div>
                                        <div className="max-w-24/24 flex-12/24 box-border block relative">
                                            <p className="text-neutral-500 font-roboto text-sm font-normal leading-6">True TPS</p>
                                            <p className="font-roberto text-sm font-normal leading-6">1,174</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl border p-6 hover:shadow-lg transition-shadow">
                            <div className="flex flex-row flex-wrap items-start justify-between w-full gap-2">
                                <div>
                                    <h3 className="text-gray-900">Total Stake (SOL)</h3>
                                    <p className="text-neutral-800 font-roboto text-lg font-extrabold leading-6">
                                        400,924,311.34
                                    </p>
                                </div>
                                <a
                                    href="/analysis/solana_staking"
                                    className="flex items-center gap-0 text-blue-500 font-roboto text-sm font-semibold"
                                >
                                    <span className="text-blue-500 not-italic font-normal">
                                        Staking Dashboard
                                    </span>
                                    <Image
                                        src="/right-arrow.svg"
                                        alt="Arrow Right Icon"
                                        width={16}
                                        height={16}
                                        className="w-4 h-4"
                                    />
                                </a>
                            </div>

                            <div className="rounded-lg border border-border bg-neutral-100 p-4 w-full border-none mt-4">
                                <div className="flex flex-col gap-4 items-start justify-start">
                                    <div>
                                        <p className="text-neutral-500 font-roboto text-sm font-normal leading-6">Current Stake</p>
                                        <p className="font-roberto text-sm font-normal leading-6">400,528,304.8574 SOL (99.9%)</p>
                                    </div>
                                    <div data-orientation="horizontal" className="w-full h-0.25 bg-gray-200 shrink-0" role="none">
                                    </div>
                                    <div>
                                        <p className="text-neutral-500 font-roboto text-sm font-normal leading-6">Delinquent Stake</p>
                                        <p className="font-roberto text-sm font-normal leading-6">396,006.4901 SOL (0.1%)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5 ">
                        {/* Left side - Dashboards (1/2 width on large screens) */}
                        <div className="flex flex-col items-stretch justify-start gap-2 md:gap-4">
                            <div className="rounded-xl border-border shadow-md overflow-hidden border h-auto">
                                <div className="flex flex-col gap-4 items-start justify-start bg-white">
                                    <div className="flex flex-row gap-1 items-center justify-between w-full flex-wrap px-4 pt-4">
                                        <h3 className="text-gray-900 text-sm font-semibold">Latest Transactions</h3>
                                        <button className="white-space-nowrap focus:outline-none items-center justify-center font-semibold text-cyan-300 bg-white border-cyan-300 border rounded-lg px-1 py-1 hover:bg-emerald-50 transition-colors">Customize</button>
                                    </div>
                                    <div className="flex flex-col gap-0 items-stretch justify-start w-full h-full">
                                        <div className="min-w-0 table-auto flex-1">
                                            <table className="w-full border-separate border-spacing-0">
                                                <thead className="sticky top-0">
                                                    <tr className="bg-gray-100">
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700 bg-white">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                    <div className="flex gap-1 flex-row items-center justify-start">
                                                                        <Image
                                                                            src={"/question-mark.svg"}
                                                                            alt="Question Mark Icon"
                                                                            width={16}
                                                                            height={16}
                                                                            className="w-4 h-4 text-neutral-500"
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700 bg-white">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Signature</span>
                                                            </div>
                                                        </th>
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700 bg-white">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Time</span>
                                                            </div>
                                                        </th>
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700 bg-white">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Block</span>
                                                            </div>
                                                        </th>
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700 bg-white">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Instructions</span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr></tr>
                                                </thead>
                                                <tbody className="border-separate border-spacing-0">
                                                    <tr className="transition-colors hover:bg-neutral-100">
                                                        <td className="h-12 px-2 align-middle leading-4 font-normal text-neutral-700">

                                                            <div className="px-1 border rounded-md flex items-center justify-center cursor-pointer bg-neutral-200 hover:bg-neutral-300 transition-colors duration-200 py-1"><button type="button" className="flex items-center gap-2 hover:underline">
                                                                <Image
                                                                    src={"/eye.svg"}
                                                                    alt="View Icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 text-neutral-500"
                                                                />
                                                            </button></div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="gap-1 flex-row items-center justify-start flex-nowrap infline-flex">
                                                                <div className="flex-row gap-1 items-center justify-start flex-nowrap inline-flex">
                                                                    <Link href="/tx/5f3c8b2d1e4fb" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                        5f3c8b2d1e4fb...
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-neutral-500">07-03-2025 07:37:13</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <Link href="/block/350793540" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                    350793540
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <div className="infline-flex items-center gap-1">
                                                                    <div className="flex justify-center items-center transition-colors py-0 font-medium text-xs text-neutral-700 bg-gray-200 rounded-sm px-2 leading-4">
                                                                        <div className="truncate max-w-[100px]">SetComputeUnitLimit</div>
                                                                    </div>
                                                                    <button type="button">
                                                                        <div className="flex justify-center items-center transition-colors flex-nowrap w-max bg-neutral-200 py-0 font-medium text-neutral-700 leading-4 border border-neutral-300 rounded-sm px-2 hover:bg-neutral-300">
                                                                            <h3>1+</h3>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="transition-colors hover:bg-neutral-100">
                                                        <td className="h-12 px-2 align-middle leading-4 font-normal text-neutral-700">

                                                            <div className="px-1 border rounded-md flex items-center justify-center cursor-pointer bg-neutral-200 hover:bg-neutral-300 transition-colors duration-200 py-1"><button type="button" className="flex items-center gap-2 hover:underline">
                                                                <Image
                                                                    src={"/eye.svg"}
                                                                    alt="View Icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 text-neutral-500"
                                                                />
                                                            </button></div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="gap-1 flex-row items-center justify-start flex-nowrap infline-flex">
                                                                <div className="flex-row gap-1 items-center justify-start flex-nowrap inline-flex">
                                                                    <Link href="/tx/5f3c8b2d1e4fb" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                        5f3c8b2d1e4fb...
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-neutral-500">07-03-2025 07:37:13</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <Link href="/block/350793540" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                    350793540
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <div className="infline-flex items-center gap-1">
                                                                    <div className="flex justify-center items-center transition-colors py-0 font-medium text-xs text-neutral-700 bg-gray-200 rounded-sm px-2 leading-4">
                                                                        <div className="truncate max-w-[100px]">SetComputeUnitLimit</div>
                                                                    </div>
                                                                    <button type="button">
                                                                        <div className="flex justify-center items-center transition-colors flex-nowrap w-max bg-neutral-200 py-0 font-medium text-neutral-700 leading-4 border border-neutral-300 rounded-sm px-2 hover:bg-neutral-300">
                                                                            <h3>1+</h3>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="transition-colors hover:bg-neutral-100">
                                                        <td className="h-12 px-2 align-middle leading-4 font-normal text-neutral-700">

                                                            <div className="px-1 border rounded-md flex items-center justify-center cursor-pointer bg-neutral-200 hover:bg-neutral-300 transition-colors duration-200 py-1"><button type="button" className="flex items-center gap-2 hover:underline">
                                                                <Image
                                                                    src={"/eye.svg"}
                                                                    alt="View Icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 text-neutral-500"
                                                                />
                                                            </button></div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="gap-1 flex-row items-center justify-start flex-nowrap infline-flex">
                                                                <div className="flex-row gap-1 items-center justify-start flex-nowrap inline-flex">
                                                                    <Link href="/tx/5f3c8b2d1e4fb" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                        5f3c8b2d1e4fb...
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-neutral-500">07-03-2025 07:37:13</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <Link href="/block/350793540" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                    350793540
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <div className="infline-flex items-center gap-1">
                                                                    <div className="flex justify-center items-center transition-colors py-0 font-medium text-xs text-neutral-700 bg-gray-200 rounded-sm px-2 leading-4">
                                                                        <div className="truncate max-w-[100px]">SetComputeUnitLimit</div>
                                                                    </div>
                                                                    <button type="button">
                                                                        <div className="flex justify-center items-center transition-colors flex-nowrap w-max bg-neutral-200 py-0 font-medium text-neutral-700 leading-4 border border-neutral-300 rounded-sm px-2 hover:bg-neutral-300">
                                                                            <h3>1+</h3>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="transition-colors hover:bg-neutral-100">
                                                        <td className="h-12 px-2 align-middle leading-4 font-normal text-neutral-700">

                                                            <div className="px-1 border rounded-md flex items-center justify-center cursor-pointer bg-neutral-200 hover:bg-neutral-300 transition-colors duration-200 py-1"><button type="button" className="flex items-center gap-2 hover:underline">
                                                                <Image
                                                                    src={"/eye.svg"}
                                                                    alt="View Icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 text-neutral-500"
                                                                />
                                                            </button></div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="gap-1 flex-row items-center justify-start flex-nowrap infline-flex">
                                                                <div className="flex-row gap-1 items-center justify-start flex-nowrap inline-flex">
                                                                    <Link href="/tx/5f3c8b2d1e4fb" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                        5f3c8b2d1e4fb...
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-neutral-500">07-03-2025 07:37:13</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <Link href="/block/350793540" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                    350793540
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <div className="infline-flex items-center gap-1">
                                                                    <div className="flex justify-center items-center transition-colors py-0 font-medium text-xs text-neutral-700 bg-gray-200 rounded-sm px-2 leading-4">
                                                                        <div className="truncate max-w-[100px]">SetComputeUnitLimit</div>
                                                                    </div>
                                                                    <button type="button">
                                                                        <div className="flex justify-center items-center transition-colors flex-nowrap w-max bg-neutral-200 py-0 font-medium text-neutral-700 leading-4 border border-neutral-300 rounded-sm px-2 hover:bg-neutral-300">
                                                                            <h3>1+</h3>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="transition-colors hover:bg-neutral-100">
                                                        <td className="h-12 px-2 align-middle leading-4 font-normal text-neutral-700">

                                                            <div className="px-1 border rounded-md flex items-center justify-center cursor-pointer bg-neutral-200 hover:bg-neutral-300 transition-colors duration-200 py-1"><button type="button" className="flex items-center gap-2 hover:underline">
                                                                <Image
                                                                    src={"/eye.svg"}
                                                                    alt="View Icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 text-neutral-500"
                                                                />
                                                            </button></div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="gap-1 flex-row items-center justify-start flex-nowrap infline-flex">
                                                                <div className="flex-row gap-1 items-center justify-start flex-nowrap inline-flex">
                                                                    <Link href="/tx/5f3c8b2d1e4fb" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                        5f3c8b2d1e4fb...
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-neutral-500">07-03-2025 07:37:13</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <Link href="/block/350793540" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                    350793540
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <div className="infline-flex items-center gap-1">
                                                                    <div className="flex justify-center items-center transition-colors py-0 font-medium text-xs text-neutral-700 bg-gray-200 rounded-sm px-2 leading-4">
                                                                        <div className="truncate max-w-[100px]">SetComputeUnitLimit</div>
                                                                    </div>
                                                                    <button type="button">
                                                                        <div className="flex justify-center items-center transition-colors flex-nowrap w-max bg-neutral-200 py-0 font-medium text-neutral-700 leading-4 border border-neutral-300 rounded-sm px-2 hover:bg-neutral-300">
                                                                            <h3>1+</h3>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="transition-colors hover:bg-neutral-100">
                                                        <td className="h-12 px-2 align-middle leading-4 font-normal text-neutral-700">

                                                            <div className="px-1 border rounded-md flex items-center justify-center cursor-pointer bg-neutral-200 hover:bg-neutral-300 transition-colors duration-200 py-1"><button type="button" className="flex items-center gap-2 hover:underline">
                                                                <Image
                                                                    src={"/eye.svg"}
                                                                    alt="View Icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 text-neutral-500"
                                                                />
                                                            </button></div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="gap-1 flex-row items-center justify-start flex-nowrap infline-flex">
                                                                <div className="flex-row gap-1 items-center justify-start flex-nowrap inline-flex">
                                                                    <Link href="/tx/5f3c8b2d1e4fb" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                        5f3c8b2d1e4fb...
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-neutral-500">07-03-2025 07:37:13</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <Link href="/block/350793540" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                    350793540
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <div className="infline-flex items-center gap-1">
                                                                    <div className="flex justify-center items-center transition-colors py-0 font-medium text-xs text-neutral-700 bg-gray-200 rounded-sm px-2 leading-4">
                                                                        <div className="truncate max-w-[100px]">SetComputeUnitLimit</div>
                                                                    </div>
                                                                    <button type="button">
                                                                        <div className="flex justify-center items-center transition-colors flex-nowrap w-max bg-neutral-200 py-0 font-medium text-neutral-700 leading-4 border border-neutral-300 rounded-sm px-2 hover:bg-neutral-300">
                                                                            <h3>1+</h3>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr className="transition-colors hover:bg-neutral-100">
                                                        <td className="h-12 px-2 align-middle leading-4 font-normal text-neutral-700">

                                                            <div className="px-1 border rounded-md flex items-center justify-center cursor-pointer bg-neutral-200 hover:bg-neutral-300 transition-colors duration-200 py-1"><button type="button" className="flex items-center gap-2 hover:underline">
                                                                <Image
                                                                    src={"/eye.svg"}
                                                                    alt="View Icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 text-neutral-500"
                                                                />
                                                            </button></div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="gap-1 flex-row items-center justify-start flex-nowrap infline-flex">
                                                                <div className="flex-row gap-1 items-center justify-start flex-nowrap inline-flex">
                                                                    <Link href="/tx/5f3c8b2d1e4fb" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                        5f3c8b2d1e4fb...
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-neutral-500">07-03-2025 07:37:13</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <Link href="/block/350793540" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                    350793540
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <div className="infline-flex items-center gap-1">
                                                                    <div className="flex justify-center items-center transition-colors py-0 font-medium text-xs text-neutral-700 bg-gray-200 rounded-sm px-2 leading-4">
                                                                        <div className="truncate max-w-[100px]">SetComputeUnitLimit</div>
                                                                    </div>
                                                                    <button type="button">
                                                                        <div className="flex justify-center items-center transition-colors flex-nowrap w-max bg-neutral-200 py-0 font-medium text-neutral-700 leading-4 border border-neutral-300 rounded-sm px-2 hover:bg-neutral-300">
                                                                            <h3>1+</h3>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    
                                                    <tr className="transition-colors hover:bg-neutral-100">
                                                        <td className="h-12 px-2 align-middle leading-4 font-normal text-neutral-700">

                                                            <div className="px-1 border rounded-md flex items-center justify-center cursor-pointer bg-neutral-200 hover:bg-neutral-300 transition-colors duration-200 py-1"><button type="button" className="flex items-center gap-2 hover:underline">
                                                                <Image
                                                                    src={"/eye.svg"}
                                                                    alt="View Icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 text-neutral-500"
                                                                />
                                                            </button></div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="gap-1 flex-row items-center justify-start flex-nowrap infline-flex">
                                                                <div className="flex-row gap-1 items-center justify-start flex-nowrap inline-flex">
                                                                    <Link href="/tx/5f3c8b2d1e4fb" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                        5f3c8b2d1e4fb...
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-neutral-500">07-03-2025 07:37:13</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <Link href="/block/350793540" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                    350793540
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <div className="infline-flex items-center gap-1">
                                                                    <div className="flex justify-center items-center transition-colors py-0 font-medium text-xs text-neutral-700 bg-gray-200 rounded-sm px-2 leading-4">
                                                                        <div className="truncate max-w-[100px]">SetComputeUnitLimit</div>
                                                                    </div>
                                                                    <button type="button">
                                                                        <div className="flex justify-center items-center transition-colors flex-nowrap w-max bg-neutral-200 py-0 font-medium text-neutral-700 leading-4 border border-neutral-300 rounded-sm px-2 hover:bg-neutral-300">
                                                                            <h3>1+</h3>
                                                                        </div>
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4 pt-4 border-t border-border bg-neutral-50 w-full">
                                        <Link href={"/txs"} className="w-full">
                                            <div className="flex gap-1 flex-row items-center justify-center flex-nowrap hover:text-blue-500 transition-colors duration-200">
                                                <div className="not-italic text-xs leading-4 font-medium transition-colors uppercase text-gray-400 hover:text-blue-500 w-full text-center">
                                                    View All Transactions
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl border-border shadow-md overflow-hidden border h-auto">
                                <div className="flex flex-col gap-4 items-start justify-start bg-white">
                                    <div className="flex flex-row gap-1 items-center justify-between w-full flex-wrap px-4 pt-4 bg-white">
                                        <h3 className="text-gray-900 text-sm font-semibold">Token Dashboard</h3>
                                    </div>
                                    <div className="flex flex-col gap-0 items-stretch justify-start w-full h-full">
                                        <div className="min-w-0 table-auto flex-1 ">
                                            <table className="w-full border-separate border-spacing-0">
                                                <thead className="sticky top-0">
                                                    <tr className="bg-gray-100">
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700 bg-white">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Token</span>
                                                            </div>
                                                        </th>
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700 bg-white">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Symbol</span>
                                                            </div>
                                                        </th>
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700 bg-white">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Price</span>
                                                            </div>
                                                        </th>
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700 bg-white">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Market Cap (F.D)</span>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                    <tr></tr>
                                                </thead>
                                                <tbody className="border-separate border-spacing-0">
                                                    <tr className="transition-colors hover:bg-neutral-100">
                                                        <td className="h-12 px-2 align-middle leading-4 font-normal text-neutral-700">

                                                            <div className="text-blue-500 text-sm">
                                                                <Image
                                                                    src={"/officialtrumpcoin.png"}
                                                                    alt="Official Trump Coin"
                                                                    width={24}
                                                                    height={24}
                                                                    className="inline-block mr-2"
                                                                />
                                                                <Link href="/token/officialtrumpcoin">
                                                                    OFFICIAL TRUMP
                                                                </Link>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="gap-1 flex-row items-center justify-start flex-nowrap infline-flex">
                                                                <div className="flex-row gap-1 items-center justify-start flex-nowrap inline-flex">
                                                                    TRUMP
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-neutral-500">07-03-2025 07:37:13</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <Link href="/block/350793540" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                    350793540
                                                                </Link>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    <tr className="transition-colors hover:bg-neutral-100">
                                                        <td className="h-12 px-2 align-middle leading-4 font-normal text-neutral-700">

                                                            <div className="px-1 border rounded-md flex items-center justify-center cursor-pointer bg-neutral-200 hover:bg-neutral-300 transition-colors duration-200 py-1"><button type="button" className="flex items-center gap-2 hover:underline">
                                                                <Image
                                                                    src={"/eye.svg"}
                                                                    alt="View Icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 text-neutral-500"
                                                                />
                                                            </button></div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="gap-1 flex-row items-center justify-start flex-nowrap infline-flex">
                                                                <div className="flex-row gap-1 items-center justify-start flex-nowrap inline-flex">
                                                                    <Link href="/tx/5f3c8b2d1e4fb" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                        5f3c8b2d1e4fb...
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-neutral-500">07-03-2025 07:37:13</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <Link href="/block/350793540" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                    350793540
                                                                </Link>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    <tr className="transition-colors hover:bg-neutral-100">
                                                        <td className="h-12 px-2 align-middle leading-4 font-normal text-neutral-700">

                                                            <div className="px-1 border rounded-md flex items-center justify-center cursor-pointer bg-neutral-200 hover:bg-neutral-300 transition-colors duration-200 py-1"><button type="button" className="flex items-center gap-2 hover:underline">
                                                                <Image
                                                                    src={"/eye.svg"}
                                                                    alt="View Icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 text-neutral-500"
                                                                />
                                                            </button></div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="gap-1 flex-row items-center justify-start flex-nowrap infline-flex">
                                                                <div className="flex-row gap-1 items-center justify-start flex-nowrap inline-flex">
                                                                    <Link href="/tx/5f3c8b2d1e4fb" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                        5f3c8b2d1e4fb...
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-neutral-500">07-03-2025 07:37:13</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <Link href="/block/350793540" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                    350793540
                                                                </Link>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    <tr className="transition-colors hover:bg-neutral-100">
                                                        <td className="h-12 px-2 align-middle leading-4 font-normal text-neutral-700">

                                                            <div className="px-1 border rounded-md flex items-center justify-center cursor-pointer bg-neutral-200 hover:bg-neutral-300 transition-colors duration-200 py-1"><button type="button" className="flex items-center gap-2 hover:underline">
                                                                <Image
                                                                    src={"/eye.svg"}
                                                                    alt="View Icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 text-neutral-500"
                                                                />
                                                            </button></div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="gap-1 flex-row items-center justify-start flex-nowrap infline-flex">
                                                                <div className="flex-row gap-1 items-center justify-start flex-nowrap inline-flex">
                                                                    <Link href="/tx/5f3c8b2d1e4fb" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                        5f3c8b2d1e4fb...
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-neutral-500">07-03-2025 07:37:13</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <Link href="/block/350793540" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                    350793540
                                                                </Link>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                    <tr className="transition-colors hover:bg-neutral-100">
                                                        <td className="h-12 px-2 align-middle leading-4 font-normal text-neutral-700">

                                                            <div className="px-1 border rounded-md flex items-center justify-center cursor-pointer bg-neutral-200 hover:bg-neutral-300 transition-colors duration-200 py-1"><button type="button" className="flex items-center gap-2 hover:underline">
                                                                <Image
                                                                    src={"/eye.svg"}
                                                                    alt="View Icon"
                                                                    width={16}
                                                                    height={16}
                                                                    className="w-4 h-4 text-neutral-500"
                                                                />
                                                            </button></div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="gap-1 flex-row items-center justify-start flex-nowrap infline-flex">
                                                                <div className="flex-row gap-1 items-center justify-start flex-nowrap inline-flex">
                                                                    <Link href="/tx/5f3c8b2d1e4fb" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                        5f3c8b2d1e4fb...
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-neutral-500">07-03-2025 07:37:13</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-12 px-2 py-2 align-middle leading-4 text-sm font-normal text-neutral-700">
                                                            <div className="flex gap-1 flex-row items-center justify-start flex-nowrap">
                                                                <Link href="/block/350793540" className="text-blue-500 hover:text-blue-700 transition-colors duration-200">
                                                                    350793540
                                                                </Link>
                                                            </div>
                                                        </td>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="px-4 pb-4 pt-4 border-t border-border bg-neutral-50 w-full">
                                        <Link href={"/txs"} className="w-full">
                                            <div className="flex gap-1 flex-row items-center justify-center flex-nowrap hover:text-blue-500 transition-colors duration-200 ">
                                                <div className="not-italic text-xs leading-4 font-medium transition-colors uppercase text-gray-400 hover:text-blue-500 w-full text-center">
                                                    VISIT TOKEN DASHBOARD
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-xl border-border p-0 bg-neutral-100 overflow-hidden h-full border">
                            <div className="flex flex-col gap-4 items-start justify-start h-full">
                                <DeFiCharts />
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-6">
                        <TPSCharts range={timeRange} onRangeChange={setTimeRange} />
                    </div>
                    <div className="w-full mt-6">
                        <NetworkCharts range={timeRange} onRangeChange={setTimeRange} />
                    </div>
                </div>
            </div>
            <footer className="w-full bg-white mt-6">
                <div className="my-0 mx-auto max-w-full md:px-6 2xl:px-0 2xl:max-w-[1400px]">
                    <div className="flex gap-1 flex-row items-center justify-between flex-wrap py-4 border-neutral-200">
                        <div className="flex flex-row flex-wrap gap-2 items-stretch justify-start">
                            <a href="https://x.com/solscanofficial" className="flex items-center gap-2 justify-center group-hover:text-blue-500"
                                aria-label="Twitter" target="_blank">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100">
                                    <Image
                                        src={"/X.svg"}
                                        alt="Twitter Icon"
                                        width={16}
                                        height={16}
                                        className="w-5 h-5 text-neutral-500 group-hover:text-blue-500 transition-colors duration-200"
                                    />
                                </div>
                            </a>
                            <a href="https://solscan.substack.com/" className="flex items-center gap-2 justify-center group-hover:text-blue-500"
                                aria-label="Substack" target="_blank">
                                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100">
                                    <Image
                                        src={"/substack.svg"}
                                        alt="Substack Icon"
                                        width={16}
                                        height={16}
                                        className="w-5 h-5 text-neutral-500 group-hover:text-blue-500 transition-colors duration-200"
                                    />
                                </div>
                            </a>
                        </div>
                        <div className="flex flex-row flex-wrap gap-1 items-center justify-start cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <Image
                                src={"/arrow-up-to-line.svg"}
                                alt="Back to Top Icon"
                                width={14}
                                height={14}
                                className="w-4 h-4 text-neutral-500 hover:text-blue-500 transition-colors duration-200"

                            />
                            <div className="not-talic font-medium text-neutral-700 text-sm leading-6">
                                Back to Top
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap justify-start grow-0 shrink-0 basis-full min-w-0 box-border py-6 lg:py-8 w-full gap-y-4">
                        <div className="max-w-4xl lg:max-w-7xl flex-1 lg:flex block relative box-border my-0 px-1">
                            <div className="flex flex-col gap-2 items-stretch justify-start pr-0 lg:pr-8">
                                <div className="flex flex-row flex-wrap gap-2 items-center justify-start">
                                    <div className="flex flex-row flex-wrap gap-1 items-center justify-center h-7 w-7 p-2 rounded-full bg-neutral-800">
                                        <Image
                                            src={"/solana.png"}
                                            alt="Solscan Logo"
                                            width={398}
                                            height={312}
                                            className="w-10 h-2 text-white"
                                        />
                                    </div>
                                    <div className="text-lg text-neutral-700 font-medium not-italic leading-6">
                                        Powered by Solana Blockchain
                                    </div>
                                    <div className="not-italic font-normal text-xs leading-4 text-neutral-500">
                                        Solscan is the leading Block Explorer and Search, API & Analytics Platform for Solana blockchain.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-1/2 sm:max-w-1/2 md:max-w-1/3 lg:max-w-[20.83%] basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-[20.83%] block relative box-border my-0 px-1">
                            <div className="flex flex-col gap-3 items-stretch justify-start">
                                <div className="not-italic text-neutral-700 font-medium text-sm leading-6">
                                    Company
                                </div>
                                <a href="branding" className="text-xs not-italic text-gray-400 hover:text-blue-500 transition-colors duration-200">Branding</a>
                                <a href="contactus" className="text-xs not-italic text-gray-400 hover:text-blue-500 transition-colors duration-200">Contact Us</a>
                                <a href="terms-of-service" className="text-xs not-italic text-gray-400 hover:text-blue-500 transition-colors duration-200">Terms of Service</a>
                                <a href="privacy-policy" className="text-xs not-italic text-gray-400 hover:text-blue-500 transition-colors duration-200">Privacy Policy</a>
                                <a href="bugboutline" target="_blank" className="text-xs not-italic text-gray-400 hover:text-blue-500 transition-colors duration-200">Bug Bounty</a>
                            </div>
                        </div>
                        <div className="max-w-1/2 sm:max-w-1/2 md:max-w-1/3 lg:max-w-[20.83%] basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-[20.83%] block relative box-border my-0 px-1">
                            <div className="flex flex-col gap-3 items-stretch justify-start">
                                <div className="not-italic text-neutral-700 font-medium text-sm leading-6">
                                    Community
                                </div>
                                <a href="https://pro-api.solscan.io/pro-api-docs/v2.0" target="_blank" className="text-xs not-italic text-gray-400 hover:text-blue-500 transition-colors duration-200">API Docs</a>
                                <a href="https://docs.solscan.io/" target="_blank" className="text-xs not-italic text-gray-400 hover:text-blue-500 transition-colors duration-200">Solscan Docs</a>
                                <a href="https://info.solscan.io/" target="_blank" className="text-xs not-italic text-gray-400 hover:text-blue-500 transition-colors duration-200">Knowledge Base</a>
                            </div>
                        </div>
                        <div className="max-w-1/2 sm:max-w-1/2 md:max-w-1/3 lg:max-w-[20.83%] basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-[20.83%] block relative box-border my-0 px-1">
                            <div className="flex flex-col gap-3 items-stretch justify-start">
                                <div className="not-italic text-neutral-700 font-medium text-sm leading-6">
                                    Products & Services
                                </div>
                                <a href="contactusadvertise" className="text-xs not-italic text-gray-400 hover:text-blue-500 transition-colors duration-200">Advertise</a>
                                <a href="eaas" className="text-xs not-italic text-gray-400 hover:text-blue-500 transition-colors duration-200">Explorer as a Service (EaaS)</a>
                                <a href="apis" className="text-xs not-italic text-gray-400 hover:text-blue-500 transition-colors duration-200">API Plans</a>
                                <a href="priority-support" className="text-xs not-italic text-gray-400 hover:text-blue-500 transition-colors duration-200">Priority Support</a>
                                <a href="token-update" className="text-xs not-italic text-gray-400 hover:text-blue-500 transition-colors duration-200">Token Update</a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-1 items-center justify-between py-3 border-t border-neutral-200">
                        <div className="not-italic font-normal text-sm leading-4 text-gray-500">
                            Solscan @2025
                        </div>
                        <div className="flex flex-row flex-wrap gap-1 items-center justify-start">
                            <div className="not-italic font-normal text-sm leading-6 text-gray-500">Donations: </div>
                            <span className="w-auto max-w-full whitespace-nowrap">
                                <span className="border border-dashed border-transparent box-content break-all px-1 rounded-md align-middle font-normal text-sm leading-6 text-blue-500 hover:text-blue-600 transition-colors duration-200">
                                    <a href="/account/D27DgiipBR5dRdij2L6NQ27xwyiLK5Q2DsEM5ML5EuLK">D27Dgi...L5EuLK</a>
                                </span>
                            </span>
                            <Image
                                src={"/red-heart.svg"}
                                alt="Heart Icon"
                                width={14}
                                height={14}
                            />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}  