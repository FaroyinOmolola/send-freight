import React, { useState } from "react";
import "../index.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";

function HomePage() {
  const [service, setService] = useState(() => "air freight");

  const [importExport, setImportExport] = useState("import");

  const [cargoDetails, setCargoDetails] = useState("dimension");

  const [value, setValue] = useState({
    cityFrom: "",
    cityTo: "",
    readyDate: "",
    incoterms: "",
    cargoValue: "",
    totalVolume: "",
    totalWeight: "",
  });

  return (
    <div className="homepage fs-12 pt-5">
      <Row className="pt-5 mx-2">
        <Col xs="1" className="ps-5 pe-0">
          {" "}
          <img
            src="images/outline_arrow_back_black_24dp.png"
            style={{ width: "16px" }}
            alt="Go back"
          />
        </Col>
        <Col xs="10">
          <Form>
            <h1 className="fs-3">New Booking</h1>
            <p>
              Fill in the information below to get a quote or create a new
              booking
            </p>

            <Container className="container-1 segment-cont">
              <p className="fw-bold fs-6">Select a service</p>
              <Row>
                <Col>
                  <TopButton
                    text="air freight"
                    value={service}
                    src="images/flight_black_24dp.svg"
                    activeSrc="images/flight_white_24dp.svg"
                    setService={() => {
                      setService("air freight");
                    }}
                  />
                </Col>
                <Col>
                  <TopButton
                    text="sea frieght"
                    value={service}
                    src="images/sailing_black_24dp.svg"
                    activeSrc="images/sailing_white_24dp.svg"
                    setService={() => setService("sea frieght")}
                  />
                </Col>
                <Col>
                  <TopButton
                    text="InLand (Truck & Barge)"
                    value={service}
                    src="images/local_shipping_black_24dp.svg"
                    activeSrc="images/local_shipping_white_24dp.svg"
                    setService={() => setService("InLand (Truck & Barge)")}
                  />
                </Col>
                <Col>
                  <TopButton
                    text="Custom Clearance"
                    value={service}
                    src="images/accessible_black_24dp.svg"
                    activeSrc="images/accessible_white_24dp.svg"
                    setService={() => setService("Custom Clearance")}
                  />
                </Col>
              </Row>
            </Container>

            <Container className="container-2 segment-cont">
              <Row className="mb-3">
                <div className="mb-3">
                  <img
                    src="images/outline_info_black_24dp.png"
                    style={{ width: "16px" }}
                    alt="Info"
                  />
                </div>
                <Col xs={3}>
                  <div className="d-flex">
                    <div
                      className={
                        importExport === "import"
                          ? "active tariff-btn"
                          : "tariff-btn"
                      }
                      onClick={() => setImportExport("import")}
                    >
                      Import
                    </div>
                    <div
                      className={
                        importExport === "export"
                          ? "active tariff-btn"
                          : "tariff-btn"
                      }
                      onClick={() => setImportExport("export")}
                    >
                      Export
                    </div>
                  </div>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="cityFrom" className="bg-unset">
                      <img
                        src="images/baseline_location_on_black_24dp.png"
                        alt="Import or export from"
                        style={{ width: "16px" }}
                      />
                      <span className="ps-1">From</span>
                    </InputGroup.Text>
                    <FormControl
                      type="text"
                      placeholder="City or port"
                      aria-label="cityFrom"
                      className="form-g"
                      value={value.cityFrom}
                      onChange={(e) =>
                        setValue((prev) => {
                          return { ...prev, cityFrom: e.target.value };
                        })
                      }
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="cityTo" className="bg-unset">
                      <img
                        src="images/baseline_location_on_black_24dp.png"
                        alt="Import or export to"
                        style={{ width: "16px" }}
                      />
                      <span className="ps-1">To</span>
                    </InputGroup.Text>
                    <FormControl
                      type="text"
                      placeholder="City or port"
                      aria-label="cityTo"
                      className="form-g"
                      value={value.cityTo}
                      onChange={(e) =>
                        setValue((prev) => {
                          return { ...prev, cityTo: e.target.value };
                        })
                      }
                    />
                  </InputGroup>
                </Col>
              </Row>

              <Row>
                <Col>
                  <InputGroup className="mb-3">
                    <InputGroup.Text id="readyDate" className="bg-unset">
                      <img
                        src="images/baseline_event_note_black_24dp.png"
                        alt="ready date"
                        style={{ width: "16px" }}
                      />
                    </InputGroup.Text>
                    <FormControl
                      type="text"
                      placeholder="Ready Date"
                      aria-label="readyDate"
                      value={value.readyDate}
                      className="form-g"
                      onChange={(e) =>
                        setValue((prev) => {
                          return { ...prev, readyDate: e.target.value };
                        })
                      }
                    />
                  </InputGroup>
                </Col>
                <Col>
                  <Form.Select
                    aria-label="incoterms"
                    onChange={(e) =>
                      setValue((prev) => {
                        return { ...prev, incoterms: e.target.value };
                      })
                    }
                  >
                    <option value="" disabled>
                      Incoterms
                    </option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Control
                      aria-label="cargoValue"
                      label="cargoValue"
                      id="cargoValue"
                      type="text"
                      value={value.cargoValue}
                      placeholder="Total Cargo Value"
                      onChange={(e) =>
                        setValue((prev) => {
                          return { ...prev, cargoValue: e.target.value };
                        })
                      }
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>

            <Container className="container-3 segment-cont">
              <Row>
                <Col>
                  <p className="fw-bold fs-6">Cargo Details</p>
                  <div className="d-flex mb-4 w-75 cargo">
                    <div
                      className={
                        cargoDetails === "dimension"
                          ? "active cargo-btn"
                          : "cargo-btn"
                      }
                      onClick={() => setCargoDetails("dimension")}
                    >
                      Total Dimension
                    </div>
                    <div
                      className={
                        cargoDetails === "packageDetails"
                          ? "active cargo-btn"
                          : "cargo-btn"
                      }
                      onClick={() => setCargoDetails("packageDetails")}
                    >
                      Package Details
                    </div>
                  </div>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      label="Dangerous Cargo (ex. Chemicals, Battery)"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="w-75">
                <Col>
                  <div className="input-group mb-3">
                    <div className="form-floating form-floating-group flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        name="totalVolume"
                        id="totalVolume"
                        style={{
                          borderRight: "none",
                        }}
                        onChange={(e) =>
                          setValue((prev) => {
                            return {
                              ...prev,
                              totalVolume: e.target.value,
                            };
                          })
                        }
                      />
                      <label for="totalVolume">Total Volume</label>
                    </div>
                    <span
                      className="input-group-text"
                      style={{
                        background: "none",
                        borderLeft: "none",
                      }}
                    >
                      cm
                    </span>
                  </div>
                </Col>
                <Col>
                  <div className="input-group mb-3">
                    <div className="form-floating form-floating-group flex-grow-1">
                      <input
                        type="text"
                        className="form-control"
                        name="totalWeight"
                        style={{
                          borderRight: "none",
                        }}
                        id="totalWeight"
                        onChange={(e) =>
                          setValue((prev) => {
                            return {
                              ...prev,
                              totalWeight: e.target.value,
                            };
                          })
                        }
                      />
                      <label for="totalWeight">Total Volume</label>
                    </div>
                    <span
                      className="input-group-text"
                      style={{
                        background: "none",
                        borderLeft: "none",
                      }}
                    >
                      kg
                    </span>
                  </div>
                </Col>
              </Row>
            </Container>

            <Container className="container-4 segment-cont">
              <p className="fw-bold fs-6">Additional Services</p>
              <Row className="mb-3">
                <Col>
                  <Form.Group>
                    <Form.Check
                      type="switch"
                      id="exportForwarding"
                      label="Export Forwarding"
                    />
                    <Form.Text>
                      We handle custom clearance and documentation
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check
                      type="switch"
                      id="importClearance"
                      label="Import Custom Clearance"
                    />
                    <Form.Text>
                      We handle import customs and regulatory requirement
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group>
                    <Form.Check
                      type="switch"
                      id="cargoInsurance"
                      label="Cargo Insurance"
                    />
                    <Form.Text>
                      Protect your cargo from logistics risks up to it full
                      value
                    </Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Check
                      type="switch"
                      id="delivery"
                      label="Transport / Delivery"
                    />
                    <Form.Text>
                      We deliver the cargo to your doorstep from the port
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Form>
        </Col>
        <Col xs="1"></Col>
      </Row>
    </div>
  );
}

export default HomePage;

const TopButton = (props) => {
  return (
    <div
      className={props.value === props.text ? "active st-btn" : "st-btn"}
      onClick={props.setService}
    >
      <span>{props.text}</span>
      <img
        alt={props.text}
        src={props.value === props.text ? props.activeSrc : props.src}
      />
    </div>
  );
};

// const FieldSetComponent = ({
//   value,
//   onChange,
//   placeholder,
//   sideText,
//   ...prop
// }) => {
//   return (
//     <div style={{ width: "100%" }}>
//       <fieldset style={{ display: "flex", width: "100%" }}>
//         {value && <legend>{placeholder}</legend>}
//         {prop.position === "left" && (
//           <div style={{ minWidth: "fit-content", width: "20%" }}>
//             {sideText}
//           </div>
//         )}

//         <input
//           style={{ width: "80%" }}
//           placeholder={placeholder}
//           value={value}
//           onChange={onChange}
//         ></input>

//         {prop.position === "right" && (
//           <div style={{ minWidth: "fit-content", width: "20%" }}>
//             {sideText}
//           </div>
//         )}
//       </fieldset>
//     </div>
//   );
// };