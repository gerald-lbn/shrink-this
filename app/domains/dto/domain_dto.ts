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
      userId: this.domain.userId,
    }
  }
}
