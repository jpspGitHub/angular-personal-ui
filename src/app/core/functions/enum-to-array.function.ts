export function enumToArray(enumerator): any[] {
  const result: any[] = [];
  for (const n in enumerator) {
    if (typeof enumerator[n] === 'number') {
      result.push(enumerator[n]);
    }
  }
  return result;
}
