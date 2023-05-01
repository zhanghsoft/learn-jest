import sleep from 'utils/sleep';

describe('sleep', () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  it('可以睡眠 1000ms', async () => {
    const callback = jest.fn();
    const act = async () => {
      await sleep(1000);
      callback();
    };

    const promise = act();

    expect(callback).not.toHaveBeenCalled();

    jest.runAllTimers();

    await promise; // 注意 这里取消await 是不正确的

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
