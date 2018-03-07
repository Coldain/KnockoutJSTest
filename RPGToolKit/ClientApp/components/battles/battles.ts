import * as ko from 'knockout';

class BattlesViewModel {
    public currentCount = ko.observable(0);

    public incrementCounter() {
        let prevCount = this.currentCount();
        this.currentCount(prevCount + 1);
    }
}

export default { viewModel: BattlesViewModel, template: require('./battles.html') };
