import {select, templates} from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initWidgets();
  }

  render(element) {
    const thisHome = this;
    const generatedHTML = templates.homeWidget();

    thisHome.dom = {};
    thisHome.dom.wrapper = element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }

  initWidgets() {
    const element = document.querySelector(select.widgets.carousel);
    // eslint-disable-next-line no-undef
    new Flickity(element, {
      autoPlay: 2500,
      prevNextButtons: false,
      imagesLoaded: true,
    });
  }
}

export default Home;
