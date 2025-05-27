const AddThreadUseCase = require('../AddThreadUseCase');
const ThreadRepository = require('../../../Domains/threads/ThreadRepository');

describe('AddThreadUseCase', () => {
  it('should orchestrate the add thread action correctly', async () => {
    // Arrange
    const useCasePayload = {
      title: 'sebuah thread',
      body: 'isi dari sebuah thread',
    };
    const owner = 'user-123';
    const expectedAddedThread = {
      id: 'thread-123',
      title: useCasePayload.title,
      owner,
    };

    // Mocking
    const mockThreadRepository = new ThreadRepository();
    mockThreadRepository.addThread = jest.fn()
      .mockImplementation(() => Promise.resolve(expectedAddedThread));

    // Create use case instance
    const addThreadUseCase = new AddThreadUseCase({
      threadRepository: mockThreadRepository,
    });

    // Act
    const addedThread = await addThreadUseCase.execute(useCasePayload, owner);

    // Assert
    expect(addedThread).toStrictEqual(expectedAddedThread);
    expect(mockThreadRepository.addThread).toBeCalledWith(expect.objectContaining({
      title: useCasePayload.title,
      body: useCasePayload.body,
      owner,
    }));
  });
});