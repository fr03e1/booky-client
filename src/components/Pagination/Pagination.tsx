import React from 'react';

const Pagination:React.FC = () => {
    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-center wow fadeInUp animated">
                <ul className="pagination text-center">
                    <li className="next"><a href="#0"><i className="flaticon-left-arrows"
                                                         aria-hidden="true"></i> </a></li>
                    <li><a href="#0">1</a></li>
                    <li><a href="#0" className="active">2</a></li>
                    <li><a href="#0">3</a></li>
                    <li><a href="#0">...</a></li>
                    <li><a href="#0">10</a></li>
                    <li className="next"><a href="#0"><i className="flaticon-next-1"
                                                         aria-hidden="true"></i> </a></li>
                </ul>
            </div>
        </div>
    );
};

export default Pagination;