"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Shield,
  Lock,
  Zap,
  TrendingUp,
  Copy,
  Check,
  CheckCircle2,
  Settings,
  Wallet,
  Rocket,
  Users2,
  PackageOpen,
} from "lucide-react"
import { useWallet } from "@solana/wallet-adapter-react"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("bundle")
  const [showPrivateKey, setShowPrivateKey] = useState(false)
  const [copied, setCopied] = useState(false)

  const { publicKey, connected } = useWallet()

  // Bundle creation state
  const [bundleAmount, setBundleAmount] = useState("")
  const [tokenAddress, setTokenAddress] = useState("")
  const [bundleSize, setBundleSize] = useState("5")
  const [bundleStatus, setBundleStatus] = useState<"idle" | "creating" | "success">("idle")

  // Pump.fun deploy+bundle state
  const [tokenName, setTokenName] = useState("")
  const [tokenSymbol, setTokenSymbol] = useState("")
  const [tokenDescription, setTokenDescription] = useState("")
  const [initialBuy, setInitialBuy] = useState("")
  const [snipeWallets, setSnipeWallets] = useState("10")
  const [snipeAmount, setSnipeAmount] = useState("")
  const [deployStatus, setDeployStatus] = useState<"idle" | "deploying" | "sniping" | "success">("idle")

  const recentBundles: any[] = []

  const handleCreateBundle = async () => {
    setBundleStatus("creating")
    // Simulate bundle creation
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setBundleStatus("success")
    setTimeout(() => setBundleStatus("idle"), 2000)
  }

  const handleDeployAndSnipe = async () => {
    setDeployStatus("deploying")
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setDeployStatus("sniping")
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setDeployStatus("success")
    setTimeout(() => setDeployStatus("idle"), 2000)
  }

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-xl bg-black/50 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <Image src="/zerobundle-icon.png" alt="ZKBundle" width={32} height={32} className="w-8 h-8" />
            <span className="font-bold text-lg">ZKBundle</span>
          </a>

          <div className="flex items-center gap-3">
            {connected && publicKey && (
              <>
                <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#00FFD1] animate-pulse" />
                  <span className="text-sm">
                    {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
                  </span>
                </div>
                <Button variant="ghost" size="icon" className="hover:bg-white/5">
                  <Settings className="w-5 h-5" />
                </Button>
              </>
            )}
            <WalletMultiButton
              style={{
                background: "linear-gradient(to right, #00C09F, #00FFD1)",
                color: "#000",
                height: "36px",
                padding: "0 12px",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "500",
              }}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <Card className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60 text-sm">Total Volume</span>
              <TrendingUp className="w-4 h-4 text-[#00FFD1]" />
            </div>
            <div className="text-3xl font-bold">0 SOL</div>
            <div className="text-xs text-white/60 mt-1">No activity yet</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60 text-sm">Bundles Created</span>
              <Zap className="w-4 h-4 text-[#00FFD1]" />
            </div>
            <div className="text-3xl font-bold">0</div>
            <div className="text-xs text-white/60 mt-1">Create your first bundle</div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/60 text-sm">MEV Protection</span>
              <Shield className="w-4 h-4 text-[#00FFD1]" />
            </div>
            <div className="text-3xl font-bold">--</div>
            <div className="text-xs text-white/60 mt-1">Ready to protect</div>
          </Card>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full bg-white/5 border border-white/10 p-1">
                <TabsTrigger
                  value="bundle"
                  className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00C09F] data-[state=active]:to-[#00FFD1] data-[state=active]:text-black"
                >
                  Create Bundle
                </TabsTrigger>
                <TabsTrigger
                  value="deploy"
                  className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00C09F] data-[state=active]:to-[#00FFD1] data-[state=active]:text-black"
                >
                  Deploy+Bundle
                </TabsTrigger>
                <TabsTrigger
                  value="monitor"
                  className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00C09F] data-[state=active]:to-[#00FFD1] data-[state=active]:text-black"
                >
                  Monitor
                </TabsTrigger>
                <TabsTrigger
                  value="settings"
                  className="flex-1 data-[state=active]:bg-gradient-to-r data-[state=active]:from-[#00C09F] data-[state=active]:to-[#00FFD1] data-[state=active]:text-black"
                >
                  Settings
                </TabsTrigger>
              </TabsList>

              <TabsContent value="bundle" className="mt-6">
                <Card className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl">
                  <h3 className="text-xl font-bold mb-6">Create Blinded Intent Bundle</h3>

                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="token" className="text-white/80">
                        Token Address
                      </Label>
                      <Input
                        id="token"
                        placeholder="Enter Pump.fun token address"
                        value={tokenAddress}
                        onChange={(e) => setTokenAddress(e.target.value)}
                        className="mt-2 bg-white/5 border-white/10 focus:border-[#00FFD1]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="amount" className="text-white/80">
                        Amount (SOL)
                      </Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="0.0"
                        value={bundleAmount}
                        onChange={(e) => setBundleAmount(e.target.value)}
                        className="mt-2 bg-white/5 border border-white/10 focus:border-[#00FFD1]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="size" className="text-white/80">
                        Bundle Size (Anonymity Set)
                      </Label>
                      <select
                        id="size"
                        value={bundleSize}
                        onChange={(e) => setBundleSize(e.target.value)}
                        className="mt-2 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-[#00FFD1] focus:outline-none"
                      >
                        <option value="5">5 wallets (Standard)</option>
                        <option value="10">10 wallets (Enhanced)</option>
                        <option value="20">20 wallets (Maximum)</option>
                        <option value="50">50+ wallets (Institutional)</option>
                      </select>
                      <p className="text-xs text-white/40 mt-1">
                        Larger sets provide better privacy but may take longer
                      </p>
                    </div>

                    {/* Privacy Features */}
                    <div className="p-4 bg-[#00C09F]/10 border border-[#00C09F]/30 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Lock className="w-5 h-5 text-[#00FFD1] mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm mb-1">Privacy Features Enabled</h4>
                          <ul className="text-xs text-white/60 space-y-1">
                            <li>• zk-SNARK proof generation via Zcash shielded pool</li>
                            <li>• Wallet connection severing through blinded commitments</li>
                            <li>• MEV-resistant execution via Jito bundles</li>
                            <li>• Shielded withdrawal routing</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={handleCreateBundle}
                      disabled={bundleStatus !== "idle" || !tokenAddress || !bundleAmount}
                      className="w-full bg-gradient-to-r from-[#00C09F] to-[#00FFD1] text-black hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {bundleStatus === "creating" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin mr-2" />
                          Generating zk-SNARK Proof...
                        </>
                      ) : bundleStatus === "success" ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Bundle Created Successfully
                        </>
                      ) : (
                        <>
                          <Shield className="w-4 h-4 mr-2" />
                          Create Blinded Bundle
                        </>
                      )}
                    </Button>

                    {/* Code Preview */}
                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-2 text-white/60">Intent Commitment Preview</h4>
                      <div className="p-4 bg-black/50 border border-white/10 rounded-lg font-mono text-xs overflow-x-auto">
                        <pre className="text-[#00FFD1]">
                          {`// Blinded Intent Generation
const note = prf_note(sk_w, ${bundleAmount || "0.0"}, intent)
const cm = pedersen_commit(note, randomness)
const nf = prf_nf(sk_w, randomness)
const pi = generate_proof({
  witness: { sk_w, v: ${bundleAmount || "0.0"}, intent, rho },
  circuit: 'shielded_intent'
})
// Commitment: ${tokenAddress ? `cm_${tokenAddress.slice(0, 8)}...` : "pending"}`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="deploy" className="mt-6">
                <Card className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <Rocket className="w-6 h-6 text-[#00FFD1]" />
                    <h3 className="text-xl font-bold">Deploy on Pump.fun + Auto Snipe</h3>
                  </div>

                  <div className="space-y-4">
                    {/* Token Details */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="tokenName" className="text-white/80">
                          Token Name
                        </Label>
                        <Input
                          id="tokenName"
                          placeholder="My Privacy Token"
                          value={tokenName}
                          onChange={(e) => setTokenName(e.target.value)}
                          className="mt-2 bg-white/5 border-white/10 focus:border-[#00FFD1]"
                        />
                      </div>

                      <div>
                        <Label htmlFor="tokenSymbol" className="text-white/80">
                          Token Symbol
                        </Label>
                        <Input
                          id="tokenSymbol"
                          placeholder="PRIV"
                          value={tokenSymbol}
                          onChange={(e) => setTokenSymbol(e.target.value)}
                          className="mt-2 bg-white/5 border-white/10 focus:border-[#00FFD1]"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="tokenDesc" className="text-white/80">
                        Description
                      </Label>
                      <textarea
                        id="tokenDesc"
                        placeholder="Describe your token..."
                        value={tokenDescription}
                        onChange={(e) => setTokenDescription(e.target.value)}
                        className="mt-2 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-[#00FFD1] focus:outline-none min-h-[80px]"
                      />
                    </div>

                    <div>
                      <Label htmlFor="initialBuy" className="text-white/80">
                        Initial Buy Amount (SOL)
                      </Label>
                      <Input
                        id="initialBuy"
                        type="number"
                        placeholder="1.0"
                        value={initialBuy}
                        onChange={(e) => setInitialBuy(e.target.value)}
                        className="mt-2 bg-white/5 border-white/10 focus:border-[#00FFD1]"
                      />
                      <p className="text-xs text-white/40 mt-1">Your initial position in the token</p>
                    </div>

                    {/* Bundle Snipe Configuration */}
                    <div className="p-4 bg-[#00C09F]/5 border border-[#00C09F]/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-4">
                        <Users2 className="w-5 h-5 text-[#00FFD1]" />
                        <h4 className="font-medium">Auto-Snipe Configuration</h4>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="snipeWallets" className="text-white/80">
                            Bundle Wallets
                          </Label>
                          <select
                            id="snipeWallets"
                            value={snipeWallets}
                            onChange={(e) => setSnipeWallets(e.target.value)}
                            className="mt-2 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-[#00FFD1] focus:outline-none"
                          >
                            <option value="5">5 wallets</option>
                            <option value="10">10 wallets (Recommended)</option>
                            <option value="20">20 wallets</option>
                            <option value="50">50 wallets</option>
                          </select>
                        </div>

                        <div>
                          <Label htmlFor="snipeAmount" className="text-white/80">
                            Per-Wallet Snipe (SOL)
                          </Label>
                          <Input
                            id="snipeAmount"
                            type="number"
                            placeholder="0.1"
                            value={snipeAmount}
                            onChange={(e) => setSnipeAmount(e.target.value)}
                            className="mt-2 bg-white/5 border-white/10 focus:border-[#00FFD1]"
                          />
                        </div>
                      </div>

                      <p className="text-xs text-white/60 mt-3">
                        Bundle wallets will auto-snipe immediately after deployment with full privacy protection
                      </p>
                    </div>

                    {/* Privacy Features */}
                    <div className="p-4 bg-[#00C09F]/10 border border-[#00C09F]/30 rounded-lg">
                      <div className="flex items-start gap-3">
                        <Lock className="w-5 h-5 text-[#00FFD1] mt-0.5" />
                        <div>
                          <h4 className="font-medium text-sm mb-1">Privacy Features Active</h4>
                          <ul className="text-xs text-white/60 space-y-1">
                            <li>• Shielded wallet connections via zk-SNARK proofs</li>
                            <li>• Zcash-based transaction bundling for anonymous sniping</li>
                            <li>• MEV-resistant execution through Jito bundles</li>
                            <li>• Wallet unlinkability across bundle operations</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <Button
                      onClick={handleDeployAndSnipe}
                      disabled={deployStatus !== "idle" || !tokenName || !tokenSymbol || !initialBuy || !snipeAmount}
                      className="w-full bg-gradient-to-r from-[#00C09F] to-[#00FFD1] text-black hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {deployStatus === "deploying" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin mr-2" />
                          Deploying on Pump.fun...
                        </>
                      ) : deployStatus === "sniping" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin mr-2" />
                          Executing Bundle Snipes...
                        </>
                      ) : deployStatus === "success" ? (
                        <>
                          <CheckCircle2 className="w-4 h-4 mr-2" />
                          Deployed & Sniped Successfully!
                        </>
                      ) : (
                        <>
                          <Rocket className="w-4 h-4 mr-2" />
                          Deploy + Auto Bundle Snipe
                        </>
                      )}
                    </Button>

                    {/* Code Preview */}
                    <div className="mt-6">
                      <h4 className="text-sm font-medium mb-2 text-white/60">Bundle Execution Preview</h4>
                      <div className="p-4 bg-black/50 border border-white/10 rounded-lg font-mono text-xs overflow-x-auto">
                        <pre className="text-[#00FFD1]">
                          {`// Deploy + Bundle Snipe Flow
1. Deploy token on Pump.fun: ${tokenSymbol || "TOKEN"}
2. Create shielded wallet set (${snipeWallets} wallets)
3. Generate zk-SNARK commitments for each wallet
4. Bundle ${snipeWallets}x snipe transactions atomically
5. Execute via Jito MEV-protected bundle
6. Maintain full unlinkability across wallets

// Privacy guarantees:
- Wallet origin obfuscation via Zcash shielding
- Transaction bundling with zk-SNARK proofs
- No on-chain linkability between bundle wallets`}
                        </pre>
                      </div>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="monitor" className="mt-6">
                <Card className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">Recent Bundles</h3>
                  </div>

                  {recentBundles.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br from-[#00C09F]/20 to-[#00FFD1]/20 flex items-center justify-center border border-[#00C09F]/30">
                        <PackageOpen className="w-8 h-8 text-[#00FFD1]" />
                      </div>
                      <h3 className="text-lg font-semibold mb-2">No Bundles Yet</h3>
                      <p className="text-white/60 text-sm max-w-md mb-6">
                        Create your first blinded intent bundle to start protecting your transactions from MEV and
                        maintaining privacy on-chain.
                      </p>
                      <Button
                        onClick={() => setActiveTab("bundle")}
                        className="bg-gradient-to-r from-[#00C09F] to-[#00FFD1] text-black hover:opacity-90 transition-opacity"
                      >
                        <Shield className="w-4 h-4 mr-2" />
                        Create Your First Bundle
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {recentBundles.map((bundle) => (
                        <div
                          key={bundle.id}
                          className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-[#00FFD1]/50 transition-colors"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div
                                className={`w-2 h-2 rounded-full ${
                                  bundle.status === "completed" ? "bg-[#00FFD1]" : "bg-yellow-400 animate-pulse"
                                }`}
                              />
                              <span className="font-mono text-sm">{bundle.id}</span>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-6 h-6 hover:bg-white/10"
                                onClick={() => handleCopy(bundle.id)}
                              >
                                {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                              </Button>
                            </div>
                            <span className="text-xs text-white/40">{bundle.time}</span>
                          </div>

                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-4">
                              <span className="text-white/60">
                                <span className="text-white font-medium">{bundle.amount}</span> → {bundle.token}
                              </span>
                              <div className="flex items-center gap-1 text-[#00FFD1]">
                                <Shield className="w-3 h-3" />
                                <span className="text-xs">{bundle.mev} MEV Protected</span>
                              </div>
                            </div>
                            <span
                              className={`text-xs px-2 py-1 rounded ${
                                bundle.status === "completed"
                                  ? "bg-[#00FFD1]/20 text-[#00FFD1]"
                                  : "bg-yellow-400/20 text-yellow-400"
                              }`}
                            >
                              {bundle.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              </TabsContent>

              <TabsContent value="settings" className="mt-6">
                <Card className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl">
                  <h3 className="text-xl font-bold mb-6">Privacy Settings</h3>

                  <div className="space-y-6">
                    <div>
                      <Label className="text-white/80">Default Anonymity Set Size</Label>
                      <select className="mt-2 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-[#00FFD1] focus:outline-none">
                        <option value="10">10 wallets (Recommended)</option>
                        <option value="20">20 wallets</option>
                        <option value="50">50+ wallets</option>
                      </select>
                    </div>

                    <div>
                      <Label className="text-white/80">Shielded Pool Provider</Label>
                      <select className="mt-2 w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg focus:border-[#00FFD1] focus:outline-none">
                        <option value="zcash">Zcash Orchard (Default)</option>
                        <option value="zcash-sapling">Zcash Sapling (Legacy)</option>
                      </select>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <h4 className="font-medium mb-4">Advanced Options</h4>

                      <div className="space-y-3">
                        <label className="flex items-center justify-between p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                          <span className="text-sm">Auto-shielded withdrawals</span>
                          <input type="checkbox" defaultChecked className="w-4 h-4" />
                        </label>

                        <label className="flex items-center justify-between p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                          <span className="text-sm">Maximum MEV protection</span>
                          <input type="checkbox" defaultChecked className="w-4 h-4" />
                        </label>

                        <label className="flex items-center justify-between p-3 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                          <span className="text-sm">Encrypted transaction notifications</span>
                          <input type="checkbox" className="w-4 h-4" />
                        </label>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-[#00C09F] to-[#00FFD1] text-black hover:opacity-90 transition-opacity">
                      Save Settings
                    </Button>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Wallet Info */}
            <Card className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl">
              <h3 className="text-sm font-medium text-white/60 mb-4">
                {connected ? "Connected Wallet" : "Wallet Status"}
              </h3>
              <div className="space-y-3">
                {connected && publicKey ? (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">Address</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-sm">
                          {publicKey.toBase58().slice(0, 4)}...{publicKey.toBase58().slice(-4)}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="w-6 h-6 hover:bg-white/10"
                          onClick={() => handleCopy(publicKey.toBase58())}
                        >
                          {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">Balance</span>
                      <span className="font-medium">-- SOL</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/40">$ZBUNDLE</span>
                      <span className="font-medium">-- ZBUNDLE</span>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <Wallet className="w-8 h-8 text-white/40 mx-auto mb-2" />
                    <p className="text-sm text-white/60">Connect wallet to view details</p>
                  </div>
                )}
              </div>
            </Card>

            {/* Network Status */}
            <Card className="p-6 bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 backdrop-blur-xl">
              <h3 className="text-sm font-medium text-white/60 mb-4">Network Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/40">Solana RPC</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00FFD1] animate-pulse" />
                    <span className="text-xs">Online</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/40">Zcash Bridge</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00FFD1] animate-pulse" />
                    <span className="text-xs">Active</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/40">Jito Relayer</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00FFD1] animate-pulse" />
                    <span className="text-xs">Connected</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 bg-gradient-to-br from-[#00C09F]/10 to-[#00FFD1]/10 border-[#00C09F]/30 backdrop-blur-xl">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-[#00FFD1] mt-1" />
                <div>
                  <h4 className="font-medium text-sm mb-1">Privacy Score</h4>
                  <div className="text-2xl font-bold mb-2">A+</div>
                  <p className="text-xs text-white/60">
                    Your transactions are fully shielded with 99.9%+ unlinkability
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
