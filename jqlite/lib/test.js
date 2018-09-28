class DOMNodeCollection {
  constructor(html_array) {
    this.html_array = html_array;
  }

  html(str){
    if (str){
      this.html_array.forEach(el => el.innerHTML = str);
    }
    else {
      return this.html_array[0].innerHTML; // check when def root
    }
  }

  empty() {
    this.html('');
  }

  append(arg){
    this.html_array.forEach(el => {
      let text = el.innerHTML;
      el.innerHTML = text + arg;
    });
  }

  addClass(value){
    this.html_array.forEach(el => el.className = value);
    // this.attr('ClassName', value);/// how could you pass the classname making sense
  }

  atrr(atrr, value) {
    this.html_array.forEach(el => el.attr = value);
  }

  removeClass(value) {
  this.html_array.forEach(el => el.className = null );
  }

  children(){
    let result = [];
    this.html_array.forEach(el => result.push(el.children) );
    return new DOMNodeCollection(result);
  }
}

function $l(selector) {

  if (selector instanceof HTMLElement) {
     return new DOMNodeCollection([selector]);
   } else if (selector.constructor.name === 'String') {
     let element = document.querySelectorAll(selector);
     return new DOMNodeCollection(Array.from(element));
   }
   return null;
}
