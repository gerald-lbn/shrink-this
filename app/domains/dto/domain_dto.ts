import Domain from '#domains/models/domain'

export class DomainDTO {
  constructor(private domain: Domain) {}

  toJSON() {
    return {
      id: this.domain.id,
      url: this.domain.url,
      verified: this.domain.verified,
      lastCheck: this.domain.lastCheck.toJSDate().toDateString(),
      createdAt: this.domain.createdAt.toJSDate().toDateString(),
      updatedAt: this.domain.updatedAt?.toJSDate().toDateString(),
      userId: this.domain.userId,
    }
  }
}
