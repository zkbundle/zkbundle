"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Lock, Zap, MessageSquare, Code, Users, FlaskConical } from "lucide-react"
import React from "react"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header - Fixed Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          <div className="flex items-center gap-3">
            <Image src="/zerobundle-icon.png" alt="ZKBundle" width={36} height={36} className="rounded-lg" />
            <span className="text-xl font-bold text-white">ZKBundle</span>
          </div>
          <Link href="/dashboard">
            <Button className="bg-gradient-to-r from-[#00C09F] to-[#00FFD1] hover:opacity-90 text-black font-semibold px-6 rounded-full">
              Launch App →
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        {/* Background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="container mx-auto max-w-6xl relative">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-white/10 p-16 backdrop-blur-sm">
            <div className="text-center space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00C09F]/30 bg-[#00C09F]/10 text-[#00C09F] text-sm font-medium uppercase tracking-wider">
                Zero Knowledge + Solana Privacy Ecosystem
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <div className="text-white">Private by design.</div>
                <div className="text-white">Anonymous by default.</div>
              </h1>

              <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                ZKBundle is a complete privacy ecosystem combining zk-SNARKs and Zcash shielding to enable encrypted
                transaction bundling, privacy-preserving launches, and confidential operations through atomic execution
                on Solana.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#00C09F] to-[#00FFD1] hover:opacity-90 text-black font-semibold px-8 rounded-full text-lg"
                  >
                    Launch App →
                  </Button>
                </Link>
                <Link href="/docs">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/5 rounded-full text-lg px-8 bg-transparent"
                  >
                    Documentation
                  </Button>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-6 pt-8">
                <a
                  href="https://x.com/zkbundle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <button className="w-10 h-10 rounded-full border border-white/10 hover:border-white/30 flex items-center justify-center transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </button>
              </div>

              <div className="pt-8 text-sm text-white/40 tracking-widest uppercase">
                Encrypted Bundling • Privacy Launches • Anonymous Execution
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is ZKBundle Section */}
      <section className="py-24 px-6 relative">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-white/10 p-16 backdrop-blur-sm">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="text-sm text-white/50 uppercase tracking-wider font-medium">What is ZKBundle</div>
                <h2 className="text-5xl font-bold leading-tight">The Complete Privacy Ecosystem</h2>
                <div className="space-y-4 text-lg text-white/70 leading-relaxed">
                  <p>
                    ZKBundle combines zk-SNARKs and Zcash shielding to deliver unprecedented privacy across encrypted
                    transaction bundling, privacy-preserving launches, and the atomic execution layer.
                  </p>
                  <p>
                    zk-SNARK proofs are quantum-resistant and require no trusted setup, enabling verification without
                    revealing data. Zcash shielding allows computation on encrypted data without decryption, keeping
                    information confidential throughout its entire lifecycle.
                  </p>
                  <p>
                    Built for performance and scalability, ZKBundle creates a trustless, quantum-resistant privacy layer
                    for Solana, enabling secure bundling and confidential launches without compromising speed or user
                    experience.
                  </p>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link href="/docs">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-white/20 text-white hover:bg-white/5 rounded-full bg-transparent"
                    >
                      Technical Documentation
                    </Button>
                  </Link>
                  <Link href="/dashboard">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-[#00C09F] to-[#00FFD1] hover:opacity-90 text-black font-semibold rounded-full"
                    >
                      Try the Ecosystem
                    </Button>
                  </Link>
                </div>
              </div>

              {/* 3D Network Visualization */}
              <div className="relative h-[500px] flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 500 500">
                  {/* Connection lines */}
                  <line x1="250" y1="100" x2="380" y2="200" stroke="#00C09F" strokeWidth="2" opacity="0.3" />
                  <line x1="250" y1="100" x2="120" y2="200" stroke="#00C09F" strokeWidth="2" opacity="0.3" />
                  <line x1="380" y1="200" x2="400" y2="350" stroke="#00C09F" strokeWidth="2" opacity="0.3" />
                  <line x1="120" y1="200" x2="100" y2="350" stroke="#00C09F" strokeWidth="2" opacity="0.3" />
                  <line x1="400" y1="350" x2="250" y2="420" stroke="#00C09F" strokeWidth="2" opacity="0.3" />
                  <line x1="100" y1="350" x2="250" y2="420" stroke="#00C09F" strokeWidth="2" opacity="0.3" />

                  {/* Connection dots */}
                  <circle cx="250" cy="100" r="8" fill="#00C09F" />
                  <circle cx="380" cy="200" r="8" fill="#00C09F" />
                  <circle cx="120" cy="200" r="8" fill="#00C09F" />
                  <circle cx="400" cy="350" r="8" fill="#00C09F" />
                  <circle cx="100" cy="350" r="8" fill="#00C09F" />
                  <circle cx="250" cy="420" r="8" fill="#00C09F" />
                </svg>

                {/* Floating labels */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2">
                  <div className="bg-black/80 border border-[#00C09F]/30 rounded-lg px-4 py-2 backdrop-blur-sm">
                    <div className="text-sm font-semibold text-white">Encrypted Bundling</div>
                    <div className="text-xs text-white/50">zk-SNARK Privacy</div>
                  </div>
                </div>

                <div className="absolute top-1/3 right-8">
                  <div className="bg-black/80 border border-[#00C09F]/30 rounded-lg px-4 py-2 backdrop-blur-sm">
                    <div className="text-sm font-semibold text-white">Privacy Launches</div>
                    <div className="text-xs text-white/50">Zcash Shielding</div>
                  </div>
                </div>

                <div className="absolute bottom-24 left-1/2 -translate-x-1/2">
                  <div className="bg-black/80 border border-[#00C09F]/30 rounded-lg px-4 py-2 backdrop-blur-sm">
                    <div className="text-sm font-semibold text-white">Atomic Execution</div>
                    <div className="text-xs text-white/50">Verified Privacy</div>
                  </div>
                </div>

                <div className="absolute bottom-1/3 left-8">
                  <div className="bg-black/80 border border-[#00C09F]/30 rounded-lg px-4 py-2 backdrop-blur-sm">
                    <div className="text-sm font-semibold text-white">zk-SNARK Proofs</div>
                    <div className="text-xs text-white/50">Quantum-Resistant</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <div className="text-sm text-white/50 uppercase tracking-wider font-medium">Core Features</div>
            <h2 className="text-5xl md:text-6xl font-bold">Three Pillars of Privacy</h2>
            <p className="text-xl text-white/60 max-w-4xl mx-auto">
              ZKBundle delivers complete privacy through three interconnected features powered by quantum-resistant
              zk-SNARK proofs and Zcash shielding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <Card className="relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent border-[#00C09F]/20 hover:border-[#00C09F]/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-[#00C09F]/10 via-transparent to-transparent" />
              <div className="relative p-8 flex flex-col h-full">
                <div className="mb-auto space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00C09F]/20 to-[#00C09F]/5 border border-[#00C09F]/30 flex items-center justify-center">
                    <MessageSquare className="w-8 h-8 text-[#00C09F]" />
                  </div>

                  <div className="h-1 w-full bg-gradient-to-r from-[#00C09F] to-transparent rounded-full" />

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Encrypted Bundling</h3>
                    <p className="text-white/60 leading-relaxed">
                      Quantum-resistant zk-SNARK bundling with blockchain verification
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <div className="h-8 flex-1 rounded-lg bg-[#00C09F]/10 border border-[#00C09F]/30" />
                  <div className="h-8 w-12 rounded-lg bg-[#00C09F]/20 border border-[#00C09F]/40" />
                </div>
              </div>
            </Card>

            {/* Card 2 */}
            <Card className="relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent border-[#4F8A8B]/20 hover:border-[#4F8A8B]/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-[#4F8A8B]/10 via-transparent to-transparent" />
              <div className="relative p-8 flex flex-col h-full">
                <div className="mb-auto space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#4F8A8B]/20 to-[#4F8A8B]/5 border border-[#4F8A8B]/30 flex items-center justify-center">
                    <FlaskConical className="w-8 h-8 text-[#4F8A8B]" />
                  </div>

                  <div className="h-1 w-full bg-gradient-to-r from-[#4F8A8B] to-transparent rounded-full" />

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Privacy Launches</h3>
                    <p className="text-white/60 leading-relaxed">
                      Zcash shielding for confidential computing and token launches
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <div className="h-8 flex-1 rounded-lg bg-[#4F8A8B]/10 border border-[#4F8A8B]/30" />
                  <div className="h-8 w-12 rounded-lg bg-[#4F8A8B]/20 border border-[#4F8A8B]/40" />
                </div>
              </div>
            </Card>

            {/* Card 3 */}
            <Card className="relative overflow-hidden bg-gradient-to-b from-white/5 to-transparent border-[#00FFD1]/20 hover:border-[#00FFD1]/40 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-[#00FFD1]/10 via-transparent to-transparent" />
              <div className="relative p-8 flex flex-col h-full">
                <div className="mb-auto space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00FFD1]/20 to-[#00FFD1]/5 border border-[#00FFD1]/30 flex items-center justify-center">
                    <Zap className="w-8 h-8 text-[#00FFD1]" />
                  </div>

                  <div className="h-1 w-full bg-gradient-to-r from-[#00FFD1] to-transparent rounded-full" />

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3">Atomic Execution Layer</h3>
                    <p className="text-white/60 leading-relaxed">
                      Anonymous transactions for Solana DeFi and MEV immunity
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <div className="h-8 flex-1 rounded-lg bg-[#00FFD1]/10 border border-[#00FFD1]/30" />
                  <div className="h-8 w-12 rounded-lg bg-[#00FFD1]/20 border border-[#00FFD1]/40" />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy Technology Stack Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 space-y-4">
            <div className="text-sm text-white/50 uppercase tracking-wider font-medium">Technology</div>
            <h2 className="text-5xl md:text-6xl font-bold">Privacy Technology Stack</h2>
            <p className="text-xl text-white/60 max-w-4xl mx-auto">
              ZKBundle's technological foundation combines quantum-resistant zk-SNARK proofs and Zcash Shielding to
              create an unprecedented privacy layer for encrypted bundling, confidential computing, and anonymous
              transactions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden">
            <TechnologyStack />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-white/10 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-12 items-start">
            {/* Left: Logo & Description */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Image
                  src="/zerobundle-icon.png"
                  alt="ZKBundle"
                  width={48}
                  height={48}
                  className="drop-shadow-[0_0_20px_rgba(0,192,159,0.3)]"
                />
                <span className="text-2xl font-bold text-white">ZKBundle</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs">
                Privacy-first transaction bundler powered by zk-SNARKs and Zcash shielding for Solana.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://x.com/zkbundle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 hover:border-[#00C09F]/50 hover:bg-[#00C09F]/10 flex items-center justify-center transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <button className="w-10 h-10 rounded-full border border-white/10 hover:border-[#00C09F]/50 hover:bg-[#00C09F]/10 flex items-center justify-center transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Center: Quick Links */}
            <div className="flex flex-col items-center justify-center space-y-4">
              <nav className="flex flex-col items-center gap-3">
                <Link href="/docs" className="text-white/60 hover:text-[#00C09F] transition-colors text-sm font-medium">
                  Documentation
                </Link>
                <a href="#" className="text-white/60 hover:text-[#00C09F] transition-colors text-sm font-medium">
                  GitHub
                </a>
                <a href="#" className="text-white/60 hover:text-[#00C09F] transition-colors text-sm font-medium">
                  Community
                </a>
              </nav>
            </div>

            {/* Right: Launch Button & Legal */}
            <div className="flex flex-col items-end space-y-6">
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-[#00C09F] to-[#00FFD1] hover:opacity-90 text-black font-semibold px-8 py-6 rounded-full">
                  Launch App →
                </Button>
              </Link>
              <div className="text-right">
                <p className="text-white/40 text-xs leading-relaxed max-w-xs">© 2025 ZKBundle. All rights reserved.</p>
                <p className="text-white/30 text-xs mt-2 leading-relaxed max-w-xs">
                  Privacy tools amplify responsibility—use for fair launches only.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-white/30 text-xs">Built on Solana • Powered by zk-SNARKs & Zcash Shielding</div>
            <div className="flex items-center gap-6 text-xs">
              <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

function TechnologyStack() {
  const [activeTab, setActiveTab] = React.useState("zksnark")

  const tabs = [
    { id: "zksnark", icon: Shield, label: "zk-SNARK Proofs" },
    { id: "zcash", icon: Lock, label: "Zcash Shielding" },
    { id: "bundling", icon: MessageSquare, label: "Encrypted Bundling" },
    { id: "launch", icon: Users, label: "Privacy Launch Framework" },
    { id: "atomic", icon: Zap, label: "Atomic Execution Layer" },
  ]

  const content = {
    zksnark: {
      title: "zk-SNARK Proofs",
      description: `ZKBundle leverages zk-SNARK (Zero-Knowledge Scalable Transparent Arguments of Knowledge) technology to enable verification without revelation. Unlike zk-SNARKs, zk-STARKs require no trusted setup ceremony and are quantum-resistant, using collision-resistant hash functions instead of elliptic curve cryptography. Users can prove credentials, validate transactions, and interact with services while maintaining complete anonymity with future-proof security.`,
      points: [
        "Prove credentials without revealing identity",
        "No trusted setup required - fully transparent",
        "Quantum-resistant cryptographic primitives",
        "Transparent and scalable proof generation",
      ],
      code: `import zcash  # Zcash SDK wrapper
from hashlib import sha256

def blinded_intent(sk_w, v, i, rho):
    note = zcash.prf_note(sk_w, v, sha256(i.encode()).digest())
    cm = zcash.pedersen_commit(note, rho)
    nf = zcash.prf_nf(sk_w, rho)
    
    # zk-SNARK circuit: prove note opens to v
    pi = zcash.generate_proof(
        circuit='shielded_intent',
        witness={'sk_w': sk_w, 'v': v, 'i': i, 'rho': rho}
    )
    return cm, nf, pi`,
    },
    zcash: {
      title: "Zcash Shielding",
      description: `Zcash shielding enables computation on encrypted data without decryption, keeping information confidential throughout its entire lifecycle. This groundbreaking technology allows smart contracts to process sensitive data while maintaining privacy, enabling truly confidential token launches and privacy-preserving dApps on Solana.`,
      points: [
        "Computation on encrypted data without decryption",
        "Confidential smart contract execution",
        "Privacy-preserving token launches",
        "End-to-end encrypted state transitions",
      ],
      code: `def aggregate_intents(intents):
    agg_cm = pedersen_commit(sum([decrypt(i) for i in intents]))
    agg_nf = hash([i.nf for i in intents])
    
    # Aggregate zk-SNARK proof
    agg_pi = aggregate_proofs([i.pi for i in intents])
    
    return {'cm': agg_cm, 'nf': agg_nf, 'pi': agg_pi}`,
    },
    bundling: {
      title: "Encrypted Bundling",
      description: `Encrypted bundling combines multiple transactions into a single, privacy-preserving bundle. Each transaction is encrypted using quantum-resistant cryptography, and the entire bundle is verified on-chain using zk-SNARK proofs. This enables users to execute complex transaction sequences while maintaining complete privacy.`,
      points: [
        "Multiple transactions in a single bundle",
        "Quantum-resistant encryption for each transaction",
        "On-chain verification with zero knowledge",
        "MEV protection through transaction privacy",
      ],
      code: `pub fn verify_shielded_intent(
    cm: [u8; 32],
    nf: [u8; 32],
    pi: Proof,
    vk: VerifyingKey
) -> bool {
    let inputs = [cm, nf].concat();
    groth16::verify(&vk, &inputs, &pi).is_ok()
}`,
    },
    launch: {
      title: "Privacy Launch Framework",
      description: `The Privacy Launch Framework enables confidential token launches on Solana. Using Zcash shielding, token creators can conduct fair launches without revealing wallet balances, transaction amounts, or participant identities. This creates a level playing field and prevents MEV exploitation during launch events.`,
      points: [
        "Confidential token launch mechanics",
        "Hidden wallet balances and amounts",
        "Fair launch without MEV exploitation",
        "Privacy-preserving participant identities",
      ],
      code: `async function launchToken(params) {
  const shieldedPool = await createShieldedPool({
    tokenMint: params.mint,
    privacyLevel: 'MAXIMUM'
  })
  
  await bundleTransactions([
    initializePool(shieldedPool),
    addLiquidity(params.initialLiquidity, true)
  ])
}`,
    },
    atomic: {
      title: "Atomic Execution Layer",
      description: `The Atomic Execution Layer provides anonymous transaction bundling for Solana DeFi. All transactions in a bundle either succeed or fail together, ensuring atomicity while maintaining privacy. This layer is essential for MEV immunity and enables confidential multi-step operations across protocols.`,
      points: [
        "Atomic execution of transaction bundles",
        "MEV immunity through privacy",
        "Cross-protocol confidential operations",
        "Anonymous payments for AI agents",
      ],
      code: `use anchor_lang::prelude::*;

#[program]
pub mod zerobundle {
    pub fn atomic_execute(
        ctx: Context<AtomicExecute>,
        bundle: Vec<Instruction>
    ) -> Result<()> {
        verify_bundle_privacy(&bundle)?;
        execute_atomically(bundle)
    }
}`,
    },
  }

  const activeContent = content[activeTab as keyof typeof content]

  return (
    <div className="grid lg:grid-cols-[300px_1fr]">
      {/* Sidebar Navigation */}
      <div className="bg-white/[0.02] border-r border-white/10 p-6">
        <div className="space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const isActive = activeTab === tab.id

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left px-4 py-3 rounded-xl font-medium flex items-center gap-3 transition-all ${
                  isActive
                    ? "bg-[#00C09F]/10 border border-[#00C09F]/30 text-white"
                    : "hover:bg-white/5 text-white/60 hover:text-white border border-transparent"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-[#00C09F]" : ""}`} />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-12">
        <h3 className="text-3xl font-bold text-white mb-6">{activeContent.title}</h3>
        <div className="space-y-6 text-lg text-white/70 leading-relaxed mb-8">
          <p>{activeContent.description}</p>
        </div>

        <div className="space-y-3 mb-8">
          {activeContent.points.map((point, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-[#00C09F] mt-2" />
              <p className="text-white/80">
                <strong className="text-white">{point}</strong>
              </p>
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="bg-black/60 rounded-xl p-6 border border-white/10 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-4 h-4 text-[#00C09F]" />
            <span className="text-sm text-white/60">blinded-intent.py</span>
          </div>
          <pre className="text-sm text-[#00C09F] font-mono overflow-x-auto whitespace-pre-wrap">
            {activeContent.code}
          </pre>
        </div>

        {/* Visual indicators */}
        <div className="flex gap-3">
          <div className="h-16 w-16 rounded-xl border-2 border-dashed border-white/10" />
          <div className="h-16 w-16 rounded-xl border-2 border-[#00C09F]/40 bg-[#00C09F]/10" />
          <div className="h-16 w-16 rounded-xl border-2 border-dashed border-white/10" />
        </div>
      </div>
    </div>
  )
}
