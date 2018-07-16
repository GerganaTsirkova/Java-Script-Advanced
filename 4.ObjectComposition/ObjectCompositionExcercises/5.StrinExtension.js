let modifier = (function () {

    String.prototype.ensureStart = function (str) {
        let string = this.toString();
        if (!this.toString().startsWith(str)) {
            return str + string;
        }
        else {
            return string;
        }
    };
    String.prototype.ensureEnd = function (str) {
        let string = this.toString();
        if (this.toString().endsWith(str)) {
            return string;
        }
        else {
            return string +str;
        }
    };
    String.prototype.isEmpty = function () {
        let string = this.toString();
        if (string === '') {
            return true;
        }
        else {
            return false;
        }
    };
    String.prototype.truncate = function (n) {
        if (n <= 3) {
            return ".".repeat(n);
        }
        if (this.toString().length <= n) {
            return this.toString();
        } else {
            let lastIndex = this.toString().substr(0, n - 2).lastIndexOf(" ");
            if (lastIndex != -1) {
                return this.toString().substr(0, lastIndex) + "...";
            } else {
                return this.toString().substr(0, n - 3) + "...";
            }
        }
    };
    String.format = function (string, ...params) {
        for (let i = 1; i < arguments.length; i++) {
            string = string.replace('{' + (i - 1) + '}', arguments[i]);
        }

        return string;
    };

}());

