import { useTheme } from "../../context/ThemeContext";
import { useLanguage } from "../../context/LanguageContext";
import useStyles from "./stylesheet";

const Button = () => {
    const { theme, toggleTheme } = useTheme();
    const { language, toggleLanguage, t } = useLanguage();

    const classes = useStyles(theme.colors);
    return (
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
                        fontSize: theme.typography.button.fontSize,
                        fontWeight: theme.typography.button.fontWeight,
                        fontFamily: theme.typography.button.fontFamily,
                        letterSpacing: theme.typography.button.letterSpacing,
                    }}
            >
                {theme.key === "dark" ? "☀️ Aydınlık Moda Geç" : "🌙 Karanlık Moda Geç"}
            </button>
        </div>
    );
};

export default Button;
