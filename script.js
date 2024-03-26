class tarotDeck {
    constructor() {
        this.deck = []
        this.hand = []
    }

    init() {
        const suits = ["cups", "pentacles", "wands", "swords"]
        const minorArcana = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "page", "knight", "queen", "king"]
        const majorArcana = ["the fool", "the magician", "the high priestess", "the empress", "the emperor", "the hierophant", "the lovers", "the chariot", "strength", "the hermit", "wheel of fortune", "justice", "the hanged man", "death", "temperance", "the devil", "the tower", "the star", "the moon", "the sun", "judgement", "the world"]
        suits.forEach(suit => {
            minorArcana.forEach(minorArcana => {
                const card = {
                    suit: suit,
                    value: minorArcana,
                }
                this.deck.push(card)
            })
        })
    }
}

const myTarotDeck = new tarotDeck()
myTarotDeck.init()

console.log(myTarotDeck.deck)






// const suits = ["cups", "pentacles", "wands", "swords"]
// const minorArcana = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "page", "knight", "queen", "king"]
// const majorArcana = ["the fool", "the magician", "the high priestess", "the empress", "the emperor", "the hierophant", "the lovers", "the chariot", "strength", "the hermit", "wheel of fortune", "justice", "the hanged man", "death", "temperance", "the devil", "the tower", "the star", "the moon", "the sun", "judgement", "the world"]

// function tarotDeck() {
//     let deck = new Array();
//     for (let i = 0; i < suits.length; i++)
//         {
//         for (let x = 0; x < minorArcana.length; x++)
//             {
//             for (let y = 0; y < majorArcana.length; y++)
//                 {
//                 let card = {minorArcana: minorArcana[x], suit: suits[i]};
//                 deck.push(card);
//                 }
//             }
//         }        
//     return deck
// }
