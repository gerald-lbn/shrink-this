import Domain from '#domains/models/domain'

export class DomainRepository {
  static async registerDomain(url: string, userId: number) {
    return await Domain.create({
      url,
      userId,
    })
  }

  static async getUserDomains(userId: number) {
    return await Domain.query().where('user_id', userId)
  }
}
