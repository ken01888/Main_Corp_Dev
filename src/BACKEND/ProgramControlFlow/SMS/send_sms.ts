
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
            body: `Dear ${name.toLocaleUpperCase()},Thank you for contacting Kcm Inc. Rest assured that our support team will promptly respond to your query within the next 48-72 hours. `,
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




