import { UserDTO } from '#auth/dto/user_dto'
import Domain from '#domains/models/domain'

export class DomainDTO {
  constructor(private domain: Domain) {}

  toJSON() {
    return {
      id: this.domain.id,
      url: this.domain.url,
      verified: this.domain.verified,
      lastCheck: this.domain.lastCheck,
      createdAt: this.domain.createdAt,
      updatedAt: this.domain.updatedAt,
      user: new UserDTO(this.domain.user),
      userId: this.domain.userId,
    }
  }
}
