#!/bin/bash

APP_DIR="src/app"

declare -A routes=(
  ["ai"]="AIBarriersSection"
  ["analytics"]="AnalyticsSection"
  ["challenge"]="ChallengeSection"
  ["edge"]="CompetitiveEdgeSection"
  ["disclaimer"]="DisclaimerSection"
  ["discovery"]="DiscoverySection"
  ["evidence"]="EvidenceSection"
)

for route in "${!routes[@]}"; do
  COMPONENT="${routes[$route]}"
  SECTION_PATH="@/components/sections/$route/$COMPONENT"

  mkdir -p "$APP_DIR/$route"

  cat <<EOF > "$APP_DIR/$route/page.tsx"
import { Metadata } from 'next'
import $COMPONENT from '$SECTION_PATH'

export const metadata: Metadata = {
  title: '$COMPONENT',
}

export default function ${COMPONENT}Page() {
  return (
    <main>
      <$COMPONENT />
    </main>
  )
}
EOF

  echo "✅ Created: $APP_DIR/$route/page.tsx"
done
