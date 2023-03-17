import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import Need from './Need';
import { createRating } from '../../store/ratings';
import './Rating.css';

export default function Rating() {
    const dispatch = useDispatch();
    const [transcendence, setTranscendence] = useState(null);
    const [actualization, setSelfActualization] = useState(null);
    const [aesthetics, setAesthetic] = useState(null);
    const [cognition, setCognition] = useState(null);
    const [esteem, setEsteem] = useState(null);
    const [love, setLove] = useState(null);
    const [safety, setSafety] = useState(null);
    const [physiology, setPhysiology] = useState(null);

    const handleRating = (name, rating) => {
        switch (name) {
        case "Transcendence":
            setTranscendence(rating);
            break;
        case "Actualization":
            setSelfActualization(rating);
            break;
        case "Aesthetics":
            setAesthetic(rating);
            break;
        case "Cognition":
            setCognition(rating);
            break;
        case "Esteem":
            setEsteem(rating);
            break;
        case "Love":
            setLove(rating);
            break;
        case "Safety":
            setSafety(rating);
            break;
        case "Physiology":
            setPhysiology(rating);
            break;
        default:
            break;
        }
    };

    const namesOfNeeds = ["Transcendence", "Actualization", "Aesthetics", "Cognition", "Esteem", "Love", "Safety", "Physiology"];
    const colorsOfNeeds = ["#f94144", "#f3722c", "#f8961e", "#f9c74f", "#90be6d", "#43aa8b", "#4d908e", "#577590"];
    const widthsOfNeeds = [500, 600, 700, 800, 900, 1000, 1100, 1200];

    const handleInfoClick = () => {
        // const infoModal = document.getElementById("infoModal");
        // const needs = document.getElementsById("needs");
        // infoModal.style.display = "none";
        // needs.style.display = "none";
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRating = {
            transcendance: transcendence,
            actualization,
            aesthetics,
            knowledge: cognition,
            esteem,
            love,
            safety,
            physiological: physiology,
        };

        if (newRating.transcendance === null || newRating.actualization === null || newRating.aesthetics === null || newRating.knowledge === null || newRating.esteem === null || newRating.love === null || newRating.safety === null || newRating.physiological === null) {
            alert("Please rate all needs before submitting.");
        } else {
            dispatch(createRating(newRating));
        }
    };

    return (
        <div className='today'>
            <div className='left-side'>
                <button className="highlight">Highlight</button>
                <button className="info" id="infoButton" onClick={handleInfoClick}>Info</button>
                {/* Add the Lowlight button */}
                <button className="lowlight">Lowlight</button>
            </div>
            <div className="modal">
                <div className="modal-content">
                    <h3>Maslow's extended hierarchy of needs builds upon his initial five-tier model, 
                        which includes physiological, safety, love/belonging, esteem, and self-actualization needs. 
                        In the extended version, Maslow added three more levels: cognitive, aesthetic, and transcendence. 
                        Cognitive needs relate to knowledge and understanding, while aesthetic needs encompass beauty and order. 
                        Transcendence needs, the highest level, involve helping others achieve self-actualization. 
                        The extended hierarchy offers a more comprehensive view of human motivation, emphasizing the pursuit of knowledge, 
                        appreciation of beauty, and the desire to help others grow.
                    </h3>
                </div>
            </div>
            <div className='needs' id='needs'>
                    {namesOfNeeds.map((name, idx) => {
                        const color = colorsOfNeeds[idx];
                        const width = widthsOfNeeds[idx];
                        return (
                        <Need key={idx} name={name} color={color} width={width} onRatingChange={handleRating} />
                        )
                    }, [])}
                </div>
            <button className='submit' onClick={handleSubmit}>Submit</button>
        </div>
    );
}