import React from 'react';
import NewUser from '../NewUser/NewUser';
import User from '../../containers/User/User';
import './Users.css';

const users = () => {
        return (
            <div>
                <section className="Users">
                    <User />
                </section>
            </div>
        );
}

export default users;