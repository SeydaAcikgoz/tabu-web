import React, {
    useState
} from 'react';
import {
    Button
} from '../../../../components';
import useStyles from './stylesheet';
import { useTheme } from "../../../../context/ThemeContext";
import { useLanguage } from "../../../../context/LanguageContext";
import CloseIcon from "../../../../assets/icons/x-solid.svg";

const CreateTeam = ({
    onClose
}) => {
    const { theme } = useTheme();
    const classes = useStyles(theme.colors);

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
                color="gray0"
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
        return <div className={classes.inputField}
            style={{
            }}>
                <input type="text" placeholder="Input 1" className={classes.input} />
                <input type="text" placeholder="Input 2" className={classes.input} />
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
                onClick={() => alert("Clicked!")}
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