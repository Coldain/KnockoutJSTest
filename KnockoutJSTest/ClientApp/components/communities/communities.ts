import * as ko from 'knockout';

class CommunitiesViewModel {
    public currentCount = ko.observable(0);

    public incrementCounter() {
        let prevCount = this.currentCount();
        this.currentCount(prevCount + 1);
    }
}

export default { viewModel: CommunitiesViewModel, template: require('./communities.html') };
