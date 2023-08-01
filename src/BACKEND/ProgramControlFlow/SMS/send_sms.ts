
import * as Twilio from 'twilio'
import * as dotenv from 'dotenv'
import * as dayjs from 'dayjs'
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


// export function InventoryResponceMessage(reference_number:any,to?:string[]| any) {
    
//     to.map(async (i) => {
//         await sms.messages.create({
//             body: `Hello,This is a message from KCM Inc. We wanted to inform you that an inventory recording from ${dayjs().format('dddd, MMMM D, YYYY h:mm A')} has been submitted and its reference number is ${reference_number}. Thank you.`,
//             from: process.env.TWILIO_PHONE,
//             shortenUrls: true,
//             to: i
//         });
        
//     });
// }






