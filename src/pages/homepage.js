import pencil from ".//../graphics/pencils.jpg"

export default function Cart() {
  return (
      <main>
    <div class="banner-images">
        <img src={pencil} alt="pencils"/>
        <img src={pencil} alt="pencils"/>
        <img src={pencil} alt="pencils"/>
        <img src={pencil} alt="pencils"/>
        <img src={pencil} alt="pencils"/>
        <img src={pencil} alt="pencils"/>
    </div>

    <section class="cover-image">
        <img src={pencil} alt="pencils"/>
        <div class="text-over-media-center">
            <h4>The one stop shop for all your Pencil needs</h4>
            <div class="btn-container">
                <button class="primary-btn">Shop Now</button>
                <button class="secondary-btn">Blogs</button>
            </div>
        </div>
    </section>

    <br/>

    <section class="homepage-subgrid">

        <div class="grid-simplified grid-70-30">
            <div class="grid-left">
                <p>Check out the different types of sketching pencils</p>
                <div class="btn-container">
                    <button class="primary-btn">Check it out</button>
                </div>
            </div>
            <div class="grid-right">
                <img class="fill-img" src={pencil}/>
            </div>
        </div>

        <div class="grid-simplified grid-70-30">
            <div class="grid-left">
                <p>Check out the collection of coloured pencils</p>
                <div class="btn-container">
                    <button class="primary-btn">Check it out</button>
                </div>
            </div>
            <div class="grid-right">
                <img class="fill-img" src={pencil}/>
            </div>
        </div>

    </section>
   </main>
  );
}