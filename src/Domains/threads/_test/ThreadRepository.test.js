const AddThread = require('../entities/AddThread');

describe('AddThread entity', () => {
  it('should throw error when payload not contain needed property', () => {
    expect(() => new AddThread({ title: 'abc' })).toThrowError('NEW_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
  });

  it('should create Thread object correctly', () => {
    const payload = {
      title: 'sebuah thread',
      body: 'isi thread',
      owner: 'user-123',
    };
    const thread = new AddThread(payload);
    expect(thread).toEqual(payload);
  });
});