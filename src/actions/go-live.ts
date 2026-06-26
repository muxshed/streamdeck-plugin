import { action, SingletonAction, type KeyDownEvent } from '@elgato/streamdeck'
import { api } from '../muxshed'

@action({ UUID: 'com.muxshed.studio.golive' })
export class GoLive extends SingletonAction {
	override async onKeyDown(_ev: KeyDownEvent): Promise<void> {
		await api('/stream/start')
	}
}
