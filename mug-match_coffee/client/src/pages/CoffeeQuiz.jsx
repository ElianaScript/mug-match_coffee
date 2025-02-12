import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GradientBackground from '../components/GradientBackground';
import Button from '../components/Button';
import '../index.css';

const quizQuestions = [
    {
        question: "Do you like sweet, bitter, bold, or mild flavors in coffee?",
        options: [
            { text: "Sweet - I like my coffee with extra sugar or natural sweetness", type: "A" },
            { text: "Bitter - I like my coffee strong and rich", type: "B" },
            { text: "Bold - I like my coffee with a kick and underlying flavor profiles", type: "C" },
            { text: "Mild - I like my coffee simple and light", type: "D" }
        ]
    },
    {
    question: "How do you like your coffee brewed?",
    options: [
    {text: "Espresso - I love a good latte or cappucino", type: "A"},
    {text: "Drip - I like my coffee from a pot or a Keurig", type: "B"},
    {text: "French Press - I like my coffee strong and full of fun flavors!", type: "C"},
    {text: "Brewed Iced Coffee or Cold Brew - I like my coffee cold and refreshing", type: "D"}
    ]
},
{
    question: "How much coffee do you need to function?",
    options: [
    {text: "I need at least one cup of coffee to start my day", type: "A"},
    {text: "Coffee is my lifeblood, I cannot survive without it", type: "B"},
    {text: "Around 3 max cups of coffee a day for me", type: "C"},
    {text: "I can get by without any coffee, it's just a nice treat", type: "D"}
]
},
{
    question: "Do you often order the same coffee or do you like to try new things?",
    options: [
        {text: "I like to try new things everyday!", type: ["A", "D"]},
        {text: "I tend to stick with my favorites.", type: ["B", "C"]}
    ]
},
    {
        question: "What do you pair with your coffee in the morning?",
        options: [
            { text: "Pastries or sweet treats!", type: "A" },
            { text: "Eggs, Bacon, or toast... The works!", type: "B" },
            { text: "Fruit or nuts", type: "C" },
            { text: "Just my coffee! Maybe a granola bar at the bottom of my bag...", type: "D" }
        ]
    }
]

const results = {
    A: "Caramel Macchiato - Sweet and creamy with hints of vanilla and caramel.",
    B: "Americano - A classic Italian coffee with a strong espresso base.",
    C: "Blonde Roast Drip Coffee - Light and mellow with subtle flavors.",
    D: "Cold Brew - Refreshing and smooth with a bold taste."
};

const CoffeeQuiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({ A: 0, B: 0, C: 0, D: 0 });
    const [showResults, setShowResults] = useState(false);
    const [topChoice, setTopChoice] = useState('');
    const navigate = useNavigate();

    const handleAnswer = (type) => {
        setAnswers(prevAnswers => ({ ...prevAnswers, [type]: prevAnswers[type] + 1 }));
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizQuestions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowResults(true);
        }
    };

    useEffect(() => {
        if (showResults) {
            const sortedAnswers = Object.entries(answers).sort((a, b) => b[1] - a[1]);

            fetch('http://localhost:5000/api/quiz/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ user_id: localStorage.getItem('user_id'), answers })
            })
            .then(response => response.json())
            .then(data =>{
                setTopChoice(data.coffeeMatch || results[sortedAnswers[0][0]]);
                navigate('/favorites');
            })
            .catch(error => console.error('Error submitting quiz', error));
        }
    }, [showResults, answers, navigate]);

    return (
        <GradientBackground>
            <div className="quiz-container text-center text-white">
                {showResults ? (
                    <h2>Your coffee match is: {topChoice}</h2>
                ) : (
                    <>
                        <h3 className="text-2xl font-bold">{quizQuestions[currentQuestion].question}</h3>
                        <div className="flex flex-col mt-4 space-y-4">
                            {quizQuestions[currentQuestion].options.map((option) => (
                                <Button key={option.text} text={option.text} onClick={() => handleAnswer(option.type)} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </GradientBackground>
    );
};

export default CoffeeQuiz;
