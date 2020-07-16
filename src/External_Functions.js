export const generateId = () => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    const regexID = /\*\*\*\*\w\w\w\w\d\d\d\d\w\w\w\w/
    let randomLetters = [
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
        characters.charAt(Math.floor(Math.random() * characters.length)),
    ]
    let randomNumbers = `${Math.floor((Math.random() * 9) + 1)}${Math.floor((Math.random() * 9) + 1)}${Math.floor((Math.random() * 9) + 1)}${Math.floor((Math.random() * 9) + 1)}`
    const id = `****${randomLetters[0]}${randomLetters[1]}${randomLetters[2]}${randomLetters[3]}${randomNumbers}${randomLetters[4]}${randomLetters[5]}${randomLetters[6]}${randomLetters[7]}`
    return [id, regexID]
}

export const doesKeyDictHaveArr = (dict) => {
    let keysArr = []
    let arrs = []
    let doesKeyDictHaveArr = false
    const re = /:(\[.*?\])/
    if (JSON.stringify(dict).split(re).length > 0) {
        arrs = JSON.stringify(dict).split(re).filter(string => string.includes("["))
    }

    if (arrs.length >= 1) {
        doesKeyDictHaveArr = true
    }

    Object.entries(dict).forEach(set => {
        const key = set[0]
        const value = set[1]
        arrs.forEach(arr => {
            if (JSON.stringify(value) === arr) {
                keysArr.push(key)
            }
        })
    })
    let data = [keysArr, arrs, doesKeyDictHaveArr]
    return data
}

export const capitalizeWord = (word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`