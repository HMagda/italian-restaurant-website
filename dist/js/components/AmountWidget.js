import {settings, select} from './settings.js';


class AmountWidget {

  constructor(element){
    const thisWidget = this;
    thisWidget.getElements(element);
    thisWidget.setValue(thisWidget.input.value || settings.amountWidget.defaultValue);
    thisWidget.initActions();
  }

  getElements(element) {
    const thisWidget = this;

    thisWidget.element = element;
    thisWidget.input = thisWidget.element.querySelector(select.widgets.amount.input);
    thisWidget.linkDecrease = thisWidget.element.querySelector(select.widgets.amount.linkDecrease);
    thisWidget.linkIncrease = thisWidget.element.querySelector(select.widgets.amount.linkIncrease);
  }

  setValue(value) {
    const thisWidget = this;
    const newValue = parseInt(value);

    if ((thisWidget.value !== newValue) && !isNaN(newValue) && (settings.amountWidget.defaultMin <= newValue) && (newValue <= settings.amountWidget.defaultMax)) {
      thisWidget.value = newValue;
      this.announce();
    }
     
    thisWidget.input.value = thisWidget.value;
  }

  announce() {
    const thisWidget = this;

    const event = new CustomEvent('updated', {
      bubbles: true
    });

    thisWidget.element.dispatchEvent(event);
  }

  initActions() {
    const thisWidget = this;
    thisWidget.input.addEventListener('change', () => this.setValue(this.input.value));
     
    thisWidget.linkDecrease.addEventListener('click', (event) => {
      event.preventDefault();
      this.setValue(this.value - 1);
    });

    thisWidget.linkIncrease.addEventListener('click', (event) => {
      event.preventDefault();
      this.setValue(this.value + 1);
    });
  }
}

export default AmountWidget;