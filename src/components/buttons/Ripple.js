class Ripple {
  // класс Ripple реализует ripple эффект при клике по кнопке
  constructor(options) {
    this.options = options;
    this.buttons = options.buttons;

    Array.prototype.forEach.call(this.buttons, (btn) => {
      btn.addEventListener('click', (e) => this._clickHandler(e, btn));
    });

  }

  _createCircle() {
    const circle = document.createElement('SPAN');
    
    if (this.options.color) {
      circle.style.backgroundColor = options.color;
    } else {
      circle.style.backgroundColor = "white";
    }

    circle.style.opacity = '0.5';
    circle.style.borderRadius = '100%';
    circle.style.position = 'absolute';
    circle.style.display = 'block';
    circle.style.zIndex = '99999';

    circle.classList.add('btn-rect__ripple');

    return circle;
  }

  _clear(elem) {
    // метод удаляет все circle внутри кнопки
    while (elem.lastChild.tagName === 'SPAN') {
      elem.removeChild(elem.lastChild);
    }
  }

  _clickHandler(event, button) {
    this._clear(button);
    const ripple = this._createCircle();
    const d = Math.max(button.clientWidth, button.clientHeight);
    const btnCoords = button.getBoundingClientRect();

    button.appendChild(ripple);

    ripple.style.width = d / 2 + 'px';
    ripple.style.height = d / 2 + 'px';
    ripple.style.left = `${event.pageX - (btnCoords.left + pageXOffset) - d / 4}px`;
    ripple.style.top = `${event.pageY - (btnCoords.top + pageYOffset) - d / 4}px`;
  }

}

export default Ripple;

