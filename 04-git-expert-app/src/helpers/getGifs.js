export const getGifs = async (category) => {
  const apiKey = "wjd5ibnR6qaOJ03QjYF33xiFcb9eVD62"
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`
  const resp = await fetch(url)
  const { data } = await resp.json()
  console.log(data)
  return data
//  return [{"id":"1", "title":"Holaaaaaaaaa"},{"id":"2", "title":"Holas"}] //data
}