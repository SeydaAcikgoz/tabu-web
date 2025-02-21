import React, {
    useState
} from 'react';
import {
    Button,
    Input
} from '../../../../components';
import useStyles from './stylesheet';
import { useTheme } from "../../../../context/ThemeContext";
import { useLanguage } from "../../../../context/LanguageContext";
import {
    CloseIcon
} from '../../../../assets/icons';

const CreateTeam = ({
    onClose
}) => {
    const { theme } = useTheme();
    const classes = useStyles(theme.colors);

    const [firstTeam, setFirstTeam]= useState("");
    const [secondTeam, setSecondTeam]= useState("");

    const [showDialog, setShowDialog] = useState({
        isView: false,
    });

    const renderHeader = () =>{
        return <div
            className={classes.modalHeader}
            style={{
                ...theme.typography.header1
            }}
        >
            <span 
                style={{
                    color: theme.colors.gray0,
                    ...theme.typography.header1
                }}
            >
                Takımlar
            </span>
            <Button
                icon={CloseIcon}
                color={theme.colors.gray0} 
                onClick={() => {
                    onClose();
                }}
                style={{
                    cursor: 'pointer'
                }}
            />
        </div>;
    };

    const renderContent = () => {
        return <div
            className={classes.inputField}
            style={{
            }}
        >
            <Input 
                label="1.Takım Adı:"
                onChange={(text) => setFirstTeam(text)}
            />
            <Input 
                label="2.Takım Adı:"
                onChange={(text) => setSecondTeam(text)}
            />
        </div>;
    };
    
    const renderButtonField = () => {
        return <div
            className={classes.modalButtons}
            style={{
                
            }}
        >
            <Button
                title="Takım Oluştur"
                color="info"
                onClick={() => alert(`Takım 1: ${firstTeam}\nTakım 2: ${secondTeam}`)}
            />
        </div>;
    };

    return <div
            className={classes.container}
            style={{
                backgroundColor: theme.colors.gray50
            }}
        >
            {renderHeader()}
            {renderContent()}
            {renderButtonField()}
            {/* <Dialog
                isVisible={showDialog.isView}
                onOverlayPress={() => {
                    setShowDialog({
                        isView: false,
                        transaction: ""
                    });
                }}
                headerComponent= {
                    <div>
                        <Text
                            variant="header6"
                        >
                            {showDialog.transaction === "invalid-query" ? "Talep red sebebi girilmelidir." : responseMessage}
                        </Text>
                    </div>
                }
                bottomComponent= {
                    <div>
                        <Button
                            title="Tamam"
                            onClick={() => {
                                setShowDialog({
                                    isView: false,
                                    transaction: ""
                                });
                            }}
                        />
                    </div>
                }
                bottomContainerStyle= {{
                    justifyContent: "end",
                    display: "flex",
                    width: "100%"
                }}
            /> */}
        </div>;
};

export default CreateTeam;