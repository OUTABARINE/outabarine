import { useEffect, useState } from "react";
// material
import {
  Grid,
  Container,
  Stack,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";

// components
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import PostCard from "../components/Card";
import { Box } from "@mui/system";
import { styled } from "@mui/material/styles";

import avatar from "../assets/img/me.png";

// ----------------------------------------------------------------------
const LoaderStyle = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  justifyContent: "center",
  padding: "200px",
}));

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@famzil"
    )
      .then((resp) => resp.json())
      .then((data) => {
        const results = data.items.map((item) => ({
          id: item.guid,
          cover: item.thumbnail,
          title: item.title,
          createdAt: item.pubDate,
          link: item.link,
          view: "",
          comment: "",
          share: "",
          favorite: "",
          author: {
            name: item.author,
            avatarUrl: avatar,
          },
        }));
        setPosts(results);
        setLoading(false);
      });
  }, [posts]);

  return (
    <Box>
      <title>Blog</title>
      {loading && (
        <LoaderStyle>
          <CircularProgress color="inherit" />
        </LoaderStyle>
      )}
      {!loading && (
        <Container>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            pt={10}
            pb={3}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: "800",
                lineHeight: "1.11429",
                fontFamily: '"Segoe UI"',
                color: "text.primary",
              }}
              gutterBottom
            >
              My Blog
            </Typography>
            <Button
              variant="contained"
              href="https://famzil.medium.com/"
              target="_blank"
              sx={{ color: "primary", bgcolor: "background.neutral" }}
              aria-label="See more posts"
              startIcon={<DoubleArrowIcon />}
            >
              See more
            </Button>
          </Stack>
          {posts ? (
            <Grid container spacing={3}>
              {posts.map((post, index) => (
                <PostCard key={post.id} post={post} index={index} />
              ))}
            </Grid>
          ) : (
            ""
          )}
        </Container>
      )}
    </Box>
  );
}
