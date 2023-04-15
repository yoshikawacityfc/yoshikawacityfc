/**
 * インデックスが配列の最大値かどうか判定する
 * @param index インデックス
 * @param array 配列
 * @returns インデックスが配列の最大値かどうか
 * @example
 * const array = [1, 2, 3];
 * isMaxIndex(0, array); // false
 * isMaxIndex(2, array); // true
 **/
export const isMaxIndex = (index: number, array: any[]) => {
  return index === array.length - 1;
};

/**
 * 配列の最大値でないか判定する
 * @param index インデックス
 * @param array 配列
 * @returns 配列の最大値じゃないかどうか
 * @example
 * const array = [1, 2, 3];
 * isNotMaxIndex(0, array); // true
 * isNotMaxIndex(2, array); // false
 **/
export const isNotMaxIndex = (index: number, array: any[]) => {
  return !isMaxIndex(index, array);
};
