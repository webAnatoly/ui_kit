class btnRectHover {
  constructor(options) {
    this.btn = options.button;

    this.circle = document.createElement('SPAN');
    
    if (options.color) {
      this.circle.style.backgroundColor = options.color;
    } else {
      this.circle.style.backgroundColor = "white";
    }

    if (options.size) {
      this.circle.style.width = options.size;
      this.circle.style.height = options.size;
    } else {
      this.circle.style.width = '5rem';
      this.circle.style.height = '5rem';
    }

    this.circle.style.opacity = '0.5';
    this.circle.style.borderRadius = '100%';
    this.circle.style.position = 'absolute';

    this.btn.appendChild(this.circle);
    this.btn.addEventListener('mouseenter', this._mouseEnterHandler);
  }

  hideCircle() {
    this.circle.classList.add('hide');
  }

  showCircle() {
    this.circle.classList.remove('hide');
  }

  _mouseEnterHandler() {
    console.log("mouseenter")
  }

  _setCirclePosition(x, y) {
    this.circle.style.left = `${x}px`
    this.circle.style.top = `${y}px`
  }

  _getCursorPosition() {
    // получает позицию курсора внутри кнопки
    console.log('getCursorPosition');
  }
}

export default btnRectHover;