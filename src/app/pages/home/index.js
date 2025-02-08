import React from 'react';
import {
    Card
} from '../../components';

const Home = () => {
    return <div>
        <Card
            mainWord="Roket"
            forbiddenWords={["Ateş", "Füze", "Atmak", "Mermi", "Mekanik"]}
        />
    </div>;
}

export default Home;
