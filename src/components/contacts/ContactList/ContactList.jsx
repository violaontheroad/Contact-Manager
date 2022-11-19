import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

let ContactList = () => {

    let[state, setState] = useState({
        loading: false,
        contacts: [],
        errorMessage: ''
    });

    

    useEffect( () => { 
        async function fetchData(){
        try {
            // setState({...state, loading:true});
            let response = await ContactService.getAllContacts();
            console.log(response.data)
            // setState({
            //     ...state,
            //     loading: false,
            //     contacts: response.data
            // });
        }
        catch (error) {
            // setState({
            //     ...state,
            //     loading:false,
            //     errorMessage: error.message
            // });
        }
    }
    fetchData();
    } , []);
    
    // let{loading, contacts, errorMessage} = state;

    return(
        <React.Fragment>
            {/* <pre>{JSON.stringify(contacts)}</pre> */}
            <section className="contact-search p-3">
                <div className="container">
                    <div className="grid">
                        <div className="row">
                            <div className="col">
                                <p className="h3 fw-bold "> Contact Manager
                                    <Link to={'/contacts/add'} className="btn btn-primary ms-2">
                                        <i className="fa fa-plus-circle me-2"/>
                                        New</Link>
                                </p>
                                <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit earum rem corporis sed eligendi non ratione nam facilis temporibus minima enim a, sequi officia atque id voluptatem cum porro in.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form className="row">
                                    <div className="col">
                                     <div className="mb-2">
                                            <input type="text" className="form-control" placeholder="Search Names"/>
                                     </div>
                                    </div>
                                   <div className="col">
                                     <div className="mb-2">
                                        <input type="submit" className="btn btn-outline-dark" value="Search"/>
                                     </div>
                                   </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-list">
                <div className="container">
                    <div className="row">
                       <div className="col-md-6">
                            <div className="card">
                                    <div className="card-body">
                                        <div className="row align-items-center d-flex justify-content-around">
                                            <div className="col-md-4">
                                                <img src="https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt="" className="contact-img" />
                                            </div>
                                            <div className="col-md-7">
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
                                                </ul>
                                            </div>
                                            <div className="col-md-1 d-flex flex-column align-items-center">
                                                <Link to={'/contacts/view/:contactId'}className="btn btn-warning my-1">
                                                    <i className="fa fa-eye"/>
                                                </Link>
                                                <Link to={'/contacts/edit/:contactId'}className="btn btn-primary my-1">
                                                    <i className="fa fa-pen"/>
                                                </Link>
                                                <button className="btn btn-danger my-1">
                                                    <i className="fa fa-trash"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                       </div>
                       <div className="col-md-6">
                            <div className="card">
                                    <div className="card-body">
                                        <div className="row align-items-center d-flex justify-content-around">
                                            <div className="col-md-4">
                                                <img src="https://assets.stickpng.com/images/585e4bcdcb11b227491c3396.png" alt="" className="contact-img" />
                                            </div>
                                            <div className="col-md-7">
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
                                                </ul>
                                            </div>
                                            <div className="col-md-1 d-flex flex-column align-items-center">
                                                <Link to={'/contacts/view/:contactId'}className="btn btn-warning my-1">
                                                    <i className="fa fa-eye"/>
                                                </Link>
                                                <Link to={'/contacts/edit/:contactId'}className="btn btn-primary my-1">
                                                    <i className="fa fa-pen"/>
                                                </Link>
                                                <button className="btn btn-danger my-1">
                                                    <i className="fa fa-trash"/>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                       </div>
                    </div>
                </div>

            </section>

        </React.Fragment>
    )
};

export default ContactList;
