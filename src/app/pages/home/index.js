import React, {
    useState
} from 'react';
import {
    ScoreBoard,
    ScoreList,
    Button,
    Header,
    Input,
    Modal,
    Card,
} from '../../components';
import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import useStyles from "./stylesheet";
import CheckIcon from "../../assets/icons/check-solid.svg";
import {
    CreateTeam
} from './views';

const Home = () => {
    
    const [name, setName] = useState("");
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();
    const classes = useStyles(theme.colors);

    const [isModalOpen, setIsModalOpen] = useState({
        isVisible: false
    });

    const renderModalContainer = () =>{
        return <Modal
            isVisible={isModalOpen.isVisible}
            children={
                    <CreateTeam
                        onClose= {()=>{
                            setIsModalOpen({
                                isVisible: false,
                            });
                        }}
                    />
            }
            onClose={() => {
                setIsModalOpen({
                    isVisible: false,
                });
            }}
        />;
    };

    return <div
        style={{
            background: theme.colors.info
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
        <div
            className={classes.container}
            style={{
            }}
        >
            <div
                style={{
                    background: theme.colors.background,
                    color: theme.colors.textPrimary,
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <h1>{theme.key === "dark" ? t.darkMode : t.lightMode}</h1>
                <button
                    onClick={toggleTheme}
                    style={{
                        background: theme.colors.input,
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginTop: "20px",
                        boxShadow: `0px 4px 6px ${theme.shadow}`,
                    }}
                >
                    {theme.key === "dark" ? t.switchToLight : t.switchToDark}
                </button>
            </div>
            <h1>{t.hello}</h1>
            <button onClick={toggleTheme}>
                {language === "tr" ? "Temayı Değiştir" : "Change Theme"}
            </button>
            <button onClick={toggleLanguage} style={{ marginLeft: "10px" }}>
                {language === "tr" ? "Dili Değiştir" : "Change Language"}
            </button>

            <button
                onClick={toggleTheme}
                style={{
                    background: theme.colors.gray100,
                        color: theme.colors.gray0,
                        padding: "10px 20px",
                        border: `1px solid ${theme.colors.seperator}`,
                        borderRadius: "5px",
                        cursor: "pointer",
                        marginTop: "20px",
                        ...theme.typography.button
                    }}
            >
                {theme.key === "dark" ? "☀️ Aydınlık Moda Geç" : "🌙 Karanlık Moda Geç"}
            </button>
        </div>
        <Button icon={CheckIcon} title="Home" color="success" onClick={() => alert("Clicked!")} />
        <Header/>

        <Button
            title="Modal"
            onClick={() => {
                setIsModalOpen({
                    isVisible: true,
                });
            }}
        />

        <Input 
            label="Adınız"
            value={name} 
            onChange={setName}
        />
        <p>Girilen Ad: {name}</p>

        {renderModalContainer()}
    </div>;
}

export default Home;
