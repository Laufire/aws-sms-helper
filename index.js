var AWS = require('aws-sdk');

/* Exports */
module.exports = function(config) {
	AWS.config.update(config.AWSConfig);

	const sns = new AWS.SNS({apiVersion: '2010-03-31'});

	this.send = async (params) => {
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

		let response = await sns.publish(payload).promise();

		return response.MessageId;
	}
};
