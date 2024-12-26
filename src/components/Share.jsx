import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import share from "@/styles/share.module.css"

export const Share = () => {
    return (
        <div className={share.section__share}>
            <div className={share.section__links}>
                <a href="https://github.com/GeorgeContreras241"
                    target="_blank"><FaGithub className={share.icon} /></a>
            </div>
            <div className={share.section__links}>
                <a href="https://www.linkedin.com/in/georgecontreras241/"
                target="_blank"><FaLinkedin className={share.icon} /></a>
            </div>
            <div className={share.section__links}>
                <a href="#" target="_blank"><MdAlternateEmail className={share.icon} /></a>
            </div>
        </div>
    )
}
