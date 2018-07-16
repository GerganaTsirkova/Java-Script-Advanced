function sorted() {
    return {
        list: [],
        size: 0,
        add: function (element) {
            this.list.push(element);
            this.list.sort((a, b) => (a - b));
            this.size++;
        },
        remove: function (index) {
            if ((index >= 0) && (index < this.list.length)) {
                this.list.splice(index, 1);
                this.size--;
            }
        },
        get: function (index) {
            if ((index >= 0) && (index < this.list.length)) {
                return this.list[index];
            }
        }
    }
}

let sortedList = sorted();
console.log(sortedList.size);
sortedList.add(5);
sortedList.add(-1);
sortedList.add(-2);
sortedList.add(-3);
console.log(sortedList.size);
console.log(sortedList.list);
