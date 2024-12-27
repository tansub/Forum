export const mockFetch = (url) => new Promise((resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 10) resolve(fetch(url))
    else reject(new Error('mock fetch failed'))
  }, 1000)
})