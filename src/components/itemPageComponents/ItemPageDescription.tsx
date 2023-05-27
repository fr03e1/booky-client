import React from 'react';
import {ItemPageBottomProps} from "../../models/types/props/ItemPageBottomProps";


const ItemPageDescription: React.FC<ItemPageBottomProps> = ({active}) => {
    return (
        <div className={active ? "tab-pane fade show active" : "tab-pane fade show"} id="pills-description"
             role="tabpanel"
             aria-labelledby="pills-description-tab">
            <div className="product-drescription">
                <p> Сюжет Главный герой, Уинстон Смит, живёт в Лондоне, работает в Министерстве правды и является членом
                    внешней партии. Он не разделяет партийные лозунги и идеологию и в глубине души сильно сомневается в
                    партии, окружающей действительности и вообще во всём, в чём только можно сомневаться. </p>

            </div>
        </div>
    );
};


export default ItemPageDescription;