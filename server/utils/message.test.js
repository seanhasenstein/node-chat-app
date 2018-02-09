const expect = require('expect');

const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
	it('should generate the correct message object', () => {
		const from = 'Sean';
		const text = 'Hey there, how\'s it going?';
		const message = generateMessage(from, text);

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({ from, text });
	});
});

describe('generateLocationMessage', () => {
	it('it should generate correct location object', () => {
		const from = 'Sean';
		const latitude = 44.5013;
		const longitude = 88.0622;
		const url = 'https://www.google.com/maps?q=44.5013,88.0622';
		const message = generateLocationMessage(from, latitude, longitude);

		expect(message).toInclude({ from, url });
		expect(message.createdAt).toBeA('number');
	});
});
