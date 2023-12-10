import { Container } from "reactstrap";

function Header({verse, translation, buttons, ...props}) {

    return (
        <Container 
            className="flex align-center justify-center column"
            style={{
                height: "100vh",
                ...props.style
            }}
        >
            {verse}
            {translation}
            {buttons}
        </Container>
    )
}

export default Header;