import Link from "next/link"

const Footer = (props) => {
    return (
    <footer>
        <p>
            Diseñado por NitroWeb® <Link href="mailto:anmilani.dev@gmail.com" target="_blank"
      className="btn btn-primary">anmilani.dev@gmail.com</Link>
        </p>
    </footer>
    )
};

export default Footer;