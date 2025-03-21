import crypto from 'node:crypto'

export class HaveIBeenPwnedService {
  static async check(password: string) {
    // Hash the password using the SHA-1
    const hashedPassword = crypto
      .createHash('sha1')
      .update(password)
      .digest('hex')
      .toUpperCase()
    // Extract the first 5 characters of the hashed password
    const hashPrefix = hashedPassword.slice(0, 5)
    // Make a request to the haveibeenpwned API
    const response = await fetch(
      `https://api.pwnedpasswords.com/range/${hashPrefix}`,
    )

    // Check if the password is in the response
    const body = await response.text()
    const items = body.split('\n')
    for (const item of items) {
      const [hashSuffix] = item.split(':')
      if (hashedPassword === hashPrefix + hashSuffix) {
        return true
      }
    }

    return false
  }
}
