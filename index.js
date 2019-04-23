var AWS = require('aws-sdk');

/* Exports */
module.exports = function(config) {
	AWS.config.update(config.AWSConfig);

	const sns = new AWS.SNS({apiVersion: '2010-03-31'});

	this.send = function(params) {
		let payload = {
			Message: params.message,
			PhoneNumber: params.phoneNumber,
			MessageAttributes: {
				'AWS.SNS.SMS.SenderID': {
					'DataType': 'String',
					'StringValue': params.senderID || ''
				},
				'AWS.SNS.SMS.SMSType': {
					'DataType': 'String',
					'StringValue': 'Transactional'
				},
			}
		};

		let publishTextPromise = sns.publish(payload).promise();
		publishTextPromise.then((data) => {

			console.log("MessageID is " + data.MessageId);
		}).catch((err) => {

			console.error(err, err.stack);
		});
	}
};
