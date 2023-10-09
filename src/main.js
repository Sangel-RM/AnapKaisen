const api = axios.create({
    baseURL: "https://api.spotify.com.",
    Headers:{
        "Content_Type": "application/x-www-form-urlencoded",
    },
    Headers: {
        Accept: "application/json",
    }
})
async function GenerateToken () {
    const GenerateTokenKey = await api(`${APiToken}`,{
     me
    })
}