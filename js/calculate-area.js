function calculateArea(p1, p2, p3) {

      // const baseInputField = document.getElementById(p1);
      // const baseInputFieldValue = parseFloat(baseInputField.value);

      // const heightInputField = document.getElementById(p2);
      // const heightInputFieldValue = parseFloat(heightInputField.value);

      // const area = 0.5 * baseInputFieldValue * heightInputFieldValue;
      const area = 0.5 * inputFieldValue(p1) * inputFieldValue(p2);

      // const orderList = document.getElementById('order-list');
      // const li = document.createElement('li');
      // li.innerHTML = `${p3} ${area}cm<sup>2</sup>`;
      // li.classList.add('list-decimal', 'text-xl', 'font-semibold')

      // orderList.appendChild(li);

      appendChild(p3, area);
}