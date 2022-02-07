import React, { useState } from "react";
import QuizzQuestion from "../Components/Quizz/QuizzQuestion";

const Quizz = () => {

    const QuizzObject = [
        {
            id : 0, 
            question : 'Qui a dit : "Je sais que je ne sais rien"',
            answers : ["Socrate", "Platon", "Kant", "Nietzsche"],
            rightAnswer : 0,
        },
        {
            id : 1,
            question : 'Qui a dit : "L\'homme n\'est rien d\'autre que son projet"',
            answers : ["Sartre", "Freud", "Descartes", "Marx"],
            rightAnswer : 0,
        },
        {
            id : 2,
            question : 'Qui a dit : "Le rêve est un rébus"',
            answers : ["Freud", "Platon", "Nietzsche", "Foucault"],
            rightAnswer : 0,
        },
        {
            id : 3,
            question : 'Qui a dit : "La religion […] est l’opium du peuple"',
            answers : ["Marx", "Sartre", "Kant", "Hobbes"],
            rightAnswer : 0,
        },
        {
            id : 4,
            question : 'Qui a dit : "Je pense, donc je suis"',
            answers : ["Descarte", "Epictète", "Pascal", "Shopenhauer"],
            rightAnswer : 0,
        },
        {
            id : 5,
            question : 'Qui a dit : "La liberté des uns s\'arrête là où commence celle des autres"',
            answers : ["Mill", "Descartes", "Pascal", "Socrate"],
            rightAnswer : 0,
        },
        {
            id : 6,
            question : 'Qui a dit : "Le coeur a ses raisons que la raison ignore"',
            answers : ["Pascal", "Socrate", "Kant", "Nietzsche"],
            rightAnswer : 0,
        },
        {
            id : 7,
            question : 'Qui a dit : "L\'homme est un loup pour l\'homme"',
            answers : ["Hobbes", "Freud", "Nietzsche", "Epictète"],
            rightAnswer : 0,
        },
        {
            id : 8,
            question : 'Qui a dit : "Si tu n\'es pas Socrate, tu dois vivre comme si tu voulais être Socrate"',
            answers : ["Épicure", "Montesquieu", "Schopenhauer", "Socrate"],
            rightAnswer : 0,
        },
        {
            id : 9,
            question : 'Qui a dit : "L\'homme est un animal métaphysique"',
            answers : ["Schopenhauer", "Heidegger", "Kant", "Marx"],
            rightAnswer : 0,
        }
        
        ,]

    const [point, setPoint] = useState(0)

    return(
        
        <>
            <h2>Quizz</h2>
            {
            QuizzObject.map((data, i) => (
                <div key={i} >
                    <QuizzQuestion title={data.question} />
                    {
                        data.answers.map((answer, j) => (
                            <div key={j} >
                                <button onClick={() => {if(data.rightAnswer === j){setPoint(point + 1)}}} > {answer} </button>
                            </div>
                        ))
                    }
                    
                </div>

            ))
            }
            <button onClick={() => console.log(point)} >show points</button>
        </>
    )
}

export default Quizz