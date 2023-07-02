class ArrayBufferConverter {
    #buffer;
    constructor(buffer) {
      this.#buffer = buffer;
    }
  
    toString() {
      let str = "";
      const bufferView = new Uint16Array(this.#buffer);
      bufferView.forEach((el) => {
        str += String.fromCharCode(el);
      });
      return str;
    }
  }
  
  module.exports = ArrayBufferConverter