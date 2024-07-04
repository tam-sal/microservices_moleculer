import UserService from './services/user.service.js'
import EmailService from './services/email.service.js'
import AuthService from './services/auth.service.js'

const startApp = async () => {
  // Start services
  await UserService.start();
  await EmailService.start();
  await AuthService.start();

  try {
    // create a user
    const newUser = await UserService.call('user.createUser', {
      username: 'John',
      email: 'john@mail.com'
    })
    const newUser2 = await UserService.call('user.createUser', {
      username: 'Paul',
      email: 'paul@gmail.com'
    })

    const users = await UserService.call('user.getUsers');
    const emailRes = await EmailService.call('email.sendEmail', {
      recipient: newUser.email,
      subject: 'Greetings',
      content: 'Hello from main'
    })
    console.log(users);
    console.log(emailRes);

    const autheticateUser = await AuthService.call('auth.authenticate', {
      username: 'admin',
      password: 'admin'
    })

    const authenticateUser2 = await AuthService.call('auth.authenticate', {
      username: newUser2.username,
      password: 'pass'
    })

    console.log(autheticateUser, '\n', authenticateUser2);

  } catch (error) {
    console.log(error.message);
  } finally {
    await UserService.stop();
    await EmailService.stop();
    await AuthService.stop();
  }
}

startApp()