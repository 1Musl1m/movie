export default defineEventHandler((event) => {
    const name = getRouterParams(event)

    return {
        message: ` Привет, ${name} `
    }
})