import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Avatar, Box, Card, CardContent, Divider } from "@mui/material";

export const BookmarkCard = (props) => {
  const { url } = props.bookmark;
  console.log(url);
  const [linkPreview, setLinkPreview] = useState(null);

  useEffect(() => {
    const getLinkPreview = async () => {
      try {
        const apiKey = "6fc91512f074a241bde043d39483b3e2"; // Replace with your API key
        const response = await fetch(`https://api.linkpreview.net/?key=${apiKey}&q=${url}`);
        const data = await response.json();
        setLinkPreview(data);
      } catch (error) {
        console.error("Failed fetching link preview:", error);
      }
    };
    getLinkPreview();
  }, [url]);

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 3,
          }}
        >
          {linkPreview && <Avatar src={linkPreview.image} variant="square" />}
        </Box>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
    </Card>
  );
};

BookmarkCard.propTypes = {
  url: PropTypes.string.isRequired,
};
