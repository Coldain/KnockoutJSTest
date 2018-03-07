import * as ko from 'knockout';

class PartiesViewModel {
    public currentCount = ko.observable(0);

    public incrementCounter() {
        let prevCount = this.currentCount();
        this.currentCount(prevCount + 1);
    }
}

export default { viewModel: PartiesViewModel, template: require('./parties.html') };
