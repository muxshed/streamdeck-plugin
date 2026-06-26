import { action, SingletonAction, type KeyDownEvent } from '@elgato/streamdeck'
import { api } from '../muxshed'

@action({ UUID: 'com.muxshed.studio.recordtoggle' })
export class RecordToggle extends SingletonAction {
	override async onKeyDown(_ev: KeyDownEvent): Promise<void> {
		// Query current recording state, then toggle.
		const res = await api('/record/status', 'GET')
		let recording = false
		if (res?.ok) {
			const json = (await res.json().catch(() => ({}))) as { recording?: boolean }
			recording = !!json.recording
		}
		await api(recording ? '/record/stop' : '/record/start')
	}
}
