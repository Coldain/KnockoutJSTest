import * as ko from 'knockout';

class ProfileViewModel {
    public currentCount = ko.observable(0);

    public incrementCounter() {
        let prevCount = this.currentCount();
        this.currentCount(prevCount + 1);
    }
}

export default { viewModel: ProfileViewModel, template: require('./profile.html') };
