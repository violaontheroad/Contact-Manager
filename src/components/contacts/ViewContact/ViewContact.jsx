import React from "react";
import {Link} from "react-router-dom";

let ViewContact = () => {
    
    return(
        <React.Fragment>
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita aut sequi tenetur vero ipsa qui soluta quas. Culpa minima expedita debitis ut amet at qui in sit tenetur. Quaerat, dicta.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src="https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt="" className="contact-img"/>
                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                    Name: <span className="fw-bold">Rajan</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Mobile: <span className="fw-bold">99999999</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Email: <span className="fw-bold">rajan@gmail.com</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Company: <span className="fw-bold">rajan@gmail.com</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Title: <span className="fw-bold">rajan@gmail.com</span>
                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Group: <span className="fw-bold">rajan@gmail.com</span>
                                </li>
                            </ul>           
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
};

export default ViewContact;
