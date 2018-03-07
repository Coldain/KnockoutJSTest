import * as ko from 'knockout';

class CharactersViewModel {
    public currentCount = ko.observable(0);

    public incrementCounter() {
        let prevCount = this.currentCount();
        this.currentCount(prevCount + 1);
    }
}

export default { viewModel: CharactersViewModel, template: require('./characters.html') };
