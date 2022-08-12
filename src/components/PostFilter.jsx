import Form from "react-bootstrap/Form";

function PostFilter({ filter, setFilter }) {
  const styles = {
    maxWidth: "900px",
    margin: "10px auto",
    color: "#ba8fff",
    background: "#18191a",
  };

  return (
    <Form.Select
      style={styles}
      onChange={(e) => setFilter({ ...filter, sort: e.target.value })}
    >
      <option defaultValue="id" disabled>
        Select Sort
      </option>
      <option value="id">Sort By Date Added</option>
      <option value="title">Sort By Post Title</option>
      <option value="body">Sort By Post Body</option>
    </Form.Select>
  );
}

export default PostFilter;
