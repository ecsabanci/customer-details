import Customer from '../Customer/Customer';
import './CustomerSection.scss';
import customers from '../../customers.json';
import SearchBar from '../SearchBar/SearchBar';
import { useState } from 'react';

function CustomerSection() {
  const [filterText, setFilterText] = useState('');

  const filtered = customers.filter((customer) => {
    return Object.keys(customers).some((key) => customer['name'].toString().toLowerCase().includes(filterText.toLocaleLowerCase()) || customer['policyNo'].toString().toLowerCase().includes(filterText.toLocaleLowerCase()));
  });

  return (
    <div className='wrapper'>
      <SearchBar filterText={filterText} setFilterText={setFilterText} />
      <div className='customer-section'>{filtered.length > 0 ? filtered.map((customer) => <Customer customer={customer} key={customer.id} />) : <div className='p-4 text-dark'>Please try to search a valid Customer Name or Policy Number</div>}</div>
    </div>
  );
}

export default CustomerSection;
