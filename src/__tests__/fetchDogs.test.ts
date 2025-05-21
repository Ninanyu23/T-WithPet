// src/__tests__/fetchDogs.test.ts
import {fetchDogs} from '../service/api/dogs';

describe('fetchDogs (axios)', () => {
  it('should return dog list from mock API', async () => {
    const data = await fetchDogs();
    expect(data).toHaveLength(2);
    expect(data[0].name).toBe('해피');
    expect(data[1].breed).toBe('진도 믹스');
  });
});
