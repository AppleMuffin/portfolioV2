const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="wrapper">
        <h2>Projects</h2>
        <ul className="projectList">
          <li>
            <div className="projectImg">
              <img src="./assets/quickFlickPicker.png" alt="QuickFlickPicker, an app that allows you to create lists and save movies." />
            </div>
            <div className="projectDesc">
              <h3>Quick Flick Picker</h3>
              <p>Quick Flick Picker utilizes The Movie Database API and Google Firebase to allow users to find 800,000+ movies and save them to user-made lists. </p>
              <div className="projectLinks">
                <p><a href="https://quickflickpicker.netlify.app/">Live</a></p>
                <p><a href="https://github.com/Quick-Flick-Picker-Cohort-42/quick-flick">GitHub</a></p>
              </div>
              <ul className="skillsUsed">
                <p>HTML 5</p>
                <p>CSS 3</p>
                <p>JavaScript</p>
              </ul>
            </div>
          </li>
          <li>
            <div className="projectImg">
              <img src="./assets/pictures/recipeRandomizer.png" alt="Recipe Randomizer, an app that provides randomized recipes based on user selection preferences." />
            </div>
            <div className="projectDesc">
              <h3>Recipe Randomizer</h3>
              <p>Recipe Randomizer is A web application utilizing AJAX requests to provide users with a recipe based on their ingredient and nutrient preferences. </p>
              <div className="projectLinks">
                <p><a href="https://fabulous-fox-e3dc52.netlify.app/">Live</a></p>
                <p><a href="https://github.com/Project2-corey-jeremy/project2-recipe-selector">GitHub</a></p>
              </div>
              <ul className="skillsUsed">
                <p>HTML 5</p>
                <p>CSS 3</p>
                <p>JavaScript</p>
              </ul>
            </div>
          </li>
          <li>
            <div className="projectImg">
              <img src="./assets/pictures/creative.png" alt="Creative, a multi page repsonsive PSD conversion using HTML and CSS3." />
            </div>
            <div className="projectDesc">
              <h3>Creative</h3>
              <p>Creative is a responsive, multi-page PSD conversion designed in HTML and CSS.</p>
              <div className="projectLinks">
                <p><a href="https://jeremychaiproject1.netlify.app/">Live</a></p>
                <p><a href="https://github.com/AppleMuffin/jeremyChaiProject1">GitHub</a></p>
              </div>
              <ul className="skillsUsed">
                <p>HTML 5</p>
                <p>CSS 3</p>
              </ul>
            </div>
          </li>
          <li>
            <div className="projectImg">
              <img src="./assets/pictures/thunderForceStadium.png" alt="" />
            </div>
            <div className="projectDesc">
              <h3>Thunder Force Stadium</h3>
              <p>Thunder Force Stadium is a responsive single page PSD conversion designed in HTML and CSS.</p>
              <div className="projectLinks">
                <p><a href="https://sunny-pudding-0885ef.netlify.app/">Live</a></p>
                <p><a href="https://github.com/AppleMuffin/assignment1">GitHub</a></p>
              </div>
              <ul className="skillsUsed">
                <p>HTML 5</p>
                <p>CSS 3</p>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Projects;