function calculateEllipseArea() {
      const base = inputFieldValue('ellipse-base');
      const height = inputFieldValue('ellipse-height');

      const area = Math.PI * base * height;
      const areaValue = parseFloat(area.toFixed(2));

      appendChild('Ellipse', areaValue);
}