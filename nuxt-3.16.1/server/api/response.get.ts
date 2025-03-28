export default defineEventHandler(event => {
    throw createError({
      statusCode: 400,
      statusMessage: 'ID should be an integer',
    })
})
