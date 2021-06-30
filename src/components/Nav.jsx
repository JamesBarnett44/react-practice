import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <button>
                <Link to="/">Home</Link>
            </button>
            <button>
                <Link to="/about">About</Link>
            </button>
            <button>
                <Link to="/contact">Contact</Link>
            </button>
            <button>
                <Link to="/animal/bear">Bear</Link>
            </button>
            <button>
                <Link to="/animal/hawk">Hawk</Link>
            </button>
            <button>
                <Link to="/animal/wolf">Wolf</Link>
            </button>
            <button>
                <Link to="/animal/horse">Horse</Link>
            </button>
        </div>
    );
}

export default Nav;