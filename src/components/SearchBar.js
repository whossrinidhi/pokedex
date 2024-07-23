import { Input, Button } from "@chakra-ui/react";
import { useState, useEffect } from "react";
export default function SearchBar(props) {
  const [input, setInput] = useState(props.inputValue || ""); //for local, and it will export to the card comp when button is clicked
  useEffect(() => {
    setInput(props.inputValue);
  }, [props.inputValue]); //for local, will rerender if value is changed in parent.

  return (
    <div className="nav">
      <Input
        bg="white"
        placeholder="pokemon"
        marginTop={5}
        size="md"
        width="13em"
        ref={props.inputRef}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <Button
        colorScheme="pink"
        size="sm"
        onClick={() => props.handleChange(input)}
      >
        Search
      </Button>
    </div>
  );
}
