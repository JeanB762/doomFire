const firePixelsArray = [];
const fireWidth = 2;
const fireHeight = 3;

function start() {
  createFireDataStructure();
  renderFire();
}

function createFireDataStructure() {
  const numberOfPixels = fireHeight * fireWidth;

  for (let i = 0; i < numberOfPixels; i += 1) {
    firePixelsArray[i] = 0;
  }
}

function calculateFirePropagation() {

}

function renderFire() {
  let html = '<table cellpadding=0 cellspacing=0>';

  for (let row = 0; row < fireHeight; row += 1) {
    html += '<tr>';

    for (let column = 0; column < fireWidth; column += 1) {
      const pixelIndex = column + (fireWidth * row);
      html += '<td>';

      html += pixelIndex;

      html += '</td>';
    }

    html += '</tr>';
  }

  html += '</table>';
  document.querySelector('#fireCanvas').innerHTML = html;
}


start();
