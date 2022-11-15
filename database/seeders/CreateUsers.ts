import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsers extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        name: 'Henrique Batista',
        email: 'henriquebatista@gmail.com',
        password: 'secret',
        role: 'admin',
      },
      {
        name: 'User Test',
        email: 'user@gmail.com',
        password: 'secret',
        role: 'normal',
      },
    ])
  }
}
