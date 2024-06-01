import logo from './logo.svg';
import './App.css';
import image from '../src/assets/fahad image.jpg';
function App() {
  const user = [
    {
      id: 1,
      Firstname: "Fahad pasta",
      Lastname: "Hanif pasta",
      Email: "Fahadpasta@88gmail.com",
      Adsress: "Safoor",
    },
    {
      id: 2,
      Firstname: "Adil pasta",
      Lastname: "Hanif pasta",
      Email: "adilpasta234@gmail.com",
      Adsress: "Safoor",
    },
    {
      id: 3,
      Firstname: " Huzmaan  pasta",
      Lastname: "Hanif pasta",
      Email: "huzmaanpasta123@gmail.com",
      Adsress: "Safoor",
    },
    {
      id: 4,
      Firstname: "Arshmaan pasta",
      Lastname: "Hanif pasta",
      Email: "arshmannpasta456@gmail.com",
      Adsress: "Safoor",
    },
    {
      id: 5,
      Firstname: "hammad Vayani",
      Lastname: "farooq vayani",
      Email: "hammadvayani567@gmail.com",
      Adsress: "Okhai",
    },
    {
      id: 6,
      Firstname: "Sulamn Vayani",
      Lastname: "Farooq vayani",
      Email: "sulmanvayani89@gmail.com ",
      Adsress: "Okahi",
    },
    {
      id: 7,
      Firstname: "Ahad friend",
      Lastname: "Farhen  Bahi",
      Email: "ahadfarhen123@gmail.com",
      Adsress: "Shkeel",
    },
    {
      id: 8,
      Firstname: "Sameer Bahi",
      Lastname: "Farhen Bahi",
      Email: "sameerfarhen789@gmail.com",
      Adsress: "Shkeel",
    },
    {
      id: 9,
      Firstname: "Ashish Friend ",
      Lastname: "Kumar",
      Email: "Ashishkumar123@gmail.com",
      Adsress: "Safoor",
    },
    {
      id: 10,
      Firstname: "Muhammad Waqas",
      Lastname: "Waqas",
      Email: "Muhammaswaqas567@gmail.com",
      Adsress: "Okahi",
    },
  ];
  return (
    <div class="App">
      <img src={image} className='image' />
      <h4> Muhammad Fahad pasta </h4>
      <h5> Pakistan </h5>
      <p> Frontend Developer and <br /> Social Media Manager </p>
      <div class="buttons">
        <button class="main-btn">
          Message
        </button>
        <button class="main-btn secondary">
          Following
        </button>
      </div>
      <div class="skills">
        <h5>Skills</h5>
        <hr></hr>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li> JavaScript </li>
          <li> ReactJS </li>
          <li> NodeJS </li>
          <li> YouTube Management </li>
        </ul>
      </div>
    </div>
  );
};

export default App;



