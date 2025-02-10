const nodemailer = require("nodemailer")

const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "utsavvadodariya2008@gmail.com",
        pass: "zvxzakanopxeplhy"
    },
});

module.exports.sendOtp = (to, otp) => {
    let mailoptions = {
        from: "utsavvadodariya2008@gmail.com",
        to: to,
        subject: "Your Password Reset OTP",
        text: `Your Otp is ${otp}`,
    }

    transport.sendMail(mailoptions, (err) => {
        err ? console.log(err) : console.log("Otp Send sucessfully");
    })
}
