const uuidv4 = require('uuid/v4');
export default {
  async getAllItems() {
    return await (await fetch("https://uinames.com/api/?amount=50")).json();
  },
  async getAllProjects() {
    return await Promise.resolve([
      {
        id: "82d3f2b9-2c97-41c2-9b54-3b30dc77c2d3",
        name: "Kronos"
      },
      {
        id: "41777ccd-4b48-481e-8c97-d723c9a51210",
        name: "Athena"
      },
      {
        id: "9d3915a5-130d-43e5-a723-5dfc256fa102",
        name: "Zeus"
      }
    ]);
  },
  async addNewProject(projectName) {
    return await Promise.resolve({
      id: uuidv4(),
      name: 'projectName'
    })
  }
};
