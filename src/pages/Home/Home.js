import React from "react";
import SearchResultPage from "../SearchResult/SearchResult";


function Home() {
  return (
    <div className="home">
      <main>
        <section className="itens">
         <SearchResultPage/>
        </section>
      </main>
    </div>
  );
}

export default Home;
