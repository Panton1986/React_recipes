function Footer() {
    return <footer className="page-footer blue lighten-1">
            <div className="container">
            <div className="row">
                <div className="col l6 s12">
                <h5 className="white-text">Footer Content</h5>
                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                </div>
                <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                </ul>
                </div>
            </div>
            </div>
            <div className="footer-copyright">
            <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/Panton1986/react_e-commerce" target='_blank' rel="noreferrer">Repo</a>
            </div>
            </div>
  </footer>
}

export {Footer}