import { action, SingletonAction, type KeyDownEvent } from '@elgato/streamdeck'
import { api } from '../muxshed'

@action({ UUID: 'com.muxshed.studio.endstream' })
export class EndStream extends SingletonAction {
	override async onKeyDown(_ev: KeyDownEvent): Promise<void> {
		await api('/stream/stop')
	}
}
