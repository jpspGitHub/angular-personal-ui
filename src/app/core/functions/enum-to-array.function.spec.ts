import { enumToArray } from '.';
import { MenuAction } from 'src/app/website/enums';

describe('enumToArray', () => {
  it('should return an array with the enum values', () => {
    expect(enumToArray(MenuAction))
      .toEqual([
        0, 1, 2, 3, 4, 5
      ]);
  });
});
