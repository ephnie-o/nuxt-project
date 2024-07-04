export default defineEventHandler(async (event) => {

    const { name } = getQuery(event)

    //handle post data
    const { age } = await readBody(event)

    const { data } = await $fetch('https://api.currencyapi.com/v3/currencies?apikey=cur_live_LWfrRachTefMMXhzii47MwlzkIRazPGBlt4a7aZk')

    return {
        message: `${name}'s first nuxt project! You are ${age} years old`,
        data
    }
})