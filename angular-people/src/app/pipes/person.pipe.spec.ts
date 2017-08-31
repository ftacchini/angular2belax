import { PersonPipe } from './person.pipe';

describe('PersonPipe', () => {
  it('create an instance', () => {
    const pipe = new PersonPipe();
    expect(pipe).toBeTruthy();
  });
});
