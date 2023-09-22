"use client"
import { useContext } from "react";
import PWPStyles from "../Components/CSS_Modules/PWP.module.css";
import { ThemeContext } from "../store/CtxProvider";

export const PWP = () => {

  const theme = useContext(ThemeContext);

  return (
    <section className={theme.body}>
      <div className={PWPStyles.container}>
        <h2> Pips With Paul </h2>
        <div className={PWPStyles.anchors}>
          <a
            href="https://www.github.com/bealecs/pipswithpaul"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out the Github Repo
          </a>
          <a
            href="https://pipswithpaul.vercel.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out the site directly
          </a>
        </div>
        <article className={PWPStyles.article}>
          <p>
            Paul is a long standing friend of mine from around the age of 11.
            When my programming journey started, Paul was there with me as well.
            We learned a bit of Java together and have been in touch up to
            today. <br />
            <br />
            Paul since moved on and started teaching himself the ins-and-outs of
            the forex trading market. After years of experiences, gains and
            losses, he has learned a lot. His goal is to help teach what he went
            through to avoid the 'bull****'. <br />
            <br />
            I decided to help him with his mentorship course by creating him a
            subscription based website. This site utilizes NextJS Framework,
            Firebase and firestore for database and usermanagement, and Stripe
            for the subscription integration. <br />
            <br />
            This proved to be one of my toughest challenges yet, as I was
            juggling multiple unfamiliar technologies, and learning as I went
            along the way. I definitely struggled when it came to setting up
            user authentication with firebase, but their documentation
            definitely helped out a lot! Overall it was definitely an enriching
            experience.
          </p>
        </article>
      </div>
    </section>
  );
};
