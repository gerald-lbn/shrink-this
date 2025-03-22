import User from '#auth/models/user'

export class UserDTO {
  constructor(private user: User) {}

  toJSON() {
    return {
      id: this.user.id,
      fullName: this.user.fullName,
      email: this.user.email,
      createdAt: this.user.createdAt,
      updatedAt: this.user.updatedAt,
    }
  }
}
