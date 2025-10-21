# PITLAB FAQ

> **Frequently Asked Questions about the PITLAB Ecosystem**

## General Questions

### What is PITLAB?

PITLAB is a three-part ecosystem combining a meme token with open-source hardware development:

1. **$PITLAB Token (ARMPIT)** - Fair-launch ERC-20 token on Base chain
2. **Pi Trezor Wallet** - DIY hardware wallet for Raspberry Pi
3. **Community Movement** - Grassroots developers building in the open

### What does "ARMPIT" stand for?

It's a playful riff on **ARM** (architecture) + **PIT** (Pi Trezor), wrapped in self-aware humor. The name acknowledges it's a meme while highlighting the serious work of building ARM-based crypto hardware.

### Is this a serious project?

Yes and no. The meme is real, but so is the hardware. We're building actual open-source technology while embracing the absurdity of crypto culture. Think of it as "seriously unserious" development.

---

## Token Questions

### How do I buy $PITLAB?

1. Get ETH on Base chain (bridge from mainnet or buy on Coinbase)
2. Connect MetaMask to Base network
3. Swap ETH for PITLAB on Uniswap
4. Store in hardware wallet (like Pi Trezor!)

Detailed guide: [docs/guides/buying-pitlab.md](./guides/buying-pitlab.md)

### What's the total supply?

1,000,000,000 (1 billion) $PITLAB tokens. Fixed forever - no minting.

### Was there a presale?

No. 100% fair launch. No presale, no team tokens, no VCs. Everyone started equal.

### Are there transaction taxes?

No. Zero taxes on buys, sells, or transfers. You only pay Base network gas fees.

### What's the token contract address?

[TBD - Will be added after mainnet deployment]

Always verify on official sources:
- GitHub: https://github.com/Octavepi/pitlab-meme
- Website: [TBD]
- BaseScan: [TBD]

### Can I store PITLAB on a hardware wallet?

Yes! That's a core feature. $PITLAB is ERC-20 specifically to ensure Trezor/Ledger compatibility. Even better - build your own Pi Trezor to store it!

### Will PITLAB go up in value?

Nobody knows. This is a meme token with no intrinsic value guarantees. The market decides. **Not financial advice.**

### How is this different from other meme coins?

1. **Fair Launch** - No team tokens or presales
2. **Real Utility** - Supports actual hardware development
3. **Open Source** - Everything is MIT licensed
4. **No Taxes** - No transaction fees
5. **Community-Led** - No central authority

---

## Hardware Questions

### What is Pi Trezor?

A DIY hardware wallet you can build yourself using a Raspberry Pi. It runs Trezor firmware in an air-gapped environment for secure cryptocurrency storage.

### Can I really build my own hardware wallet?

Yes! We provide:
- Complete build guides
- Parts lists
- Software images
- Community support

