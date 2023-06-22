
import * as Twilio from 'twilio'
import * as dotenv from 'dotenv'
dotenv.config()

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTHKEY;
const sms = Twilio(accountSid, authToken)
const _phonenumber = ['4047400093']


export const { MessagingResponse } = Twilio.twiml


export const sendMessage = (body = "😀 Hello Guys, I know we've been trying to solve our text based marketing solutions, so I'd like to recommend using the program I'm creating for us. Of course their will have to be some testing I'd love to move on it!"
, ) => {
_phonenumber.map(async (i)=>{
    const new_Message = await sms.messages.create({
        body:body,
        from: process.env.TWILIO_PHONE?.toString(),
        shortenUrls: true,
        mediaUrl: ['https://images.getbento.com/accounts/aa1874b477180c81cde25c4072452778/media/0OWuQwjxQK67WRDLD20V_Veggie-1.jpg?w=1200&fit=max&auto=compress,format'],
        to: i
    })
})
 

}

export const sendReply = (body = "Testing the api",to?:any ) => {
    _phonenumber.map(async (i)=>{
        const new_Message = await sms.messages.create({
            body:body,
            from: process.env.TWILIO_PHONE?.toString(),
            to: i
        })
    })
     
    
    }
    



