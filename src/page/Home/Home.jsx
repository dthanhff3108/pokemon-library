import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header'
import PokemonList from '../../components/pokemonList/PokemonList';


function Home() {
    return ( 
        <div>
            <Header/>
            <PokemonList />
            {/* <Footer/> */}
        </div>
     );
}

export default Home;