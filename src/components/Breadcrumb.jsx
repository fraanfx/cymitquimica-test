import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ title }) => {
    return (
        <nav className="breadcrumb--container" aria-label="breadcrumb">
            <Link className="" aria-label="breadcrumb" to={'/'}>
                <Home />
            </Link>
            <ChevronRight/>
            <span className='breadcrumb--text'>{title}</span>
        </nav>
    )
}

export default Breadcrumb;