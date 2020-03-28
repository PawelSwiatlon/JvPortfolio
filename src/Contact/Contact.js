import React from 'react';
import classes from './Contact.module.css'

const contact = () => {
    return(
        <div className={classes.contact} id="contact">
            <h1>Say Hello.</h1>
            <p>Intrested in working with me? Let me know.</p>
            <form>
                <section>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                </section>
                <input className={classes.message} type="text" placeholder="Message"/><br/>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default contact;