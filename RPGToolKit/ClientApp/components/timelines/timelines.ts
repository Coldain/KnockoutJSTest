import * as ko from 'knockout';

class TimelinesViewModel {
    public currentCount = ko.observable(0);

    public incrementCounter() {
        let prevCount = this.currentCount();
        this.currentCount(prevCount + 1);
    }
}

export default { viewModel: TimelinesViewModel, template: require('./timelines.html') };
