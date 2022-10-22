import "./styles.css";
import { useContext } from "react";
import { AppContext } from "../../contexts/context";
import SearchCharacter from "../../servises/SearchCharacter";

export default function Home() {
    const { characters, loading } = useContext(AppContext);
    if (loading) {
        return (<div className="home-contain">
            <div className="cards-contain" >
                <SearchCharacter />
                <div className="cards">
                    <h1>Procurando...</h1>
                </div>
            </div>
        </div>
        );
    }
    return (
        <div className="home-contain">
            <div className="cards-contain" >
                <SearchCharacter />
                <div className="cards">
                    {characters.map(c => {
                        const { name, image, id, status, species } = c;
                        return (
                            <div className="card-character" key={id}>
                                <div className="image-character">
                                    <img alt={name} src={image} />
                                </div>
                                <div className="description-character" >
                                    <h1>{name}</h1>
                                    <p>Status: {status}</p>
                                    <p>Species: {species}</p>
                                </div>
                            </div>
                        )
                    }
                    )
                    }

                </div>
            </div>
        </div>
    );
}