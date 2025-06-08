import { Box, Button, TextareaAutosize } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

export function Record({ select, setlist }) {
  // console.log(select.text);
  const [text, setText] = useState(select.text || "");
  const changeText = () => {
    select.text = text;
    const url = axios
      .put("/api/lists", select)
      .then((a) => {
        console.log("データ更新:", a);
      })

      .catch((err) => {
        console.log("err:", err);
      });
    console.log(url);
    setlist("");
  };
  useEffect(() => {
    setText(select.text || "");
  }, [select.text]);
  return (
    <main>
      <Box />
      <TextareaAutosize
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></TextareaAutosize>
      <Button
        sx={{
          float: "right",
          backgroundColor: " #d1cccb",
          p: 0.5,
          height: "40px",
          width: "20%",
          border: "2px solid #0a0a09",
        }}
        onClick={changeText}
      >
        変更
      </Button>
    </main>
  );
}
