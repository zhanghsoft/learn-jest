import axios from 'axios';
import Users from './user';
import { mocked } from 'ts-jest/utils';

jest.mock('axios');

test('should fetch users', () => {
  const users = [{ name: 'Bob' }];
  const resp = { data: users };
  // axios.get.mockResolvedValue(resp);
  // jest.spyOn(axios, 'get').mockResolvedValue(resp);
  const mockedGet = mocked(axios.get);
  mockedGet.mockResolvedValue(resp);

  return Users.all().then((data) => expect(data).toEqual(users));
});
