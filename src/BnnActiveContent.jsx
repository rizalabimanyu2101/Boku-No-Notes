/* eslint-disable react/prop-types */
import BnnItems from "./BnnItems";

const BnnActiveContent = ({items, onDelete, onArchive, onActive}) => {
    return(
        <div id="activeContent">
            <div id="activeContentTrigger">
                <div id="activeContent1">
                    <h1>CATATAN AKTIF</h1>
                </div>
                {items.length === 0 ? (
                    <div id="activeContent3">
                        <h3>Tidak ada catatan</h3>
                    </div>
                ) : (
                    <div id="activeContent2">
                        {items.map((a) => (
                            <BnnItems key={a.id} id={a.id} archieved={items.archieved} createdAt={items.createdAt} onDelete={onDelete} onArchive={onArchive} onActive={onActive} {...a}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default BnnActiveContent;