function NavBar(props) {
    const { href, site } = props
    return (
       <a href={href}>{site}</a>
    )
}

export default NavBar;