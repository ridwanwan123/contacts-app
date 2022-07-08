import  React  from "react";

function ContactItemImage({imageUrl}) {
    return (
        <div className="contact-item__ImageUrl">
            <img src="{imageUrl" alt="contact Avatar"/>
        </div>
    )
    
}

export default ContactItemImage;