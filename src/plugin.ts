import streamDeck, { LogLevel } from '@elgato/streamdeck'

import { GoLive } from './actions/go-live'
import { EndStream } from './actions/end-stream'
import { RecordToggle } from './actions/record-toggle'

streamDeck.logger.setLevel(LogLevel.INFO)

streamDeck.actions.registerAction(new GoLive())
streamDeck.actions.registerAction(new EndStream())
streamDeck.actions.registerAction(new RecordToggle())

streamDeck.connect()
