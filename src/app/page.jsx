import home from "./../styles/home.module.css";

export default function Home() {
  return (
    <>
      <div className={home.container__home}>
        <h3>Rick and morty one of the best cartoons</h3>
        <p>
          After being missing for almost 20 years, Rick Sanchez unexpectedly arrives at his daughter Beth is doorstep and
          moves in with her and her family, using the garage as his personal laboratory.
        </p>
        <div className={home.container__buttons}>
          <button className={home.button__home} >Home</button>
        </div>
      </div>
    </>
  );
}
