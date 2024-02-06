import Form from "react-bootstrap/Form";

function SearchBar(props) {
  const { seaValue, changeVal } = props;

  return (
    <>
      {/* <Form.Control
        onChange={changeVal}
        value={seaValue}
        type="text"
        placeholder="Search Here"
      /> */}

      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => changeVal(e)}
      />
    </>
  );
}

export default SearchBar;
