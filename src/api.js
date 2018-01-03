export default {
    async getAllItems() {
        return await (await fetch('https://uinames.com/api/?amount=50')).json();
    }
}