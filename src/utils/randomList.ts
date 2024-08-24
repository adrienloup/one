export function randomList(list: JSX.Element[]) {
  /*eslint prefer-const: "off"*/
  let i = list.length;
  while (--i > 0) {
    const index = Math.floor(Math.random() * (i + 1));
    [list[index], list[i]] = [list[i], list[index]];
  }
  return list;
}
