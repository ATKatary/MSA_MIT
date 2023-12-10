import { Col, Container, Row } from "reactstrap";

function Section({title, description, children, style, className, ...props}) {
    return ( 
        <section 
            style={{
                ...style
            }}
            className={`width-100 ${className}`}
            {...props}
        >
            <Container 
                style={{
                    width: "80%",
                    padding: "40px 0 80px 0",
                    ...props.contStyle
                }}
                className={`flex align-center justify-around column ${props.contClassName}`}
            >
                <Col md={8} className="text-center">
                    {title? 
                        <h2 
                            className="title" 
                            style={{
                                ...props.titleStyle
                            }}
                        >
                            {title}
                        </h2> : <></>
                    }
                    <h5 
                        className="description"
                        style={{
                            color: "#fff",
                            ...props.DescriptionStyle
                        }}
                    >
                        {description}
                    </h5>
                </Col>
                {children}
            </Container>
        </section>
    )
}

export default Section;