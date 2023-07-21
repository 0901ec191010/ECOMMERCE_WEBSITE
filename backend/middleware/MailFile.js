const nodemailer = require('nodemailer');

function MailFile(ToEmail,Subject,body){
console.log("---->>>" ,ToEmail,"subject--->",Subject,"body-->",body)
const mailTransporter = nodemailer.createTransport({
	service: 'gmail',
    port:461,
	auth: {
		user: 'aahirwar251@gmail.com',
		pass: 'sndofrznsrchfxri'
	},
    host:'smtp.gmail.com'
});

let mailDetails = {
	from: 'aahirwar251@gmail.com',
	to: `${ToEmail}`,
	subject: `${Subject}`,
	text: `${body}`,
	// html:"<h1 font color='yellow'>Hello User</h1>",
	
};

mailTransporter.sendMail(mailDetails, function(err, data) {
	if(err) {
		console.log("Error Occurs:", err);
	} else {
		console.log("Message..:" +data.response);
	}
});
} ;
module.exports = MailFile;

// sndofrznsrchfxri