import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: 'rodrigo@demo.com',
        password: 'secret',
        role: 'admin'
      },
      {
        email: 'stephanie@demo.com',
        password: 'secret',
        role: 'normal'
      }
    ])
  }
}
