# Milestone Project 1: Tarot Deck


## Description

This project includes a complete shuffled tarot deck that allows a user to generate their own three card spread tarot reading. There are directions for use as well as descriptive buttons that make receiving a reading intuitive. Each card features an image, title, and description to give the user context into their reading. 

### Background

---

This tarot deck was submitted as the first major project for my Software Development Bootcamp. The assignment was to individually create a browser game showcasing our front-end knowledge using HTML, CSS, and JavaScript, and to successfully deploy it.

### Challenges & Solutions

---

Building the deck was challenging because a standard tarot deck includes 4 suits but also 22 standalone cards or the "Major Arcana." I originally tried to create the deck using a forEach loop but found adding in the Major Arcana cards to be difficult. I ended up creating class for each card and an array with each object representing a card from the deck. This was a tedious and time consuming task but in the end made the rest of the functionality a lot easier to build.

```
class card {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;
    }
}
```

Manipulating the card images, descriptions, and titles was a challenge because they were all part of the same object and not isolated from each other. To maniuplate each card object more easily, I contained each card in its own div and maintained consistent styling across each div to ensure the design would be uniform. 

```
        <div id="situation-card">
            <button id="draw-first-card">Situation</button>
        </div>
```

```
#situation-card {
    height: 600px;
    width: 600px;
    text-align: center;
    margin: auto;
    font-family: Georgia, serif;
    color: white;
}
```

Ensuring the user did not pull duplicate cards from the deck was another challenge. Using the pop method in a placeCard function ensured the card would be returned and removed from the deck so no duplicates would appear in the reading. 

```
function placeCard(id) {
    const currentCard = tarotDeck.pop()
    document.getElementById(id).innerHTML = '<h3>' +            currentCard.name +
    '</h3><p>' + currentCard.description + '</p>' +
    '<p><img src="images/' + 
    currentCard.image + '.jpg"></p>';
}
```

### Potential Roadmap

---

Although I will be taking a break from this project while I finish my Bootcamp, in the future I'd love to add the following features and functionalities.

- Additional spreads
    - Celtic cross
    - Day(s), week(s), month(s), year(s)
    - Unlimited one-by-one card pull 
- More detailed descriptions of the cards either on a new page or in a popup window
- Adding in reversed cards and their meanings
- Card flipping animation
- Tarot decks from other regions or cultures


## Contributing

This is a personal project created for learning purposes but I am open to any contributions.

### To contribute code or documentation

1. Fork this repository
2. Clone the forked repository
3. Add code or documentation
4. Commit and push
5. Wait for pull request to be reviewed and merged

### To report a bug or make suggestions

Submit an issue [here](https://github.com/adtweber/Tarot-Deck/issues) explaining the problem or improvements you'd like to see.


## License
MIT


