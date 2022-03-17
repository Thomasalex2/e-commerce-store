import pencil from ".//../graphics/pencils.jpg"

export default function Wishlist() {
  return (
    <main>
      <h4 class="heading-center">My Wishlist</h4>
          
          <section class="products-panel">
              <div class="card-layout layout-vertical">
                  <div class="badge-container">
                      <div class="card-header">
                          <div>
                              <img src={pencil} alt="pencils"/>
                              <div>
                                  <h4>Everyday Pencils</h4>
                                  <small>by Faber-Castell</small>
                              </div>
                          </div>
                          <p> Description of the special features of the pencil</p>
                          <p class="price-tag">Price: ₹299/-</p>
                      </div>
                      <div class= "card-clickables">
                          <div class="btn-container">
                              <button class="primary-btn">Move to Cart</button>
                              <button class="secondary-btn">Remove</button>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="card-layout layout-vertical">
                  <div class="badge-container">
                      <div class="card-header">
                          <div>
                              <img src={pencil} alt="pencils"/>
                              <div>
                                  <h4>Coloured Pencils</h4>
                                  <small>by Faber-Castell</small>
                              </div>
                          </div>
                          <p> Description of the special features of the pencil</p>
                          <p class="price-tag">Price: ₹499/-</p>
                      </div>
                      <div class= "card-clickables">
                          <div class="btn-container">
                              <button class="primary-btn">Move to Cart</button>
                              <button class="secondary-btn">Remove</button>
                          </div>
                      </div>
                  </div>
              </div>

              <div class="card-layout layout-vertical">
                  <div class="badge-container">
                      <div class="card-header">
                          <div>
                              <img src={pencil} alt="pencils"/>
                              <div>
                                  <h4>Drawing Pencils</h4>
                                  <small>by Faber-Castell</small>
                              </div>
                          </div>
                          <p> Description of the special features of the pencil</p>
                          <p class="price-tag">Price: ₹699/-</p>
                      </div>
                      <div class= "card-clickables">
                          <div class="btn-container">
                              <button class="primary-btn">Move to Cart</button>
                              <button class="secondary-btn">Remove</button>
                          </div>
                      </div>
                  </div>
              </div>
            </section>
  </main>
  );
}