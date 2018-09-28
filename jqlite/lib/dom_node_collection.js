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
    // this.html_array.forEach(el => el.className += ` ${value}`);
    this.attr('className', value);/// how could you pass the classname making sense
  }

  atrr(atrr, value) {
    this.html_array.forEach(el => el[attr] = value);
  }

  removeClass(value) {
    //gotta find this first (missing code)
  this.html_array.forEach(el => el.className = null );
  }

  children(){
    let result = [];
    this.html_array.forEach(el => result.push(el.children) );
    return new DOMNodeCollection(result);
  }

  parent(){
    let result = [];
    this.html_array.forEach(el => result.push(el.parentElement) );
    return new DOMNodeCollection(result);
  }

  find(arg) {
    this.children().html_array.filter((el) => el.prototype === arg.prototype);
  }

  remove() {
    // this.empty();
    // this.html_array
  }
}


module.exports = DOMNodeCollection;
