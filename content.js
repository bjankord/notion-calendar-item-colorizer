function colorize() {
  const colors = [
    '#d0fffe',
    '#fffddb',
    '#e4ffde',
    '#ffd3fd',
    '#ffe7d3'
  ];

  if (document.querySelectorAll('.vertical.horizontal .notion-selectable a')) {
    const elems = document.querySelectorAll('.vertical.horizontal .notion-selectable a');
    const elemsArray = Array.from(elems);

    let color = 0;
    let content = '';
    let oldContent;
    elemsArray.forEach(function (element, i) {
      oldContent = content;
      console.log(`oldConent ${oldContent}`);
      content = element.querySelector('span').innerText;
      console.log(`content ${content}`);

      if (oldContent === content) {
        element.style.background = colors[color];
      }

      if (oldContent !== content) {
        color = color + 1;
        if (color === colors.length) {
          color = 0;
        }

        element.style.background = colors[color];
      }
    });
  }
};

// DOM doesn't exist on page load as it's generated via JS
// Feeling lazy and I don't want to look into determining the JS generated DOM is done
// being rendered, so I'm just gonna wait 3 seconds
setTimeout(colorize, 3000);
