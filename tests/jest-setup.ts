/**
 * setupFiles 是在引入测试环境之后执行的代码
 * setupFilesAfterEnv 是在安装测试框架之后执行的代码
 */
import '@testing-library/jest-dom';
import 'jest-location-mock';
import mockConsole from 'jest-mock-console';
import server from './mockServer/server';
mockConsole();

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
