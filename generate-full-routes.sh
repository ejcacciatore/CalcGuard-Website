#!/bin/bash

APP_DIR="src/app"
LAYOUT_IMPORT="@/components/layout/MainLayout"

# Define route paths and component mappings
declare -A routes=(
  ["ai"]="ai-barriers/AIBarriersSection"
  ["analytics"]="analytics/AnalyticsSection"
  ["challenge"]="challenge/ChallengeSection"
  ["edge"]="competitive-edge/CompetitiveEdgeSection"
  ["disclaimer"]="disclaimer/DisclaimerSection"
  ["discovery"]="discovery/DiscoverySection"
  ["evidence"]="evidence/EvidenceSection"
  ["inefficiencies"]="inefficiencies/InefficienciesSection"
  ["leadership"]="leadership/LeadershipSection"
  ["platform"]="platform/PlatformSection"
  ["trinity"]="trinity/TrinitySection"
  ["what-we-do"]="what-we-do/WhatWeDoSection"
)

echo "🔧 Generating page.tsx files in $APP_DIR ..."

for path in "${!routes[@]}"; do
  componentPath="${routes[$path]}"
  componentName=$(basename "$componentPath")
  folder="$APP_DIR/$path"
  mkdir -p "$folder"

  cat <<EOF > "$folder/page.tsx"
import { Metadata } from 'next'
import $componentName from '@/components/sections/$componentPath'
import MainLayout from '$LAYOUT_IMPORT'

export const metadata: Metadata = {
  title: '$componentName | CalcGuard',
}

export default function ${componentName}Page() {
  return (
    <MainLayout>
      <$componentName />
    </MainLayout>
  )
}
EOF

  echo "✅ Created: $folder/page.tsx"
done
