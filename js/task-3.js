function getElementWidth(content, padding, border) {
  let widthContent = Number.parseFloat(content);
  let widthpadding = Number.parseFloat(padding);
  let widthborder = Number.parseFloat(border);
  const borderWidth = widthContent + (widthpadding + widthborder) * 2;
  return borderWidth;
}

console.log(getElementWidth('50px', '8px', '4px'));
console.log(getElementWidth('60px', '12px', '8.5px'));
console.log(getElementWidth('200px', '0px', '0px'));
