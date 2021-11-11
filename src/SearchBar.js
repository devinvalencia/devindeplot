import Form from 'react-bootstrap/Form';

const SearchBar = () => {
    const spacing = {
        paddingBottom: '50px',
    }

    return ( 
          <Form.Control size="lg" type="text" placeholder="Search" className="SearchBar style={spacing}"/>
     );
}
 
export default SearchBar;