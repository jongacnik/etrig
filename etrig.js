/**
 * @param target is any DOM Element or EventTarget
 * @param type Event type (i.e. 'click')
 */
module.exports = function(target, type) {
  var doc = document;
  if (doc.createEvent) {
    var event = document.createEvent("CustomEvent");
    event.initCustomEvent(type, false, false, {});
    target.dispatchEvent(event);
  } else {
    var event = doc.createEventObject();
    target.fireEvent('on' + type, event);
  }
};