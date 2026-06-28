# muxshed-streamdeck

An [Elgato Stream Deck](https://www.elgato.com/stream-deck) plugin for the self-hosted
[Muxshed](https://muxshed.com) live production studio.

## Actions

- **Go Live** — start streaming
- **End Stream** — stop streaming
- **Record** — toggle recording

## Setup

Drop a Muxshed action onto a key, open its Property Inspector, and set:

- **Host / IP** — your Muxshed instance (e.g. `127.0.0.1`)
- **Port** — default `8080`
- **API key** — created in the studio under Settings → API Keys

Connection settings are shared across all Muxshed keys (stored as global settings).

## Develop

```sh
npm install
npm run build      # bundles src/ -> com.muxshed.studio.sdPlugin/bin/plugin.js
npm run watch      # rebuild on change
npm run pack       # build a distributable .streamDeckPlugin (needs @elgato/cli)
```

For a richer control surface (scene/source switching, on-air & recording feedback,
variables and presets), see the Bitfocus Companion module.

## License

MIT — see [LICENSE](LICENSE). Muxshed itself is AGPL-3.0; this plugin is an independent
API client and is intentionally permissively licensed.
