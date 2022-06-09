import React, { useEffect } from 'react';
import Navbar from '../components/Navbar'

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
            <div class="jumbotron">
                <h1 class="display-4">FAQs</h1>
                <br />
                <hr class="my-4" />
                <h3>Why donate with NFT's and not a regular donation?</h3>
                <h6>Pictures speak a thousand words. Our main reason for starting this project was that we wanted to help raise awareness and support Lebanon, and to work with artists who wanted to help. By using art to help advocate for the project, we feel that we can further the support for Lebanon and spread awareness around the world!</h6>
            </div>
        </div>
    );
};

export default Faq;