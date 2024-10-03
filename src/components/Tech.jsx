import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiFarfetch } from "react-icons/si";
import tech from "@/styles/tech.module.css"
export const Tech = () => {
    return (
        <section className={tech.section__tech}>
            <div className={tech.card}>
                <FaHtml5 className={tech.html} />
                <div className={tech.card__html}>
                    <h3>HTML 5</h3>
                    <span>Lenguaje de marcado HTML5 utilizado en el desarrollo web.</span>
                    <a href="#">ver mas</a>
                </div>
            </div>
            <div className={tech.card}>
                <FaCss3Alt className={tech.css} />
                <div className={tech.card__html}>
                    <h3>CSS</h3>
                    <span>CSS es utilizado para diseñar y dar estilo a las páginas web.</span>
                    <a href="#">ver mas</a>
                </div>

            </div>
            <div className={tech.card}>
                <FaJs className={tech.js} />
                <div className={tech.card__html}>
                    <h3>JS</h3>
                    <span>JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript.</span>
                    <a href="#">ver mas</a>
                </div>

            </div>
            <div className={tech.card}>
                <SiNextdotjs className={tech.nextjs} />
                <div className={tech.card__html}>
                    <h3>NEXT JS</h3>
                    <span>Next.js es un marco web de desarrollo front-end de React de código abierto creado por Vercel.</span>
                    <a href="#">ver mas</a>
                </div>
            </div>
            <div className={tech.card}>
                <SiFarfetch className={tech.rickandmorty} />
                <div className={tech.card__html}>
                    <h3>API Rick and Morty</h3>
                    <span>Api de Rick and Morty para entorno de pruebas.</span>
                    <a href="#">ver mas</a>
                </div>
            </div>
        </section>
    )
}
