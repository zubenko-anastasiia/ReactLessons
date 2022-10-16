import {Link} from 'react-router-dom';


export const Navbar = ()=>{
    return(
        
        <nav className='navbar navbar-light navbar-expand-md'>
                <Link to="/" className='navbar-brand'>Contact Manager</Link>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                        <li className='nav-item active'>
                            <Link to="/" className='nav-link'> Contacts List</Link>
                        </li>  
                        <li className='nav-item'>
                            <Link to="/create" className='nav-link'> Create Contact</Link> 
                        </li>  
                        <li className='nav-item'>   
                            <Link to="/edit" className='nav-link'> Edit Contact</Link> 
                        </li>  
                        <li className='nav-item'> 
                            <Link to="/delete" className='nav-link'>Delete  Contact</Link>  
                        </li>
                    </ul>
                </div>
                </nav>
                
           
        
        
    );
};