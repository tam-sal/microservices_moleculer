import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

broker.createService({
  name: 'email',
  actions: {
    async sendEmail(ctx) {
      const { recipient, subject, content } = ctx.params
      console.log("Email to: \n", recipient, "\nWith subject:\n", subject, "\nBody\n", content);
      return `Email sent to ${recipient}`
    }
  }
})

export default broker;