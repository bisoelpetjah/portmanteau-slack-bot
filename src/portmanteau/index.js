export const generateLetterTrios = word => {
    const trios = []
    const letters = word.split('')

    letters.forEach((letter, index) => {
        if (index < letters.length - 2) trios.push(`${letter}${letters[index + 1]}${letters[index + 2]}`)
    })

    return trios
}

export const generatePortmanteauByTrios = (word1, word2) => {
    const word1Trios = generateLetterTrios(word1)
    const word2Trios = generateLetterTrios(word2)

    if (word1Trios.length < 3 || word2Trios.length < 3) return null

    let word1SharedTrioIndex, word2SharedTrioIndex

    let i = 0
    while (!word1SharedTrioIndex && i < word1Trios.length) {
        let j = 0
        while (!word2SharedTrioIndex && j < word2Trios.length) {
            if (word1Trios[i] === word2Trios[j]) {
                word1SharedTrioIndex = i
                word2SharedTrioIndex = j
            }
            j++
        }
        i++
    }

    if (!word1SharedTrioIndex) return null

    return `${word1.substring(0, word1SharedTrioIndex)}${word2.substring(word2SharedTrioIndex)}`
}

export const hasVowel = word => /[aeiou]/g.test(word)

const vowels = ['a', 'e', 'i', 'o', 'u']

export const getUsableVowelPositionsByCommonVowel = (word1, word2) => {
    const vowelPositions = []

    let i = 0
    while (i < word1.length) {
        let j = 0
        while (j < word2.length) {
            if (vowels.includes(word1[i]) && word1[i] === word2[j]) vowelPositions.push([i, j])
            j++
        }
        i++
    }

    if (!vowelPositions.length) return null

    let commonVowelPositions = null

    const margin = 2
    let k = 0
    while (!commonVowelPositions && k < vowelPositions.length) {
        const vowelPositionPair = vowelPositions[k]
        if (vowelPositionPair[0] >= margin && vowelPositionPair[1] < (word2.length - margin)) commonVowelPositions = vowelPositionPair
        k++
    }

    return commonVowelPositions
}

export const getUsableVowelPositions = (word1, word2) => {
    let word1LastVowel, word2FirstVowel = -1

    let i = 0
    while (i < word1.length) {
        if (vowels.includes(word1[i])) word1LastVowel = i
        i++
    }

    let j = 0
    while (word2FirstVowel === -1 && j < word2.length) {
        if (vowels.includes(word2[j])) word2FirstVowel = j
        j++
    }

    return [word1LastVowel, word2FirstVowel]
}

export const generatePortmanteau = (word1, word2) => {
    if (word1.length < 5 || word2.length < 5) return null

    const portmanteauByTrios = generatePortmanteauByTrios(word1, word2)

    if (portmanteauByTrios) return portmanteauByTrios

    if (!hasVowel(word1) || !hasVowel(word2)) return null

    const commonVowelPositionsToUse = getUsableVowelPositionsByCommonVowel(word1, word2) || getUsableVowelPositions(word1, word2)

    const portmanteau = commonVowelPositionsToUse && `${word1.substring(0, commonVowelPositionsToUse[0])}${word2.substring(commonVowelPositionsToUse[1])}`

    if (portmanteau.length < word1.length || portmanteau.length < word2.length) return null

    return portmanteau
}

export default generatePortmanteau
