
import * as Twilio from 'twilio'
import * as dotenv from 'dotenv'
import * as dayjs from 'dayjs'
dotenv.config()


// Twilio Control and Access Credential 
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTHKEY;
const sms = Twilio(accountSid, authToken)

export const { MessagingResponse } = Twilio.twiml 

export function MessageResponseFromHomePage(name:string,phone?:string[]| any,email?:any) {
    
  
        sms.messages.create({
            body: `From Kcm Inc\n\nDear ${name.toLocaleUpperCase()}, Thank you for contacting Kcm Inc. Rest assured that our support team will promptly respond to your inquire.`,
            from: process.env.TWILIO_PHONE,
            messagingServiceSid: process.env.TWILIO_MESSAGE_SERVICE,
            shortenUrls: true,
            to: phone,
    
        
    });

    sms.messages.create({
        body: `Support\n\n${name.toLocaleUpperCase()}, has contacted support at:\n\tphone: ${phone} \n\temail: ${email} \n${dayjs().format('dddd, MMMM D, YYYY h:mm A')} `,
        from: process.env.TWILIO_PHONE,
        messagingServiceSid: process.env.TWILIO_MESSAGE_SERVICE,
        shortenUrls: true,
        to: '4047400093'

    
});
}

export function SignUpMessage(name?:any,phone?:string[]| any,email?:any) {
    
  
    sms.messages.create({
        body: `From Kcm Inc\n\nGreat news! Your business service account has been successfully created. To get started, simply visit our homepage at https://www.kcminc.io and log in. `,
        from: process.env.TWILIO_PHONE,
        messagingServiceSid: process.env.TWILIO_MESSAGE_SERVICE,
        shortenUrls: true,
        to: phone
});

sms.messages.create({
    body: `Registration\n\n${name.toLocaleUpperCase()}, has registered for an account on ${dayjs().format('dddd, MMMM D, YYYY h A')} at\n\temail: ${email}`,
    from: process.env.TWILIO_PHONE,
    messagingServiceSid: process.env.TWILIO_MESSAGE_SERVICE,
    shortenUrls: true,
    to: '4047400093'
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






