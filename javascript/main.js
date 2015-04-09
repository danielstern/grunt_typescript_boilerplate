var Helper;
(function (Helper) {
    var Language = (function () {
        function Language() {
        }
        Language.Greeting = "Hello";
        return Language;
    })();
    Helper.Language = Language;
})(Helper || (Helper = {}));
/// <reference path="helper.ts" />
console.log(Helper.Language.Greeting + " world");
//# sourceMappingURL=main.js.map