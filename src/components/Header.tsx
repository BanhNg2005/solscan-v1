"use client"

import Link from "next/link";
import Image from "next/image";
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect, use } from "react";
import { useRouter } from "next/navigation";
import { authAPI } from "@/services/authAPI";
import { solanaAPI } from "@/services/solanaApi";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  const { setTheme } = useTheme();
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<{
    userId: number;
    email: string;
  } | null>(null);
  const router = useRouter();

  // Check if user is logged in
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const result = await authAPI.verify();
        if (result.user) {
          setUser(result.user);
        }
      } catch (error) {
        console.error('Auth check failed:', error);
      }
    };

    checkAuth();
  }, []);

  const [solPrice, setSolPrice] = useState<number | null>(null);
  const [change24h, setChange24h] = useState<number>(0);
  useEffect(() => {
    const fetchSolPrice = async () => {
      const result = await solanaAPI.price() as {
        price?: number;
        change24h?: number;
        error?: string;
      };
      if (result.price) {
        setSolPrice(result.price);
      }
      if (result.change24h) {
        setChange24h(result.change24h);
      }
    };

    fetchSolPrice();
  }, []);

  const handleLogout = async () => {
    try {
      const result = await authAPI.logout();
      if (!result.error) {
        setUser(null);
        router.push('/user/signin');
      }
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };


  return (

    <div className="bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat w-full">
      <div className="min-h-[200px] w-full shrink-0">
        {/* <div className="my-0 mx-auto max-w-7xl px-4 md:px-6 2xl:px-0 flex-col md:flex items-center"> */}
        <div className="my-0 mx-auto max-w-full px-4 md:px-6 2xl:px-0 2xl:max-w-[1400px]">

          <div className="flex flex-col gap-0 items-stretch justify-start h-full w-full">
            <div className="flex flex-col gap-0 items-stretch justify-start w-full">

              <header className="flex items-center justify-between py-2">
                <div className="flex items-center gap-4">
                  <Link href="/">
                    <Image
                      src="/branding-solscan-logo-dark.svg"
                      alt="Logo"
                      width={100}
                      height={20}
                    />
                  </Link>
                  <div className="flex rounded-lg px-3 py-2 bg-white/20 backdrop-blur-md relative z-10">
                    <Image
                      src="/solPrice.png"
                      alt="Solana Price"
                      width={20}
                      height={20}
                      className="mr-2"
                    />
                    <div className="not-italic text-neutral-100 text-xs font-normal flex items-center">
                      {solPrice !== null ? `$${solPrice.toFixed(2)}` : 'Loading...'}
                      {/* {solPrice?.toFixed(1)} */}
                    </div>
                    <span className={change24h >= 0 ? 'text-green-500 text-xs font-light flex items-center ml-1' : 'text-red-500 font-light text-xs flex items-center ml-1 mb-0.5'}>
                      {`${change24h >= 0 ? '+' : ''}${change24h.toFixed(2)}%`}
                    </span>
                    <div data-orientation="vertical" className="shrink-0 inline-flex mx-1 h-4 w-[1px] bg-neutral-100 mt-auto mb-auto ml-2 mr-2"></div>
                    <div className="not-italic text-neutral-100 text-xs font-normal flex items-center">
                      Avg Fee:
                    </div>
                    <Link href={`/analysis/fee_tracker`} className="text-blue-300 text-xs font-normal flex items-center ml-1">
                      0.00001862
                    </Link>
                  </div>
                </div>

                <div className="flex gap-1 flex-row items-center justify-start flex-wrap ">
                  <div role="menubar" className="h-10 items-center px-1 hidden sm:flex" data-orientation="horizontal">
                    {/* Analytics Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button type="button" className="flex cursor-pointer select-none items-center rounded-lg px-4 py-3 text-sm leading-6 outline-none text-white">
                          <div className="flex flex-row items-center gap-1 justify-center flex-wrap">
                            Analytics
                            <Image
                              src={`/chevron-down.svg`}
                              alt="Dropdown Icon"
                              width={18}
                              height={18}
                              className="transition-transform duration-200"
                            />
                          </div>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="bg-white border border-gray-200 shadow-lg p-2 w-[200px]">
                        <DropdownMenuItem asChild>
                          <Link href="/network" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                            Solana Network
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <div className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 transition-colors cursor-pointer rounded-md">
                                <div className="flex items-center gap-2 text-sm">
                                  Analysis
                                  <span className="bg-purple-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                                    Beta
                                  </span>
                                </div>
                                <Image
                                  src="/right-arrow.svg"
                                  alt="Right Arrow"
                                  width={14}
                                  height={14}
                                />
                              </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent side="right" className="bg-white border border-gray-200 shadow-lg p-2">
                              <DropdownMenuItem asChild>
                                <Link href="/analysis/fee_tracker" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                  Fee Tracker Dashboard
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link href="/analysis/staking" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                  Solana Staking Dashboard
                                </Link>
                              </DropdownMenuItem>
                              <DropdownMenuItem asChild>
                                <Link href="/analysis/stablecoin" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                  Stable Coin Dashboard
                                </Link>
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* DeFi Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button type="button" className="flex cursor-pointer select-none items-center rounded-lg px-4 py-3 text-sm leading-6 outline-none text-white">
                          <div className="flex flex-row items-center gap-1 justify-center flex-wrap">
                            Defi
                            <Image
                              src={`/chevron-down.svg`}
                              alt="Dropdown Icon"
                              width={18}
                              height={18}
                              className="transition-transform duration-200"
                            />
                          </div>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="bg-white border border-gray-200 shadow-lg p-4   ">
                        <div className="grid grid-cols-2 gap-x-6">
                          {/* First Column */}
                          <div className="space-y-1">
                            <DropdownMenuItem asChild>
                              <Link href="/defi/agepro" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                AgePro
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/defi/jupiter-dca" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                Jupiter DCA
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/defi/kamino" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                Kamino
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/defi/meteora" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                Meteora
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/defi/orca" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                Orca
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/defi/pump-fun" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                Pump.Fun
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/defi/sanctum" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                Sanctum
                              </Link>
                            </DropdownMenuItem>
                          </div>

                          {/* Second Column */}
                          <div className="space-y-1">
                            <DropdownMenuItem asChild>
                              <Link href="/defi/jupiter-aggregator" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                Jupiter Aggre...
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/defi/jupiter-limit-order" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                Jupiter Limit ...
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/defi/lifinity" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                Lifinity
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/defi/openbook" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                OpenBook
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/defi/phoenix" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                Phoenix
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/defi/raydium" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                Raydium
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/defi/stabble" className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                                <div className="w-6 h-6 bg-gray-200 rounded"></div>
                                Stabble
                              </Link>
                            </DropdownMenuItem>
                          </div>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Leaderboard Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button type="button" className="flex cursor-pointer select-none items-center rounded-lg px-4 py-3 text-sm leading-6 outline-none text-white">
                          <div className="flex flex-row items-center gap-1 justify-center flex-wrap">
                            Leaderboard
                            <Image
                              src={`/chevron-down.svg`}
                              alt="Dropdown Icon"
                              width={18}
                              height={18}
                              className="transition-transform duration-200"
                            />
                          </div>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="bg-white border border-gray-200 shadow-lg p-2 w-[200px]">
                        <DropdownMenuItem asChild>
                          <Link href="/leaderboard/token" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                            Token
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/leaderboard/nft" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                            NFT
                          </Link>
                        </DropdownMenuItem>
                        <div className="border-t border-gray-200 my-2" data-orientation="horizontal"></div>
                        <DropdownMenuItem asChild>
                          <Link href="/leaderboard/account" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                            Account
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/leaderboard/program" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                            Program
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/leaderboard/whale-tracking" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                            Whale Tracking
                          </Link>
                        </DropdownMenuItem>
                        <div className="border-t border-gray-200 my-2" data-orientation="horizontal"></div>
                        <DropdownMenuItem asChild>
                          <Link href="/leaderboard/compare" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                            Compare
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/leaderboard/label-cloud" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                            Label Cloud
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Blockchain Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button type="button" className="flex cursor-pointer select-none items-center rounded-lg px-4 py-3 text-sm leading-6 outline-none text-white">
                          <div className="flex flex-row items-center gap-1 justify-center flex-wrap">
                            Blockchain
                            <Image
                              src={`/chevron-down.svg`}
                              alt="Dropdown Icon"
                              width={18}
                              height={18}
                              className="transition-transform duration-200"
                            />
                          </div>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="bg-white border border-gray-200 shadow-lg p-2 w-[200px]" >
                        <DropdownMenuItem asChild>
                          <Link href="/blockchain/transactions" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                            Transactions
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/blockchain/blocks" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                            Blocks
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/blockchain/validators" className="flex items-center px-4 py-3 hover:bg-gray-100 transition-colors rounded-md">
                            Validators
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Resources Dropdown */}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button type="button" className="flex cursor-pointer select-none items-center rounded-lg px-4 py-3 text-sm leading-6 outline-none text-white">
                          <div className="flex flex-row items-center gap-1 justify-center flex-wrap">
                            Resources
                            <Image
                              src={`/chevron-down.svg`}
                              alt="Dropdown Icon"
                              width={18}
                              height={18}
                              className="transition-transform duration-200"
                            />
                          </div>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="start" className="bg-white border border-gray-200 shadow-lg p-2">
                        <DropdownMenuItem asChild>
                          <Link href="/resources/api-plans" className="flex items-center px-4 py-3 rounded-md">
                            API Plans
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/resources/api-documentation" className="flex items-center px-4 py-3 rounded-md">
                            API Documentation
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/resources/branding" className="flex items-center px-4 py-3 rounded-md">
                            Branding
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/resources/documentation" className="flex items-center px-4 py-3 rounded-md">
                            Documentation
                          </Link>
                        </DropdownMenuItem>
                        <div className="border-t border-gray-200 my-2" data-orientation="horizontal"></div>
                        <DropdownMenuItem asChild>
                          <Link href="/resources/priority-support" className="flex items-center px-4 py-3 rounded-md">
                            Priority Support
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/resources/token-update" className="flex items-center px-4 py-3 rounded-md">
                            Token Update
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/resources/verified-signature" className="flex items-center px-4 py-3 rounded-md">
                            Verified Signature
                          </Link>
                        </DropdownMenuItem>
                        <div className="border-t border-gray-200 my-2" data-orientation="horizontal"></div>
                        <DropdownMenuItem asChild>
                          <Link href="/resources/account-balance-checker" className="flex items-center px-4 py-3 rounded-md">
                            Account Balance Checker
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Sign In Button */}
                    {user ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <button className="flex cursor-pointer select-none items-center rounded-lg px-4 py-3 text-sm leading-6 outline-none text-white ml-0 rounded-sm leading-6">
                            <div className="cursor-pointer text-neutral-100 bg-fuchsia-500 flex items-center justify-center rounded-3xl w-8 h-8 p-1">
                              <div className="text-white text-sm font-normal not-italic flex items-center justify-center">
                                {user.email.split('@')[0][0].toUpperCase()}
                              </div>

                            </div>
                            <Image
                              src={`/chevron-down.svg`}
                              alt="Dropdown Icon"
                              width={18}
                              height={18}
                              className="transition-transform duration-200 cursor-pointer"
                            />
                          </button>

                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="start" className="bg-white border border-gray-200 shadow-lg p-2 w-[150px]">
                          <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                            Logout
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/user/profile" className="cursor-pointer">
                              Profile
                            </Link>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <button className="flex cursor-pointer select-none items-center rounded-lg px-4 py-3 text-sm leading-6 outline-none text-white">
                        <Link href="/user/signin" className="flex flex-row items-center gap-1 justify-center flex-wrap">
                          Sign in
                        </Link>
                      </button>
                    )}


                    <div style={{ display: 'flex', flexGrow: 1, justifyContent: 'right' }}>
                      <nav>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline" size="icon">
                              <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                              <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                              <span className="sr-only">Toggle theme</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => setTheme("light")}>
                              Light
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                              Dark
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => setTheme("system")}>
                              System
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </nav>

                    </div>
                  </div>
                </div>
              </header>
              <div className="flex flex-row flex-wrap justify-start grow-0 shrink-0">
                <div className="max-w-2xl w-full my-0 flex">

                  {/* <div className="items-stretch justify-start max-w-2xl w-full"> */}
                  <div className="flex flex-col gap-0 justify-center items-start w-full tb:w-[80%] tb:pr-5">
                    <h1 className="text-2xl font-medium not-italic mb-4 text-white flex-auto">Exolore Solana Blockchain</h1>
                    <div className="w-full h-11 relative">
                      <div className="flex gap-1 flex-row items-center justify-start bg-neutral-100 rounded-lg w-full z-20 border border-neutral-300 absolute">
                        <div className="grid items-center gap-2 w-full">
                          <input
                            type="text"
                            className="w-full p-2 border font-medium rounded-lg focus:outline-none focus:ring-0 focus:border-neutral-100 bg-white border-none pr-12"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search transactions, blocks, programs, and tokens"
                          />
                          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-fuchsia-600 rounded-md hover:bg-fuchsia-700 transition py-2 px-4">
                            <Link href={`/search/${search}`}>
                              <Image
                                src="/search.svg"
                                alt="Search Icon"
                                width={12}
                                height={12}
                              />
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}