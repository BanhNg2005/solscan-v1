"use client"

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState } from "react";
import Header from "./Header";
import DeFiCharts from "./DeFiCharts";
import TPSCharts from "./TPSCharts";

export default function Body() {
    return (
        <div className="w-full flex-1 min-h min-h-screen bg-gray-50 flex-col">

            <div className="mx-auto max-w-full px-4 md:px-6 2xl:px-0 flex-col md:flex items-center justify-between">
                <div className="flex flex-col items-stretch justify-start gap-2 md:gap-4 w-full max-w-7xl">
                    < Header />
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
                                <Image
                                    src="/right-arrow.svg"
                                    alt="Right Arrow"
                                    width={24}
                                    height={24}
                                    className="w-5 h-5 text-neutral-500 mr-2.5 ml-auto"
                                />
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
                            <p className="text-neutral-800 font-roboto text-lg font-extrabold leading-6">604,305,570.88</p>
                            <div className="rounded-lg border border-border bg-neutral-100 p-4 w-full border-none mt-4">
                                <div className="flex flex-col gap-4 items-start justify-start">
                                    <div>
                                        <p className="text-neutral-500 font-roboto text-sm font-normal leading-6">Circulating Supply</p>
                                        <p className="font-roberto text-sm font-normal leading-6">534,608,201.1516 SOL (88.5%)</p>
                                    </div>
                                    <div data-orientation="horizontal" className="w-full h-0.25 bg-gray-200 shrink-0" role="none">
                                    </div>
                                    <div>
                                        <p className="text-neutral-500 font-roboto text-sm font-normal leading-6">Non-circulating Supply</p>
                                        <p className="font-roberto text-sm font-normal leading-6">669,697,369.736 SOL (11.5%)</p>
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
                                            <p className="font-roberto text-sm font-normal leading-6">328993339</p>
                                        </div>
                                        <div className="max-w-24/24 flex-12/24 box-border block relative">
                                            <p className="text-neutral-500 font-roboto text-sm font-normal leading-6">Slot Height</p>
                                            <p className="font-roberto text-sm font-normal leading-6">350793540</p>
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
                            <div className="flex gap-10 flex-row items-stretch justify-between w-full">
  {/* Left Side: Total Stake */}
  <div>
    <h3 className="text-gray-900">Total Stake (SOL)</h3>
    <p className="text-neutral-800 font-roboto text-lg font-extrabold leading-6">
      400,924,311.34
    </p>
  </div>

  {/* Right Side: Link */}
  <a
    href="/analysis/solana_staking"
    className="flex items-center gap-1 text-blue-500 font-roboto text-sm font-semibold"
  >
    <span className="text-neutral-500 not-italic font-normal ">
      Skating Dashboard
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5 px-4">
                        {/* Left side - Dashboards (1/2 width on large screens) */}
                        <div className="flex flex-col items-stretch justify-start gap-4">
                            <div className="rounded-xl border-border shadow-md overflow-hidden border">
                                <div className="flex flex-col gap-4 items-start justify-start">
                                    <div className="flex flex-row gap-1 items-center justify-between w-full flex-wrap px-4 pt-4">
                                        <h3 className="text-gray-900 text-lg font-semibold">Latest Transactions</h3>
                                        <button className="white-space-nowrap focus:outline-none items-center justify-center font-semibold text-cyan-300 bg-white border-cyan-300 border rounded-lg px-1 py-1 hover:bg-emerald-50 transition-colors">Customize</button>
                                    </div>
                                    <div className="flex flex-col gap-0 items-stretch justify-start w-full h-full">
                                        <div className="min-w-0 table-auto flex-1">
                                            <table className="w-full border-separate border-spacing-0">
                                                <thead className="sticky top-0">
                                                    <tr className="bg-gray-100">
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700">
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
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Signature</span>
                                                            </div>
                                                        </th>
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Time</span>
                                                            </div>
                                                        </th>
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Block</span>
                                                            </div>
                                                        </th>
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700">
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
                                    <div className="px-4 pb-4 pt-4 border-t border-border bg-neutral-100">
                                        <Link href={"/txs"} className="w-full">
                                            <div className="flex gap-1 flex-row items-center justify-center flex-nowrap hover:text-blue-500 transition-colors duration-200 ">
                                                <div className="not-italic text-xs leading-4 font-medium transition-colors uppercase text-neutral-700 hover:text-blue-500 w-full text-center">
                                                    View All Transactions
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-xl border-border shadow-md overflow-hidden border">
                                <div className="flex flex-col gap-4 items-start justify-start">
                                    <div className="flex flex-row gap-1 items-center justify-between w-full flex-wrap px-4 pt-4">
                                        <h3 className="text-gray-900 text-lg font-semibold">Token Dashboard</h3>
                                    </div>
                                    <div className="flex flex-col gap-0 items-stretch justify-start w-full h-full">
                                        <div className="min-w-0 table-auto flex-1">
                                            <table className="w-full border-separate border-spacing-0">
                                                <thead className="sticky top-0">
                                                    <tr className="bg-gray-100">
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Token</span>
                                                            </div>
                                                        </th>
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Symbol</span>
                                                            </div>
                                                        </th>
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700">
                                                            <div className="flex gap-2 flex-row items-center justify-between flex-wrap">
                                                                <span>Price</span>
                                                            </div>
                                                        </th>
                                                        <th className="h-12 px-2 text-left align-middle font-bold leading-4 text-neutral-700">
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
                                    <div className="px-4 pb-4 pt-4 border-t border-border bg-neutral-100">
                                        <Link href={"/txs"} className="w-full">
                                            <div className="flex gap-1 flex-row items-center justify-center flex-nowrap hover:text-blue-500 transition-colors duration-200 ">
                                                <div className="not-italic text-xs leading-4 font-medium transition-colors uppercase text-neutral-700 hover:text-blue-500 w-full text-center">
                                                    View All Transactions
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <DeFiCharts />
                        </div>
                    </div>
                    
                    <div className="w-full mt-6 px-4">
                        <TPSCharts />
                    </div>
                </div>
            </div>
        </div>
    )
}  