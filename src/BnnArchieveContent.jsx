/* eslint-disable react/prop-types */
import BnnItems from "./BnnItems";

const BnnArchieveContent = ({items, onDelete, onArchive, onActive}) => {
    console.log(items.length)
    return(
        <div id="archieveContent">
            <div id="archieveContentTrigger">
                <div id="archieveContent1">
                    <h1>ARSIP CATATAN</h1>
                </div>
                {items.length === 0 ? (
                    <div id="archieveContent3">
                        <h3>Tidak ada catatan</h3>
                    </div>
                ) : (
                    <div id="archieveContent2">
                        {items.map((a) => (
                            <BnnItems key={a.id} id={a.id} archieved={items.archieved} onDelete={onDelete} onArchive={onArchive} onActive={onActive} {...a}/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default BnnArchieveContent;