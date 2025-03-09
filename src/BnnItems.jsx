import {showFormattedDate} from './utils/index'
/* eslint-disable react/prop-types */
const BnnItems = ({title, body, id, onDelete, onArchive, onActive, archieved, createdAt}) => {
    return(
        <div id="itemsContent">
            <div id="itemsContent1">
                <h1>{title}</h1>
                <h5>{showFormattedDate(createdAt)}</h5>
                <h4>{body}</h4>
            </div>
            <div id="itemsContent2">
                <button id="hapus" onClick={() => onDelete(id)}>Hapus</button>
                {!archieved ? (
                    <button id="arsip" onClick={() => onArchive(id)}>Arsip</button>
                ) : (
                    <button id="aktif" onClick={() => onActive(id)}>Aktif</button>
                ) }
            </div>
        </div>
    )
}

export default BnnItems;