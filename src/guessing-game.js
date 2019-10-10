class GuessingGame {
    //Алгоритм двоичного поиска, см файл md
    constructor() {
        let min, max, value;
    }

    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
        this.value = Math.round((this.min+this.max)/2);
        return this.value;
    }

    lower() {
        this.max=this.value;
    }

    greater() {
        this.min=this.value;
    }
}

module.exports = GuessingGame;
