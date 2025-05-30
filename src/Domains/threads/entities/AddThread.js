class AddThread {
  constructor(payload) {
    const { title, body, owner } = payload;

    if (title === undefined || body === undefined || owner === undefined) {
      throw new Error('ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
    }

    if (typeof title !== 'string' || typeof body !== 'string') {
      throw new Error('ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
    }

    this.title = title;
    this.body = body;
    this.owner = owner;
  }
}

module.exports = AddThread;