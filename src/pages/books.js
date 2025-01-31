import Head from "next/head";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { BookmarkCard } from "src/sections/companies/bookmark-card";
import { CompaniesSearch } from "src/sections/companies/companies-search";

const bookmarks = [
  {
    id: "2569ce0d517a7f06d3ea1f24",
    createdAt: "27/03/2019",
    url: "https://www.indigo.ca/en-ca/yellowface-a-novel/9780063323179.html",
    category: "books",
  },
  {
    id: "2569ce0d517a7f06d3ea1f24",
    createdAt: "27/03/2019",
    url: "https://www.indigo.ca/en-ca/yellowface-a-novel/9780063323179.html",
    category: "books",
  },
  {
    id: "2569ce0d517a7f06d3ea1f24",
    createdAt: "27/03/2019",
    url: "https://www.indigo.ca/en-ca/the-creative-act-a-way-of-being/9780593652886.html",
    category: "books",
  },
];

const Page = () => (
  <>
    <Head>
      <title>Books</title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack direction="row" justifyContent="space-between" spacing={4}>
            <Stack spacing={1}>
              <Typography variant="h4">Books</Typography>
            </Stack>
          </Stack>
          <Grid container spacing={3}>
            {bookmarks.map((bookmark) => (
              <Grid xs={12} md={6} lg={4} key={bookmark.id}>
                <BookmarkCard bookmark={bookmark} />
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Pagination count={3} size="small" />
          </Box>
        </Stack>
      </Container>
    </Box>
  </>
);

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
