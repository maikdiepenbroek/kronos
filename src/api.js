const uuidv4 = require('uuid/v4');
export default {
  async getAllItems() {
    return await (await fetch("https://uinames.com/api/?amount=50")).json();
  }
};
