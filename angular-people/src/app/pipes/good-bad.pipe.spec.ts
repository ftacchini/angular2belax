import { GoodBadPipe } from './good-bad.pipe';

describe('GoodBadPipe', () => {
  it('create an instance', () => {
    const pipe = new GoodBadPipe();
    expect(pipe).toBeTruthy();
  });
});
