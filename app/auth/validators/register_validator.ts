import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const registerValidator = vine.compile(
  vine.object({
    fullName: vine.string(),
    email: vine
      .string()
      .email()
      .unique(async (db, value, _field) => {
        const result = await db.from('users').select('id').where('email', value)
        return result.length ? false : true
      }),
    password: vine.string().minLength(8),
  })
)

registerValidator.messagesProvider = new SimpleMessagesProvider({
  'required': 'This field is required',
  'string': 'The value of {{ field }} field must be a string',
  'email': 'The value is not a valid email address',
  'email.unique': 'The email address is already in use',
  'password.minLength': 'The password must be at least 8 characters long',
})
