import{Link} from 'react-router-dom';

function HeaderComponents(props){
    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.techvology.net" className="navbar-brand">Worktrial Mengement App</a></div>
                    <div className="topnav">
                        <Link to ="/">Home</Link>
                        <Link to ="/costumers">Costumers</Link>
                        <Link to ="/products">Products</Link>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponents;