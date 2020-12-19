import './SearchForm.css';

function SearchForm() {
    return (
        <section className="search">
            <div className="search__group">
                <h1 className="search__heading">Что творится в мире?</h1>
                <p className="search__subheading">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
                <form className="search__form">
                    <input className="search__input" placeholder="Введите тему новости" />
                    <button className="search__button">Искать</button>
                </form>
            </div>
        </section>
    );
}

export default SearchForm;