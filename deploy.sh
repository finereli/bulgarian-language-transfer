#!/usr/bin/env bash
set -euo pipefail

npm run build
npx wrangler deploy --domain macedonian.finereli.com
