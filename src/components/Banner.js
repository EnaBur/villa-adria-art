import React from "react";
import Popup from "reactjs-popup";

const Banner = () => {

    const Modal = () => (
        
        <Popup trigger={<button className="button-23"> Book now </button>} modal>
            <div>
                
            <form action="/action_page.php" class="form-container">
                <h1>Book Villa Adriart</h1>

                <label for="email"><b>Email</b></label>
                <br></br>
                <input type="text" placeholder="Enter Email" name="email" required />
                <br></br>
                <label for="name"><b>Name and Surname</b></label>
                <br></br>
                <input type="text" placeholder="Name and Surname" name="name" required />
                <br></br>
                <label for="date"><b>Date</b></label>
                <br></br>
                <input type="date" placeholder="Choose date" name="date" required />
                <br></br>
                <label for="message"><b>Leave a message for us</b></label>
                <br></br>
                <input type="textarea" placeholder="Leave a message for us" name="message" required />
                <br></br>
                <label for="number"><b>How many people will be staying?</b></label>
                <br></br>
                <input type="number" placeholder="0" name="number" required />

                <button type="submit" class="btn">Submit</button>
                <button type="button" class="btn cancel" onclick="closeForm()">Cancel</button>
            </form>

            </div> 
        </Popup>
        
    );


    return(
        <div className="banner">
            <h1>Experience Dalmatia</h1>
            <div className="buttons">
            {Modal()}
                
            </div>
            
        </div>
    );
};

export default Banner;