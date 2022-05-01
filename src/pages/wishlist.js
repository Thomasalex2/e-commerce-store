import pencil from ".//../graphics/pencils.jpg"

export default function Wishlist() {
  return (
    <main>
      <h4 className="heading-center">My Wishlist</h4>
          
          <section className="products-panel">
              <div className="card-layout layout-vertical">
                  <div className="badge-container">
                      <div className="card-header">
                          <div>
                              <img src={pencil} alt="pencils"/>
                              <div>
                                  <h4>Everyday Pencils</h4>
                                  <small>by Faber-Castell</small>
                              </div>
                          </div>
                          <p> Description of the special features of the pencil</p>
                          <p className="price-tag">Price: ₹299/-</p>
                      </div>
                      <div className= "card-clickables">
                          <div className="btn-container">
                              <button className="primary-btn">Move to Cart</button>
                              <button className="secondary-btn">Remove</button>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="card-layout layout-vertical">
                  <div className="badge-container">
                      <div className="card-header">
                          <div>
                              <img src={pencil} alt="pencils"/>
                              <div>
                                  <h4>Coloured Pencils</h4>
                                  <small>by Faber-Castell</small>
                              </div>
                          </div>
                          <p> Description of the special features of the pencil</p>
                          <p className="price-tag">Price: ₹499/-</p>
                      </div>
                      <div className= "card-clickables">
                          <div className="btn-container">
                              <button className="primary-btn">Move to Cart</button>
                              <button className="secondary-btn">Remove</button>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="card-layout layout-vertical">
                  <div className="badge-container">
                      <div className="card-header">
                          <div>
                              <img src={pencil} alt="pencils"/>
                              <div>
                                  <h4>Drawing Pencils</h4>
                                  <small>by Faber-Castell</small>
                              </div>
                          </div>
                          <p> Description of the special features of the pencil</p>
                          <p className="price-tag">Price: ₹699/-</p>
                      </div>
                      <div className= "card-clickables">
                          <div className="btn-container">
                              <button className="primary-btn">Move to Cart</button>
                              <button className="secondary-btn">Remove</button>
                          </div>
                      </div>
                  </div>
              </div>
            </section>
  </main>
  );
}