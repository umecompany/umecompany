import { useEffect, useState } from "react";
import Card from "@mui/material/Card";

import axios from "axios";
import { Box, Button, TextareaAutosize } from "@mui/material";
import { Record } from "./components/Record.jsx";

function App() {
  const [list, setlist] = useState([]);
  const [select, setSelect] = useState({});

  const addList = () => {
    const newObj = {
      text: "　",
    };
    axios
      .post("/api/lists", newObj)
      .then((response) => setlist(response.data))
      .catch((err) => console.log(err));
  };

  const onSelect = (obj) => {
    setSelect(obj);
    console.log(obj);
  };

  useEffect(() => {
    axios.get("/api/lists").then((res) => {
      const persons = res.data;
      setlist(persons);
    });
  }, [list]);
  return (
    <main>
      <h1 style={{ width: "100%", textAlign: "center" }}>DIG Note</h1>
      <Box
        sx={{
          display: "inline-block",
          height: "700px",
          width: "50%",
          backgroundColor: " #ccb6b4",
          float: "left",
        }}
      >
        <Box
          sx={{
            height: "40px",
            width: "100%",
          }}
        >
          <TextareaAutosize
            placeholder="検索"
            style={{ width: "78%", height: 35, padding: 1 }}
          />
          <Button
            sx={{
              float: "right",
              backgroundColor: " #d1cccb",
              p: 0.5,
              height: "40px",
              width: "20%",
              border: "2px solid #0a0a09",
            }}
            onClick={addList}
          >
            +
          </Button>
        </Box>
        <div>
          {" "}
          {Array.isArray(list) &&
            list.map((obj, i) => (
              <Card
                onClick={() => onSelect(obj)}
                key={i}
                variant="outlined"
                sx={{
                  color: "text.secondary",
                  p: 0.5,
                  m: 1,
                }}
              >
                {obj.text} {obj.created_at}{" "}
              </Card>
            ))}
        </div>
      </Box>
      <Box
        sx={{
          display: "inline-block",
          height: "700px",
          width: "50%",
          backgroundColor: " #ffd2cc",
          float: "right",
        }}
      >
        <Record select={select} setlist={setlist}></Record>
      </Box>
    </main>
  );
}

export default App;