Build guide: [pitlab-wallet](https://github.com/Octavepi/pitlab-wallet)

### What do I need to build one?

- Raspberry Pi (3, 4, or 5)
- MicroSD card (16GB+)
- Power supply
- Optional: touchscreen display
- USB cable for connection

Estimated cost: $35-$150 depending on model and display.

### Is it as secure as a commercial hardware wallet?

It uses the same Trezor firmware, but:
- ✅ You control the build
- ✅ Fully open source and auditable
- ✅ Air-gapped (no network)
- ⚠️ DIY means you must secure it properly
- ⚠️ SD card security depends on your setup

Use a strong PIN/passphrase!

### What cryptocurrencies does it support?

Anything Trezor supports, including:
- Bitcoin
- Ethereum and ERC-20 tokens (including PITLAB!)
- Many other chains

### Do I need to buy PITLAB to build a Pi Trezor?

No! The hardware wallet project is open source and free. The token exists to support development, but building costs nothing except parts.

---

## Technical Questions

### What blockchain is PITLAB on?

Base - an Ethereum Layer 2 network by Coinbase. It offers:
- Low transaction fees
- Fast confirmations
- Ethereum security
- Growing ecosystem

### Why Base instead of Ethereum mainnet?

Lower fees make it accessible to everyone. Base is also perfect for hardware wallet use cases.

### Why ERC-20 instead of Solana SPL?

Hardware wallet compatibility. Trezor and Ledger work seamlessly with ERC-20 tokens but have limited SPL support.

### Is the smart contract audited?

The contract is based on OpenZeppelin's audited ERC-20 implementation. It's simple and transparent by design.

Professional audit: Planned (community-funded in Phase 3)

### Can the contract be upgraded?

No. It's immutable. No admin functions exist post-deployment.

### What if there's a bug?

The contract cannot be changed after deployment. That's why we use battle-tested OpenZeppelin code and thorough testing.

---

## Community Questions

### How can I contribute?

Many ways:
- **Code:** Submit PRs to any repository
- **Documentation:** Improve guides and tutorials
- **Memes:** Create and share PITLAB content
- **Building:** Build a Pi Trezor and share your experience
- **Testing:** Report bugs and test features
- **Community:** Help answer questions and support others

See [CONTRIBUTING.md](./CONTRIBUTING.md)

### Is there a Discord/Telegram?

Coming soon! Links will be added to:
- README files
- Official website
- GitHub repos

### How do I get help?

1. Check this FAQ
2. Read the documentation
3. Search GitHub issues
4. Ask in community channels
5. Create a GitHub issue

### Can I fork the project?

Absolutely! Everything is MIT licensed. Fork away and build something amazing. Just give attribution.

### How is the project funded?

Currently:
- Volunteer development
- Personal funding from contributors

Future (Phase 3+):
- Potential community grants
- Donations from supporters
- No VC funding - ever

---

## Governance Questions

### Who controls PITLAB?

The community. There's no central authority. The deployer walked away after launch.

### How are decisions made?

Currently: Open discussion on GitHub

Future (Phase 3): Snapshot voting for token holders

### Can I propose changes?

Yes! Create a GitHub issue or discussion with your idea. In Phase 3, you'll be able to create formal proposals.

### Will there be a DAO?

Possibly, if the community wants it. Governance will evolve based on community needs.

---

## Investment Questions

### Should I buy PITLAB?

Only if:
- ✅ You can afford to lose it all
- ✅ You believe in open-source hardware
- ✅ You understand the risks
- ✅ You've done your own research
- ✅ You're here for the mission, not just profit

### Is this financial advice?

**NO.** This is an experimental meme token. Assume you will lose your entire investment.

### What are the risks?

- Total loss of investment possible
- Extreme price volatility
- No guaranteed utility
- Smart contract risks
- Regulatory uncertainty
- Market manipulation risks

### Will you list on CEX?

Not a priority. We're focused on building, not exchange listings. If it happens organically, great.

### Wen moon?

Wrong question. We're building in the PIT, not chasing moons. If you're here for a quick pump, this isn't for you.

---

## Legal Questions

### Is PITLAB a security?

We make no claims. Consult your own legal and tax advisors.

### Is it legal in my country?

Check your local laws. We can't provide legal advice.

### Do I need to pay taxes?

Probably. Consult a tax professional in your jurisdiction.

### What about regulations?

The crypto regulatory landscape is evolving. Stay informed about your local laws.

---

## Meme Questions

### Why the workout emojis? 🏋️‍♂️💪

Because building takes *work*. We're sweating in the PIT, pumping out code and hardware. The workout theme celebrates effort over hype.

### Is "sweat-secured" a real thing?

It's a metaphor for proof-of-work - not the blockchain kind, but the actual human effort to build something real.

### Can I create PITLAB memes?

Please do! Share them in the community. Best memes may get featured on the website.

### Is this all a joke?

The meme is real. The humor is intentional. The code is serious. We're building real technology while laughing at ourselves.

---

## Troubleshooting

### I can't find PITLAB on Uniswap

Make sure you:
1. Are connected to Base network (not Ethereum mainnet)
2. Have imported the correct token address
3. Have ETH on Base for gas

### My hardware wallet build isn't working

Check:
1. Build guide in pitlab-wallet repo
2. GitHub issues for similar problems
3. Community support channels
4. Logs and error messages

### Where's the website?

In development (Phase 1). Current resources:
- GitHub repos
- Documentation in pitlab-website
- README files

---

## Getting Started

### I'm new to crypto. Where do I start?

1. Learn about cryptocurrency basics
2. Understand wallet security
3. Practice with small amounts
4. Read all documentation
5. Ask questions in community

### I'm a developer. How can I help?

1. Check open issues on GitHub
2. Review the code
3. Submit pull requests
4. Improve documentation
5. Test new features

### I want to build a Pi Trezor. What's next?

1. Read the build guide: [pitlab-wallet](https://github.com/Octavepi/pitlab-wallet)
2. Get the required parts
3. Follow step-by-step instructions
4. Join community for support
5. Share your build!

---

## Still Have Questions?

- **GitHub Discussions:** Best for technical questions
- **Community Channels:** Coming soon (Discord/Telegram)
- **GitHub Issues:** For bugs and feature requests
- **Email:** [TBD - contact email]

---

**Remember:** DYOR (Do Your Own Research). Don't trust, verify. This is experimental software.

*Sweat together. Build together. The PIT never sleeps.* 🏋️‍♂️💪
