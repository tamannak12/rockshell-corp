import Head from '../components/navbar';
import { Down } from '../components/footer';
import ContactHero from '../components/Contact/ContactHero';
import ContactForm from '../components/Contact/ContactForm';




export default function Contact() {

    

    // ReactGA.pageview(window.location.pathname + window.location.search);

    return (
        <>
            <Head />
            <ContactHero/>
            <ContactForm/>
            <Down />
        </>
    )
}
