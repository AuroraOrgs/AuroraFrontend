import { NextPage } from "next";
import React from "react";
import {
  Button,
  Container,
  FormControl,
  InputGroup,
  Navbar,
  ThemeProvider,
} from "react-bootstrap";

import styles from "./index.module.scss";

const SearchBar: NextPage = () => {
  return (
    <InputGroup style={{ width: 500 }}>
      <FormControl
        placeholder="Search for all dimensions"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        className={styles["input"]}
      />
      <Button
        className={styles["button"]}
        variant="outline-secondary"
        id="button-addon2"
      >
        Search
      </Button>
    </InputGroup>
  );
};

const Header: NextPage = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Container>
        <div className="d-flex justify-content-start align-items-center">
          <img
            className={styles["logo-img"]}
            src="https://scontent.fiev22-2.fna.fbcdn.net/v/t1.15752-9/270445016_4790030614388339_3428961129711321921_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=38HsfTp5rl0AX9KIcnu&_nc_ht=scontent.fiev22-2.fna&oh=03_AVKXqfwIgyLT6zfHVsd4dbEnLQ9IeUQ5lPMDt5lwgZ6X4w&oe=61FBB7C9"
            alt=""
          />
          {/* <header> */}
          <SearchBar></SearchBar>
          {/* </header> */}
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
