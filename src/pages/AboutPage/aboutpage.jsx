import Navbar from "../../components/Navbar/navbar";
import "./aboutpage.css";
import related_articles from "../../assets/screenshots/related_articles.png";
import search_page from "../../assets/screenshots/search_page.png";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Navbar />
      <section className="main">
        <div
          className="container"
          style={{ padding: "20px", textAlign: "left" }}
        >
          <br></br>
          <br></br>
          <h1>About Our Project</h1>
          <p>
            Welcome to our news topic modeling project! Our platform is designed
            to provide users with an immersive and informative experience as
            they explore a diverse range of news topics. In today's fast-paced
            world, staying informed about current events and understanding the
            various perspectives surrounding them is more important than ever.
            Our project aims to facilitate this by leveraging cutting-edge
            technologies in natural language processing and machine learning.
          </p>
          <p>
            At the heart of our project lies the powerful technique of Latent
            Dirichlet Allocation (LDA) for topic modeling. By analyzing the
            textual content of news articles, LDA enables us to uncover hidden
            topics and themes, organizing articles into cohesive clusters based
            on their thematic similarities. This not only allows users to
            discover news articles on specific topics of interest but also
            provides a deeper understanding of the broader trends and issues
            shaping our world.
          </p>
          <hr></hr>
          <h2>How It Works</h2>
          <p>
            Simply copy and paste text from a news source into the search box
            above and hit enter. Our system will analyze the text and assign it
            a topic ID. You'll then see a word cloud representing the main
            topics in the input text.
          </p>
          <p>
            In addition, we'll also display a list of similar news articles from
            our database, allowing you to explore related content easily.
          </p>
          {/* Add image of the search page */}
          <img src={search_page} width={700} height={400} alt="Search Page" />
          <hr></hr>
          <h2>Explore Related News</h2>
          <p>
            After entering your news text and receiving the topic ID and word
            cloud, you'll also see a list of similar news articles below. These
            articles are selected based on their similarity to the input text in
            terms of topics.
          </p>
          <p>
            Click on any of the suggested articles to read more and further
            discover related news topics.
          </p>
          {/* Add image of the results page */}
          <img
            src={related_articles}
            width={700}
            height={400}
            alt="Results Page"
          />
          <hr></hr>
          <h2>Scope</h2>
          <p>
            <b>User Feedback Integration:</b> Allow users to provide feedback on
            suggested articles (e.g., upvoting/downvoting) to improve the
            relevance of recommendations over time through machine learning
            algorithms.
          </p>
          <p>
            <b>Real-time News Updates:</b> Integrate with real-time news APIs to
            provide users with the latest news updates and recommendations as
            soon as they are published.
          </p>
          <p>
            <b>Social Media Integration:</b> Incorporate social media data
            analysis to identify trending topics, gauge public sentiment, and
            provide recommendations based on social media discussions and
            interactions.
          </p>
          <p>
            <b>Interactive Visualization:</b> Create interactive visualizations
            or dashboards to help users explore news topics and related articles
            more intuitively, facilitating deeper insights into complex topics.
          </p>
          <p>
            <b>Localized News Recommendations:</b> Customize news
            recommendations based on the user's geographical location or
            language preferences to provide more relevant and localized content.
          </p>
          <hr></hr>
          <h2>Project Team</h2>
          <p>Aashish Adhikari 076BCT003</p>
          <p>Abhishek Sharma 076BCT004</p>
          <p>Hrishav Khadka 076BCT027</p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
