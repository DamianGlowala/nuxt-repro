export default defineEventHandler(() => {
  throw createError({
    statusCode: 400,
    statusMessage: 'ID should be an integer',
    data: {
      code: 'invalidCode'
    }
  })
});
