import Link from "next/link";
import ClifsCatalogStyles from "../Components/CSS_Modules/ClifsCatalog.module.css";
import { Footer } from "../Components/Footer";

export const ClifsCatalog = () => {
  return (
    <>
      <section className={ClifsCatalogStyles.container}>
        <Link className={ClifsCatalogStyles.back} href="/Projects">
          <span className={ClifsCatalogStyles.arrow}>←</span> Back to projects
        </Link>
        <h2>Clif's Catalog</h2>
        <img
          className={ClifsCatalogStyles.image}
          src="./banner.webp"
          alt="Banner logo for Clifs Catalog"
        />
        <div className={ClifsCatalogStyles.anchors}>
          <a
            href="https://www.github.com/bealecs/meal"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out the Github Repo
          </a>
          <a
            href="https://clifscatalog.netlify.app"
            rel="noopener noreferrer"
            target="_blank"
          >
            Check out the site directly
          </a>
        </div>
        <h4 style={{textAlign:"center",fontSize:"2rem",padding:'2rem',lineHeight:"3rem"}}>This project is being redone as <a className={ClifsCatalogStyles.newProjAnchor} href="https://github.com/bealecs/NextMeal" target="_blank" rel="noopener noreferrer">Next Meal</a></h4>
        <article className={ClifsCatalogStyles.article}>
          <p>
            This catalog was my most long-standing project I would say. It
            started with me when I began my journey with web development. From
            learning about API requests to adding user authentication, this site
            has some pretty cool features.
            <br />
            <br />
            Firstly, I utilized Create-React-App to get started with a fresh
            react app. From there, I started creating some of the components for
            the UI layout, and then began fetching my data..
            <br />
            <br />
            For my meal data, I leveraged TheMealDB to fetch meal data from all
            different kinds of categories. I started out only generating random
            meals with the meal generator, but as my learnings expanded, I
            figured out how to browse through specific categories and meal ID
            #s. My user authentication is handled through Auth0. <br />
            <br />
            Like many of my other projects, I was juggling multiple unfamiliar
            technologies, and learning as I went along the way. One area of
            struggle for me was setting up the search by meal ID # function.
            Overall it was definitely an enriching experience.
          </p>
        </article>
      </section>
    </>
  );
};
