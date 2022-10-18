<script lang="ts">
  import Link from '$lib/Link.svelte'
</script>

<h1>Samuel Jones</h1>


<section id=about>
  <h2>About Me</h2>
  <p>
    <strong>Hi!</strong> My name is <strong>Samuel Jones</strong>, and 
    I am a senior in Computer Science at Louisiana State University.
  </p>
  <div>
    <h3>Student</h3>
    <p>
      I love learning about as many aspects of computer science as I 
      can. To this end, I've taken courses and done projects in areas 
      including web development, cybersecurity, video game design, 
      computer vision, and autonomous robotics.
    </p>
  </div>
  <div>
    <h3>Engineer</h3>
    <p>
      Although the pure thrill of problem solving is what first 
      attracted me to programming, over the past few years I have come to
      love visual design, which I prefer to show through my work than tell.
      I also enjoy and have some experience working in other areas of web 
      development like backend.
    </p>
  </div>
</section>

<section id=work>
  <h2>Work Experience</h2>
  <div>
    <h3>Flexport</h3>
    <p>
      My most recent experience is my <strong>Full Stack Software 
      Engineer</strong> internship at Flexport. There I owned a support form 
      integration feature end-to-end, heavily refactoring the feature in one 
      application and adding an implementation in another, allowing better 
      user experience and reduced complexity when modifying the support form. 
      This allowed me to work as a full-stack developer in a scrum team on 
      my own project and general tasks, developing with technologies such as 
      React.js, Ruby on Rails, NextJS, Flow, and GraphQL.
    </p>
    <img src="flexport_logo.png" alt="Flexport logo" srcset="">
  </div>
  <span aria-label="click this or scroll right to see more work experience">See More</span>
</section>

<section class=projects>
  <h2>My Projects</h2>
  <div>
    <h3>Google Font Box</h3>
    <p>
      My most recent project is Google Font Box! Google Font Box is a simple 
      tool to help developers develop font and color schemes for their next 
      project, as users can make custom font schemes from Google Fonts and 
      choose their own colors as well.
    </p>
    <p>
      Technologies: Svelte, SvelteKit, TypeScript, Bootstrap, SCSS
    </p>
    <Link url="https://samjones329.github.io/google-font-box">Try it out!</Link>
    <Link url="https://github.com/samjones329/google-font-box">GitHub</Link>
    <img src="googlefontboxscreenshot.png" alt="Screenshot of Google Font Box">
  </div>
  <span aria-label="click this or scroll right to see more projects">See More</span>
</section>

<section id=contact>
  <h2>Contact Me</h2>
  <div>
    <img src="logo.svg" alt="Samuel Jones' Logo">
    <Link url={"mailto:spjones329@gmail.com"
      +"?subject="
        +"Hello from your website!"
      +"&body="
        +"Hello Samuel,\n\n"
        +"Your message/request here...\n\n"
        +"Regards,\n"
        +"Your name here..."
    }>
      <i class="fa-regular fa-envelope"></i> spjones329@gmail.com
    </Link>
  </div>
  <div>
    <form action="">
      <label for="name">Name</label>
      <input type="text" name=name>

      <label for="senderemail">Your Email</label>
      <input type="text" name=senderemail>

      <label for="message">Message</label>
      <input type="text" name=message>

      <button type="submit">Send</button>
    </form>
  </div>
</section>