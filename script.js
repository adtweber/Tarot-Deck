class card {
    constructor(name, description, image) {
        this.name = name;
        this.description = description;
        this.image = image;
    }
}

const tarotDeck = [
    new card('The Fool', 'Let go of preconceived ideas and remain open to change.', 'thefool'),
    new card('The Magician', 'Trust your inspiration. You are smarter than you think.', 'themagician'),
    new card('The High Priestess', 'Put self-cultivation at the top of your daily priority list.', 'thehighpriestess'),
    new card('The Empress', 'Rather than being tough on yourself for not measuring up, know that your positive influence has facilitated favorable outcomes.', 'theempress'),
    new card('The Emperor', 'Draw upon the capable inner resources you possess to get the task completed.', 'theemperor'),
    new card('The Hierophant', 'Develop your expertise, and have faith that you are a master in the making.', 'thehierophant'),
    new card('The Lovers', 'Creative compromise helps you accept your commitments fully.', 'thelovers'),
    new card('The Chariot', 'Look upon the movements of change as full of promise and adventure.', 'thechariot'),
    new card('Strength', 'Clearly distinguish between your ego and your intuitive self.', 'strength'),
    new card('The Hermit','Give yourself time for contemplation. Do not allow others to stand in your way.', 'thehermit'),
    new card('Wheel of Fortune', 'Fundamental change is imminent. The positive benefits you gain during this period could last a long time.', 'wheeloffortune'),
    new card('Justice', 'You are seen as a fair-minded party whose opinion matters.', 'justice'),
    new card('The Hanged Man', 'Accept the consequences of your decisions. Go through it, get it over with, and free yourself up for new pursuits.', 'thehangedman'),
    new card('Death', 'Free yourself from a past that no longer serves you well and proceed toward the future.', 'death'),
    new card('Temperance', 'Identify and acquire the ingredients that will most help you complete your mission and leave the rest behind.', 'temperance'),
    new card('The Devil', 'Let go of inhibitions. Allow yourself to express all of who you are.', 'thedevil'),
    new card('The Tower', 'The weakest parts of your life must be torn down in order to build something strong and sturdy in their place.', 'thetower'),
    new card('The Star', 'The universe is working in your favor. Have faith in where you are being led.', 'thestar'),
    new card('The Moon', 'Listen to the body and its unique wisdom. Rely upon your inner resources as your best source of support and security.', 'themoon'),
    new card('The Sun', 'Things are working well for you and you are moving in the right direction.', 'thesun'),
    new card('Judgement', 'Let go of your past. The future welcomes you with a bounty of growth and change.', 'judgement'),
    new card('The World', 'Be serene in knowing you are succeeding in your goal.', 'theworld'),
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
    new card('Nine of Wands', 'There is an important place for rest and recuperation in any endeavor.', 'nineofwands'),
    new card('Ten of Wands', 'Rediscover the idealism and optimism of your youth to reinvigorate your vision.', 'tenofwands'),
    new card('Page of Wands', 'Quietly gather information that will help you direct a situation to unity.', 'pageofwands'),
    new card('Knight of Wands', 'Focused action must be taken; appropriate resources are available to draw upon, and the time is ripe.', 'knightofwands'),
    new card('Queen of Wands', 'Realize you are not in the leadership role right now. Concentrate on a more supportive role that promotes the overall objectives.', 'queenofwands'),
    new card('King of Wands', 'The possibility of success is open to you. There are no substantial obstacles.', 'kingofwands'),
    new card('Ace of Cups', 'Remembering that each person and event may possess a precious gem hidden inside. Make a conscious effort to find it.', 'aceofcups'),
    new card('Two of Cups', 'Express the caring that you feel. Reach out to those you hold in your heart, so that they know you are thinking of them.', 'twoofcups'),
    new card('Three of Cups', 'Call your family together to support you and trust that the results will be just what you need.', 'threeofcups'),
    new card('Four of Cups', 'Renounce the circumstances that have brought you to a standstill.', 'fourofcups'),
    new card('Five of Cups', 'Loss happens on the material plane. Yet what truly belongs to you cannot be taken away.', 'fiveofcups'),
    new card('Six of Cups', 'Look at your past as a repository of wisdom to be applied judiciously in the present.escription', 'sixofcups'),
    new card('Seven of Cups', 'Allow yourself to daydream, for dreams give you creative ideas and solutions and produce wonderful results.', 'sevenofcups'),
    new card('Eight of Cups', 'Look deep within to understand what motivates an occasional tendency to be pessimistic or depressed.', 'eightofcups'),
    new card('Nine of Cups', 'The best faculties to use in this situation are the intuitive ones.', 'nineofcups'),
    new card('Ten of Cups', 'Share abundantly with all the levels of people who are involved in this creative endeavor.', 'tenofcups'),
    new card('Page of Cups', 'Make yourself fully available for whatever is needed.', 'pageofcups'),
    new card('Knight of Cups', 'This is the moment to apply yourself fully.', 'knightofcups'),
    new card('Queen of Cups', 'Exercise your empathy. Be nurturing to others in a way that allows them to understand what it is all about.', 'queenofcups'),
    new card('King of Cups', 'Support others with your strength and wisdom.', 'kingofcups'),
    new card('Ace of Pentacles', 'Take small, steady steps toward your long-term goal and you will accumulate magnificent results.', 'aceofpentacles'),
    new card('Two of Pentacles', 'Do not allow yourself to be coaxed into premature decisions or actions.', 'twoofpentacles'),
    new card('Three of Pentacles', 'Let the world see your skills and talents.', 'threeofpentacles'),
    new card('Four of Pentacles', 'Study the responsibilities you have inherited rather than just looking at the advantages they represent.', 'fourofpentacles'),
    new card('Five of Pentacles', 'Pooling resources allows you to make bolder moves and larger investments in future projects.', 'fiveofpentacles'),
    new card('Six of Pentacles', 'Think of yourself as someone who can assist others in refining their skills and talents and using them successfully.', 'sixofpentacles'),
    new card('Seven of Pentacles', 'Success is won by perseverance. Be resolute in the use of your time and energy.', 'sevenofpentacles'),
    new card('Eight of Pentacles', 'When you dedicate yourself to producing quality work, you will gain greater freedom all the way around.', 'eightofpentacles'),
    new card('Nine of Pentacles', 'Realize you are free to create a secure, enduring, and satisfying lifestyle for yourself. Look for ways to share it with those who have helped you along the way.', 'nineofpentacles'),
    new card('Ten of Pentacles', 'You have the potential power to be a benefactor.', 'tenofpentacles'),
    new card('Page of Pentacles', 'The open-minded novice can look at a situation with fresh eyes and get down to the essentials with confidence.', 'pageofpentacles'),
    new card('Knight of Pentacles', 'Your resources will enhance an endeavor significantly and you can reap many blessings as a result of your participation.', 'knightofpentacles'),
    new card('Queen of Pentacles', 'Be confident that if you express your truth, you will not have to worry about the consequences. You will remain safe and sound.', 'queenofpentacles'),
    new card('King of Pentacles', 'Project all the confidence you can muster, as if you already know your plans are working and your goal is secured.', 'kingofpentacles'),
];

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffleArray(tarotDeck)

const refreshButton = document.querySelector('.refresh-button');

const refreshPage = () => {
    location.reload();
}
refreshButton.addEventListener('click', refreshPage)

function randomNumber(num) {
    const randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
}
function placeCard(id) {
    const currentCard = tarotDeck.pop()
    document.getElementById(id).innerHTML = '<img src="images/' + 
    currentCard.image + '.jpg"><h3>' + 
    currentCard.name + '</h3><p>' + 
    currentCard.description + '</p>'; 
}

document.getElementById('draw-first-card').onclick = function() { 
        placeCard('situation-card')
    }

document.getElementById('draw-second-card').onclick = function() {
    placeCard('action-card')
}

document.getElementById('draw-third-card').onclick = function() {
    placeCard('outcome-card')
}

function anotherReading() {
    popup = window.confirm('Another reading?')
}

setTimeout(anotherReading, 60000);


// let text;
// if (confirm("Press a button!") == true) {
//     text = "You pressed OK!";
// } else {
//     text = "You canceled!";
// }