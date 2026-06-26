import streamDeck from '@elgato/streamdeck'

/** Connection settings, stored as Stream Deck global settings (shared by all actions). */
export type GlobalSettings = {
	host?: string
	port?: string | number
	apikey?: string
}

/** Call the Muxshed REST API using the configured connection. Returns the Response, or null on error. */
export async function api(path: string, method = 'POST', body?: unknown): Promise<Response | null> {
	const s = await streamDeck.settings.getGlobalSettings<GlobalSettings>()
	const host = (s.host || '127.0.0.1').toString().trim()
	const port = (s.port || 8080).toString().trim()
	const headers: Record<string, string> = { 'X-API-Key': s.apikey || '' }
	if (body !== undefined) headers['Content-Type'] = 'application/json'

	try {
		const res = await fetch(`http://${host}:${port}/api/v1${path}`, {
			method,
			headers,
			body: body !== undefined ? JSON.stringify(body) : undefined,
		})
		if (!res.ok) {
			streamDeck.logger.warn(`${method} ${path} -> ${res.status}`)
		}
		return res
	} catch (e) {
		streamDeck.logger.error(`Muxshed request failed: ${(e as Error).message}`)
		return null
	}
}
