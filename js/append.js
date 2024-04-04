function appendChild(p1, p2) {

      const orderList = document.getElementById('order-list');
      const li = document.createElement('li');
      li.innerHTML = `${p1} ${p2}cm<sup>2</sup>`;
      li.classList.add('list-decimal', 'text-xl', 'font-semibold','mb-4')

      orderList.appendChild(li);
}