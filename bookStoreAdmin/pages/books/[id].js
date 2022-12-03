import React, { useEffect } from "react";
import data from "../../Arrays/bookData.json";
import router from "next/router";
import InnerPage from "../../components/sectionInnerPage/Inner";
import Layout from "../../components/layout";

function Books() {
  const [books, setBooks] = React.useState(data);
  const [id, setId] = React.useState();
  useEffect(() => {
    const id = router.query.id;
    setId(id);
    const book = data.find((book) => book.id == id);
    setBooks(book);
  });
  console.log(books);
  if (!books) {
    console.log("Books not found");
  }

  return (
    <>
      <Layout>
        <InnerPage page={"Book"} data={books} />
      </Layout>
    </>
  );
}

export default Books;
