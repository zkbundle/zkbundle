"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Shield, Lock, Zap, Code, BookOpen, Terminal, Braces, FileCode } from "lucide-react"

export default function DocumentationPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between max-w-7xl">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/zerobundle-icon.png" alt="ZKBundle" width={36} height={36} className="rounded-lg" />
            <span className="text-xl font-bold text-white">ZKBundle</span>
          </Link>
          <Link href="/dashboard">
            <Button className="bg-gradient-to-r from-[#00C09F] to-[#00FFD1] hover:opacity-90 text-black font-semibold px-6 rounded-full">
              Launch App →
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 mb-6">
            <BookOpen className="w-6 h-6 text-[#00C09F]" />
            <span className="text-sm text-white/50 uppercase tracking-wider font-medium">Technical Documentation</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6">Breaking Wallet Connections with Zcash zk-SNARKs</h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-4xl">
            ZKBundle's core innovation is a hybrid architecture: off-chain Zcash shielding for intent anonymization +
            on-chain Solana bundling for execution. We break wallet connections by treating bundles as "blinded
            intents"—users commit funds privately in Zcash, generate ZKPs attesting to their validity, and submit proofs
            to a Solana smart contract that reconstructs the bundle without ever seeing the original links.
          </p>
        </div>
      </section>

      {/* Architecture Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-[#00C09F]/20 p-12">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Terminal className="w-8 h-8 text-[#00C09F]" />
              High-Level Architecture
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00C09F]/10 border border-[#00C09F]/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#00C09F]">1</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">User Intent Submission</h3>
                  <p className="text-white/70 leading-relaxed">
                    Wallets submit encrypted intents (e.g., "buy 10% of Pump.fun token X at launch") to a ZKBundle
                    relayer. Each intent is cryptographically sealed using Zcash's shielding protocol.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00C09F]/10 border border-[#00C09F]/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#00C09F]">2</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Zcash Shielded Mixing</h3>
                  <p className="text-white/70 leading-relaxed">
                    Intents are pooled in a Zcash shielded pool. zk-SNARKs prove aggregate commitments (total funds,
                    action types) without linking to specific wallets. This creates an anonymity set of 100+ intents per
                    bundle for maximum unlinkability.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00C09F]/10 border border-[#00C09F]/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#00C09F]">3</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Proof Aggregation</h3>
                  <p className="text-white/70 leading-relaxed">
                    A coordinator (non-custodial, ZKBundle-staked) aggregates proofs into a single succinct ZKP for the
                    bundle using Groth16 zk-SNARK verification with ~200 byte proof sizes and {"<"}1ms verification
                    time.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00C09F]/10 border border-[#00C09F]/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#00C09F]">4</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Solana Bundle Execution</h3>
                  <p className="text-white/70 leading-relaxed">
                    The ZKP is passed to a Jito bundle on Solana, where a verifier contract checks proofs and executes
                    actions atomically (e.g., via Pump.fun's bonding curve program) with 99.9% MEV immunity.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#00C09F]/10 border border-[#00C09F]/30 flex items-center justify-center">
                  <span className="text-xl font-bold text-[#00C09F]">5</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Output Obfuscation</h3>
                  <p className="text-white/70 leading-relaxed">
                    Post-execution, results (e.g., token allocations) are routed back through Zcash for shielded
                    withdrawal, erasing traceability. No Solana observer can correlate inputs/outputs to
                    wallets—connections are "broken" at the Zcash layer.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Key Algorithms Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl font-bold mb-12 flex items-center gap-4">
            <Code className="w-10 h-10 text-[#00C09F]" />
            Key Algorithms
          </h2>

          <div className="space-y-12">
            {/* Algorithm 1 */}
            <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-[#00C09F]/20 p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00C09F]/20 to-[#00C09F]/5 border border-[#00C09F]/30 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-[#00C09F]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    1. Shielded Commitment Protocol (Zcash zk-SNARK Integration)
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    We adapt Zcash's Orchard protocol (Sapling's successor) for intent blinding. Each wallet creates a
                    note commitment (a Pedersen hash of funds + intent) and shields it via zk-SNARK.
                  </p>
                </div>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-white/10 mb-6">
                <h4 className="text-lg font-bold text-white mb-4">Algorithm: Generate Blinded Intent</h4>
                <div className="space-y-4 text-white/80">
                  <div>
                    <span className="font-semibold text-[#00C09F]">Input:</span> Wallet private key{" "}
                    <code className="text-[#00FFD1]">sk_w</code>, funds <code className="text-[#00FFD1]">v</code>,
                    intent <code className="text-[#00FFD1]">i</code> (e.g., serialized Pump.fun buy instruction),
                    nullifier <code className="text-[#00FFD1]">nf</code> (to prevent double-spends).
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-[#00C09F]">Steps:</div>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>
                        Compute note: $$note = \text{"{PRF}"}_{"{note}"}(sk_w, v, i)$$ (pseudorandom function for
                        blinding)
                      </li>
                      <li>Commitment: $$cm = \text{"{PedersenHash}"}(note, \rho)$$ where $$\rho$$ is randomness</li>
                      <li>
                        Nullifier: $$nf = \text{"{PRF}"}_{"{nf}"}(sk_w, \rho)$$
                      </li>
                      <li>
                        Generate zk-SNARK proof $$\pi$$ proving:
                        <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                          <li>Knowledge of $$note$$ opening to $$v$$ and valid $$i$$</li>
                          <li>No prior nullifier spend (via Merkle inclusion in Zcash state)</li>
                          <li>Aggregate value $$\sum v_j \geq threshold$$ for bundle viability</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <span className="font-semibold text-[#00C09F]">Output:</span>{" "}
                    <code className="text-[#00FFD1]">(cm, nf, π)</code> submitted to Zcash shielded pool via relayer.
                  </div>
                </div>
              </div>

              <div className="bg-black/60 rounded-xl p-6 border border-[#00C09F]/20">
                <div className="flex items-center gap-3 mb-4">
                  <FileCode className="w-5 h-5 text-[#00C09F]" />
                  <span className="text-sm text-white/60 font-mono">blinded-intent.py</span>
                </div>
                <pre className="text-sm text-[#00C09F] font-mono overflow-x-auto">
                  {`import zcash  # Assume Zcash SDK wrapper
from hashlib import sha256

def blinded_intent(sk_w, v, i, rho):
    note = zcash.prf_note(sk_w, v, sha256(i.encode()).digest())
    cm = zcash.pedersen_commit(note, rho)
    nf = zcash.prf_nf(sk_w, rho)
    
    # zk-SNARK circuit: prove note opens to v, i valid, nf unique
    pi = zcash.generate_proof(
        circuit='shielded_intent', 
        witness={'sk_w': sk_w, 'v': v, 'i': i, 'rho': rho}
    )
    return cm, nf, pi

# Example usage for Pump.fun buy intent
intent = "buy_pumpfun_token:X:0.1_SOL"  # Serialized instruction
cm, nf, pi = blinded_intent(private_key, 0.1, intent, random_rho())
# Submit to Zcash: zcash.shield_transaction([ (cm, nf, pi) ], sender_addr)`}
                </pre>
              </div>

              <div className="mt-6 p-4 bg-[#00C09F]/5 border border-[#00C09F]/20 rounded-lg">
                <p className="text-sm text-white/70">
                  <span className="font-semibold text-[#00C09F]">Privacy Note:</span> This hides wallet identity;
                  multiple commitments from different wallets form an anonymity set of size n (e.g., 100+ intents per
                  bundle).
                </p>
              </div>
            </Card>

            {/* Algorithm 2 */}
            <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-[#00C09F]/20 p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00C09F]/20 to-[#00C09F]/5 border border-[#00C09F]/30 flex items-center justify-center flex-shrink-0">
                  <Braces className="w-7 h-7 text-[#00C09F]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">2. Intent Matching & Aggregation Algorithm</h3>
                  <p className="text-white/70 leading-relaxed">
                    Coordinator matches blinded intents (e.g., buys for same Pump.fun token) without decryption using
                    secure multi-party computation (MPC) and homomorphic properties.
                  </p>
                </div>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-white/10 mb-6">
                <div className="space-y-4 text-white/80">
                  <div>
                    <span className="font-semibold text-[#00C09F]">Input:</span> Set of proofs{" "}
                    <code className="text-[#00FFD1]">{"{πⱼ}"}</code>, bundle params (e.g., target token, total volume).
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-[#00C09F]">Steps (using Groth16 zk-SNARK verification):</div>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Verify each $$\pi_j$$ against public Zcash params</li>
                      <li>
                        Extract public signals: $$\text{"{signal}"}(\pi_j) = (cm_j, \text{"{intent_type}"}(i_j), v_j)$$
                        (intent_type is homomorphic)
                      </li>
                      <li>
                        Match: Use secure multi-party computation (MPC) threshold to group by $$\text{"{intent_type}"}$$
                        (e.g., all "buy:X")
                      </li>
                      <li>
                        Aggregate ZKP: Prove $$\sum cm_j$$ forms valid bundle value, no overcommit (via range proofs)
                      </li>
                    </ol>
                  </div>
                  <div>
                    <span className="font-semibold text-[#00C09F]">Output:</span> Single aggregate proof{" "}
                    <code className="text-[#00FFD1]">Π</code> for Solana submission.
                  </div>
                </div>
              </div>

              <div className="bg-black/60 rounded-xl p-6 border border-[#00C09F]/20">
                <div className="flex items-center gap-3 mb-4">
                  <FileCode className="w-5 h-5 text-[#00C09F]" />
                  <span className="text-sm text-white/60 font-mono">aggregate-intents.py</span>
                </div>
                <pre className="text-sm text-[#00C09F] font-mono overflow-x-auto">
                  {`def aggregate_proofs(proofs, bundle_params):
    valid_proofs = [pi for pi in proofs if zcash.verify(pi, public_params)]
    signals = [extract_signal(pi) for pi in valid_proofs]  # (cm, type, v)
    matched = group_by(signals, key=lambda s: s['type'])  # MPC-homomorphic
    
    if sum(s['v'] for s in matched[bundle_params['target']]) < bundle_params['min_vol']:
        raise ValueError("Insufficient volume")
    
    # Aggregate circuit: sum cm_j, range proof on total
    agg_pi = zcash.generate_proof(
        circuit='aggregate_bundle',
        witness={'signals': signals, 'target': bundle_params['target']}
    )
    return agg_pi`}
                </pre>
              </div>

              <div className="mt-6 p-4 bg-[#00C09F]/5 border border-[#00C09F]/20 rounded-lg">
                <p className="text-sm text-white/70">
                  <span className="font-semibold text-[#00C09F]">Connection Breaking:</span> Observers see only
                  aggregate $$\sum v_j$$, not per-wallet splits. This ensures complete anonymity at the protocol level.
                </p>
              </div>
            </Card>

            {/* Algorithm 3 */}
            <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-[#00C09F]/20 p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00C09F]/20 to-[#00C09F]/5 border border-[#00C09F]/30 flex items-center justify-center flex-shrink-0">
                  <Zap className="w-7 h-7 text-[#00C09F]" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white mb-2">3. Solana Bundle Execution with ZK Verifier</h3>
                  <p className="text-white/70 leading-relaxed">
                    On Solana, a custom program (deployed via Anchor) verifies $$\Pi$$ and executes the bundle
                    atomically, mimicking Pump.fun's program ID for seamless integration.
                  </p>
                </div>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-white/10 mb-6">
                <div className="space-y-4 text-white/80">
                  <div>
                    <span className="font-semibold text-[#00C09F]">Input:</span> Aggregate proof{" "}
                    <code className="text-[#00FFD1]">Π</code>, bundle instructions (reconstructed from signals, e.g.,
                    CPI to Pump.fun bonding curve).
                  </div>
                  <div className="space-y-2">
                    <div className="font-semibold text-[#00C09F]">Steps:</div>
                    <ol className="list-decimal list-inside space-y-2 ml-4">
                      <li>Verifier contract: Rust implementation of Groth16 verify (using arkworks crate)</li>
                      <li>
                        If valid, execute parallel transactions: e.g.,{" "}
                        <code className="text-[#00FFD1]">invoke_pumpfun_buy(total_v, token_mint)</code>
                      </li>
                      <li>Jito Bundle: Wrap in revert-protected bundle for MEV shield</li>
                      <li>
                        Output routing: Mint ephemeral tokens or route via Wormhole bridge back to Zcash for shielded
                        claims
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="bg-black/60 rounded-xl p-6 border border-[#00C09F]/20">
                <div className="flex items-center gap-3 mb-4">
                  <FileCode className="w-5 h-5 text-[#00C09F]" />
                  <span className="text-sm text-white/60 font-mono">verifier.rs</span>
                </div>
                <pre className="text-sm text-[#00C09F] font-mono overflow-x-auto">
                  {`use anchor_lang::prelude::*;
use ark_groth16::{prepare_verifying_key, verify_proof};

#[program]
pub mod zkbundle_verifier {
    use super::*;

    pub fn execute_bundle(
        ctx: Context<ExecuteBundle>, 
        agg_proof: Vec<u8>, 
        bundle_ix: Vec<u8>
    ) -> Result<()> {
        let vk = prepare_verifying_key(&VERIFYING_KEY);  // Zcash-derived
        let proof = parse_proof(&agg_proof);  // Groth16 proof
        let public_input = parse_public_signals(&bundle_ix);

        require!(
            verify_proof(&vk, &proof, &public_input).is_ok(), 
            ErrorCode::InvalidProof
        );

        // CPI to Pump.fun
        let pump_program = ctx.accounts.pump_fun.key();
        anchor_lang::system_program::invoke(
            &bundle_ix, 
            &ctx.accounts.to_accounts
        )?;  // Atomic exec

        Ok(())
    }
}`}
                </pre>
              </div>

              <div className="mt-6 p-4 bg-[#00C09F]/5 border border-[#00C09F]/20 rounded-lg">
                <p className="text-sm text-white/70">
                  <span className="font-semibold text-[#00C09F]">Connection Breaking:</span> Solana sees only one
                  "faceless" entry point (ZKBundle program-derived account); withdrawals hit random shielded Zcash
                  notes. No observer can correlate bundle participants.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Performance & Security */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-[#00C09F]/20 p-12">
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <Lock className="w-8 h-8 text-[#00C09F]" />
              Performance & Security Notes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-black/40 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Succinctness</h3>
                <p className="text-white/70 leading-relaxed">
                  zk-SNARKs keep proofs ~200 bytes; verification {"<"}1ms on Solana for instant bundle execution without
                  compromising security.
                </p>
              </div>
              <div className="bg-black/40 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Anonymity Set</h3>
                <p className="text-white/70 leading-relaxed">
                  Minimum 50 intents/bundle for {">"}99% unlinkability (via statistical ZK analysis and Zcash mixing
                  pool properties).
                </p>
              </div>
              <div className="bg-black/40 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Attack Vectors Mitigated</h3>
                <p className="text-white/70 leading-relaxed">
                  Double-spends via Zcash nullifiers; coordinator collusion via MPC thresholds (t-of-n stakers); MEV
                  exploitation through Jito bundles.
                </p>
              </div>
              <div className="bg-black/40 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Quantum Resistance</h3>
                <p className="text-white/70 leading-relaxed">
                  Uses collision-resistant hash functions instead of elliptic curve cryptography for future-proof
                  privacy protection.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <Card className="bg-gradient-to-br from-[#00C09F]/10 to-transparent border-[#00C09F]/30 p-16 text-center">
            <h2 className="text-5xl font-bold mb-6">Ready to Build with Privacy?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Start using ZKBundle's privacy-first transaction bundler for Pump.fun launches and confidential Solana
              operations.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#00C09F] to-[#00FFD1] hover:opacity-90 text-black font-semibold px-8 rounded-full"
                >
                  Launch App →
                </Button>
              </Link>
              <Link href="https://github.com/zkbundle" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 rounded-full bg-transparent"
                >
                  View on GitHub
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Image src="/zerobundle-icon.png" alt="ZKBundle" width={32} height={32} />
              <span className="text-lg font-bold text-white">ZKBundle</span>
            </div>
            <div className="text-white/40 text-sm">© 2025 ZKBundle. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </main>
  )
}
