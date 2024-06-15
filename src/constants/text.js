
import mailContactIcon from "../assets/images/mailConIcon.svg"
import callContactIcon from "../assets/images/callConIcon.svg"
import formContactIcon from "../assets/images/formConIcon.svg"
import { BsLinkedin, BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

export const contactList = [
    {
        icon: mailContactIcon,
        title: "Send us a message",
        description: "You can mail us at the give mail id and our team will get back to you as soon as we receive the mail.",
        info: "Support@rockshellcorp.com",
        link: "mailto:Support@rockshellcorp.com"
    },
    {
        icon: callContactIcon,
        title: "Give us a call",
        description: "Feel free to call whenever you have any query and problem, our team will guide you through it.",
        info: "+91 8779313433 / +91 8452029777",
        link: "javascript:void(0)"
    },
    {
        icon: formContactIcon,
        title: "Contact via form",
        description: "You can fill the contact form and our team will get back to you as soon as possible with the solution.",
        info: "Fill the form",
        link: "#contact-form",
    }
]

