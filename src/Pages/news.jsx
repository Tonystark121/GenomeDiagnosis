import React, { useState } from "react";
import styles from "../styles/news.module.css";
import NewsCard from "./newscard.jsx";
import { dummy_Data } from "./data.js";

const News = () => {
  console.log(dummy_Data);
  const [category, setCategory] = useState('Events'); // Corrected typo here
  return (
    <div className={styles.news}>
      <h2>{category} | recent Development in this bar</h2>
      <div className={styles.category}>
        <div style={category === 'Events' ? {backgroundColor:'#1576d1', color:'#fff'} : {}} onClick={e => setCategory('Events')}> {/* Corrected typo here */}
          <p>Events</p>
        </div>
        <div style={category === 'News' ? {backgroundColor:'#1576d1', color:'#fff'} : {}} onClick={e => setCategory('News')}>
          <p>News</p>
        </div>
        <div style={category === 'Blogs' ? {backgroundColor:'#1576d1', color:'#fff'} : {}} onClick={e => setCategory('Blogs')}>
          <p>Blogs</p>
        </div>
      </div>
      <div className={styles.cards}>
        {
            dummy_Data.filter(items => items.category.includes(category)).slice(0,3).map((item, idx)=>(
                <NewsCard key={idx} data={item} />
            ))
        }
      </div>
      <a href="#">See more Latest {category}</a>
    </div>
  );
};

export default News; // Corrected component name here
