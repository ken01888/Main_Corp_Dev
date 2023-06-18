
import * as Twilio from 'twilio'
const accountSid = 'AC5d8e3b38f9a2709b02588352df8d1ec3';
const authToken = '9b394725f6d0f7ad06ee302ce42fca79';
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


