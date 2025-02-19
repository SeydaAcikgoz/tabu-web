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
const CreateCart = ({
    onClose
}) => {
    const { theme } = useTheme();
    const classes = useStyles(theme.colors);

    const [keywords, setKeywords] = useState({
        main: '',
        key1: '',
        key2: '',
        key3: '',
        key4: '',
        key5: '',
        key6: ''
    });

    const handleChange = (field, value) => {
        setKeywords(prev => ({ ...prev, [field]: value }));
    };


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
                Yeni Kart Oluştur
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

    const renderContent = () => (
        <div className={classes.inputField}>
            <Input label="Ana Kelime:" onChange={text => handleChange('main', text)} />
            {[...Array(6)].map((_, i) => (
                <Input 
                    key={i} 
                    label={`Anahtar Kelime ${i + 1}:`} 
                    onChange={text => handleChange(`key${i + 1}`, text)} 
                />
            ))}
        </div>
    );
    
    const renderButtonField = () => {
        return <div
            className={classes.modalButtons}
            style={{
                
            }}
        >
            <Button
                title="Yeni Kart Oluştur"
                color="info"
                onClick={() => alert(Object.values(keywords).join('\n'))}

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
        </div>;
};

export default CreateCart;