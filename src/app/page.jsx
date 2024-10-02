import { Tech } from "@/components/Tech";
import home from "./../styles/home.module.css";
import { Dancing_Script, Afacad } from 'next/font/google'

export const roboto = Dancing_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export const afa = Afacad({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})
export default function Home() {

  return (
    <div className={home.container__home}>
      <h3 className={roboto.className}>Rick and morty one of the best cartoons</h3>
      <p className={afa.className}>
        After being missing for almost 20 years, Rick Sanchez unexpectedly arrives at his daughter Beth is doorstep and
        moves in with her and her family, using the garage as his personal laboratory.
      </p>
      <div className={home.center}>
        <div className={home.container__buttons}>
          <button className={home.button__home}>Home</button>
        </div>
      </div>
      <Tech></Tech>
    </div>
  );
}
