import React,{useState} from 'react';
import {getMembersById} from '../services/MemberSearchService';
import {IMember} from '../types/IMember';
// import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function MemberSearch(this: any) {
  const [members, setMembers]  = useState<IMember[]>();
  const [searchText, setSearchText] = useState('');

  const [reason, setReason] = useState({
      newSC1: false,
      changeSC1: false,
    });

    const [gender, setGender] = useState({
      Female: false,
      Male: false,
    });

    const handleReasonChange = (e:any) => {
      setReason({
        ...reason,
        [e.target.name]: e.target.checked,
      });
    };

    const handleGenderChange = (e:any) => {
      console.log(gender);
      setGender({
        Female: e.target.name === "Female" ? e.target.checked : false,
        Male: e.target.name === "Male" ? e.target.checked : false,
      });
    };
  
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


            <div>
                  <h2>SECTION 1</h2>
                  <table className="section1-table" style={{ borderCollapse: "collapse", width: "100%" }} border={1} cellPadding="8">
                    <tbody>

                      <tr>
                        <td>
                          <strong>Provider ID</strong>
                          <div>{members[0].providerId}</div>
                        </td>
                        <td>
                          <strong>Provider Name</strong>
                          <div>{members[0].providerName}</div>
                        </td>
                        <td>
                          <strong>Provider Telephone Number</strong>
                          <div>{members[0].providerPhone}</div>
                        </td>
                      </tr>

                      <tr>
                        <td colSpan={2}>
                          <strong>Provider Address</strong>
                          <div>{members[0].providerAddress}</div>
                        </td>
                        <td>
                          <strong>Reason for Submission</strong>
                          <div>
                            <label>
                              <input
                                type="checkbox"
                                name="newSC1"
                                checked={members[0].reason === "New SC-1"}
                                onChange={handleReasonChange}
                              />
                              New SC1
                            </label>
                            <br />
                            <label>
                              <input
                                type="checkbox"
                                name="changeSC1"
                                checked={members[0].reason === "Change to Existing SC-1"}
                                onChange={handleReasonChange}
                              />
                              Change to Existing SC1
                            </label>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Member Last Name</strong>
                          <div>{members[0].lastName}</div>
                        </td>
                        <td>
                          <strong>Member First Name</strong>
                          <div>{members[0].firstName}</div>
                        </td>
                        <td>
                          <strong>Middle Initial</strong>
                          <div>{members[0].middleInitial}</div>
                        </td>
                      </tr>

                      <tr>
                        <td colSpan={3}>
                          <strong>Member Home Address</strong>
                          <div>{members[0].address}</div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <strong>Member DOB</strong>
                          <div>{members[0].dateOfBirth}</div>
                        </td>
                        <td>
                          <strong>Gender</strong>
                          <div>
                            <label>
                              <input
                                type="checkbox"
                                name="Female"
                                checked={members[0].gender === "Female"}
                                onChange={handleGenderChange}
                              />
                              Female
                            </label>
                            <label style={{ marginLeft: "10px" }}>
                              <input
                                type="checkbox"
                                name="Male"
                                checked={members[0].gender === "Male"}
                                onChange={handleGenderChange}
                              />
                              Male
                            </label>
                          </div>
                        </td>
                        <td>
                          <strong>ID or SSN</strong>
                          <div>{members[0].id}</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>




      }

    </Container>
  );
}

export default MemberSearch;