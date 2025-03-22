import vine, { SimpleMessagesProvider } from '@vinejs/vine'

export const domainValidator = vine.compile(
  vine.object({
    url: vine
      .string()
      .url({
        require_protocol: false,
      })
      .unique(async (db, value, _field) => {
        const result = await db
          .from('domains')
          .select('url')
          .where('url', value)
        return result.length ? false : true
      }),
    userId: vine.number().exists(async (db, value, _field) => {
      const result = await db.from('users').select('id').where('id', value)
      return result.length ? true : false
    }),
  }),
)

domainValidator.messagesProvider = new SimpleMessagesProvider({
  required: 'This field is required',
  'url.unique': 'This domain is already registered',
})
