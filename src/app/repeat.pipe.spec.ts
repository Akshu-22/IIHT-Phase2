import { RepeatPipe } from './repeat.pipe';

describe('RepeatPipe', () => {
  it('create an instance', () => {
    const pipe = new RepeatPipe();
    expect(pipe).toBeTruthy();
  });
  it('should repeat 3 times', () => {
    const pipe = new RepeatPipe();
    const data=pipe.transform('wel',3);
    expect(data).toEqual('welwelwel')
  })
});
