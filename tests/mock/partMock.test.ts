
// 注意：这段代码看起是先 import 再 mock，而真实情况是，先 mock 了，再 import

jest.mock('./foo-bar-baz', () => {
  // 真实的 模块内容
  const originalModule = jest.requireActual('./foo-bar-baz');

  //Mock 默认导出和 foo 的内容
  return {
    __esModule: true,
    ...originalModule,
    default: jest.fn(() => 'mocked baz'),
    foo: 'mocked foo',
  };
});

import defaultExport, { bar, foo } from './foo-bar-baz';

test('should do a partial mock', () => {
  const defaultExportResult = defaultExport();
  expect(defaultExportResult).toBe('mocked baz');
  expect(defaultExport).toHaveBeenCalled();

  expect(foo).toBe('mocked foo');
  expect(bar()).toBe('bar');
});
