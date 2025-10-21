#!/bin/bash
# Validate pitlab-website project structure and contents

set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

echo "========================================"
echo "PITLAB-WEBSITE Structure Validation"
echo "========================================"
echo

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

ERRORS=0
WARNINGS=0

# Function to report errors
error() {
    echo -e "${RED}✗ ERROR: $1${NC}"
    ERRORS=$((ERRORS + 1))
}

# Function to report warnings
warning() {
    echo -e "${YELLOW}⚠ WARNING: $1${NC}"
    WARNINGS=$((WARNINGS + 1))
}

# Function to report success
success() {
    echo -e "${GREEN}✓ $1${NC}"
}

echo "1. Checking required files..."
REQUIRED_FILES=(
    "README.md"
    "package.json"
    "next.config.js"
    "tsconfig.json"
    "tailwind.config.js"
    "postcss.config.js"
)

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        success "Found $file"
    else
        error "Missing required file: $file"
    fi
done
echo

echo "2. Checking directory structure..."
REQUIRED_DIRS=(
    "src"
    "src/app"
    "src/components"
    "public"
    "docs"
)

for dir in "${REQUIRED_DIRS[@]}"; do
    if [ -d "$dir" ]; then
        success "Found directory: $dir"
    else
        error "Missing directory: $dir"
    fi
done
echo

echo "3. Checking Next.js app structure..."
NEXTJS_FILES=(
    "src/app/layout.tsx"
    "src/app/page.tsx"
)

for nextfile in "${NEXTJS_FILES[@]}"; do
    if [ -f "$nextfile" ]; then
        success "Next.js file OK: $nextfile"
    else
        warning "Missing Next.js file: $nextfile"
    fi
done
echo

echo "4. Checking documentation..."
DOCS=(
    "docs/DEPLOYMENT.md"
    "docs/WHITEPAPER.md"
    "docs/TOKENOMICS.md"
    "docs/ROADMAP.md"
    "docs/FAQ.md"
    "docs/ENS_SETUP.md"
)

DOC_COUNT=0
for doc in "${DOCS[@]}"; do
    if [ -f "$doc" ]; then
        if [ -s "$doc" ]; then
            success "Documentation OK: $doc"
            DOC_COUNT=$((DOC_COUNT + 1))
        else
            warning "Documentation is empty: $doc"
        fi
    else
        warning "Missing documentation: $doc"
    fi
done

if [ $DOC_COUNT -ge 4 ]; then
    success "Found $DOC_COUNT documentation files"
else
    warning "Only found $DOC_COUNT documentation files"
fi
echo

echo "5. Checking public assets..."
PUBLIC_FILES=(
    "public/manifest.json"
    "public/robots.txt"
    "public/sitemap.xml"
)

for pubfile in "${PUBLIC_FILES[@]}"; do
    if [ -f "$pubfile" ]; then
        success "Public file OK: $pubfile"
    else
        warning "Missing public file: $pubfile"
    fi
done

if [ -d "public/icons" ]; then
    ICON_COUNT=$(find public/icons -type f | wc -l)
    if [ "$ICON_COUNT" -gt 0 ]; then
        success "Found $ICON_COUNT icon files"
    else
        warning "public/icons directory is empty"
    fi
else
    warning "Missing public/icons directory"
fi
echo

echo "6. Checking package.json..."
if [ -f "package.json" ]; then
    # Check for required scripts
    if grep -q '"dev":' package.json; then
        success "package.json has dev script"
    else
        error "package.json missing dev script"
    fi
    
    if grep -q '"build":' package.json; then
        success "package.json has build script"
    else
        error "package.json missing build script"
    fi
    
    if grep -q '"start":' package.json; then
        success "package.json has start script"
    else
        warning "package.json missing start script"
    fi
    
    # Check for Next.js dependency
    if grep -q '"next":' package.json; then
        success "package.json includes Next.js"
    else
        error "package.json missing Next.js dependency"
    fi
    
    # Check for React
    if grep -q '"react":' package.json; then
        success "package.json includes React"
    else
        error "package.json missing React dependency"
    fi
    
    # Check for Tailwind
    if grep -q '"tailwindcss":' package.json; then
        success "package.json includes Tailwind CSS"
    else
        warning "package.json missing Tailwind CSS"
    fi
else
    error "Missing package.json"
fi
echo

echo "7. Checking for node_modules..."
if [ -d "node_modules" ]; then
    success "node_modules directory exists"
else
    warning "node_modules not found - run 'npm install'"
fi
echo

echo "8. Checking Next.js build..."
if [ -d ".next" ]; then
    success "Next.js build directory exists"
else
    warning ".next directory missing - run 'npm run build' to test production build"
fi
echo

echo "9. Checking TypeScript configuration..."
if [ -f "tsconfig.json" ]; then
    if grep -q '"strict": true' tsconfig.json; then
        success "TypeScript strict mode enabled"
    else
        warning "TypeScript strict mode not enabled"
    fi
else
    error "Missing tsconfig.json"
fi
echo

echo "10. Checking for sensitive files in git..."
if [ -d ".git" ]; then
    # Check for .env but exclude .env.example and .env.local.example
    if git ls-files | grep -E "^\.env\.local$|^\.env$" > /dev/null; then
        error "Sensitive .env file found in git!"
    else
        success "No sensitive .env files in git"
    fi
    
    SENSITIVE_PATTERNS=(
        "*.key"
        "*.pem"
        "secrets/"
    )
    
    for pattern in "${SENSITIVE_PATTERNS[@]}"; do
        if git ls-files | grep -q "$pattern"; then
            error "Sensitive files matching '$pattern' found in git!"
        else
            success "No sensitive files matching '$pattern' in git"
        fi
    done
else
    warning "Not a git repository"
fi
echo

echo "11. Checking IPFS preparation..."
if [ -d "scripts" ]; then
    if [ -f "scripts/prepare-ipfs.js" ] || [ -f "scripts/pin-to-ipfs.js" ]; then
        success "IPFS scripts found"
    else
        warning "No IPFS deployment scripts found"
    fi
else
    warning "scripts directory missing"
fi
echo

echo "12. Checking for TODO/FIXME comments..."
TODO_COUNT=$(grep -r "TODO\|FIXME" src/ 2>/dev/null | wc -l || echo "0")
if [ "$TODO_COUNT" -gt 0 ]; then
    warning "Found $TODO_COUNT TODO/FIXME comments"
else
    success "No TODO/FIXME comments found"
fi
echo

echo "========================================"
echo "VALIDATION SUMMARY"
echo "========================================"
if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✓ ALL CHECKS PASSED${NC}"
    exit 0
elif [ $ERRORS -eq 0 ]; then
    echo -e "${YELLOW}⚠ Passed with $WARNINGS warning(s)${NC}"
    exit 0
else
    echo -e "${RED}✗ FAILED: $ERRORS error(s), $WARNINGS warning(s)${NC}"
    exit 1
fi
