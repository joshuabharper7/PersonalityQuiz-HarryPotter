// This keeps track of the number of questions the student has answered that match each result
// It will be reset each time the quiz starts
// keys used (hover over, value is number)
const scoreKeeper = {
    Harry: 0,
    Hermione: 0,
    Ron: 0,
    Draco: 0,
};

let currentQuestionIndex = 0; // Programming languages start counting at zero
// an array of objects

// Questions can be added and modified freely
// They just need to have the same structure
// the whole `questions` variable is an array, with square brackets: []
// individual questions are objects, with curly braces: {}
// the options/answers of each question are another array: []
// each option is its own object {} with two properties: text and point
const questions = [
    {
        text: 'How do you treat people you don\'t like?',
        options: [
            {
                text: 'I battle them',
                point: 'Harry',
            },
            {
                text: 'I outwit them',
                point: 'Hermione',
            },
            {
                text: 'I find a way to prank them',
                point: 'Ron',
            },
            {
                text: 'I punish them, call them worthless',
                point: 'Draco',
            },
        ],
    },
    {
        text: 'What would your super power be?',
        options: [
            {
                text: 'Mine would be super Intellect of course',
                point: 'Hermione',
            },
            {
                text: 'Definitely Super Strength',
                point: 'Ron',
            },
            {
                text: 'Mind Control',
                point: 'Draco',
            },
            {
                text: 'Ability to talk to the dead',
                point: 'Harry',
            },
        ],
    },
    {
        text: 'How would you help in the fight against the Dark Lord?',
        options: [
            {
                text: 'I will take the fight to He-Who-Must-Not-Be-Named',
                point: 'Ron',
            },
            {
                text: 'I wont. Don\'t make me choose sides',
                point: 'Draco',
            },
            {
                text: 'I will start an army and do whatever it takes',
                point: 'Harry',
            },
            {
                text: 'I will find the Horcruxes and figure out how to destroy them',
                point: 'Hermione',
            },
        ],
    },
    {
        text: 'How do you feel about rules?',
        options: [
            {
                text: 'It\'s ok to break the rules if it\'s for a good cause',
                point: 'Harry',
            },
            {
                text: 'Rules are important. But if you\'re going to break them, at least be smart about it',
                point: 'Hermione',
            },
            {
                text: 'Rules are subject to debate',
                point: 'Ron',
            },
            {
                text: 'If you\'re rich, there aren\'t any rules',
                point: 'Draco',
            },
        ],
    },
    {
        text: 'Where is your favorite place at Hogwarts?',
        options: [
            {
                text: 'The Slytherin Common Room',
                point: 'Draco',
            },
            {
                text: 'The Room of Requirement',
                point: 'Harry',
            },
            {
                text: 'The Library',
                point: 'Hermione',
            },
            {
                text: 'The Quidditch Pitch',
                point: 'Ron',
            },
        ],
    },
    {
        text: 'What is your biggest weakness?',
        options: [
            {
                text: 'Giant Spiders',
                point: 'Ron',
            },
            {
                text: 'I\'m too smart for my own good',
                point: 'Hermione',
            },
            {
                text: 'I rush into things without thinking',
                point: 'Harry',
            },
            {
                text: 'I am too easily influenced',
                point: 'Draco',
            },
        ],
    },
    {
        text: 'What is your relationship with your family like?',
        options: [
            {
                text: 'My parents want the best for me, I think...',
                point: 'Draco',
            },
            {
                text: 'My parents are great! From what I\'ve heard...',
                point: 'Harry',
            },
            {
                text: 'I love my parents, They\'re special to me.',
                point: 'Hermione',
            },
            {
                text: 'Too big! They don\'t notice me.',
                point: 'Ron',
            },
        ],
    },
    {
        text: 'What is your favorite store in Diagon Alley?',
        options: [
            {
                text: 'Weasley\'s Wizard Wheezes',
                point: 'Ron',
            },
            {
                text: 'Borgin and Burkes',
                point: 'Draco',
            },
            {
                // inside a string, you have to escape quote marks with a \
                text: 'Quality Quiddich Supplies',
                point: 'Harry',
            },
            {
                text: 'Flourish and Blotts',
                point: 'Hermione',
            },
        ],
    },
    {
        text: 'Why are people jealous of you?',
        options: [
            {
                text: 'I am smart and talented',
                point: 'Hermione',
            },
            {
                text: 'I have an amazing family',
                point: 'Ron',
            },
            {
                text: 'I am insanely rich',
                point: 'Draco',
            },
            {
                text: 'I am the chosen one',
                point: 'Harry',
            },
        ],
    },
    {
        text: 'What is your favorite Harry Potter quote?',
        options: [
            {
                text: 'I don\'t go looking for trouble, Trouble usually finds me.',
                point: 'Harry',
            },
            {
                text: 'It\'s Leviosa, not Leviosar!',
                point: 'Hermione',
            },
            {
                text: 'Why Spiders? Why couldn\'t it be "follow the butterflies"?',
                point: 'Ron',
            },
            {
                // inside a string, you have to escape quote marks with a \
                text: 'Scared, Potter?',
                point: 'Draco',
            },
        ],
    },
];

