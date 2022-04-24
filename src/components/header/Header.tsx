import {Link} from 'react-router-dom'
import './Header.css';



export const Header = ():JSX.Element => {
    return (
        <div>
            <ul>
                <li>
                    <Link
                        to="/employees"
                    >
                        Employee
                    </Link>
                </li>
                <li>
                    <Link
                        to="/companies"
                    >
                        Companies
                    </Link>
                </li>
            </ul>
        </div>
    )
}
