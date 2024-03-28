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
    new card('Ace of Swords', 'You are about to reach your objective. Be steady and concentrate on making your impact.','aceofswords'),
    new card('Two of Swords', 'Conflicting ideas or visions which must be reconciled by communication in order to arrive in a harmonious place or to complete strategic negotiations.','twoofswords'),
    new card('Three of Swords', 'Let go of relationships that either cannot live up to their promise or have outlived the pleasure and support you once found in them.','threeofswords'),
    new card('Four of Swords', 'Take some time out, surrendering worldly concerns and retreating to a sheltered place of serenity away from the hustle and bustle.','fourofswords'),
    new card('Five of Swords', 'Regroup and rethink the game plan, discover your blind spots and weak links, and take corrective measures before getting back into the field for another round.','fiveofswords'),
    new card('Six of Swords', 'Others will be grateful that you responded quickly to the need for immediate action.','sixofswords'),
    new card('Seven of Swords', 'Discipline yourself to stay focused on the desired outcome and you will make your way past all competing circumstances.','sevenofswords'),
    new card('Eight of Swords', 'Rise to the occasion with confidence in your talent and ability.','eightofswords'),
    new card('Nine of Swords', 'Honestly admit to yourself that you have sacrificed time and energy on a situation that simply does not work.','nineofswords'),
    new card('Ten of Swords', 'Protect yourself while the storm rages and focus on rebuilding after it passes.','tenofswords'),
    new card('Page of Swords', 'Circumstances call for anonymous action even if you would prefer to receive credit.','pageofswords'),
    new card('Knight of Swords', 'Refine your communication and negotiation skills so you are at peak effectiveness.','knightofswords'),
    new card('Queen of Swords', 'Make your own decisions. Exercise as much independence as you know you can handle.','queenofswords'),
    new card('King of Swords', 'Listen to the inner wisdom offered by the wise elder that dwells inside of you.','kingofswords'),
    new card('Ace of Wands', 'Be ready to act on imminent opportunity.', 'aceofwands'),
    new card('Two of Wands', 'Be patient and observant as you go through the decision making process.', 'twoofwands'),
    new card('Three of Wands', 'Go with your intuition. This is the time to make your move.', 'threeofwands'),
    new card('Four of Wands', 'Exchanging ideas and proposals for addressing a universal need ensures approval and support.', 'fourofwands'),
    new card('Five of Wands', 'Identify your passions and build your mission around them.', 'fiveofwands'),
    new card('Six of Wands', 'Fearlessly act on your convictions and others will be inspired to support your ideals.', 'sixofwands'),
    new card('Seven of Wands', 'Rouse your ambition and the competitive aspects of your nature to push beyond limits. Launch yourself.', 'sevenofwands'),
    new card('Eight of Wands', 'Recent successes provide confidence to accomplish more.', 'eightofwands'),
    new card('Nine of Wands', 'There is an important place for rest and recuperation in any endeavor.', 'ninefwands'),
    new card('Ten of Wands', 'Rediscover the idealism and optimism of your youth to reinvigorate your vision.', 'tenofwands'),
    new card('Page of Wands', 'Quietly gather information that will help you direct a situation to unity.', 'pageofwands'),
    new card('Knight of Wands', 'Focused action must be taken; appropriate resources are available to draw upon, and the time is ripe.', 'knightofwands'),
    new card('Queen of Wands', 'Realize you are not in the leadership role right now. Concentrate on a more supportive role that promotes the overall objectives.', 'queenofwands'),
    new card('King of Wands', 'The possibility of success is open to you. There are no substantial obstacles.', 'kingofwands'),
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
