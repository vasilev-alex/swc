//// [privateNamesAndGenericClasses-2.ts]
import _class_private_field_get from "@swc/helpers/src/_class_private_field_get.mjs";
import _class_private_field_init from "@swc/helpers/src/_class_private_field_init.mjs";
import _class_private_field_set from "@swc/helpers/src/_class_private_field_set.mjs";
import _class_private_method_get from "@swc/helpers/src/_class_private_method_get.mjs";
import _class_private_method_init from "@swc/helpers/src/_class_private_method_init.mjs";
var _foo = /*#__PURE__*/ new WeakMap(), _bar = /*#__PURE__*/ new WeakSet();
class C {
    set baz(t) {
        _class_private_field_set(this, _foo, t);
    }
    get baz() {
        return _class_private_field_get(this, _foo);
    }
    constructor(t){
        _class_private_method_init(this, _bar);
        _class_private_field_init(this, _foo, {
            writable: true,
            value: void 0
        });
        _class_private_field_set(this, _foo, t);
        t = _class_private_method_get(this, _bar, bar).call(this);
    }
}
function bar() {
    return _class_private_field_get(this, _foo);
}
let a = new C(3);
let b = new C("hello");
a.baz = 5 // OK
;
const x = a.baz // OK
;
a.#foo; // Error
a = b; // Error
b = a; // Error
