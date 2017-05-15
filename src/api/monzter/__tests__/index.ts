jest.mock('../api');
import { Monzter } from '../index';

describe('GetMonzoLoginUrl()', () => {
  it('should return a url', async () => {
    const loginUrl = await Monzter.GetMonzoLoginUrl('somekey');
    return expect(loginUrl).toEqual('http://someurl');
  });
});