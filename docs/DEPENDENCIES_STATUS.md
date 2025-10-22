# PITLAB Projects - Dependencies Status

**Date**: October 21, 2025  
**Status**: ✅ All dependencies installed and verified

---

## 🐍 pitlab-eltmm (Python 3.12.3)

**Environment**: Virtual environment at `/mnt/ssd/Octavepi/.venv/`

### Core Dependencies
- ✅ **web3** (7.14.0) - Ethereum blockchain interaction
- ✅ **eth-account** (0.13.7) - Account management and signing
- ✅ **httpx** (0.28.1) - Async HTTP client
- ✅ **pydantic** (2.12.3) - Data validation
- ✅ **python-dotenv** (1.1.1) - Environment configuration
- ✅ **cryptography** (46.0.3) - Encryption utilities
- ✅ **typer** (0.20.0) - CLI framework
- ✅ **rich** (14.2.0) - Terminal formatting
- ✅ **sqlmodel** (0.0.27) - Database ORM
- ✅ **tenacity** (9.1.2) - Retry logic

### Testing Dependencies
- ✅ **pytest** (8.4.2)
- ✅ **hypothesis** (6.142.2)
- ✅ **responses** (0.25.8)

### Usage
```bash
cd /home/octave/Octavepi/pitlab-eltmm
/mnt/ssd/Octavepi/.venv/bin/python scripts/generate_burners.py --help
/mnt/ssd/Octavepi/.venv/bin/python scripts/run_simulation.py --help
/mnt/ssd/Octavepi/.venv/bin/pytest tests/
```

---

## 🔷 pitlab-meme (Node.js 18.19.1)

**Package Manager**: npm  
**Framework**: Hardhat

### Core Dependencies
- ✅ **hardhat** (2.26.3) - Ethereum development environment
- ✅ **@openzeppelin/contracts** (5.4.0) - Secure smart contract library
- ✅ **ethers** (6.15.0) - Ethereum wallet and provider library
- ✅ **typechain** (8.3.2) - TypeScript bindings for smart contracts
- ✅ **@nomicfoundation/hardhat-toolbox** (4.0.0) - Hardhat plugins bundle

### Development Dependencies
- ✅ **typescript** (implicit via ts-node)
- ✅ **chai** (4.5.0) - Testing assertions
- ✅ **dotenv** (16.6.1) - Environment configuration
- ✅ **solidity-coverage** (0.8.16) - Code coverage
- ✅ **hardhat-gas-reporter** (1.0.10) - Gas usage reporting
- ✅ **eslint** (8.57.1) - Linting
- ✅ **prettier** (3.6.2) - Code formatting

### Usage
```bash
cd /home/octave/Octavepi/pitlab-meme
npm run compile      # Compile contracts
npm run test         # Run tests
npm run deploy       # Deploy to local network
npm run deploy:testnet   # Deploy to Base Goerli
npm run deploy:mainnet   # Deploy to Base Mainnet
```

---

## 🌐 pitlab-website (Node.js 18.19.1)

**Package Manager**: npm  
**Framework**: Next.js 14

### Core Dependencies
- ✅ **next** (14.2.33) - React framework
- ✅ **react** (18.3.1) - UI library
- ✅ **react-dom** (18.3.1) - React DOM rendering
- ✅ **tailwindcss** (3.4.18) - CSS framework
- ✅ **typescript** (5.9.3) - Type safety

### Deployment Dependencies
- ✅ **@fleek-platform/cli** (2.10.1) - IPFS deployment
- ✅ **ipfs-http-client** (60.0.1) - IPFS integration
- ✅ **gray-matter** (4.0.3) - Markdown frontmatter
- ✅ **markdown-to-jsx** (7.7.16) - Markdown rendering

### Development Dependencies
- ✅ **eslint** (8.57.1)
- ✅ **eslint-config-next** (14.2.33)
- ✅ **prettier** (3.6.2)
- ✅ **autoprefixer** (10.4.21)
- ✅ **postcss** (8.5.6)

### Usage
```bash
cd /home/octave/Octavepi/pitlab-website
npm run dev          # Development server (port 3000)
npm run build        # Production build
npm run start        # Start production server
```

---

## 🔧 pitlab-wallet (Buildroot)

**Target**: Raspberry Pi 3/4/5  
**Build System**: Buildroot 2024.02.x

### System Dependencies
- ✅ Buildroot toolchain (ARM cross-compiler)
- ✅ Linux kernel sources
- ✅ Raspberry Pi firmware and bootloader
- ✅ Custom packages in `br2-external/`

### Custom Packages
- ✅ **rpi-fbcp** - LCD framebuffer driver
- ✅ **trezor-firmware** - Hardware wallet integration
- ✅ Custom overlay configurations

### Build Status
- ✅ Downloads cached in `buildroot/dl/`
- ✅ Output images in `output/images/`
- ✅ All board defconfigs validated

### Usage
```bash
cd /home/octave/Octavepi/pitlab-wallet
make pi3_defconfig      # Configure for Pi 3
make pi4_defconfig      # Configure for Pi 4  
make pi5_defconfig      # Configure for Pi 5
make                    # Build image
```

---

## 📊 Validation Status

| Project | Validation Script | Status |
|---------|------------------|--------|
| pitlab-eltmm | ✅ `scripts/validate-structure.sh` | ✅ ALL CHECKS PASSED |
| pitlab-meme | ✅ `scripts/validate-structure.sh` | ✅ ALL CHECKS PASSED |
| pitlab-website | ✅ `scripts/validate-structure.sh` | ✅ ALL CHECKS PASSED |
| pitlab-wallet | ✅ `scripts/validate-structure.sh` | ✅ ALL CHECKS PASSED |

---

## 🚀 Quick Start Commands

### Install all dependencies
```bash
# pitlab-eltmm (Python)
cd ~/Octavepi/pitlab-eltmm
/mnt/ssd/Octavepi/.venv/bin/pip install -e .

# pitlab-meme (Node.js)
cd ~/Octavepi/pitlab-meme
npm install

# pitlab-website (Node.js)
cd ~/Octavepi/pitlab-website
npm install

# pitlab-wallet (Buildroot)
cd ~/Octavepi/pitlab-wallet
# Dependencies are built during 'make'
```

### Run validation on all projects
```bash
for project in pitlab-eltmm pitlab-meme pitlab-website pitlab-wallet; do
    echo "=== Validating $project ==="
    cd ~/Octavepi/$project
    ./scripts/validate-structure.sh
done
```

---

## 📝 Notes

- **Python Version**: 3.12.3 (compatible with >=3.11 requirement)
- **Node.js Version**: 18.19.1 (Hardhat shows warning, but works fine)
- **Virtual Environment**: Shared across Octavepi workspace at `/mnt/ssd/Octavepi/.venv/`
- **Node Modules**: Locally installed per project (not shared)

**All projects are ready for development! 🎉**
