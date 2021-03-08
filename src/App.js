import "./App.css";

function App() {
  return (
    <div className="App">
      <div class="svg-part">
        <img src="images/bg-pattern-desktop.svg" alt="" class="pattern" />
        <img
          src="images/illustration-woman-online-desktop.svg"
          alt="illustration of a woman shopping online"
          class="illu-woman"
        />
        <img src="images/illustration-box-desktop.svg" alt="box" class="box" />
      </div>
      <div class="faq">
        <p class="question">How many team members can I invite?</p>
        <p class="answer">
          You can invite up to 2 additional users on the Free plan. There is no
          limit on team members for the Premium plan.
        </p>
        <p class="question">What is the maximum file upload size?</p>
        <p class="answer">
          No more than 2GB. All files in your account must fit your allotted
          storage space.
        </p>
        <p class="question">How do I reset my password?</p>
        <p class="answer">
          Click “Forgot password” from the login page or “Change password” from
          your profile page. A reset link will be emailed to you.
        </p>
        <p class="question">Can I cancel my subscription?</p>
        <p class="answer">
          Yes! Send us a message and we’ll process your request no questions
          asked.
        </p>
        <p class="question">Do you provide additional support?</p>
        <p class="answer">
          Chat and email support is available 24/7. Phone lines are open during
          normal business hours.
        </p>
      </div>
    </div>
  );
}

export default App;
