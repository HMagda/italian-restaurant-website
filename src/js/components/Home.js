import {templates, select, settings, classNames} from '../settings.js';
import utils from '../utils.js';
// import AmountWidget from './AmountWidget.js';
// import HourPicker from './HourPicker.js';
// import DatePicker from './DatePicker.js';

class Home {
  constructor(element) {
    const thisHome = this;
    thisHome.render(element);
    thisHome.initWidgets();

  }
  render(element){
    const thisHome = this;

    // const generatedHTML = templates.bookingWidget();
    // thisBooking.dom = {};
    // thisBooking.dom.wrapper = element;
    // thisBooking.dom.wrapper.innerHTML = generatedHTML;
    // thisBooking.dom.peopleAmount = element.querySelector(select.booking.peopleAmount);
    // thisBooking.dom.hoursAmount = element.querySelector(select.booking.hoursAmount);
    // thisBooking.dom.datePicker = element.querySelector(select.widgets.datePicker.wrapper);
    // thisBooking.dom.hourPicker = element.querySelector(select.widgets.hourPicker.wrapper);
    // thisBooking.dom.tables = element.querySelectorAll(select.booking.tables);
    // thisBooking.dom.tablesContainer = element.querySelector(select.booking.tablesContainer);

    // thisBooking.dom.address = element.querySelector(select.booking.address);
    // thisBooking.dom.phone = element.querySelector(select.booking.phone);
    // thisBooking.dom.starters = element.querySelectorAll(select.booking.starters);
  }

  initWidgets(){
    const thisHome = this;

    // thisBooking.peopleAmount = new AmountWidget(thisBooking.dom.peopleAmount);
    // thisBooking.hoursAmount = new AmountWidget(thisBooking.dom.hoursAmount);

    // thisBooking.hourPicker = new HourPicker(thisBooking.dom.hourPicker);
    // thisBooking.datePicker = new DatePicker(thisBooking.dom.datePicker);

    // thisBooking.dom.wrapper.addEventListener('updated', function(){
    //   thisBooking.updateDOM();
    // });

    // thisBooking.dom.tablesContainer.addEventListener('click', function(event){
    //   thisBooking.initTables(event.target);
    //   thisBooking.sendBooking();
    // });
  }
}

export default Home;