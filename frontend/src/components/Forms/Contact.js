import React from "react";

// reactstrap components
import {
  Col,
  Row,
  Form,
  Input,
  Button,
  Container,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  UncontrolledDropdown
} from "reactstrap";

function Contact(props) {
  const [mailStatus, setMailStatus] = React.useState("");
  const [notifyStatus, setNotifyStatus] = React.useState(false);
  const [maileeType, setMaileeType] = React.useState("Graduate");
  const [mailStatusColor, setMailStatusColor] = React.useState("#3a3b3c");
  const classTypes = ["Undergraduate", "Graduate", "Postdoc", "Faculty", "Researcher", "General", "Alumni"];

  return (
      <div className="section landing-section" id="mailingList">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto" md="8">
              <h2 className="text-center" style={{marginTop: "0"}}>Join mailing list</h2>
              <Form className="contact-form">
                {/** Name + Subject **/}
                <Row>
                  <Col md="6">
                    <label>Name</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-single-02" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input required placeholder="Name" type="text" id="mailName" name="name"/>
                    </InputGroup>
                  </Col>

                  <Col md="6">
                    <label>Email</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input required placeholder="email@mit.edu" type="text" id="mailEmail" name="email"/>
                    </InputGroup>
                  </Col>
                </Row>

                <Row>
                  <Col md="6">
                    <label>Class Year</label>
                    <InputGroup>
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="nc-icon nc-calendar-60" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input required placeholder="2023" type="text" id="year" name="year"/>
                    </InputGroup>
                  </Col>

                  <Col md="6">
                    <label>Type</label>
                    <UncontrolledDropdown inNavbar>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#pablo"
                        id="dropdownMenuButton"
                        style={{marginTop: "0"}}
                        onClick={(e) => e.preventDefault()}
                        role="button"
                      >
                        {maileeType}
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        className="dropdown-info"
                      >
                      {classTypes.map(typ => 
                        <DropdownItem
                          onClick={(e) => {setMaileeType(typ); e.preventDefault()}}
                        >
                          {typ}
                        </DropdownItem>
                      )}
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Col>
                </Row>
                

                <Row>
                  <Col className="ml-auto mr-auto" md="2">
                    <Button 
                      className="btn-fill" color="danger" size="lg"
                      onClick={() => {
                        const name = document.getElementById("mailName");
                        const email = document.getElementById("mailEmail");
                        const year = document.getElementById("year");
                        const messageParts = [name, email];
                        
                        for (const messagePart of messageParts) {
                          if (messagePart.value === "") {
                            console.log(`${messagePart.name} is required to send email`)
                            setMailStatus(`${messagePart.name} is required to send email`); 
                            setMailStatusColor("red");
                            setNotifyStatus(true); 
                            return;
                          }
                        }
                        messageParts.push(year);
                        fetch(`https://www.mit-msa.com:8443/mail/contact?name=${`${name.value} (${maileeType} ${year.value})`}&email=${email.value}&subject=${"Main-list join request"}&message=${"Sender would like to join mailing list\nTo add them please visit: https://msa.mit.edu/exec\nThe password is: msaadminpass!!\n".replace(/\n/g, '\\n')}`, {
                          // mode: 'no-cors',
                          method: 'GET'
                        })
                        .then((res) => {
                          console.log(res)
                          if (res.status === 200) {
                            setMailStatus("Message sent!");
                            setMailStatusColor("green");
                          } else {
                            setMailStatus("Message failed to deliver");
                            setMailStatusColor("red");
                          }
                          setNotifyStatus(true);
                        })
                      }}
                    >
                      Request
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
  )
}

export default Contact;