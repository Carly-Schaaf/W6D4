
const DOMNodeCollection = require('./dom_node_collection.js');

function $l(selector) {

  if (selector instanceof HTMLElement) {
     return new DOMNodeCollection([selector]);
   } else if (selector.constructor.name === 'String') {
     let element = document.querySelectorAll(selector);
     return new DOMNodeCollection(Array.from(element));
   }
   return null;
}

window.$l = $l
