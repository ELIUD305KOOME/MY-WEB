import React from 'react';
import './GetInTouch.css'; // Make sure to create this CSS file

const GetInTouch = () => {
    return (
        <div className="getintouch">
            <h2>Get In Touch</h2>
            <form>
                <input type="text" placeholder="Name" required className="form-input" />
                <input type="email" placeholder="Email" required className="form-input" />
                <textarea placeholder="Message" required className="form-textarea"></textarea>
                <button type="submit" className="form-button">Submit</button>
            </form>
        </div>
    );
};

export default GetInTouch;
