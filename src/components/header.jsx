import Link from 'next/link';

export default function Header() {
    return (
        <header className="header">
            <div className="container">
                <h1 className="header__title">Comida Oriental</h1>
                <h2 className="header__subtitle">
                    A culinária Japonesa é bastante equilibrada, sendo muito rica em peixes (ômega 3),
                    vegetais, massas e ingredientes frescos.
                </h2>
                <Link href="/cardapio">
                    <button className="header__button">Ver o Cardápio</button>
                </Link>
            </div>
            <img src="./sushi__header.png" alt="sushi feito poelos melhores do mundo" />
        </header>
    );
}