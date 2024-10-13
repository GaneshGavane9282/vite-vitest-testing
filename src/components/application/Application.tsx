const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img src="https://via.placeholder.com/150" alt="a person with a laptop" />
      <div data-testid="custom-element">Custom HTML Element</div>
      <form>
        <div>
          <label htmlFor="Name">Name</label>
          <input
            type="text"
            id="Name"
            value="Ganesh"
            onChange={() => {}}
            placeholder="FullName"
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <textarea name="name" id="name" />
        </div>

        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>

        <div>
          <label htmlFor="name">Country</label>
          <select name="job-location" id="job-location" title="Job Location">
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="IN">India</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" id="terms" title="terms" />I agree to the
            terms and conditions
          </label>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Application;
