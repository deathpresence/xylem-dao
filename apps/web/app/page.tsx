import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  ExternalLink,
  Lock,
  Shield,
  Zap,
} from "lucide-react";

import { Button } from "@workspace/ui/components/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="font-mono">Xylem DAO</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <Link
              href="#problem"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Problem
            </Link>
            <Link
              href="#solution"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Solution
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              How It Works
            </Link>
            <Link
              href="#ecosystem"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Ecosystem
            </Link>
            <Link
              href="#roadmap"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Roadmap
            </Link>

            <Link
              href="https://docs.xylemma.com"
              target="_blank"
              className="text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              Documentation
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            {/* <MobileNav /> */}
            <Button
              size="sm"
              className="hidden md:flex bg-white text-black hover:bg-white/90"
            >
              Join DAO
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
          <div className="absolute h-full w-full bg-gradient-to-b from-black via-blue-950/20 to-black"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
          <div className="container relative px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-[1fr_400px] lg:gap-16 xl:grid-cols-[1fr_500px] items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-6">
                  <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                    <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2"></span>
                    Bitcoin-Backed Stablecoin
                  </div>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                    The First DAO-Governed Stablecoin Protocol
                  </h1>
                  <p className="max-w-[600px] text-zinc-400 text-xl">
                    Meet USDx – A decentralized, transparent, and
                    censorship-resistant stablecoin, pegged 1:1 to the USD and
                    backed by Bitcoin.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white border-0 hover:opacity-90"
                  >
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Link href="https://docs.xylemma.com" target="_blank">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20
                    text-white hover:bg-white/10"
                    >
                      Learn More
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-400/20 flex items-center justify-center">
                  <div className="absolute inset-4 rounded-full bg-black flex items-center justify-center border border-white/10">
                    <div className="text-center">
                      <div className="text-6xl font-bold font-mono text-white">
                        XYM
                      </div>
                      <div className="text-xl text-zinc-400">
                        Governance Token
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="problem" className="w-full py-20 md:py-32 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                  The Problem
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  Stablecoins Need a Revolution
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Today&apos;s most-used stablecoins—like USDT and USDC—are
                  centralized, vulnerable to censorship, and often lack
                  transparency. Meanwhile, over $800B in Bitcoin liquidity
                  remains underutilized in DeFi.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="solution" className="w-full py-20 md:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                  The Solution
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  Introducing USDx
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A decentralized, transparent, and censorship-resistant
                  stablecoin, pegged 1:1 to the USD and backed by Bitcoin.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 md:gap-8 mt-16">
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Shield className="h-8 w-8 text-cyan-400" />
                  <CardTitle className="text-xl">No Custodians</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    BTC secured via Zero-Knowledge Proofs, PSBTs, and Taproot
                    technology.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Zap className="h-8 w-8 text-cyan-400" />
                  <CardTitle className="text-xl">Fully DAO-managed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    No single point of failure. Governed by the community.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <Lock className="h-8 w-8 text-cyan-400" />
                  <CardTitle className="text-xl">
                    Maximum Transparency
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    On-chain, verifiable collateral. No issuer risk. Just code,
                    math, and Bitcoin.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="w-full py-20 md:py-32 bg-zinc-950"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  Simple, Secure, Decentralized
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  USDx minting with up to 66% BTC collateral. Redeem your BTC by
                  repaying in USDx plus a small fee.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-5 mt-16">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-cyan-400 border border-blue-800">
                  1
                </div>
                <h3 className="mt-4 text-lg font-semibold">Lock BTC</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Lock BTC in the vault
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-cyan-400 border border-blue-800">
                  2
                </div>
                <h3 className="mt-4 text-lg font-semibold">Mint USDx</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Up to 66% Loan-to-Value
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-cyan-400 border border-blue-800">
                  3
                </div>
                <h3 className="mt-4 text-lg font-semibold">Use USDx</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Across DeFi or settle payments
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-cyan-400 border border-blue-800">
                  4
                </div>
                <h3 className="mt-4 text-lg font-semibold">Unlock BTC</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  By repaying USDx plus fee
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-950 text-cyan-400 border border-blue-800">
                  5
                </div>
                <h3 className="mt-4 text-lg font-semibold">Auto-liquidation</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  If BTC price drops below threshold
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="use-cases" className="w-full py-20 md:py-32 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                  Use Cases
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  Real-World Applications
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  USDx solves real problems for businesses and individuals
                  around the world.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16">
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle>Settlements</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    In underbanked or high-risk jurisdictions where traditional
                    banking is limited or unavailable.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle>BRC-20 & Ordinals</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Trading and liquidity for Bitcoin-native tokens and digital
                    artifacts.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle>B2B Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    In USD-deficit economies where access to dollars is limited
                    or expensive.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle>Unlock BTC for DeFi</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Put your Bitcoin to work while maintaining exposure to its
                    price appreciation.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle>Web3 Gateway</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Conservative Web3 gateway for BTC holders looking to explore
                    decentralized finance.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle>Cross-Border Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Fast, low-cost international transfers without traditional
                    banking intermediaries.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="ecosystem" className="w-full py-20 md:py-32 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                  The Ecosystem
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  A Complete DeFi Solution
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Xylem DAO is building a comprehensive ecosystem for
                  Bitcoin-backed stablecoins.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 mt-16">
              <Card className="bg-blue-950/30 border-blue-800/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-cyan-400">Xylem DAO</CardTitle>
                  <CardDescription className="text-zinc-400">
                    Decentralized governance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-300">
                    Community-driven decision making for protocol parameters,
                    upgrades, and treasury management.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-blue-950/30 border-blue-800/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-cyan-400">
                    BTC/USDx Vault Protocol
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Secure collateral management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-300">
                    The core infrastructure that secures Bitcoin collateral and
                    manages the minting and burning of USDx.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-blue-950/30 border-blue-800/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-cyan-400">
                    Decentralized Exchange (DEX)
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Liquidity and trading
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-300">
                    Trade USDx and other assets with low fees, high security,
                    and no centralized intermediaries.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-blue-950/30 border-blue-800/50 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-cyan-400">
                    B2B Custody and OTC Layer
                  </CardTitle>
                  <CardDescription className="text-zinc-400">
                    Enterprise solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-300">
                    Institutional-grade services for businesses looking to
                    integrate USDx into their operations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="roadmap"
          className="w-full py-20 md:py-32 bg-black relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
          <div className="absolute h-full w-full bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                  Roadmap
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  Our Journey Forward
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Xylem DAO has an ambitious roadmap to revolutionize
                  Bitcoin-backed stablecoins.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl mt-16">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-400 backdrop-blur">
                    Q2–Q3 2025
                  </div>
                  <ul className="grid gap-4">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium">Launch DAO governance</h3>
                        <p className="text-sm text-zinc-400">
                          Community-driven decision making for protocol
                          parameters
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium">
                          MVP for USDx and Xylem Protocol
                        </h3>
                        <p className="text-sm text-zinc-400">
                          First version of the Bitcoin-backed stablecoin
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium">
                          Beta for Decentralized Exchange
                        </h3>
                        <p className="text-sm text-zinc-400">
                          Initial trading platform for USDx and other assets
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-sm font-medium text-cyan-400 backdrop-blur">
                    Q4 2025 - H1 2026
                  </div>
                  <ul className="grid gap-4">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium">
                          Launch user wallet with QR payments
                        </h3>
                        <p className="text-sm text-zinc-400">
                          Mobile-friendly wallet for everyday USDx usage
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium">
                          Fiat ramps in multiple countries
                        </h3>
                        <p className="text-sm text-zinc-400">
                          Thailand, Turkey, Vietnam, and Russia
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-cyan-400 mt-0.5" />
                      <div>
                        <h3 className="font-medium">
                          USDx Pro and B2B integrations
                        </h3>
                        <p className="text-sm text-zinc-400">
                          Local currencies, futures, and enterprise solutions
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-xylem" className="w-full py-20 md:py-32 bg-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-white backdrop-blur">
                  Why Xylem?
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  The Right Solution at the Right Time
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Xylem DAO is uniquely positioned to revolutionize the
                  stablecoin market.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-16">
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle>Timing</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Bitcoin is ready. The market is primed for a decentralized,
                    Bitcoin-backed stablecoin.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle>Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Experts from Binance, IBM, UC Berkeley, Sber, and more with
                    deep experience in crypto and finance.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle>Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Advanced cryptography meets real-world DeFi utility,
                    creating a secure and usable platform.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle>Demand</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Global appetite for decentralized USD stablecoins that
                    can&apos;t be censored or controlled by central entities.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle>Niche</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    Untapped BTC liquidity — over $800B waiting to be utilized
                    in DeFi applications.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-zinc-900 border-white/10 shadow-lg">
                <CardHeader>
                  <CardTitle>Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400">
                    A truly decentralized financial system that leverages
                    Bitcoin&apos;s security and liquidity.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-20 md:py-32 bg-black relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
          <div className="absolute h-full w-full bg-gradient-to-b from-black via-blue-950/10 to-black"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
          <div className="container relative px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  Join the Future of Stablecoins
                </h2>
                <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Secure, borderless, Bitcoin-native money is here. <br /> Xylem
                  DAO – Rooted in Bitcoin. Built for DeFi.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white border-0 hover:opacity-90"
                >
                  Join Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10"
                >
                  Read Whitepaper
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t border-white/10 bg-black py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
          <p className="text-xs text-zinc-500">
            © 2025 Xylem DAO. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-xs text-zinc-500 hover:text-white">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-zinc-500 hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-zinc-500 hover:text-white">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
