import * as ko from 'knockout';

class EventsViewModel {
    public currentCount = ko.observable(0);

    public incrementCounter() {
        let prevCount = this.currentCount();
        this.currentCount(prevCount + 1);
    }
}

export default { viewModel: EventsViewModel, template: require('./events.html') };
