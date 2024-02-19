import React from 'react';
import SearchHeader from '../components/Search/SearchHeader';
import SearchWiki from "../components/Search/SearchWiki";
import SearchResult from "../components/Search/SearchResult";
import SearchQuestions from "../components/Search/SearchQuestions";

import './../assets/Index.css';

function Search() {
  return (
    <div className={'Artado-container is-fluid'} style={{ margin: '10px' }}>
      <SearchHeader />
      <div className={'Artado-row'} style={{ marginTop: 15 }}>
          <div className={'column-xs-12 column-sm-12 column-md-7 column-lg-7 column-xl-7'} id={'responsive-end'}>
              <SearchResult />
              <SearchQuestions />
          </div>
          <div className={'column-xs-12 column-sm-12 column-md-1 column-lg-1 column-xl-1'} id={'responsive-none'}></div>
          <div className={'column-xs-12 column-sm-12 column-md-4 column-lg-4 column-xl-4'} id={'responsive-first'}>
              <SearchWiki />
          </div>
      </div>
    </div>
  );
}

export default Search;
