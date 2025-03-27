export default defineEventHandler(() => {
    return $fetch('http://localhost:3001/api/response')
})
