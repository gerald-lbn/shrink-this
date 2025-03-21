import User from '#auth/models/user'

export class UserRepository {
  static async createUser(fullname: string, email: string, password: string) {
    return await User.create({
      fullName: fullname,
      email,
      password,
    })
  }
}
