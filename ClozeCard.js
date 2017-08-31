var BasicCard = require("./BasicCard");

    function ClozeCard(text, cloze) {
        this.text = fullText;
        this.cloze = cloze;
        this.partialText = function () {

            var partial = text.replace(cloze, '___________');
        }
    }

        module.exports = ClozeCard;

var firstPresidentCloze = new ClozeCard ("George Washington was the first president of the United States.", "George Washington");

// George Washington
console.log(firstPresidentCloze.cloze);

// " ... was the first president of the United States.
console.log(firstPresidentCloze.partial);

// "George Washington was the first president of the United States.
console.log(firstPresidentCloze.fullText);



