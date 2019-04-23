const awsSMSVerify = require('../..');

/* Data */
const ENV = Object.assign({}, process.env);
const { accessKeyId, secretAccessKey, region, phone } = ENV;

/* Delegates */
awsSMSVerifier = new awsSMSVerify({
	AWSConfig: {
		accessKeyId, secretAccessKey, region,
	},
});

awsSMSVerifier.send({
	message: 'Your OTP for <Some Company> is 9837449857',
	phoneNumber: phone,
	senderID: 'AlphaNum11' // #Note: In some AWS Regions, this has to be registered with AWS.
});
