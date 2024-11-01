import Image from "next/image";
// import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <nav>
      <h2>&lt;header&gt;</h2>
        <h2>&lt;nav&gt;</h2>
        <ul>
          <li><a href='#'>HOME</a></li>
          <li><a href='#'>ABOUT</a></li>
          <li><a href='#'>PROJECTS</a></li>
          <li><a href='#'>CONTACT</a></li>
          <li><a href='#'>CV</a></li>
        </ul>
        <h2>&lt;/nav&gt;</h2>
        <h2>&lt;/header&gt;</h2>
      </nav>
      <h1>&lt;h1&gt;ME: BRISHA PATEL&lt;/h1&gt;</h1>
      <h2>&lt;h2&gt;ABOUT&lt;/h2&gt;</h2>
      <p>&lt;p&gt;Junior Software Engineer with a background in biomedical science. My interest in tech grew from seeing how advancements in technology can revolutionise and improve lives. I transitioned into tech to create solutions that make a difference. I love tackling problems, have a keen eye for detail, and I’m dedicated to continuous learning.&lt;/p&gt;</p>
      <h2>&lt;h2&gt;PROJECTS&lt;/h2&gt;</h2>
      <ul>
      <h2>&lt;ul&gt;</h2>
        <li><h3>PantryPal</h3> Image Placeholder<a href='#'>github link</a><a href='#'>Deployed link</a><a href='#'>Learn More</a></li>
        <li><h3>WebScraperV2</h3> Image Placeholder<a href='#'>github link</a><a href='#'>Deployed link</a><a href='#'>Learn More</a></li>
        <li><h3>WeatherApp</h3> Image Placeholder<a href='#'>github link</a><a href='#'>Deployed link</a><a href='#'>Learn More</a></li>
        <h2>&lt;/ul&gt;</h2>      
      </ul>
      <footer>
      <h2>&lt;footer&gt;</h2>
      <h2>&lt;h2&gt;CONTACT&lt;/h2&gt;</h2>
      <p>&lt;p&gt;Feel free to reach out to me:&lt;/p&gt;</p>
      <ul>
          <li><a href="https://github.com/BrishaP" target="_blank">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/brisha-patel/" target="_blank">LinkedIn</a></li>
          <li><a href="mailto:brishapatel930@gmail.com">brishapatel930@gmail.com</a></li>
        </ul>
        <h2>&lt;/footer&gt;</h2>
        </footer>
    </div>
  );
}
