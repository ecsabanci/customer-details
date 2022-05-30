import './Customer.scss';
function Customer({customer}) {
  return (
    <div className='customer d-flex flex-column align-items-start p-4 text-dark'>
      <h3>{customer.name}</h3>
      <div className='customer-informations d-flex flex-column flex-md-row align-items-start align-items-md-center gap-3 gap-md-5 w-100'>
        <div className='mt-3 mt-md-0'>
          <svg className='me-2' xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'>
            <path d='M20 22.621l-3.521-6.795c-.008.004-1.974.97-2.064 1.011-2.24 1.086-6.799-7.82-4.609-8.994l2.083-1.026-3.493-6.817-2.106 1.039c-7.202 3.755 4.233 25.982 11.6 22.615.121-.055 2.102-1.029 2.11-1.033z' />
          </svg>
          <span className='number'>{customer.number}</span>
        </div>
        <div className='mail'>
          <span>@ {customer.mail}</span>
        </div>
        <div className='d-flex align-items-center'>
          <svg className='me-2' width='24' height='24' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd'>
            <path d='M22 24h-20v-24h14l6 6v18zm-7-23h-12v22h18v-16h-6v-6zm3 15v1h-12v-1h12zm0-3v1h-12v-1h12zm0-3v1h-12v-1h12zm-2-4h4.586l-4.586-4.586v4.586z' />
          </svg>
          <span>Policy No. {customer.policyNo}</span>
        </div>
      </div>
    </div>
  );
}

export default Customer;
