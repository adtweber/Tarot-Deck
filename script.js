class card {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;
    }
}

const tarotDeck = [
    new card('The Fool', 'Take on an open, willing energy and embrace all that lies ahead of you without worry.', 'thefool'),
    new card('The Magician', 'You are unique and have many gifts. You have everything you need to move forward and accomplish what you set out to do.', 'themagician'),
    new card('The High Priestess', 'Look inward for answers. Listen to your inner voice and follow your instincts.', 'thehighpriestess'),
    new card('The Empress', 'Absorb the energy of the natural world around you.', 'theempress'),
    new card('The Emperor', 'You hold the power over your own life and what happens to it.', 'theemperor'),
    new card('The Hierophant', 'Follow the rules and find a spiritual perspective on your current situation.', 'thehierophant'),
    new card('The Lovers', 'Consider all the possible consequences of your choices.', 'thelovers'),
    new card('The Chariot', 'When you combine the knowledge of your mind with that of your heart and spirit, you are an unstoppable force. An upcoming victory.', 'thechariot'),
    new card('Strength', 'You are strong enough to handle whatever you are facing and will come out the other side stronger.', 'strength'),
    new card('The Hermit','Find stillness and listen. The answers will come from within.', 'thehermit'),
    new card('Wheel of Fortune', 'Nothing is permanent and nothing is all good or all bad. Learn from the lessons life is teaching you.', 'wheeloffortune'),
    new card('Justice', 'Make sure you are acting fairly in all your interactions with others.', 'justice'),
    new card('The Hanged Man', 'Lighten your grip on what is no longer serving you. Detach from the outcome of your situation to help release yourself.', 'thehangedman'),
    new card('Death', 'All things go through cycles. In every ending lies a chance for a new beginning.', 'death'),
    new card('Temperance', 'Take things as they come and remain flexible to handle changes.', 'temperance'),
    new card('The Devil', 'You may feel stuck but you options and choices. Freedom is yours for the taking.', 'thedevil'),
    new card('The Tower', 'The weakest parts of your life must be torn down in order to build something strong and sturdy in their place.', 'thetower'),
    new card('The Star', 'The universe is working in your favor. Have faith in where you are being led.', 'thestar'),
    new card('The Moon', 'You may be allowing fears to override your faith in the future. Address your feelings to rid yourself of worry.', 'themoon'),
    new card('The Sun', 'Things are working well for you and you are moving in the right direction.', 'thesun'),
    new card('Judgement', 'The future is not set in stone. It is never too late to make a change for the better', 'judgement'),
    new card('The World', 'You are exactly where you are meant to be. You are ready for the next phase of your journey.', 'theworld'),
    new card('Ace of Swords', 'description','aceofswords'),
    new card('Two of Swords', 'description','twoofswords'),
    new card('Three of Swords', 'description','threeofswords'),
    new card('Four of Swords', 'description','fourofswords'),
    new card('Five of Swords', 'description','fiveofswords'),
    new card('Six of Swords', 'description','sixofswords'),
    new card('Seven of Swords', 'description','sevenofswords'),
    new card('Eight of Swords', 'description','eightofswords'),
    new card('Nine of Swords', 'description','nineofswords'),
    new card('Ten of Swords', 'description','tenofswords'),
    new card('Page of Swords', 'description','pageofswords'),
    new card('Knight of Swords', 'description','knightofswords'),
    new card('Queen of Swords', 'description','queenofswords'),
    new card('King of Swords', 'description','kingofswords'),
];

function randomNumber(num) {
    const randomNumber = 
    Math.floor(Math.random() * num);
    return randomNumber;
}
document.getElementById("draw").onclick 
    = function() {
        const index = randomNumber(36);
        let currentCard = tarotDeck[index];
            document.getElementById("card").innerHTML = '<img src="images/' + 
            currentCard.image + '.jpg"><h3>' + 
            currentCard.name + '</h3><p>' + 
            currentCard.description + '</p>';
    }
