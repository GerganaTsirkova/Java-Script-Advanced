function extendClass(whateverClass) {
    whateverClass.prototype.species = 'Human';
    whateverClass.prototype.toSpeciesString = function () {
        return `I am a ${this.species}. `+`${this.toString()}`;
    }
}