// This function starts the quiz
// It is called by a button on the HTML page
function startQuiz() {

    // This puts a message in the console
    // Press Ctrl+Shift+I to open the console in Chrome
    // (Google how to open the dev tools in your browser if you're not sure)
    console.log('Quiz started!');

    // Reset score
    // This loops over each of the properties in the object
    for (let result in scoreKeeper) {
        // We are setting that property's value back to zero
        scoreKeeper[result] = 0;
    }

    // Ask first question
    // This function is defined below
    // We are passing the first question in our questions array into this function
    // Remember that programming languages start counting at zero
    askQuestion(questions[0]);
}

// Display Question
function askQuestion(question) {

    // Clear quiz zone
    // First we get the element in the HTML by using its "id" value
    // Then, while it still has a "first child element", we remove that element
    // This will continue until the parent is empty
    let quizZone = document.getElementById('quizZone');
    while (quizZone.firstChild) {
        quizZone.removeChild(quizZone.firstChild);
    }

    // Render the question - we will create HTML elements here
    // This is basically the same as writing <p>My paragraph</p> in HTML
    let questionP = document.createElement('p');
    questionP.innerText = question.text;
    quizZone.appendChild(questionP);

    // Create box to hold answers
    // These are more elements that we are creating from scratch
    let answerDiv = document.createElement('div');
    answerDiv.setAttribute('id', 'quizAnswers');
    quizZone.appendChild(answerDiv);

    // Render answers
    // forEach is a method that arrays can use
    // Here, we say:
    //  - take my question
    //  - take its 'options' property (an array)
    //  - for each element in that array, do a thing
    // and then, inside the forEach() parentheses, we describe that thing
    question.options.forEach((option, i) => {

        // `option` is this individual option
        // `i` is the index of the option -- the first option will have `i` of zero, etc.

        // Create a list item for this option
        let optionDiv = document.createElement('div');
        optionDiv.setAttribute('class', 'quizOption');
        optionDiv.innerText = option.text;
        answerDiv.appendChild(optionDiv);

        // Add the index to the optionDiv so we can use it later
        optionDiv.index = i;

        // Attache event listeners
        // This says: when optionDiv is clicked, call the acceptAnswer function
        optionDiv.onclick = acceptAnswer;
    });
}

function acceptAnswer(event) {
    // Property we added ourselves
    let selectedOptionIndex = event.target.index;
    console.log({ selectedOptionIndex });

    // Add point according to the question and option
    let currentQuestion = questions[currentQuestionIndex];
    let selectedOption = currentQuestion.options[selectedOptionIndex];
    scoreKeeper[selectedOption.point]++;

    console.log(JSON.stringify(scoreKeeper, null, 4));
    
    // Go to next question OR calculate result
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
        calculateResult();
    }
    else {
        askQuestion(questions[currentQuestionIndex]);
    }
}

function calculateResult() {
    // Add up points, taking the FIRST/HIGHEST score
    let quizResult = '';

    let possibleResults = Object.keys(scoreKeeper);

    for (let i = 0; i < possibleResults.length; i++) {
        let thisPossibleResult = possibleResults[i];

        if (!quizResult || scoreKeeper[quizResult] < scoreKeeper[thisPossibleResult]) {
            quizResult = thisPossibleResult;
        }
    }

    // Display result
    showResult(quizResult);
}

// Display Results
function showResult(result) {
    // Hide the quizZone (the quiz is over)
    let quizZoneDiv = document.getElementById('quizZone');
    quizZoneDiv.style.display = 'none'; // hide it by adjusting its style (CSS) directly

    // Find the hidden <div> that contains the results
    let resultDiv = document.getElementById('answer-' + result);
    resultDiv.classList.toggle('hide'); // un-hide it by removing the '.hide' class

    // Show the 'Take Again' button
    let takeAgainButton = document.querySelector('#takeAgain');
    takeAgainButton.style.display = 'inline'; // Just a regular inline element that flows in the text, like a word or phrase
}
