import React from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {setPage} from "../../redux/slices/filterSlice";

const Pagination:React.FC = () => {
    const {links,current_page,last_page} = useAppSelector(state => state.bookSlice)
    const {page} = useAppSelector(state => state.filterSlice)
    const dispatch = useAppDispatch();

    const handleClick = (label: number) => {
        dispatch(setPage(label))
    }


    return (
        <div className="row">
            <div className="col-12 d-flex justify-content-center wow fadeInUp animated">
                <ul className="pagination text-center">
                    {current_page != 1 &&  <li className="next"><a href="#" onClick={()=>handleClick(current_page-1)}><i className="flaticon-left-arrows"
                                                                                aria-hidden="true"></i> </a></li>}
                    {links.map((obj)=> (
                        (Number(obj.label) && current_page-obj.label < 2 && current_page-obj.label > -2 ) || Number(obj.label == 1)
                        || obj.label == last_page
                            ? ( <li><a className={ page == obj.label ? 'active' : ''} href="#" onClick={()=>handleClick(obj.label)}>{obj.label}</a></li>) : ('')
                    ))}
                    {current_page != last_page && <li className="next"><a href="#" onClick={()=>handleClick(current_page+1)} ><i className="flaticon-next-1"
                                                                               aria-hidden="true"></i> </a></li> }

                </ul>
            </div>
        </div>
    );
};

export default Pagination;