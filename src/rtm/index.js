import { RtmClient, RTM_EVENTS } from '@slack/client'
import removePunctuation from 'remove-punctuation'

import slackConfig from 'src/config/slack'

import generatePortmanteau from 'src/portmanteau'

const rtm = new RtmClient(slackConfig.botToken)

rtm.on(RTM_EVENTS.MESSAGE, ({ channel, text }) => {
    if (!text || ! channel || !text.length) return

    const words = text
        .split(' ')
        .filter(word => !(/:.+:/.test(word)))
        .map(removePunctuation)

    if (words.length !== 2) return

    const portmanteau = generatePortmanteau(words[0], words[1])

    if (portmanteau) rtm.sendMessage(`\`${portmanteau}\``, channel)
})

export default rtm
