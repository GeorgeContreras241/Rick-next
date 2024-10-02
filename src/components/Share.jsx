import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import  share  from "@/styles/share.module.css" 

export const Share = () => {
    return (
        <div className={share.section__share}>
            <div className={share.section__links}>
                <a href="#"><FaGithub /></a>
            </div>
            <div className={share.section__links}>
                <a href="#"><FaLinkedin /></a>
            </div>
            <div className={share.section__links}>
                <a href="#"><MdAlternateEmail /></a>
            </div>
        </div>
    )
}
