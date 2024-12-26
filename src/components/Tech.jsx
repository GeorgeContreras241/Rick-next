import tech from "@/styles/tech.module.css"
import Image from "next/image"
import CSS from "@/images/CSS.png"
import JS from "@/images/JS.png"
import HTML from "@/images/HTML.png"
import NEXT from "@/images/NEXT.png"
import RICK from "../../public/rick.png"

export const Tech = () => {
    return (
        <section className={tech.section__tech}>
            <div className={tech.card}>
                <div>
                    <Image src={HTML}
                    width={100}
                    height={100}
                    alt="Rick and Morty"
                    />
                </div>
                <div className={tech.card__html}>
                    <h3>HTML 5</h3>
                    <span>Lenguaje de marcado HTML5 utilizado en el desarrollo web.</span>
                    <a href="#">ver mas</a>
                </div>
            </div>
            <div className={tech.card}>
                <div>
                <Image src={CSS}
                    width={100}
                    height={100}
                    alt="Rick and Morty"
                    />
                </div>
                <div className={tech.card__html}>
                    <h3>CSS</h3>
                    <span>CSS es utilizado para diseñar y dar estilo a las páginas web.</span>
                    <a href="#">ver mas</a>
                </div>

            </div>
            <div className={tech.card}>
                <div>
                <Image src={JS}
                    width={100}
                    height={100}
                    alt="Rick and Morty"
                    />
                </div>
                <div className={tech.card__html}>
                    <h3>JS</h3>
                    <span>JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript.</span>
                    <a href="#">ver mas</a>
                </div>

            </div>
            <div className={tech.card}>
                <div>
                <Image src={NEXT}
                    width={100}
                    height={100}
                    alt="Rick and Morty"
                    />
                </div>
                <div className={tech.card__html}>
                    <h3>NEXT JS</h3>
                    <span>Next.js es un marco web de desarrollo front-end de React de código abierto creado por Vercel.</span>
                    <a href="#">ver mas</a>
                </div>
            </div>
            <div className={tech.card}>
                <div>
                    <Image src={RICK}
                    width={100}
                    height={100}
                    alt="Rick and Morty"
                    />
                </div>
                <div className={tech.card__html}>
                    <h3>API Rick and Morty</h3>
                    <span>Api de Rick and Morty para entorno de pruebas.</span>
                    <a href="#">ver mas</a>
                </div>
            </div>
        </section>
    )
}
