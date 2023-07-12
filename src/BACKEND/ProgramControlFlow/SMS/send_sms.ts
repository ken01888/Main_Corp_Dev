
import * as Twilio from 'twilio'
import * as dotenv from 'dotenv'
dotenv.config()



// Twilio Control and Access Credential 
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTHKEY;
const sms = Twilio(accountSid, authToken)

export const { MessagingResponse } = Twilio.twiml 

export function MessageResponseFromHomePage(name:string,to?:string[]| any) {
    
    to.map(async (i) => {
        await sms.messages.create({
            body: `Dear ${name.toLocaleUpperCase()}, thank you for reaching out to 🌎 Kcm Inc. We take immense pride in our partnership with you and are dedicated to delivering unparalleled service. Rest assured that one of our representatives will be in touch with you promptly to address your inquiry.`,
            from: process.env.TWILIO_PHONE,
            shortenUrls: true,
            to: i
        });
        
    });
}

export const sendReply = (body = "Testing the api", to?: any) => {
    _phonenumber.map(async (i) => {
        const new_Message = await sms.messages.create({
            body: body,
            from: process.env.TWILIO_PHONE?.toString(),
            to: i
        })
    })

}



