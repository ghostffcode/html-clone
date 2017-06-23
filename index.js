function _clone (selector) {
  this._selector = selector;
  return this;
}

_clone.prototype._select = function (el) {
  const res = document.querySelector(el);
  if (!!!res) {
    throw new Error('Cannot find html tag '+ el);
  } else {
    return res;
  }
};

_clone.prototype.in = function () {
  this._inner = true;
  return this;
};

_clone.prototype.to = function (tag, append) {
  append = append || false;
  var el = this._select(this._selector);
  el = (this._inner) ? el.content.cloneNode(true) : el.cloneNode(true);
  tag = this._select(tag);
  if (append) {
    tag.appendChild(el)
  } else {
    tag.innerHTML = '';
    tag.appendChild(el);
  }
};

if (typeof exports !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = function (el) { return new _clone(el) };
} else {
  window.clone = function (el) { return new _clone(el) };
}
