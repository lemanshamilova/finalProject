import React from 'react'
import { News } from '../../../data/data'

const NewsPage = () => {
  return (
    <section>
        <div className="container">
            <div className="newsPage">
            {News?.map((item, index) => (
                  <div className="news_box" key={index}>
                    <p style={{ color: "gray" }}>By : {item?.author}</p>
                    <h3>{item?.name}</h3>
                    <p>{item?.description}</p>
                  </div>
                ))}
            </div>
        </div>
        
      
    </section>
  )
}

export default NewsPage
