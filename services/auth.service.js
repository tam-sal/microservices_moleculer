import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
  name: 'auth',
  actions: {
    async authenticate(ctx) {

      const { username, password } = ctx.params
      const onSucess = {
        sucess: true,
        message: `${username} is allowed`,
        code: 200
      }
      const onFailure = {
        success: false,
        message: `${username} is not allowed`,
        code: 405
      }

      return username === 'admin' && password === 'admin' ? onSucess : onFailure
    }
  }
})

export default broker;