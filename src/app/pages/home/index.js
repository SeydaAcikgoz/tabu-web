import React from 'react';
import {
    ScoreBoard,
    ScoreList,
    Button,
    Card,
} from '../../components';
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import useStyles from "./stylesheet";
import CheckIcon from "../../assets/icons/check-solid.svg";

const Home = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const classes = useStyles(theme.colors);

    return <div
        style={{
            background: theme.colors.gray20
        }}
    >
        <Card
            forbiddenWords={["Ateş", "Füze", "Atmak", "Mermi", "Mekanik"]}
            mainWord="Roket"
        />
        <ScoreBoard
            teamName="Takım1"
            correctCount="5"
            tabooCount="5"
            score="55"
        />
        <ScoreList
            teamsName="Takım1-Takım2"
            winnerTeam="Takım1"
            score="55"
            id="1"
        />
        <Button icon={CheckIcon} title="Home" color="success" onClick={() => alert("Clicked!")} />

    </div>;
}

export default Home;
