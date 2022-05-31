import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'
import Accordion from '../components/Accordion'

const Faq = () => {

    async function deleteButton() {
        document.getElementById('connectButton').remove();
    }

    useEffect(() => {
        deleteButton()
    }, [])

    return (

        <div>
            <Navbar />
            <h1> FAQ</h1>
            <Accordion />
        </div>
    );
};

export default Faq;