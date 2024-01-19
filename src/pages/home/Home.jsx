import React from 'react';
import Skills from './Skills';
import Header from './Header'
import MarketExperience from './MarketExperience';
import ContactPage from '../../components/ContactPage';
import LatestProjects from './LatestProjects'

const Home = () => {

    

    return (
        <>
            <Header />
            <Skills /> 
            <MarketExperience /> 
            <ContactPage />
        </>
    )
}

export default Home;
