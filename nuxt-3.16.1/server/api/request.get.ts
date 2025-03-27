export default defineEventHandler(() => {
    return $fetch('http://localhost:3000/api/response')
})
