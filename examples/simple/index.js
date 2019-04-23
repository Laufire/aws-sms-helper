const awsSMSHelper = require('../..');

/* Data */
const ENV = Object.assign({}, process.env);
const {
	accessKeyId, secretAccessKey, region,
	phone, otp
} = ENV;

/* Delegates */
smsHelper = new awsSMSHelper({
	AWSConfig: {
		accessKeyId, secretAccessKey, region,
	},
});

(async () => {

	let messageID = await smsHelper.send({
		message: `Your OTP for <Some Company> is ${otp}`,
		phoneNumber: phone,
		senderID: 'AlphaNum11' // #Note: In some AWS Regions, this has to be registered with AWS.
	});

	console.log(messageID);
})();
