
import * as Twilio from 'twilio'
const accountSid = '';
const authToken = '';
const sms = Twilio(accountSid, authToken)
export const {MessagingResponse} = Twilio.twiml


export const sendMessage = async (body?: string, from?: string, to?: string) => {
    const _phonenumber = ['404-740-0093']

    _phonenumber.map((i) => {

        sms.messages
            .create({
                body: 'Ken testing sms messaging',
                from: '+18886195725',
                to: i
            }
            )
    })
}


