export default defineEventHandler((event) => {
    const name = getRouterParams(event, 'name')

    return {
        message:`Привет, ${name}`
    }
})