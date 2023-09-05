import { getImageUrl } from './utils.js';

function Profile({name, imageId, width, height,
                 profession, numawards, awards,
                 discovered}){
  return (
     <section className="profile">
        <h2>{name}</h2>
        <img
          className="avatar"
          src={getImageUrl(imageId)}
          alt={name}
          width={width}
          height={height}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            {profession}
          </li>
          <li>
            <b>Awards: {numawards} </b> 
            {awards}
          </li>
          <li>
            <b>Discovered: </b>
            {discovered}
          </li>
        </ul>
      </section>  
  );
}


export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
        <Profile name="Maria Skłodowska-Curie" 
          imageId="szV5sdG" width="70" height="70"
          profession="physicist and chemist"
          numawards="4"
          awards="(Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)"
          discovered="polonium (element)"
          />
      

        <Profile name="Katsuko Saruhashi" 
          imageId="YfeOqp2" width="70" height="70"
          profession="geochemist"
          numawards="2"
          awards="(Miyake Prize for geochemistry, Tanaka Prize)"
          discovered="a method for measuring carbon dioxide in seawater"
          />


    </div>
  );
}
