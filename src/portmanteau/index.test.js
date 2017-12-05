import { generateLetterTrios, generatePortmanteauByTrios, hasVowel, getUsableVowelPositionsByCommonVowel, getUsableVowelPositions, generatePortmanteau } from './'

describe('portmanteau', () => {
    const wordWithVowel = 'omen'
    const wordWithoutVowel = 'jynx'

    const word1 = 'labrador'
    const word2 = 'poodle'
    const portmanteauWord = 'labradoodle'

    describe('generateLetterTrios', () => {
        it('should generate letter trios from a word', () => {
            const word1Trios = ['lab', 'abr', 'bra', 'rad', 'ado', 'dor']

            expect(generateLetterTrios(word1)).toEqual(word1Trios)
        })
    })

    describe('generatePortmanteauByTrios', () => {
        it('should generate portmanteau by trios from two words', () => {
            const word3 = 'chameleon'
            const word4 = 'leopard'
            const portmanteauWord2 = 'chameleopard'
            const shortWord = 'as'

            expect(generatePortmanteauByTrios(word3, word4)).toBe(portmanteauWord2)
            expect(generatePortmanteauByTrios(wordWithVowel, wordWithoutVowel)).toBeNull()
            expect(generatePortmanteauByTrios(shortWord, word3)).toBeNull()
        })
    })

    describe('hasVowel', () => {
        it('should check if word contains any vowel', () => {
            expect(hasVowel(wordWithVowel)).toBe(true)
            expect(hasVowel(wordWithoutVowel)).toBe(false)
        })
    })

    describe('getUsableVowelPositionsByCommonVowel', () => {
        it('should get positions of a common vowel from two words', () => {
            const vowelPositions = [6, 1]

            expect(getUsableVowelPositionsByCommonVowel(word1, word2)).toEqual(vowelPositions)
        })
    })

    describe('getUsableVowelPositions', () => {
        it('should get positions of last vowel in the first word and first vowel in the second word', () => {
            const word5 = 'unit'
            const vowelPositions = [5, 0]

            expect(getUsableVowelPositions(word2, word5)).toEqual(vowelPositions)
        })
    })

    describe('generatePortmanteau', () => {
        it('should generate correct portmanteau', () => {
            const word6 = 'mock'
            const word7 = 'documentary'
            const word8 = 'television'
            const word9 = 'evangelist'
            const portmanteauWord4 = 'televangelist'

            expect(generatePortmanteau(word1, word2)).toBe(portmanteauWord)
            expect(generatePortmanteau(word6, word7)).toBeNull()
            expect(generatePortmanteau(word8, word9)).toBe(portmanteauWord4)
        })
    })
})
