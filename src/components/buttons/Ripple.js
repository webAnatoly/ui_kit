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
      circle.style.backgroundColor = "pink";
    }

    if (this.options.size) {
      circle.style.width = options.size;
      circle.style.height = options.size;
    } else {
      circle.style.width = '5rem';
      circle.style.height = '5rem';
    }

    circle.style.opacity = '0.5';
    circle.style.borderRadius = '100%';
    circle.style.position = 'absolute';
    circle.style.display = 'block';
    circle.style.top = '0px';
    circle.style.left = '0px';
    circle.style.zIndex = '99999';

    return circle;
  }

  _clear() {
    // метод удаляет все circle внутри кнопки
  }

  _clickHandler(event, button) {
    
    const ripple = this._createCircle();
    button.appendChild(ripple);
    console.log("click", event);
  }

  _setCirclePosition(x, y) {
    this.circle.style.left = `${x}px`;
    this.circle.style.top = `${y}px`;
  }

  _getCursorPosition() {
    // получает позицию курсора внутри кнопки
    console.log('getCursorPosition');
  }
}

export default Ripple;

