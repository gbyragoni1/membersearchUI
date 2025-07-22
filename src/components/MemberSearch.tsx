import React,{useState} from 'react';
import {getMembersById} from '../services/MemberSearchService';
import {IMember} from '../types/IMember';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MemberSearch(this: any) {
  const [members, setMembers]  = useState<IMember[]>();
  const [searchText, setSearchText] = useState('');

  const renderMembers = () => {
    const results = members || [];
    return results.map((value) => 
      <tr key={value.id}>
        <td className="table-striped">{value.providerId}</td>
        <td>{value.providerName}</td>
        <td>{value.providerPhone}</td>
        <td>{value.providerAddress}</td>
        <td>{value.reason}</td>
        <td>{value.lastName}</td>
        <td>{value.firstName}</td>
        <td>{value.middleInitial}</td>
        <td>{value.address}</td>
        <td>{value.dateOfBirth}</td>
        <td>{value.gender}</td>
        <td>{value.id}</td>
      </tr>
    )
  }
  
  const handleKeyDown = (event: { key: string; }) => {
    if (event.key === 'Enter') {
      handleSubmit(searchText);
    }
  };

  const handleChange = (event: { target: { value: any; }; }) => {
    setSearchText(event.target.value);
  };

  const handleFormSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  const handleSubmit = (value: string) => {
    getMembersById(value).then(data => {
      setMembers(data);
    })
  };
  const handleSubmitClick = () => {
    handleSubmit(searchText);
  };

  return (
    <Container>
      <Row className="mt-5">
        <h2>Member Search</h2>
      </Row>
      <Row>
        <Form  onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Control type="text" placeholder="search by Id or SSN"
              value={searchText} onKeyDown={handleKeyDown} onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={handleSubmitClick}>Search</Button>
        </Form>
      </Row>
      <Row className="mb-5"></Row>
      { (members && members.length > 0) &&

        <Row>
          <Col xs={9}>
            <Table bordered striped hover size="xl">
              <thead>
                <tr className="table-success">
                  <th scope="col" className="col-6">1. Provider ID/Service Location </th>
                  <th scope="col" className="col-1">2. Provider Name </th>
                  <th scope="col" className="col-1">3. Provider Telephone Number </th>
                  <th scope="col" className="col-1">4. Provider Address </th>
                  <th scope="col" className="col-1">5. Reason for Submission </th>
                  <th scope="col" className="col-1">6. Member Last Name </th>
                  <th scope="col" className="col-1">7. Member First Name </th>
                  <th scope="col" className="col-1">8. Middle Initial </th>
                  <th scope="col" className="col-1">9. Member Home Address </th>
                  <th scope="col" className="col-1">10. Member Date of Birth </th>
                  <th scope="col" className="col-1">11. Member Gender </th>
                  <th scope="col" className="col-1">12. Member ID or SSN </th>
                  
                </tr>
              </thead>
              <tbody>
              {renderMembers()}
              </tbody>
            </Table>
          </Col>
        </Row>
      }
    </Container>
  );
}

export default MemberSearch;