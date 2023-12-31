import Link from "next/link";
import { Nav, Navbar } from "reactstrap";

export default function Header() {
    return (
        <Navbar container="md" color="dark" dark>
            <Link href="/" legacyBehavior>
                <a className="navbar-brand">
                    Início
                </a>
            </Link>
            <Nav className="flex-row" navbar>
                <Link href="/products" legacyBehavior>
                    <a className="nav-link me-4">
                        Produtos
                    </a>
                </Link>
                <Link href="/cart" legacyBehavior>
                    <a className="nav-link">
                        Carrinho
                    </a>
                </Link>
            </Nav>
        </Navbar>
    )
}