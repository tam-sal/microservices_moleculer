import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();
const users = [];
const generateId = () => Math.floor(Math.random() * 1000) + 1;


broker.createService({
  name: 'user',
  actions: {
    async createUser(ctx) {
      const { username, email } = ctx.params
      const newUser = {
        id: generateId(),
        username,
        email
      };
      users.push(newUser);
      return newUser;
    },
    async getUsers() {
      return [...users]
    }
  }
})

export default broker;