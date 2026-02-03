import Layout from "../components/Layout";

const CreateLecture = () => {
  return (
    <Layout>
      <h2>Create Lecture</h2>

      <form style={{ maxWidth: "400px" }}>
        <input placeholder="Lecture Title" style={{ width: "100%", marginBottom: "10px" }} />
        <textarea placeholder="Lecture Description" style={{ width: "100%", marginBottom: "10px" }} />
        <button>Create</button>
      </form>
    </Layout>
  );
};

export default CreateLecture;
