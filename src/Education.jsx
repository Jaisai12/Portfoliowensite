import "./index.css";

function Education() {
  return (
    <div className="edumain">
      <h2 className="edutitle">Education</h2>
      <div className="edufirst">
        <img
          src="https://img.freepik.com/premium-photo/college-student-chartreuse-shoes-holding-ipad-carrying-little-open-bag-his-back-is-r_1309778-33805.jpg?w=740"
          alt="Student"
          className="block"
          style={{ maxHeight: "350px" }}
        />
        <p className="edumba">
          Completed my MBA in 2023, specializing in Finance and HR
        </p>
      </div>
    </div>
  );
}

export default Education;
