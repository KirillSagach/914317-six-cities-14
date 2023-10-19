import MainPage from '../pages/main/main';

type AppProps = {
  cardsCount : number;
}

function App({cardsCount}:AppProps): JSX.Element {
  return (
    <MainPage cardsCount = {cardsCount}/>
  );
}

export default App;
