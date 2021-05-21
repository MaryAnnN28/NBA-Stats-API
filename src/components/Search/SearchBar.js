import React from 'react';
import './SearchBar.css'
import { Form, FormControl } from 'react-bootstrap';
import { Card } from 'react-bootstrap'

function SearchBar() {
  return (
    <div className="search-bar">
      <center>
        <Card style={{ width: '30rem', alignItems: "center"}}>
          <Card.Body>
            <Form>
              <FormControl type="text" placeholder="Search by Teams or Players" className="mr-lg-2">

              </FormControl>
            </Form>
          </Card.Body>
        </Card>

      </center>
    </div>
  )
}

export default SearchBar; 