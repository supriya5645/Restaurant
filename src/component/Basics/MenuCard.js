import React from 'react'

function MenuCard({menuData}) {
    // console.log(menuData);
  return (
    <>
    <section className="main-card--cointainer">
    {menuData.map((curElem)=>{
       const {id, name, category, image ,description}=curElem;
        return (
            <>
            <div className="card-container" key={id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-cricle subtle">{id}</span>
                <span className="card-author subtle">{name}</span>
                <h2 className="card-title">{name}</h2>
                <span className="card-description subtle">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
                  necessitatibus rem earum tenetur provident aperiam ullam velit
                  doloribus repellendus odit, iste, quae amet cum quos!
                  {description}
                </span>
                <div className="card-read">Read</div>
              </div>
              <img src={curElem.image} alt="images" className="card-media"/>
              <span className="card-tag subtle">Order Now</span>
            </div>
          </div>
          </>
        );
    })}
    </section>
    </>
  );
};

export default MenuCard
