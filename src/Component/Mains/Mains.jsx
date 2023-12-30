import React from "react";
import "./Mains.css";
// import img
const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: `Bora Bora`,
    location: `New Zealand`,
    grade: `CULTURAL RELAX`,
    fees: `$700`,
    description: `The option of romance, Bora Bora is one of the best travel destination in the world. This place is known for its luxurious stays and adventurous activities.`,
  },
  // {
  //   id: 2,
  //   imgSrc: img2,
  //   destTitle: `Machu Picchu`,
  //   location: `Peru`,
  //   grade: `CULTURAL RELAX`,
  //   fees: `$600`,
  //   description: `Muayna Picchu is a mountain in peru, rising over Machu Picchu, the so-called lost city of Incas. This place is popular among tourists as the sunrise from the Sun GAte is simply spectacular`,
  // },
  // {
  //   id: 3,
  //   imgSrc: img3,
  //   destTitle: `Great Barrier Reef`,
  //   location: `Australia`,
  //   grade: `CULTURAL RELAX`,
  //   fees: `$700`,
  //   description: `One of th emost remarkable Australian natural gifts is the Great Barrier Reef. The Hallmard os this place is riavish and beauty. Always interesting to be in this place`,
  // },
  // {
  //   id: 4,
  //   imgSrc: img4,
  //   destTitle: `Capadocia`,
  //   location: `Turkey`,
  //   grade: `CULTURAL RELAX`,
  //   fees: `$800`,
  //   description: `According to the World Tourism Ranking, 45 Million people visit Turkey each year, and from from that about 2 Million come to visit Cappadocia. This place is known for its luxurious stays and adventurous activities`,
  // },
  // {
  //   id: 5,
  //   imgSrc: img5,
  //   destTitle: `Guanajuato`,
  //   location: `Mexico`,
  //   grade: `CULTURAL RELAX`,
  //   fees: `$1100`,
  //   description: `A city in central Mexico, Guanajuato is known for its history of silver minig and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.`,
  // },
  // {
  //   id: 6,
  //   imgSrc: img6,
  //   destTitle: `Cinque Torre`,
  //   location: `Italy`,
  //   grade: `CULTURAL RELAX`,
  //   fees: `$840`,
  //   description: `The vibran hues of the house are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seefood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!.`,
  // },
  // {
  //   id: 7,
  //   imgSrc: img7,
  //   destTitle: `Angkor Wat`,
  //   location: `Canbodia`,
  //   grade: `CULTURAL RELAX`,
  //   fees: `$790`,
  //   description: `Angkor wat represents the entire range of khenr art from the 9th to the 15th century. This temple is considered the heart and soul of cambodia. This place is known for its luxurious stays and adventurous activities`,
  // },
  // {
  //   id: 8,
  //   imgSrc: img8,
  //   destTitle: `Taj Mahai`,
  //   location: `India`,
  //   grade: `CULTURAL RELAX`,
  //   fees: `$900`,
  //   description: `An immense nausolem of white marbie, built-in Agra vy Mughai emperor Shah Jahan in memory of his wifr Mutaz, the moment is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities`,
  // },
  // {
  //   id: 9,
  //   imgSrc: img9,
  //   destTitle: `Bali Island`,
  //   location: `Indonesia`,
  //   grade: `CULTURAL RELAX`,
  //   fees: `$500`,
  //   description: `Bali is an Idonesian ISland and one of the best holiday destination in the Indonesaian archipelgo. Bali is known for its wolcanic mountains, history, art & culture, food, temples anf beautiful samd beaches`,
  // },
];

const Mains = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visitied destination</h3>
      </div>

      <div className="secContent grid">
        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                {/* fssfsfsfs */}
              </div>
            )
          }
        )}
      </div>
    </section>
  );
};

export default Mains;
