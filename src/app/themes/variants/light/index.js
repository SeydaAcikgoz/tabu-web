export const colors = {
    "body":                 "#f5f5f5",
    "layer1":               "#141414",
    "layer2":               "#1f1f1f",
    "layer3":               "#292929",
    "warning":              "#da1d1d",
    "danger":               "#d5d33a",
    "success":              "#0dd822",
    "attention":            "#ffaf36",
    "info":                 "#1e5de5",
    "text":                 "#000000",
    "red":                  "#bb1616",
    "gray0":                "hsl(0, 0%, 100%)",
    "gray10":               "hsl(0, 0%, 90%)",
    "gray20":               "hsl(0, 0%, 80%)",
    "gray30":               "hsl(0, 0%, 70%)",
    "gray40":               "hsl(0, 0%, 60%)",
    "gray50":               "hsl(0, 0%, 50%)",
    "gray60":               "hsl(0, 0%, 40%)",
    "gray70":               "hsl(0, 0%, 30%)",
    "gray80":               "hsl(0, 0%, 20%)",
    "gray90":               "hsl(0, 0%, 18%)",
    "gray100":              "hsl(0, 0%, 8%)",
    "modalBackground":      "rgba(0, 0, 0, 0.5)",
    "linear":               "linear-gradient(90deg, #474747 0%, #616161 25%, #7A7A7A 50%, #474747 100%)",
    "cardBackground":       "linear-gradient(to right, #E5E5E51A, #E5E5E51A)"
};

export const typography = {
    header1: {
        fontFamily: "farsan-regular",
        color: colors.text,
        fontWeight: 300,
        lineHeight: 1.3,
        fontSize: 48,
        
    },
    header2: {
        fontFamily: "farsan-regular",
        color: colors.text,
        fontWeight: 400,
        lineHeight: 1.3,
        fontSize: 32,
    },
    header3: {
        fontFamily: "farsan-regular",
        color: colors.text,
        letterSpacing: 1,
        fontWeight: 600,
        lineHeight: 1.3,
        fontSize: 26,
    },
    header4: {
        fontFamily: "farsan-regular",
        color: colors.text,
        fontWeight: 400,
        lineHeight: 1.3,
        fontSize: 22,
    },
    header5: {
        fontFamily: "farsan-regular",
        letterSpacing: 1.5,
        color: colors.text,
        fontWeight: 600,
        lineHeight: 1.3,
        fontSize: 22,
    },
    header6: {
        fontFamily: "farsan-regular",
        color: colors.text,
        fontWeight: 400,
        lineHeight: 1.3,
        fontSize: 18,
    },
    body: {
        fontFamily: "farsan-regular",
        color: colors.text,
        lineHeight: 1.42,
        fontWeight: 400,
        fontSize: 14,
    },
    button: {
        fontFamily: "farsan-regular",
        letterSpacing: 0.5,
        color: colors.text,
        lineHeight: 1.40,
        fontWeight: 600,
        fontSize: 25
    }
};

const light = {
    key: "light",
    typography,
    colors
};

export default light;