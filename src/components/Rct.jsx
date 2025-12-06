import Nav from './Nav'
import Steprct from './steprct';
import PostTreatmentCare from './PostTreatmentCare';
import Footer from './Footer'
import RootCanalSymptoms from './RootCanalSymptoms';
import RootCanalSection from './RootCanalSection';
import RootHero from './RootHero';

const Rct = () => {
    return (
        <>
            <Nav />
            <RootHero/>
            <RootCanalSection/>
            <RootCanalSymptoms/>
            <Steprct/>
            <PostTreatmentCare/>
            <Footer/> 
        </>
    )
}

export default Rct