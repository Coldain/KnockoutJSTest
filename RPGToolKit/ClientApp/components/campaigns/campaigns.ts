import * as ko from 'knockout';

class CampaignsViewModel {
    public currentCount = ko.observable(0);

    public incrementCounter() {
        let prevCount = this.currentCount();
        this.currentCount(prevCount + 1);
    }
}

export default { viewModel: CampaignsViewModel, template: require('./campaigns.html') };
