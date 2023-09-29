const BaseComponent = require('../common/base.component')


class DayEventsComponent extends BaseComponent {
    constructor(){
        super("div[class='e-card card day-events-container']")
    }

    get containerTitle(){
        return this.rootElement.$("span[class='card-text label-text']")
    }

    get todayEventsCount(){
        return this.rootElement.$("span[class='day-event-count']").getText()
    }

}

module.exports = DayEventsComponent