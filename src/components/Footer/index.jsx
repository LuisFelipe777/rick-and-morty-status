import "./styles.css";
import gitLogo from "../../assets/images/Icons/github.png";
import instaLogo from "../../assets/images/Icons/intagram.png";
import linkedlinLogo from "../../assets/images/Icons/linkedlin.png";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="descricao">
                <h2>
                    Desenvolvido com <span style={{ color: "red" }}>   ❤   </span> Por Luis Felipe
                </h2>
            </div>

            <div className="logos">
                <a target="_blank" href="https://github.com/LuisFelipe777"><img src={gitLogo}></img></a>
                <a target="_blank" href="https://www.instagram.com/l.felipe777/"><img src={instaLogo}></img></a>
                <a target="_blank" href="https://www.linkedin.com/in/luis-felipe-farias-rodrigues-a60a71204/"><img src={linkedlinLogo}></img></a>
            </div>
        </footer >
    );
}