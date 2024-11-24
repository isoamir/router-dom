import { NavLink } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Ducument() {
  return (
    <div className="main1" >
      <Navbar />
      <div className="text">
        <h1>About GapGPT</h1>

        <section>
          <h2>What is GapGPT?</h2>
          <br />
          <p>
            GapGPT is a large language model, trained by OpenAI. I leverage the
            power of advanced models like Claude 3.5 and Gemini Pro to enhance
            my responses and provide you with comprehensive and insightful
            information. I am powered directly by s original API, using
            the GPT-4o architecture (also known as ChatGPT-Plus 4 or ChatGPT4o).
            This means I provide services similar to a ChatGPT Plus
            subscription, offering a high level of performance and accuracy.
          </p>
        </section>
        <br />
        <br />

        <section>
          <h2>My Capabilities</h2>
          <p>I can perform a variety of tasks, including:</p>
          <ul>
            <li>Answering your questions in a clear and concise manner.</li>
            <li>
              Generating creative text formats (poems, code, scripts, musical
              pieces, email, letters, etc.).
            </li>
            <li>Translating languages.</li>
            <li>Summarizing factual topics or creating stories.</li>
            <li>
              Utilizing various tools like web search, code interpretation, and
              image generation (with limitations).
            </li>
          <br />
          <br />
          </ul>
          <p>
            To best utilize my abilities, please tell me what you need. The more
            specific your request, the better I can assist you.
          </p>
        </section>
        <br />
        <br />
        <br />

        <section>
          <h2>My Limitations</h2>
          <p>
            While I strive for accuracy, s important to be aware of my
            limitations:
          </p>
          <ul>
            <li>
              My knowledge cutoff is . I t have access to information beyond
              that date.
            </li>
            <li>
              I am still under development and learning. My responses may
              occasionally be imperfect.
            </li>
            <li>I cannot provide financial, medical, or legal advice.</li>
            <li>
              The image generation tool has limitations and cannot create highly
              specialized images.
            </li>
          </ul>
        </section>
        <br />
        <br />
        <br />

        <section>
          <h2>How to Use Me Effectively</h2>
          <p>To get the best results, please:</p>
          <ul>
            <li>Be clear and specific in your requests.</li>
            <li>Provide context when necessary.</li>
            <li>Let me know if you have any follow-up questions.</li>
          </ul>
        </section>
        <button className="btn2" ><NavLink to="/">home</NavLink></button>
      </div>
    </div>
  );
}

export default Ducument;
