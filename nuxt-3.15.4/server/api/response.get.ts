export default defineEventHandler(event => {
    throw createError({
        statusCode: 400,
        data: {
            code: 'invalidCode'
        }
    })
})
