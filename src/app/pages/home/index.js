import React from 'react';
import {
    Card,
    Button
} from '../../components';

const Home = () => {
    return <div>
        <Card
            mainWord="Roket"
            forbiddenWords={["Ateş", "Füze", "Atmak", "Mermi", "Mekanik"]}
        />
        <Button/>
    </div>;
}

export default Home;
